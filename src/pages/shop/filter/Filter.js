import React from 'react';
import './filter.css';

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineCalendarViewDay } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const Filter = ({
    search,
    setSearch,
    price,
    setPrice,
    sort,
    setSort,
    view,
    setView,
    resultCount,
    totalCount
}) => {

    return (
        <div className="Filter">

            <div className="filter-left">

                <button className="filter-button">
                    <HiOutlineAdjustmentsHorizontal />
                    Filter
                </button>

                {/* SEARCH */}
                <div className="search-box">
                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search product..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* PRICE */}
                <select
                    className="price-filter"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                >
                    <option value="">Price</option>

                    <option value="0-25000">
                        25,000 and under
                    </option>

                    <option value="25000-50000">
                        25,000 - 50,000
                    </option>

                    <option value="50000-100000">
                        50,000 - 100,000
                    </option>

                    <option value="100000+">
                        100,000+
                    </option>
                </select>

                {/* VIEW */}
                <div className="view-buttons">

                    <button
                        className={view === "grid" ? "active" : ""}
                        onClick={() => setView("grid")}
                    >
                        <AiOutlineAppstore />
                    </button>

                    <button
                        className={view === "list" ? "active" : ""}
                        onClick={() => setView("list")}
                    >
                        <MdOutlineCalendarViewDay />
                    </button>

                </div>

                {/* RESULT */}
                <h6>
                    Showing {resultCount} of {totalCount} results
                </h6>

            </div>

            {/* SORT */}
            <div className="sort">

                <label>Sort by</label>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="default">
                        Default
                    </option>

                    <option value="low">
                        Price: Low to High
                    </option>

                    <option value="high">
                        Price: High to Low
                    </option>

                    <option value="name">
                        Name: A-Z
                    </option>

                    <option value="name-reverse">
                        Name: Z-A
                    </option>
                </select>

            </div>

        </div>
    );
};

export default Filter;