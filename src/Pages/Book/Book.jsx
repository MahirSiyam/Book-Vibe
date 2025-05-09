import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookName, author, image, rating, category, tags , totalPages , bookId} = singleBook;

  return (
    <Link to={`/bookdetails/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-sm border p-6">
      <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
        <img className="h-[166px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">

        <div className="flex justify-center gap-10">
          {tags.map((tag) => (
            <button className="">{tag}</button>
          ))}
        </div>

        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">Page:{totalPages}</div>
        </h2>
        <p>{author}</p>

          <div className="border-t-1 border-dashed"></div>

        <div className="card-actions justify-end">
          <div className="badge">{category}</div>
          <div className="badge">
            {rating} <FaStarHalfAlt />
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
