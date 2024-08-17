import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helpCardRoutes from "./routes/helpCardsRoutes.js";


dotenv.config();

const app = express();
app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  res.send("Server is running!");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Use the help card routes
app.use("/api", helpCardRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
