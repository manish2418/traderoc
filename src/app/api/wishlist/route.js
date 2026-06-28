import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getAdminKeyFromRequest(request) {
  const authHeader = request.headers.get("authorization") || "";
  const headerKey = request.headers.get("x-admin-key") || "";
  const bearerKey = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7).trim()
    : "";
  return headerKey || bearerKey;
}

function isAuthorized(request) {
  const configuredKey = process.env.WISHLIST_ADMIN_KEY;
  if (!configuredKey) {
    return false;
  }
  return getAdminKeyFromRequest(request) === configuredKey;
}

export async function GET(request) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json(
        { ok: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const client = await getMongoClient();
    const databaseName = process.env.MONGODB_DB_NAME || "traderoc";
    const db = client.db(databaseName);
    const collection = db.collection("wishlist");

    const records = await collection
      .find({}, { projection: { _id: 0, email: 1, source: 1, createdAt: 1, updatedAt: 1 } })
      .sort({ updatedAt: -1 })
      .limit(500)
      .toArray();

    return NextResponse.json({
      ok: true,
      total: records.length,
      records,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Unable to fetch wishlist emails right now.",
        ...(process.env.NODE_ENV !== "production" && error instanceof Error
          ? { detail: error.message }
          : {}),
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const email = (body?.email || "").trim().toLowerCase();
    const source = (body?.source || "unknown").trim();

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const client = await getMongoClient();
    const databaseName = process.env.MONGODB_DB_NAME || "traderoc";
    const db = client.db(databaseName);
    const collection = db.collection("wishlist");

    const result = await collection.updateOne(
      { email },
      {
        $setOnInsert: { createdAt: new Date() },
        $set: { source, updatedAt: new Date() },
      },
      { upsert: true }
    );

    const alreadyExists = result.matchedCount > 0;

    return NextResponse.json({
      ok: true,
      alreadyExists,
      message: alreadyExists
        ? "Email is already on the wishlist."
        : "You have been added to the wishlist.",
    });
  } catch (error) {
    if (error instanceof Error && error.message.includes("MONGODB_URI is not set")) {
      return NextResponse.json(
        { ok: false, message: "Server config missing: MONGODB_URI." },
        { status: 500 }
      );
    }
    if (
      error instanceof Error &&
      error.message.includes("placeholder password")
    ) {
      return NextResponse.json(
        {
          ok: false,
          message: "Set your real database password in MONGODB_URI.",
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        ok: false,
        message: "Unable to save wishlist email right now.",
        ...(process.env.NODE_ENV !== "production" && error instanceof Error
          ? { detail: error.message }
          : {}),
      },
      { status: 500 }
    );
  }
}
