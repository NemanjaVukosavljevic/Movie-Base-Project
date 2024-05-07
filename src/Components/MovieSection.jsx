import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import searchImage from '../Images/search.png'

const MovieSection = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2Y3YTg2ZmYzYmZjM2UxZjY0NTg5NzEwYjA4N2Q0NCIsInN1YiI6IjY2MzkyZTg5OTYwY2RlMDEyYzY4YjRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZftfUSCehgZXiEHiF-6SopQLrbf0zvnlmeRmym6ng8k'
        }
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [moviesArray, setMoviesArray] = useState([]);

    const API_KEY = 'http://www.omdbapi.com/?apikey=8463a3a6';

    const fetchData = async (title) => {
        try {
            const request = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`, options);
            const data = await request.json();

            setMoviesArray(data.results.map(movie => ({
                ...movie,
                VoteAverage: movie.vote_average // Adding VoteAverage to movie object
            })));
            console.log(data.results);
        } catch (error) {
            console.error(error)
        }
    };

    const checkEnter = (e) => {
        if (e.key === 'Enter') {
            if (searchTerm) {
                fetchData(searchTerm);
            }
        }
    }

    useEffect(() => {
        fetchData('Har');
    }, [])


    return (
        <>
            <div className="flex flex-col p-5">
                <div className="flex justify-center">
                    <input className="w-[70%] lg:w-[50%] h-[3rem] pl-3 rounded-md" type="text" placeholder="Search for a movie" value={searchTerm} onKeyPress={(e) => checkEnter(e)} onChange={(e) => setSearchTerm(e.target.value)} />
                    <img src={searchImage} className="h-[3rem] opacity-95 mx-2" alt="search icon" onClick={() => fetchData(searchTerm)} />
                </div>

                <div className="mt-10 flex flex-wrap gap-5 justify-center">
                    {
                        moviesArray.map((movie, index) => {
                            return (
                                <div key={index}>
                                    {/* Pass VoteAverage as prop to MovieCard */}
                                    <MovieCard
                                        Poster={movie.poster_path}
                                        Title={movie.title}
                                        Year={movie.release_date}
                                        movie={movie}
                                        Type='movie'
                                        VoteAverage={movie.VoteAverage} // Pass VoteAverage as prop
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};

export default MovieSection;
