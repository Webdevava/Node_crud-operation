const express = require("express");
const mongoose = require("mongoose");
const app = express();

const productRoute = require("./routes/product.route");

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //to use url encoded forms

app.use("/api/products", productRoute);

require("dotenv").config();
const PORT = process.env.PORT || 5000;

//home get route
app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      message: "Welcome, this is my backend for CRUD",
      routes: {
        "post(create)": `http://localhost:${PORT}/api/products`,
        "get(readAll)": `http://localhost:${PORT}/api/products`,
        "get(readById)": `http://localhost:${PORT}/api/products/:id`,
        "put(update)": `http://localhost:${PORT}/api/products/:id`,
        "delete": `http://localhost:${PORT}/api/products/:id`,
      },
    });
});

//DB connection and serve
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB Connection Successfull");
    app.listen(PORT, () => {
      console.log(`Server Running On http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed connection to DB", error);
  });
