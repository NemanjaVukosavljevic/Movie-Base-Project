import { useEffect, useState } from "react";
import React from "react";
import { FaRegStar } from "react-icons/fa";

import ReviewCard from "./ReviewCard";

const MovieModal = ({ movie, onClose }) => {
    const [reviews, setReviews] = useState([]);
    const [trailer, setTrailer] = useState(null);
    const [newID, setNewID] = useState(0);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2Y3YTg2ZmYzYmZjM2UxZjY0NTg5NzEwYjA4N2Q0NCIsInN1YiI6IjY2MzkyZTg5OTYwY2RlMDEyYzY4YjRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZftfUSCehgZXiEHiF-6SopQLrbf0zvnlmeRmym6ng8k'
        }
    };

    const fetchReviews = async (id) => {
        const request = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options);
        const data = await request.json();
        setReviews(data.results);
    };

    const fetchTrailer = async (id) => {
        const request = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
        const data = await request.json();
        setTrailer(data.results.find(result => result.type === "Trailer"));
    };

    useEffect(() => {
        setNewID(movie.id);
    }, [movie.id]);

    useEffect(() => {
        if (newID !== 0) {
            fetchReviews(newID);
            fetchTrailer(newID);
        }
    }, [newID]);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
            <div className="flex relative flex-col gap-3 h-full max-h-full p-8 max-w-md lg:max-w-[80%] lg:px-[8rem] bg-gray-500 overflow-y-scroll rounded-lg ">
                <button
                    onClick={onClose}
                    className="absolute top-0 right-3 lg:right-5 m-4 text-white   hover:text-gray-800"
                >
                    Close
                </button>
                {/* <img
                    className="h-[65%] object-cover lg:object-contain rounded-md mt-4"
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                            : `https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg`
                    }
                    alt={movie.title}
                /> */}
                <div className="flex flex-col gap-5">
                    <div className="flex justify-center">
                    {trailer && (
                        <div className="min-h-[35rem] lg:w-[80%] w-full flex items-center bg-gray-300 rounded-md">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                title={trailer.name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-md"
                            ></iframe>
                        </div>
                    )}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="pt-[0.3rem]">
                        <p className="mr-1 lg:text-lg">Rating:</p>
                    </div>
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
                <h2 className="text-4xl lg:text-5xl font-semibold my-2">{reviews.length > 0 ? 'Reviews' : 'No Reviews'}</h2>
                <p>{(reviews.length > 1 || reviews.length === 0) ? `${reviews.length} reviews` : `${reviews.length} review`}</p>
                <div className="flex flex-col gap-3 items-center">
                    {reviews.map((review, index) => (
                        <div key={index} className="min-h-[25rem] w-full lg:w-[80%] bg-gray-300 rounded-md">
                            <ReviewCard Author={review.author} Image={review.author_details.avatar_path} Alt={review.id} Review={review.content} Rating={review.author_details.rating} Link={review.url} />
                        </div>
                    ))}
                </div>

                {/* <div className="flex flex-col gap-5">
                    <h2 className="text-4xl lg:text-5xl font-semibold my-2">{trailer ? 'Trailer' : 'No Trailer Available'}</h2>
                    <div className="flex justify-center">
                    {trailer && (
                        <div className="min-h-[25rem] lg:w-[80%] w-full flex items-center bg-gray-300 rounded-md">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                title={trailer.name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-md"
                            ></iframe>
                        </div>
                    )}
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default MovieModal;
