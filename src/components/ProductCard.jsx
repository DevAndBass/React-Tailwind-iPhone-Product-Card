import React from 'react';

function ProductCard({brand, model, rating, description, price, selectColours}) {
    return (
        <>
            <div>HELLO!</div>
            <div className={"flex bg-custom-gradient items-center content-center justify-center overflow-hidden h-screen"}>
                {/*Main card div*/}
                <article
                    className={"flex-col relative w-[200px] lg:w-[350px] h-{200} bg-white border-2 border-gray-200 rounded-lg text-center"}>
                    <header>
                        <div>LOGO</div>
                    </header>
                    <div>
                        <img
                            src=""
                            className="product-img"
                            alt={`product image displaying an image of ${brand} ${model}`}
                        />
                    </div>
                    <h1>{brand}</h1>
                    <h2>{model}</h2>
                    <div>RATING {rating}</div>
                    <p>{description}</p>
                    {/* Colour selection buttons */}
                    <div className={"flex flex-row justify-between mx-3 my-6"}>
                        {selectColours.map((button, i) => (
                            <button
                            key={i}
                            className={`w-[30px] h-[30px] rounded-full ${button.bgColor}`}
                            onClick={ () =>
                                console.log("Button clicked!")
                            }>
                            </button>
                        ))}
                    </div>
                </article>
            </div>
        </>
    );
}

export default ProductCard;