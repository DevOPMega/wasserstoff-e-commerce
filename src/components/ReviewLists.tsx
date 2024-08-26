import React from 'react'

type Params = {
    reviews: {
        user: string;
        comment: string;
        rate: number;
    }[];
}

const ReviewLists = ({reviews}: Params) => {
  return (
    <div className="">
      <ul className="flex flex-col space-y-2 list-none ">
        {
            reviews.map((review, i) => (
                <li key={i} className="flex flex-col gap-2">
            <span className="text-gray-700 font-semibold">
                {review.user}
            </span>
            <span className="text-gray-500">
                {review.comment}
            </span>
        </li>
            ))
        }
        
      </ul>
    </div>
  )
}

export default ReviewLists
