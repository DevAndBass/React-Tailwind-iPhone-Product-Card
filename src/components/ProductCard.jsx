import React from 'react';

function ProductCard({brand, model, rating, description, price, selectedColours}) {
    return (
        <>
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
                    <div>RATING</div>
                    <p>{description}</p>
                </article>
            </div>
        </>
    );
}

export default ProductCard;