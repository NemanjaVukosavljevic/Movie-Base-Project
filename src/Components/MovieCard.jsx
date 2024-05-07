import React, { useState } from "react";
import MovieModal from "./MovieModal";
import { FaRegStar } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        className="h-[23rem] pb-1 w-[20rem] md:w-[18rem] relative flex flex-col justify-between hover:border hover:border-white transition duration-150 rounded-md text-white bg-gray-900 cursor-pointer"
        onClick={toggleModal}
      >
        <img
          className="h-[65%] object-cover rounded-md"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : `https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg`
          }
          alt={movie.title}
        />
        <h1 className="text-xl text-left pl-2 pt-1">{movie.title}</h1>
        <p className="pl-2 mb-3">{movie.release_date}</p>
        <p className="absolute top-5 right-0 pr-2 pt-1 pl-2 bg-gray-700 text-white rounded-l">
          Movie
        </p>
        <div className="flex pl-2">
          <p className="mr-1">Rating: </p>
          {/* Display 5 icons with conditional classes */}
          {[...Array(5)].map((_, index) => (
            <FaRegStar
              key={index}
              className={
                index < Math.round(movie.vote_average / 2)
                  ? "text-yellow-500"
                  : "text-white"
              }
            />
          ))}
        </div>
      </div>
      {showModal && <MovieModal movie={movie} onClose={toggleModal} />}
    </>
  );
};

export default MovieCard;
