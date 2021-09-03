import React from 'react'
import {Switch, Route} from 'react-router-dom'
import BoatID from '../resultID/BoatID'
import SearchParams from '../common/searchParams/SearchParams'
import BoatArticleCarousel from './carousel/Carousel'
import ResultsCont from './results/ResultsCont'
import './Landing.css'
import LogIn from '../login/LogIn'
import Underonek from '../under1k/underonek'

export default function Landing() {
    return (
        <div className="row" id="parentrow">
            <div className="col">
                <Switch>
                    <Route  exact path='/boat/:id'>
                    <div className="row" >
                        <div className="col-11">
                            <BoatID />
                        </div>
                    </div>
                    </Route>

                    <Route  exact path='/'>
                    <div className="row">
                        <div className="col" id="para">
                            <SearchParams />
                        </div>
                        <div className="col" id="carousel">
                            <BoatArticleCarousel />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" id="results">
                            <ResultsCont />
                        </div>
                    </div>
                    </Route>

                    <Route exact path='/LogIn/'>
                        <div className="col">
                            <LogIn />
                        </div>
                    </Route>

                    <Route exact path='/Underonek'>
                        <div className="col">
                            <Underonek />
                        </div>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

