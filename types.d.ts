type ProductsListType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stockStatus: string;
  rating: {
    rate: number;
    count: number;
  };
  reviews: {
    user: string;
    comment: string;
    rate: number;
  }[];
}[];

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stockStatus: string;
  rating: {
    rate: number;
    count: number;
  };
  reviews: {
    user: string;
    comment: string;
    rate: number;
  }[];
};

type ReviewsListType = {
  user: string;
  comment: string;
  rate: number;
}[];
