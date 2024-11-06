import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // Ensure _mongoClientPromise is only set globally in a Node.js environment
  var _mongoClientPromise: Promise<MongoClient> | undefined; // eslint-disable-line no-var
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable to ensure the MongoClient is reused
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new MongoClient instance for each function call
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
