import React from 'react';
import ProductCard from "./components/ProductCard.jsx";
import product from "./assets/card.json"

const App = () => {

    return (
        <>
            <ProductCard {...product.product} />
        </>
    );
};

export default App;
