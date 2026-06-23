import { NextResponse } from "next/server";
import { productController } from "../../../controllers/productController";


// GET: semua produk
export async function GET() {
  try {
    const products = await productController.getProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// POST: tambah produk
export async function POST(request) {
  try {
    const formData = await request.formData();
    const newProduct = await productController.addProduct(formData);
    return NextResponse.json({ message: "Product created successfully!", data: newProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Failed to create product" }, { status: 400 });
  }
}

// PUT: edit produk
export async function PUT(request) {
  try {
    const formData = await request.formData();
    const id = formData.get("id");
    const name = formData.get("name");
    const price = formData.get("price");

    const updatedProduct = await productController.updateProduct(id, name, price);
    return NextResponse.json({ message: "Product updated successfully!", data: updatedProduct }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Failed to update product" }, { status: 400 });
  }
}

// DELETE: hapus produk
export async function DELETE(request) {
  try {
    const formData = await request.formData();
    const id = formData.get("id");

    await productController.deleteProduct(id);
    return NextResponse.json({ message: "Product deleted successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Failed to delete product" }, { status: 400 });
  }
}
