const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//connect to db
mongoose.connect("mongodb://localhost/confledis", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB DB connection established successfully");
});

//import routes
const produitsRouter = require("./routes/produits.route");

//routes middlewares
app.use("/produits", produitsRouter);

//listening to server
app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
