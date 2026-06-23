"use client";

export function ProductTable({ products }) {
  async function handleDelete(id) {
    const formData = new FormData();
    formData.append("id", id);

    await fetch("/api/products", {
      method: "DELETE",
      body: formData
    });
    window.location.reload();
  }

  async function handleEdit(id) {
    const name = prompt("Masukkan nama baru:");
    const price = prompt("Masukkan harga baru:");
    if (!name || !price) return;

    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("price", price);

    await fetch("/api/products", {
      method: "PUT",
      body: formData
    });
    window.location.reload();
  }

  return (
    <div className="overflow-x-auto shadow rounded">
      <table className="w-full bg-white text-left">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-3 font-semibold">ID</th>
            <th className="p-3 font-semibold">Nama Produk</th>
            <th className="p-3 font-semibold">Harga</th>
            <th className="p-3 font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{p.id}</td>
              <td className="p-3 font-medium">{p.name}</td>
              <td className="p-3">Rp {p.price.toLocaleString()}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => handleEdit(p.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
