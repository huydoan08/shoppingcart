import React from "react";

export default function Cart({ cartItems, onAddToCart, onRemoveToCart }) {
  const itemPrice = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    0
  );
  return (
    <div className="flex justify-center mt-20 bg-gray-300 h-screen -mt-3">
      {cartItems.length === 0 && <div>Cart is empty</div>}
      <div className="">
		  <p className="mt-10 text-4xl text-green-700 font-bold">Danh sách sản phẩm</p>
        <div className="flex flex-wrap">
          {cartItems.map((item) => (
            <div key={item.id} className="flex mt-6 px-4 py-4 rounded-lg bg-white mr-6">
              <img src={item.image} className="w-40 h-40 mr-4" />
              <div>
                <p className="mb-4">Món: {item.name}</p>
                <p>Số lượng</p>
                <div className="flex border">
                  <button
                    className="text-3xl border-r flex-1 font-bold"
                    onClick={() => onAddToCart(item)}
                  >
                    +
                  </button>
                  <p className="text-2xl border-r flex-1 flex justify-center">
                    {item.quantity}
                  </p>
                  <button
                    className="text-3xl flex-1 font-bold"
                    onClick={() => onRemoveToCart(item)}
                  >
                    -
                  </button>
                </div>
                <p className="mt-4">Giá tiền: {item.price} $</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          {cartItems.length !== 0 && (
            <div className="flex justify-around my-10">
              <p className="ml-20 text-3xl">Giá tiền: {itemPrice} $</p>
			  <p className="ml-20 text-2xl cursor-pointer px-4 rounded-full text-white bg-red-600"
			  	onClick={() => alert("Successfully !")}
			  >Thanh toán</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
