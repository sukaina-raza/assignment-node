
require("dotenv").config(); // Load environment variables
const express = require ("express");
const {MongoClient} = require ("mongodb");

const app=express();
const port=3000;

async function main(){
   
    
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
async function listDatabases(client){
   var  databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);



