import { ProductForm } from "../../views/products/ProductForm";
import { ProductTable } from "../../views/products/ProductTable";
import { productController } from "../../controllers/productController";

export default async function ProductsPage() {
  const products = await productController.getProducts();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Product Management System
      </h1>

      <div className="space-y-6">
        <ProductForm />
        <ProductTable products={products} />
      </div>
    </div>
  );
}
