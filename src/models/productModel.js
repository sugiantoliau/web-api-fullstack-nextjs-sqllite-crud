import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const productModel = {
  // Ambil semua produk
  getProducts: () => prisma.product.findMany(),

  // Tambah produk baru
  createProduct: (name, price) =>
    prisma.product.create({
      data: { name, price: parseFloat(price) }
    }),

  // Update produk
  updateProduct: (id, name, price) =>
    prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, price: parseFloat(price) }
    }),

  // Hapus produk
  deleteProduct: (id) =>
    prisma.product.delete({
      where: { id: parseInt(id) }
    })
};
