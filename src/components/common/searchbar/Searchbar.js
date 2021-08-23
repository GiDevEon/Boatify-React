import React from 'react'

const Searchbar = () => {
    return (
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input 
            type="text"
            id="header-search"
            placeholder="Search for your boat"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
    );
};

export default Searchbar;