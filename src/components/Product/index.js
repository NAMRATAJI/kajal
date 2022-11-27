import React, {} from "react";


import './product.css';

export default function Product() {
     
     const product = [
        {
            name:'Red and white christmas cactus',
            image: 'https://www.plants.com/images/r_400_177118molc_20221027-1666897836198.jpg' ,
            price: 580,
        },
        {
            name:'Red and white christmas cactus',
            image: 'https://www.plants.com/images/r_400_177118molc_20221027-1666897836198.jpg' ,
            price: 360,
        },
        {
            name:'Red and white christmas cactus',
            image: 'https://www.plants.com/images/r_400_177118molc_20221027-1666897836198.jpg' ,
            price: 560,
        },
     ]

    return(
        <div className="product-container">
            {product.map((item) => (
                <div className="product-child-container">
                  <h2>{item.name}</h2>
                  <img src={item.image} />
                  <p>Price: {item.price}</p>
                 </div>      
            ))}
        </div>
        
    )
}