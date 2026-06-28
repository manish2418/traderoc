import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const name = (body?.name || "").trim();
    const email = (body?.email || "").trim().toLowerCase();
    const message = (body?.message || "").trim();

    if (!name || name.length < 2) {
      return NextResponse.json(
        { ok: false, message: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { ok: false, message: "Message should be at least 10 characters." },
        { status: 400 }
      );
    }

    const client = await getMongoClient();
    const databaseName = process.env.MONGODB_DB_NAME || "traderoc";
    const db = client.db(databaseName);
    const collection = db.collection("contactMessages");

    await collection.insertOne({
      name,
      email,
      message,
      recipient: "mkdestiny2410@gmail.com",
      createdAt: new Date(),
      source: "contact-us-page",
    });

    return NextResponse.json({
      ok: true,
      message: "Your message has been submitted successfully.",
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
        message: "Unable to submit message right now.",
        ...(process.env.NODE_ENV !== "production" && error instanceof Error
          ? { detail: error.message }
          : {}),
      },
      { status: 500 }
    );
  }
}
