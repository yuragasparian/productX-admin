"use client";
import ProductsTableHead from "@/components/products-table/head";
import ProductsTableBody from "@/components/products-table/body";
import ProductModal from "@/components/product-modal-content";
import useInitiUserInfo from "@/hooks/use-init-user-info";

const Dashboard = () => {
  const user = useInitiUserInfo();

  if (!user) return null;

  return (
    <div className="relative overflow-x-auto grow bg-white rounded-xl">
      <table className="w-full text-center text-sm text-black ">
        <ProductsTableHead />
        <ProductsTableBody />
      </table>
      <ProductModal />
    </div>
  );
};

export default Dashboard;
