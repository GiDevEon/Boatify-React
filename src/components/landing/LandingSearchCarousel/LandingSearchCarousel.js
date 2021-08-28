import React from 'react'
import BoatArticleCarousel from './Carousel';
import SearchParams from '../../common/searchParams/SearchParams';

function LandingSearchCarousel() {

    return (
        <div>
            <div>
                <SearchParams />
            </div>

            <div>
                <BoatArticleCarousel />
            </div>
        </div>
    )
}

export default LandingSearchCarousel;