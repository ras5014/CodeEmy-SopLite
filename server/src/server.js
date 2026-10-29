import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Import and use product routes
import productRoutes from "./routes/productRoutes.js";
app.use("/products", productRoutes);

const port = process.env.PORT || 3000;
try {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
} catch (error) {
  console.error("Failed to start server:", error);
  process.exit(1);
}
