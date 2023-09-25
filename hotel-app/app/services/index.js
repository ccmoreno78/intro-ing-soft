import { MongoClient } from "mongodb";
export async function createRoom(data) {
  try {
    const client = await MongoClient.connect("localhost:27017/ing-soft");
    const db = client.db();
    const collection = db.collection("rooms");
    const result = await collection.insertOne(data);
    console.log("🚀 ~ file: index.js:8 ~ handler ~ result:", result);
    client.close();
  } catch (error) {
    console.log("Error db connection ", error.message);
  }
}
