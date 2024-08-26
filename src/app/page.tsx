"use client"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "@/store/store"
import Card from "@/components/Card"
import { fetchData } from "@/store/dataSlice"
import Loading from "@/components/Loading"

type ProductsType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number;
  rating: {
    rate: number;
    count: number;
  };
  reviews: {
    user: string;
    comment: string;
    rate: number;
  }[];
}[]

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    data, 
    loading,
    error
  } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="my-8 mx-auto w-11/12">
      <div className="px-4 py-2 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((product) => (
          <Card 
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage
