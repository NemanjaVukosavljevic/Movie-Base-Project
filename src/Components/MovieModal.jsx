import React from "react";
import { FaRegStar } from "react-icons/fa";

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="flex relative flex-col gap-3 h-full max-h-full p-8 max-w-md lg:max-w-[80%] lg:px-[8rem] bg-gray-500 overflow-y-scroll rounded-lg ">
        <button
          onClick={onClose}
          className="absolute top-0 right-3 lg:right-5 m-4 text-white hover:text-gray-800"
        >
          Close
        </button>
        <img
          className="h-[65%] object-cover lg:object-contain rounded-md mt-4"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : `https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg`
          }
          alt={movie.title}
        />
        <div className="flex items-center">
          <div className="pt-[0.3rem]">
            <p className="mr-1 lg:text-lg">Rating:</p>
          </div>
          {/* Display rating icons */}
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
        <h2 className="text-4xl lg:text-5xl font-semibold my-2">{movie.title}</h2>
        <p className="text-lg lg:text-xl text-gray-100">{movie.overview}</p>
        <p className="text-lg">Release Date: <span className="text-gray-100">{movie.release_date}</span></p>
        <p className="text-lg">Popularity: <span className="text-gray-100">{movie.popularity}</span></p>
        <p className="text-lg">Vote Count: <span className="text-gray-100">{movie.vote_count}</span></p>
        <p className="text-lg">Vote Average: <span className="text-gray-100">{movie.vote_average}</span></p>
        <p className="text-lg">Movie ID: <span className="text-gray-100">{movie.id}</span></p>
      </div>
    </div>
  );
};

export default MovieModal;
