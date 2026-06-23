"use client";

export function CustomerTable({ customers }) {
  async function handleDelete(id) {
    const formData = new FormData();
    formData.append("id", id);

    await fetch("/api/customers", {
      method: "DELETE",
      body: formData
    });
    window.location.reload();
  }

  async function handleEdit(id) {
    const name = prompt("Masukkan nama baru:");
    const email = prompt("Masukkan email baru:");
    const phone = prompt("Masukkan nomor baru:");
    if (!name || !email || !phone) return;

    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);

    await fetch("/api/customers", {
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
            <th className="p-3 font-semibold">Nama</th>
            <th className="p-3 font-semibold">Email</th>
            <th className="p-3 font-semibold">Phone</th>
            <th className="p-3 font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{c.id}</td>
              <td className="p-3 font-medium">{c.name}</td>
              <td className="p-3">{c.email}</td>
              <td className="p-3">{c.phone}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => handleEdit(c.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(c.id)}
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
