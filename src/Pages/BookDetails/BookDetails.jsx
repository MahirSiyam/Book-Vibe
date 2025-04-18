import React from "react";
import { RiH4 } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDb } from "../../utilities/addToDb";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = (id) => {

    // MySwal.fire({
    //   title: "Good job!",
    //   text: "You clicked the button!",
    //   icon: "success"
    // });
    

    toast("Wow so easy!");

    addToStoredDb(id);

  }

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p>By : {author}</p>
      <div className="border-t-1 border-dashed"></div>
      <p>{category}</p>
      <div className="border-t-1 border-dashed"></div>
      <p className="py-6">
        {review}
      </p>

      <div className="flex justify-center gap-5">
        <div className="flex items-center justify-center text-lg font-bold">Tag:</div>
        {
            tags.map(tag => <h4 className="bg-green-100 text-green-500 rounded-4xl p-2">{tag}</h4>)
        }
      </div>
      <div className="border-t-1 border-dashed"></div>
      <p>Number of Pages: {totalPages}</p>
      <p>Publisher: {publisher}</p>
      <p>Year of Publishing: {yearOfPublishing}</p>
      <p>Rating: {rating}</p>
      
      <div className="flex gap-5">
      <button onClick={() => handleMarkAsRead(id)} className="btn">Mark as read</button>
      <button className="btn btn-primary">Add to wishlist</button>
      </div>
    </div>
  </div>
  <ToastContainer />
</div>
  );
};

export default BookDetails;
