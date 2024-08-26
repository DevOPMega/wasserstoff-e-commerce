"use client";

import React from "react";
import { useParams } from "next/navigation";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import Stars from "@/components/Star";
import ReviewLists from "@/components/ReviewLists";

const ProductDetailPage = () => {
  const { id } = useParams();
  // const product = useSelector((state: RootState) => state.data.data.find(product => product.id === id))
  const product = useSelector((state: RootState) => state.data.data.find(product => product.id === Number(id)))
  
  return (
    <div className="my-8 mx-auto w-11/12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex justify-center">
          <Image 
            src={`${product.image}`}
            width={256}
            height={144}
            className=""
            alt="Image"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            {product.title}
            {/* Mens Cotton Jacket */}
          </h2>
          <p className="text-sm text-gray-800">
            {product.description}
            {/* great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day */}
          </p>
          <div className="flex items-center space-x-1">

            <Stars rate={3} />
            <span className="px-2 text-sm">
              {product.rating.rate}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-semibold text-gray-900">

            Rs. {product.price}
            </span>
            <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Add to cart
          </a>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <div className="mt-16 space-y-4">
        <h3 className="text-xl font-semibold">Reviews</h3>
        <form
          className="flex flex-col gap-2 md:flex-row"
        >
          <input 
            type="text"
            name=""
            id=""
            className="w-full max-w-[720px] border-b border-gray-400 focus:outline-none"
            placeholder="Write a review..."
          />
          <button 
            type="submit"
            className="ml-2 p-1 bg-blue-600 text-white rounded-md hover:opacity-95"
          >
            Submit
          </button>
        </form>
        <ReviewLists reviews={product.reviews}/>
      </div>
    </div>
  );
};

export default ProductDetailPage;
