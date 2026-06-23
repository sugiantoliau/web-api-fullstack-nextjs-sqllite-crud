import { NextResponse } from "next/server";
import { customerController } from "../../../controllers/customerController";

// GET: semua customer
export async function GET() {
  try {
    const customers = await customerController.getCustomers();
    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch customers" }, { status: 500 });
  }
}

// POST: tambah customer
export async function POST(request) {
  try {
    const formData = await request.formData();
    const newCustomer = await customerController.addCustomer(formData);
    return NextResponse.json({ message: "Customer created successfully!", data: newCustomer }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Failed to create customer" }, { status: 400 });
  }
}

// PUT: edit customer
export async function PUT(request) {
  try {
    const formData = await request.formData();
    const id = formData.get("id");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    const updatedCustomer = await customerController.updateCustomer(id, name, email, phone);
    return NextResponse.json({ message: "Customer updated successfully!", data: updatedCustomer }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Failed to update customer" }, { status: 400 });
  }
}

// DELETE: hapus customer
export async function DELETE(request) {
  try {
    const formData = await request.formData();
    const id = formData.get("id");

    await customerController.deleteCustomer(id);
    return NextResponse.json({ message: "Customer deleted successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Failed to delete customer" }, { status: 400 });
  }
}
