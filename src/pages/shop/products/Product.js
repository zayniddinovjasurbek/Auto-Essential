import React from 'react';
import { Link } from 'react-router-dom';

import product1 from './Trenton modular sofa_3 1 (1).png';
import product2 from './Trenton modular sofa_3 1 (2).png';
import product3 from './Trenton modular sofa_3 1 (3).png';
import product4 from './Trenton modular sofa_3 1.png';

import product5 from './Trenton modular sofa_3 1 (4).png';
import product6 from './Trenton modular sofa_3 1 (5).png';
import product7 from './Trenton modular sofa_3 1 (6).png';
import product8 from './Trenton modular sofa_3 1 (7).png';

import product9 from './Trenton modular sofa_3 1 (8).png';
import product10 from './Trenton modular sofa_3 1 (9).png';
import product11 from './Trenton modular sofa_3 1 (10).png';
import product12 from './Trenton modular sofa_3 1 (11).png';

import product13 from './Trenton modular sofa_3 1 (12).png';
import product14 from './Trenton modular sofa_3 1 (13).png';
import product15 from './Trenton modular sofa_3 1 (14).png';
import product16 from './Trenton modular sofa_3 1 (15).png';

import './product.css';


export const products = [
    {
        id: 1,
        name: "Shell Engine Oil",
        shop: "Oil House",
        price: 25000,
        image: product1
    },
    {
        id: 2,
        name: "Shell Engine Oil",
        shop: "Oil House",
        price: 25000,
        image: product2
    },
    {
        id: 3,
        name: "Shell Engine Oil",
        shop: "Oil House",
        price: 25000,
        image: product3
    },
    {
        id: 4,
        name: "Shell Engine Oil",
        shop: "Oil House",
        price: 25000,
        image: product4
    },
    {
        id: 5,
        name: "Jasur Engine Oil",
        shop: "Oil House",
        price: 100000,
        image: product5
    },
    {
        id: 6,
        name: "Shell Engine Oil",
        shop: "Oil House",
        price: 25000,
        image: product6
    },
    {
        id: 7,
        name: "Shell Engine Oil",
        shop: "Oil House",
        price: 25000,
        image: product7
    },
    {
        id: 8,
        name: "Shell Engine Oil",
        shop: "Oil House",
        price: 25000,
        image: product8
    },
    {
        id: 9,
        name: "Tire",
        shop: "Tire House",
        price: 25000,
        image: product9
    },
    {
        id: 10,
        name: "Tire",
        shop: "Tire House",
        price: 25000,
        image: product10
    },
    {
        id: 11,
        name: "Tire",
        shop: "Tire House",
        price: 25000,
        image: product11
    },
    {
        id: 12,
        name: "Tire",
        shop: "Tire House",
        price: 25000,
        image: product12
    },
    {
        id: 13,
        name: "Tire",
        shop: "Tire House",
        price: 25000,
        image: product13
    },
    {
        id: 14,
        name: "Tire",
        shop: "Tire House",
        price: 25000,
        image: product14
    },
    {
        id: 15,
        name: "Tire",
        shop: "Tire House",
        price: 25000,
        image: product15
    },
    {
        id: 16,
        name: "Tire",
        shop: "Tire House",
        price: 25000,
        image: product16
    }
];


const Product = ({ productsToShow = products, view = "grid" }) => {

    return (
        <div className={`shop-products ${view}`}>

            {productsToShow.length > 0 ? (

                productsToShow.map((product) => (

                    <Link
                        to="/single"
                        className="single-product"
                        key={product.id}
                    >

                        {/* IMAGE */}
                        <div className="product-image">
                            <img
                                src={product.image}
                                alt={product.name}
                            />
                        </div>


                        {/* INFO */}
                        <div className="product-info">

                            <p className="product-name">
                                {product.name}
                            </p>

                            <p className="product-shop">
                                Shop: {product.shop}
                            </p>

                            <h2>
                                Rs. {product.price.toLocaleString()}.00
                            </h2>

                        </div>

                    </Link>

                ))

            ) : (

                <div className="no-products">
                    Product not found
                </div>

            )}

        </div>
    );
};


export default Product;
