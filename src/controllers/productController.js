import { productModel } from "../models/productModel";

export const productController = {
  async getProducts() {
    try {
      return await productModel.getProducts();
    } catch (error) {
      console.error("Controller Error:", error);
      return [];
    }
  },

  async addProduct(formData) {
    const name = formData.get("name");
    const price = formData.get("price");

    if (!name || !price) {
      throw new Error("Product name and price are required!");
    }

    return await productModel.createProduct(name, price);
  },

  async updateProduct(id, name, price) {
    if (!id || !name || !price) {
      throw new Error("Product ID, name, and price are required!");
    }

    return await productModel.updateProduct(id, name, price);
  },

  async deleteProduct(id) {
    if (!id) {
      throw new Error("Product ID is required!");
    }

    return await productModel.deleteProduct(id);
  }
};
