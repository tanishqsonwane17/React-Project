import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Outlet } from "react-router";
import ProductSkeleton from "../../components/ProductSkeleton";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => res.data),
  });

  if (isLoading)
    return (
      <div className="p-6">
        <Outlet />
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </div>
    );

  if (isError)
    return (
      <div className="p-6">
        <Outlet />
        <h2 className="text-red-600">Error: {error.message}</h2>
      </div>
    );

  return (
    <div className="p-6">
      <Outlet />
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
