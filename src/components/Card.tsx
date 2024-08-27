import Link from "next/link";
import Image from "next/image";
import Stars from "./Star";
import { addToCart } from "@/store/CartSlice";
import { useDispatch } from "react-redux";

const formatString = (input: string) => {
  return input
      .trimEnd()                  // remove space from end
      .replace(/[-,.\s]+/g, '-')  // replace + , -  with -
      .replace(/-+/g, '-')        // Ensure no extra -
      .toLowerCase()
}

const Card = ({ product }: { product: ProductType }) => {
  const titleLink = formatString(product.title);
  const dispatch = useDispatch();

  const handleAddToCart = (id: number) => {
    dispatch(addToCart({id}));
  };

  return (  
    <div
      className="w-full max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow"
    >
      <Image
        className="aspect-square p-8 rounded-t-lg"
        width={345}
        height={245}
        src={`${product.image}`}
        alt="product image"
      />
      <div className="px-5 pb-5">
      <Link href={`/product-detail/${product.id}/${titleLink}`}>

          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {product.title}
          </h5>
      </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <Stars rate={product.rating.rate} />
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {product.rating.count}
          </span>
        </div>
        <div>
        <span className={`
            ${product.stockStatus === "in stock" && "text-green-400"}  
            ${product.stockStatus === "out of stock" && "text-red-400"}  
            ${product.stockStatus === "low stock" && "text-blue-400"}  
          `}>
            {product.stockStatus}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            Rs. {product.price.toString()}
          </span>
          
          <button
            onClick={() => {handleAddToCart(product.id)}}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
