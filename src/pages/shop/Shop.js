import React, { useState } from 'react';

import Banner from './banner/Banner';
import Filter from './filter/Filter';
import Products, { products } from './products/Product';
import Facility from './facility/Facility';

const Shop = () => {

    const [search, setSearch] = useState('');
    const [price, setPrice] = useState('');
    const [sort, setSort] = useState('default');
    const [view, setView] = useState('grid');


    // FILTER
    const filteredProducts = products.filter((product) => {

        // SEARCH
        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search.toLowerCase());


        // PRICE
        let matchesPrice = true;

        if (price === "0-25000") {
            matchesPrice = product.price <= 25000;
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
            matchesPrice = product.price >= 100000;
        }

        return matchesSearch && matchesPrice;
    });


    // SORT
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
        <div>

            <Banner />

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
                totalCount={products.length}
            />

            <Products
                productsToShow={sortedProducts}
                view={view}
            />

            <Facility />

        </div>
    );
};

export default Shop;