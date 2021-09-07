import React from 'react';
import LengthSlider from './sliders/LengthSlider';
import BeamSlider from './sliders/BeamSlider';
import DraftSlider from './sliders/DraftSlider';
import CabinsBerthSlider from './sliders/CabinsBerthSlider';
import YearSlider from './sliders/YearSlider';
import PriceSlider from './sliders/PriceSlider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './SearchParams.css';
import  { data } from '../../../boatData.json'

function SearchParams() {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
};
    
    return (
        <div className="container" id="parafield">
            <div className="row justify-content-center" id="propcont">
                <div className="col">
                    <button id="propbtn" type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Power</button>
                </div>
                <div className="col">
                    <button id="propbtn" type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Sail</button> 
                </div>
                <div className="col">
                    <button id="propbtn" type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">All</button>
                </div>
            </div>
            <div className="row justify-content-center" id="typecont">
                <div className="col">
                    <div class="btn-group" id="vactypebtn">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Vacation Type
                        </button>
                        <ul class="dropdown-menu">
                            <li className="typeItem">Few Hours on the Lake</li>
                            <li className="typeItem">A night on the water</li>
                            <li className="typeItem">Regatta</li>
                            <li className="typeItem">Coastal Short Trips</li>
                            <li className="typeItem">Ocean Crossing</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div class="btn-group" id="boattypebtn">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Boat Type
                        </button>
                        <ul class="dropdown-menu">
                            <li className="typeItem">Dinghy</li>
                            {/* <li className="typeItem"><button class="dropdown-item" type="checkbox">Cruiser</button></li>
                            <li className="typeItem"><input class="dropdown-item" href="/" type="checkbox" />Keel></li> */}
                            <li className="typeItem">Gaff</li>
                            <li className="typeItem">Ketch</li>
                            <li className="typeItem">Deck Saloon</li>
                            <li className="typeItem">Dual Console</li>
                            <li className="typeItem">Cutter</li>
                            <li className="typeItem">Centre Cockpit</li>
                            <li className="typeItem">After Cabin</li>
                            <li className="typeItem">Day Boat</li>
                            <li className="typeItem">Fishing</li>
                            <li className="typeItem">Exploration</li>
                            <li className="typeItem">Gulet</li>
                            <li className="typeItem">Giga Yacht</li>
                            <li className="typeItem">Motorsailer</li>
                            <li className="typeItem">Multihull</li>
                            <li className="typeItem">Catamaran</li>
                            <li className="typeItem">Trimaran</li>
                            <li className="typeItem">Pilot House</li>
                            <li className="typeItem">Schooner</li>
                            <li className="typeItem">Sloopo</li>
                            <li className="typeItem">Super Yacht</li>
                            <li className="typeItem">Towable</li>
                            <li className="typeItem">Yawl</li>
                            <li className="typeItem">Wooden</li>
                            <li className="typeItem">Racer</li>
                            <li className="typeItem">Classic</li>
                            <li className="typeItem">Aluminium</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row" id="sliders">
                <div className="col">
                    <div className="row d-flex">
                        <div className="col-2" id="slider">
                            <LengthSlider />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2" id="slider">
                            <BeamSlider />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2" id="slider">
                            <DraftSlider />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2" id="slider">
                            <CabinsBerthSlider />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2" id="slider">
                            <YearSlider />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2" id="slider">
                            <PriceSlider />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center" id="bottombuttonparent">
                <div className="col" id="btncont">
                    <button id="resetbtn" type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Reset</button>
                </div>
                <div className="col text-center" id="btncont">
                    <button id="searchbtn" type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Search</button> 
                </div>
                <div className="col text-center" id="btncont">
                    <FormControlLabel id="advbtn"
                        control={
                        <Switch
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Adv."
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchParams;
