import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import searchImage from '../Images/search.png'


const MovieSection = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [moviesArray, setMoviesArray] = useState([]);

    const API_KEY ='http://www.omdbapi.com/?apikey=8463a3a6';

    const fetchData = async (title) => {
        try {
            const request = await fetch(`${API_KEY}&s=${title}`)
            const data = await request.json();

            setMoviesArray(data.Search)
            console.log(data.Search);
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        fetchData('Superman');
    }, [])



    return(
        <>
            <div className="flex flex-col p-5">
                <div className="flex justify-center">
                    <input className="w-[70%] lg:w-[40%] h-[3rem] pl-3 rounded-md" type="text" placeholder="Search for a movie" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <img src={searchImage} className="h-[3rem] opacity-95 mx-2" alt="search icon" onClick={() => fetchData(searchTerm)} />
                </div>

                <div className="mt-10 flex flex-wrap gap-5 justify-center">
                        {
                            moviesArray.map((movie, index) => {
                                return (
                                    <div key={index}>
                                        <MovieCard Poster = {movie.Poster} Title = {movie.Title} Year = {movie.Year} Type = {movie.Type} />
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