import React from "react";

const ProductCard = ({ item }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl group">
    <div className="relative w-full h-48 flex justify-center items-center bg-gray-100 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="h-40 w-auto max-w-full object-contain group-hover:opacity-90 transition-opacity"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
        {item.title}
      </h3>
      <p className="text-yellow-600 font-bold text-xl">${item.price}</p>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {item.description}
      </p>
    </div>
  </div>
);

export default ProductCard;
