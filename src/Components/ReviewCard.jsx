import { FaRegStar } from "react-icons/fa";


const ReviewCard = (props) => {

    return (
        <>
            <div className="w-full flex h-[10rem] justify-center items-center">
            {
                props.Image ? (
                    <img className="size-[5rem] rounded-xl" src={`https://image.tmdb.org/t/p/w500${props.Image}`} alt={props.Alt} />
                ) : (
                    <img className="size-[5rem] rounded-xl" src='https://media.licdn.com/dms/image/D4E12AQEud3Ll5MI7cQ/article-inline_image-shrink_1000_1488/0/1660833954461?e=1720051200&v=beta&t=X0RR8Y50k9JDiBWjeLauDsNPEyd-dNutIsN4EgoJx84' alt={props.Alt} />
                )
            }
            </div>
            
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-xl">{props.Author}</h1>
                <div className="flex gap-2">
                    <FaRegStar  className="size-5 bg-yellow-500 text-white"/>
                    {
                        props.Rating ? (
                            <p>{props.Rating} / 10</p>
                        ) : (
                            <p>No rating</p>
                        )
                    }
                </div>
            </div>

            <div className="flex flex-col items-center gap-5 p-8 text-justify text-base">
                <p>{props.Review}</p>
                <a className="text-blue-600" href={props.Link} target="_blank">Click here for the full review</a>
            </div>
        </>
    )
};


export default ReviewCard;



