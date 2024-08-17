import express from "express";
import HelpCard from "../models/helpCardModel.js";

const router = express.Router();

// POST /help-cards - Create a new help card
router.post("/help-cards", async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const newHelpCard = new HelpCard({ title, description, link });
    await newHelpCard.save();
    res.status(201).json(newHelpCard);
  } catch (err) {
    res.status(500).json({ error: "Failed to create help card" });
  }
});

// GET /help-cards - Get all help cards
router.get("/help-cards", async (req, res) => {
  try {
    const helpCards = await HelpCard.find();
    res.status(200).json(helpCards);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch help cards" });
  }
});

// GET /help-cards/:title - Get a specific help card by title
router.get("/help-cards/:title", async (req, res) => {
  try {
    const helpCard = await HelpCard.findOne({ title: req.params.title });
    if (!helpCard) return res.status(404).json({ error: "Help card not found" });
    res.status(200).json(helpCard);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch help card" });
  }
});

export default router;
