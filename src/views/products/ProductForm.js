import { productController } from "../../controllers/productController";
import { revalidatePath } from "next/cache";

export function ProductForm() {
  async function handleCreateProduct(formData) {
    "use server";
    try {
      await productController.addProduct(formData);
      revalidatePath("/products");
    } catch (error) {
      console.error("Failed to save product:", error.message);
    }
  }

  return (
    <form
      action={handleCreateProduct}
      className="flex flex-col gap-3 max-w-md p-4 bg-white rounded shadow mb-6"
    >
      <h2 className="text-lg font-semibold text-slate-800">Add New Product</h2>

      <input
        name="name"
        type="text"
        placeholder="Product Name"
        className="border p-2 rounded text-slate-900"
        required
      />

      <input
        name="price"
        type="number"
        step="0.01"
        placeholder="Product Price"
        className="border p-2 rounded text-slate-900"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition font-medium"
      >
        Save Product
      </button>
    </form>
  );
}
