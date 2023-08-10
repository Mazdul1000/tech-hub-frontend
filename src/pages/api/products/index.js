const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tech-hub-admin:2m5GksMCsMTWkVms@cluster0.elxr5n8.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    await client.connect();
    const productCollection = client.db("tech-hub").collection("products");

    if (req.method === "GET") {
      const products = await productCollection.find().toArray();
      res.status(200).json({ message: "success", status: 200, products });
    } else {
      res.status(405).json({ message: "Method not allowed", status: 405 });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error", status: 500 });
  } finally {
    // Ensure the client is closed after the request is handled
    await client.close();
  }
}

export default run;