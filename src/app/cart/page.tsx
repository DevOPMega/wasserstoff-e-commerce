"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/store/CartSlice";
import { RootState } from "@/store/store";
import Image from "next/image";

const page = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  const products = useSelector((state: RootState) => state.data.data);
  console.log(!cartItems);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity({ id }));
  };

  if (cartItems.length === 0) {
    return (
      <div className="h-[70vh] my-8 mx-auto w-11/12">
        <div className="h-full flex justify-center items-center">
          Your cart is empty!!!
        </div>
      </div>
    );
  }
  return (
    <div className="my-8 mx-auto w-11/12">
      <div className="flex flex-col space-y-3">
        {cartItems.map((item, i) => (
          <div key={i} className="flex flex-col gap-8 px-4 py-4 border rounded-md md:flex-row">
            <div className="basis-1/2 flex justify-center items-center">
            <Image
              src={`${products[item.id].image}`}
              width={245}
              height={245}
              className="w-[245px] h-[245px]"
              alt="Image"
            />
            </div>
            <div className="basis-1/2 flex flex-col space-y-2">
              <h2 className="text-xl font-semibold md:text-2xl">
                {products[item.id].title}
              </h2>
              <div className="flex items-center gap-2 ">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="w-12 p-1 text-white bg-yellow-400  rounded-md"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                className="w-12 p-1 text-white bg-yellow-400  rounded-md">
                  +
                </button>
              </div>
              <div>
                <span>Rs. {item.quantity * products[item.id].price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
