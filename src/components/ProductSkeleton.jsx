import React from "react";

const ProductSkeleton = () => (
  <div className="bg-gray-100 rounded-lg overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-300 rounded-t-lg"></div>
    <div className="p-4 space-y-2">
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="h-5 bg-gray-300 rounded w-2/4"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
    </div>
  </div>
);

export default ProductSkeleton;
