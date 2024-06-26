import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'

const slideImages = [
    {
        url: 'https://i.ebayimg.com/images/g/EWgAAOSwyP5aJeiu/s-l1200.jpg',
    },
    {
        url: 'https://lumiere-a.akamaihd.net/v1/images/avatar-twow-videobg02_fae5d62e.jpeg?region=0,0,1920,1080&width=768',
    },
    {
        url: 'https://cdn.europosters.eu/image/hp/80594.jpg',
    },
    {
        url: 'https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/10/12202234/Dune-Part-Two-Featured.jpg',
    },
    {
        url: 'https://cdn.eventfinda.co.nz/uploads/events/transformed/1693784-736759-14.jpg',
    },
]

const ImageSlider = () => {
    return (
        <div className="w-[90%]">
            <Fade>
                {slideImages.map((image, index) => (
                    <div key={index} className=" h-[25rem] bg-no-repeat">
                        <img src={image.url} alt={image.index} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    </div>
                ))}
            </Fade>
        </div>
    );
}

export default ImageSlider;
