import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const customerModel = {
  // Ambil semua customer
  getCustomers: () => prisma.customer.findMany(),

  // Tambah customer baru
  createCustomer: (name, email, phone) =>
    prisma.customer.create({
      data: { name, email, phone }
    }),

  // Update customer
  updateCustomer: (id, name, email, phone) =>
    prisma.customer.update({
      where: { id: parseInt(id) },
      data: { name, email, phone }
    }),

  // Hapus customer
  deleteCustomer: (id) =>
    prisma.customer.delete({
      where: { id: parseInt(id) }
    })
};
