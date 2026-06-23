"use client";

export function CustomerForm() {
  async function handleCreateCustomer(formData) {
    await fetch("/api/customers", {
      method: "POST",
      body: formData
    });
    window.location.reload();
  }

  return (
    <form
      action={handleCreateCustomer}
      className="flex flex-col gap-3 max-w-md p-4 bg-white rounded shadow mb-6"
    >
      <h2 className="text-lg font-semibold text-slate-800">Add New Customer</h2>

      <input
        name="name"
        type="text"
        placeholder="Customer Name"
        className="border p-2 rounded text-slate-900"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Customer Email"
        className="border p-2 rounded text-slate-900"
        required
      />

      <input
        name="phone"
        type="text"
        placeholder="Customer Phone"
        className="border p-2 rounded text-slate-900"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition font-medium"
      >
        Save Customer
      </button>
    </form>
  );
}
