import React, { useState } from 'react';

import Filter from './Filter';
import Product, { products } from './Product';


const Shop = () => {

    const [search, setSearch] = useState('');
    const [price, setPrice] = useState('');
    const [sort, setSort] = useState('default');
    const [view, setView] = useState('grid');


    /* FILTER */

    const filteredProducts = products.filter((product) => {

        /* NAME SEARCH */

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search.toLowerCase());


        /* PRICE FILTER */

        let matchesPrice = true;

        if (price === "0-25000") {
            matchesPrice = product.price < 25000;
        }

        if (price === "25000-50000") {
            matchesPrice =
                product.price >= 25000 &&
                product.price <= 50000;
        }

        if (price === "50000-100000") {
            matchesPrice =
                product.price > 50000 &&
                product.price <= 100000;
        }

        if (price === "100000+") {
            matchesPrice = product.price > 100000;
        }


        return matchesSearch && matchesPrice;
    });


    /* SORT */

    const sortedProducts = [...filteredProducts].sort((a, b) => {

        if (sort === "low") {
            return a.price - b.price;
        }

        if (sort === "high") {
            return b.price - a.price;
        }

        if (sort === "name") {
            return a.name.localeCompare(b.name);
        }

        if (sort === "name-reverse") {
            return b.name.localeCompare(a.name);
        }

        return 0;
    });


    return (
        <>

            <Filter
                search={search}
                setSearch={setSearch}

                price={price}
                setPrice={setPrice}

                sort={sort}
                setSort={setSort}

                view={view}
                setView={setView}

                resultCount={sortedProducts.length}
            />


            <Product
                productsToShow={sortedProducts}
                view={view}
            />

        </>
    );
};


export default Shop;