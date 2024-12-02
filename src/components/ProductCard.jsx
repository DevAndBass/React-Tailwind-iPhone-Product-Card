import React, {useEffect, useState} from 'react';
import {btnColours} from "../assets/colours.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

function ProductCard({brand, model, rating, description, price, selectColours}) {
    const [currentImage, setCurrentImage] = useState(selectColours[0].src);
    const [productRating, setProductRating] = useState(0);

    useEffect(() => {
        setProductRating(rating); // Update rating when prop changes
    }, [rating]);

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={i < Math.floor(productRating) ? solidStar : regularStar}
                    className="text-[#FFCA1AFF]"
                />
            );
        }
        return stars;
    };

    return (
        <>
            <div className={"flex bg-custom-gradient items-center content-center justify-center overflow-hidden h-screen"}>
                {/*Main card div*/}
                <article
                    className={"flex-col relative w-full max-w-[300px] md:max-w-[350px] h-{200} bg-white rounded-3xl text-center shadow-xl"}>
                    <header className={"bg-white rounded-3xl relative"}>
                        <div className={"absolute left-8 top-8"}>
                            <FontAwesomeIcon icon={faApple} className={"text-5xl"}/>
                        </div>
                    </header>
                    <div
                        className={"p-8 relative"}>
                        <div>
                            <img
                                id={`product-image`}
                                src={currentImage.toString()}
                                className="w-2/3 md:w-full md:rotate-[-20deg] absolute md:translate-x-[60px] translate-x-[75px] md:translate-y-[-100px]"
                                alt={`product image displaying an image of ${brand} ${model}`}
                            />
                            <div
                                className="absolute md:top-[325px] top-[260px] md:right-[90px] right-[55px] md:w-24 w-20 md:h-4 h-2 bg-black opacity-30 rounded-full blur-md"/>

                        </div>
                        <h1 className={"text-left font-bold text-2xl mb-1 md:mt-56 mt-40"}>{brand}</h1>
                        <h2 className={"text-left text-xl mb-2"}>{model}</h2>
                        <div className={"text-left mb-3"}>
                            {renderStars()}
                        </div>
                        <p className={"text-sm"}>{description}</p>
                        {/* Colour selection buttons */}
                        <div className={"flex flex-row justify-between md:mx-20 mx-8 md:mb-4 mb-3 md:my-6 my-3"}>
                            {selectColours.map((button, i) => (
                                <button
                                    key={i}
                                    aria-label={`Button to select the colour - ${button}`}
                                    className={`w-6 h-6 md:w-4 md:h-4 rounded-full border-[#333] border-[1px] }`}
                                    style={{ backgroundColor: btnColours[button.bgColor] }}
                                    onClick={() =>
                                        setCurrentImage(selectColours[i].src)
                                }
                                />
                            ))}
                        </div>
                        <div className={"mb-3 text-xl font-bold"}>
                            {price}
                        </div>
                        <button
                            className={"uppercase font-bold bg-[aquamarine] hover:opacity-70 w-full md:h-14 h-12 rounded-xl transition-all duration-300"}
                        >
                            Add to cart
                        </button>
                    </div>
                </article>

            </div>
        </>
    );
}

export default ProductCard;