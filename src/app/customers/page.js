import { CustomerForm } from "../../views/customers/CustomerForm";
import { CustomerTable } from "../../views/customers/CustomerTable";
import { customerController } from "../../controllers/customerController";

export default async function CustomersPage() {
  const customers = await customerController.getCustomers();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Customer Management System
      </h1>

      <div className="space-y-6">
        <CustomerForm />
        <CustomerTable customers={customers} />
      </div>
    </div>
  );
}
