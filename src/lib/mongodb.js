import { MongoClient } from "mongodb";

export async function getMongoClient() {
  const uri =
    process.env.MONGODB_URI ||
    process.env.MONGO_URI ||
    process.env.DATABASE_URL;

  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  if (uri.includes("<db_password>")) {
    throw new Error("MONGODB_URI contains placeholder password");
  }

  if (!globalThis._mongoClientPromise) {
    const client = new MongoClient(uri, {});
    globalThis._mongoClientPromise = client.connect();
  }

  return globalThis._mongoClientPromise;
}
