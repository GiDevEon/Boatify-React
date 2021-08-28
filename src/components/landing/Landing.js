import React from 'react'
import './Landing.css';
import SearchParams from '../common/searchParams/SearchParams';

export default function Landing() {
    return (
        <div className="container">

            <div className="row" id="jumboBack">
                <div className="col-3" id="aqua">
                </div>
                <div className="col-9" id="red">
                    <SearchParams />
                </div>
            </div>

            <div className="row justify-content-md-center">
                <div className="col-12">
                    <p id="yellow">preview</p>
                </div>
            </div>

        </div>
    )
}
