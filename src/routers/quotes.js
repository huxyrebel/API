const express = require("express");
const Quotes = require("../models/quotes");
const auth = require("../middleware/auth").auth;
const isAdmin = require("../middleware/auth").isAdmin;
const router = new express.Router();

//endpoint for getting all the quotes
router.get("/quotes", auth, async (req, res) => {
  try {
    const quotes = await Quotes.find();
    res.send(quotes);
  } catch (e) {
    res.status(500).send(e);
  }
});

//read quotes by author
router.get("/quotes/category", auth, async (req, res) => {
  const { category } = req.query;
  try {
    if (category) {
      const quotes = await Quotes.find({ category }).populate("category");
      res.send(quotes);
    } else {
      res.status(400).send({ error: "Category is required" });
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

//read quotes by author
router.get("/quotes/author", auth, async (req, res) => {
  const { author } = req.query;
  try {
    if (author) {
      const quotes = await Quotes.find({ author }).populate("author");
      res.send(quotes);
    } else {
      res.status(400).send({ error: "Author is required" });
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

//creating quote by admin
router.post("/quotes", auth, isAdmin, async (req, res) => {
  const quote = new Quotes(req.body);
  try {
    await quote.save();
    res.status(201).send(quote);
  } catch (error) {
    res.status(400).send(e);
  }
});

//reading quotes by admin
router.get("/quotes", auth, isAdmin, async (req, res) => {
  try {
    const quotes = await Quotes.find();
    res.send(quotes);
  } catch (e) {
    res.status(500).send(e);
  }
});

//delete quote by admin
router.delete("quotes/:id", auth, isAdmin, async (req, res) => {
  try {
    const quote = await Quotes.findByIdAndDelete(req.params.id);
    if (!quote) {
      return res.status(404).send();
    }
    res.send(quote);
  } catch (e) {
    res.status(500).send(e);
  }
});
