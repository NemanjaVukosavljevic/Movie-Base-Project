const MovieCard = (props) => {

    return (
        <>
            <div className="h-[23rem] w-[20rem] md:w-[18rem] relative flex flex-col justify-between rounded-md text-black bg-white cursor-pointer">
                <img className="h-[65%] object-cover rounded-md" src={props.Poster} alt={props.Title} />
                <h1 className="text-xl text-left pl-1">{props.Title}</h1>
                <p className="pl-1">{props.Year}</p>
                <p className="absolute bg-gray-700 right-5 top-5 text-white">{props.Type}</p>
            </div>
        </>
    )
};

export default MovieCard;