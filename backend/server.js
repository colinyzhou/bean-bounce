dotenv.config();
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import products from "./data/products.js";

connectDB();

const port = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

// app.use("/api/products", productRoutes);

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});
    

app.listen(port, () => console.log(`Server running on port ${port}`));