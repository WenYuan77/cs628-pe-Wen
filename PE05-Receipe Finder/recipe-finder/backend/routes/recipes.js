const express = require("express");
const Recipe = require("../models/Recipe");

const router = express.Router();

// 获取所有食谱
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "服务器错误" });
  }
});

// 添加食谱
router.post("/", async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({ message: "无法添加食谱" });
  }
});

// 获取单个食谱
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "食谱未找到" });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: "服务器错误" });
  }
});

// 更新食谱
router.put("/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: "无法更新食谱" });
  }
});

// 删除食谱
router.delete("/:id", async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "食谱已删除" });
  } catch (error) {
    res.status(500).json({ message: "服务器错误" });
  }
});

module.exports = router;
