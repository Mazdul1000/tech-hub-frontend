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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    const productCollection = client.db("tech-hub").collection("products");

    if(req?.method === "GET"){
      const { category } = req.query
        const products = await productCollection.find({category: category}).toArray();

        res.send({message: "success", status:"200", products: products})
    }
    
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;