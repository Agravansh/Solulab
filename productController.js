const product = require("../model/productModel.js");
const category = require('../model/categoryModel')
exports.getAllproducts = async (req, res) => {
  try {
    let response = await product.find();
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getProductDetail = async (req, res) => {
  try {
    let {productId} = req.params
    let response = await product.findById(productId);
    if (!response) {
      return res.status(404).json({ message: `product not found` });
    }
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.createProduct = async (req, res) => {
  try {
    let productData = {
      productName: req.body.productName
    }
    let  categoryData = {
      categoryName: req.body.category
    }
    if(req.body.category){
      let categoryresponse = await category.create(categoryData)
      categoryresponse._id
    }
  
    let response = await product.create(req.body);
    res.status(201).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
      let {productId} = req.params
    let response = await product.findById(productId);
    if (!response) {
      return res.status(404).json({ message: "product not found" });
    }
    await response.remove();
    res.status(200).json({ message: "product deleted successfully..." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateProduct = async (req, res) => {
  try {
      let {productId} = req.params
    let response = await product.findById(productId);
    if (!response) {
      return res.status(404).json({ message: "product not found" });
    }
    response = await product.findByIdAndUpdate(productId, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200).json({ message: "product updated...", response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
