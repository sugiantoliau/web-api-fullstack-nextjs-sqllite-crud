import { customerModel } from "../models/customerModel";

export const customerController = {
  async getCustomers() {
    try {
      return await customerModel.getCustomers();
    } catch (error) {
      console.error("Controller Error:", error);
      return [];
    }
  },

  async addCustomer(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    if (!name || !email || !phone) {
      throw new Error("Name, email, and phone are required!");
    }

    return await customerModel.createCustomer(name, email, phone);
  },

  async updateCustomer(id, name, email, phone) {
    if (!id || !name || !email || !phone) {
      throw new Error("Customer ID, name, email, and phone are required!");
    }

    return await customerModel.updateCustomer(id, name, email, phone);
  },

  async deleteCustomer(id) {
    if (!id) {
      throw new Error("Customer ID is required!");
    }

    return await customerModel.deleteCustomer(id);
  }
};
