import Product from "../models/Product";

export const createProduct = async (req, res) => {
  const { name, category, price, imageURL } = req.body;

  const newProduct = new Product({ name, category, price, imageURL });
  const productSaved = await newProduct.save();

  res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
  const products = await Product.find({});

  res.json(products);
};

export const getProductById = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);

  res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
  const { productId } = req.params;

  const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
  });

  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const { productId } = req.params;

  await Product.findByIdAndRemove(productId);

  res.status(204).json();
};
