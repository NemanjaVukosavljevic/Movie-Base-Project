import pravaSlika from '../Images/cinema.png'

const Header = () => {

    return (
        <>
            <div className=" flex flex-col gap-5 justify-center items-center text-white text-4xl">
                <img className='h-[10%] w-[10%]' src={pravaSlika} alt="cinema" />
                <h1>MovieWatch</h1>
            </div>
        </>
    )
};



export default Header;