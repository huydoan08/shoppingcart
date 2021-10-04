import React from "react";

export default function Product({ product, onAddToCart }) {
  return (
    <div className="bg-white mx-4 w-80 mt-10 rounded-lg">
      <div className="flex">
        <img className="w-40 h-40" src={product.image} alt={product.name} />
        <div className="mt-6  ml-4 capitalize text-xl">
          <p>{product.name}</p>
          <p>Giá tiền: <span  className=" text-green-500 font-bold mt-6"> {product.price} $</span></p>
        </div>
      </div>
      <a
        className="flex justify-center items-center m-auto my-4 p-2 m-2 bg-green-500 w-40 cursor-pointer rounded-2xl"
        onClick={() => onAddToCart(product)}
      >
        Add to cart
      </a>
    </div>
  );
}
