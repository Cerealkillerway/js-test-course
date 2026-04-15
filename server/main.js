import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const port = 5000;
const mongoUrl = "mongodb://localhost:27017";
const mongoClient = new MongoClient(mongoUrl);
const dbName = "js-test-course";

app.use(express.json());

console.log("process started correctly");

const readAnimalsFromFriends = (friendDocuments) => {
  const animals = friendDocuments.map((friendDocument) => {
    return friendDocument.animals || undefined;
  });

  return animals;
};

const main = async () => {
  await mongoClient.connect();
  console.log(`succesfully connected to DB on ${mongoUrl}`);
  const database = mongoClient.db(dbName);
  const friendsCollection = database.collection("friends");

  app.get("/", (request, response) => {
    response.send('ok "funziona" tutto');
  });

  app.get("/friends", async (request, response) => {
    const friendDocuments = await friendsCollection.find({}).toArray();

    response.send(friendDocuments);
  });

  app.get("/animals", async (request, response) => {
    const friendDocuments = await friendsCollection.find({}).toArray();

    const animals = readAnimalsFromFriends(friendDocuments);
    response.send(animals);
  });

  app.get("/friends/:friendName/:animalId", async (request, response) => {
    /*
      {
        friendName: ...
      }
    */

    //const friendName = request.params.friendName
    const { friendName, animalId } = request.params;

    const friendDocuments = await friendsCollection
      .find({ firstName: friendName })
      .toArray();

    response.send(friendDocuments);
  });

  app.post("/friends", async (request, response) => {
    const newFriend = request.body;
    const insertResult = await friendsCollection.insertOne(newFriend);

    response.send(insertResult);
  });

  app.listen(port, () => {
    console.log(`test server running on port ${port}`);
  });
};

main();
