import React from 'react';
import LengthSlider from './sliders/LengthSlider';
import BeamSlider from './sliders/BeamSlider';
import DraftSlider from './sliders/DraftSlider';
import CabinsBerthSlider from './sliders/CabinsBerthsSlider';
import YearSlider from './sliders/YearSlider';
import PriceSlider from './sliders/PriceSlider';
import './SearchParams.css';

function SearchParams() {
    return (
        <div className="searchParam">
            <div className="propulsionBtns">
                <div className="powerBtn">
                    <button>Power</button>
                </div>
                <div className="sailBtn">
                    <button>Sail</button>
                </div>
                <div className="allBtn">
                    <button>All</button>
                </div>
            </div>
            <div className="sliderCont">
                <LengthSlider />
            </div>
            <div className="sliderCont">
                <BeamSlider />
            </div>
            <div className="sliderCont">
                <DraftSlider />
            </div>
            <div className="sliderCont">
                <CabinsBerthSlider />
            </div>
            <div className="sliderCont">
                <YearSlider />
            </div>
            
        </div>
    )
}

export default SearchParams;