require("dotenv").config(); // Load environment variables
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function main() {
    await client.connect();
    const db = client.db("codegirls");
    const collection = db.collection("users");

    // CREATE
    const doc = { name: "Zara", age: 25 };
    await collection.insertOne(doc);
    console.log("Document Inserted");

    // READ
    const user = await collection.findOne({ name: "Zara" });
    console.log("Found:", user);

    // UPDATE
    await collection.updateOne({ name: "Zara" }, { $set: { age: 46 } });
    console.log("Document Updated");

    // DELETE
    await collection.deleteOne({ name: "Sara" });
    console.log("Document Deleted");

  

    await client.close();
}

main().catch(console.error);
