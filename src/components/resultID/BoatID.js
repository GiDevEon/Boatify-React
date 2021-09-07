import {useParams} from 'react-router-dom';
import React from 'react';
import './ResultID.css';
import map from './../../images/map.png';
import scrollingHorizontally from './Carousel';

export default function BoatID() {
    const{id} = useParams();
    return (
        <div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8" id="frameBoatID">
                    <div className="row" >
                        <div className="col">
                            <scrollingHorizontally />
                        </div>
                    <div className="row">
                        <div className="col-7">
                            <div className="row" id="keyData">
                                <div className="col">
                                    <p className="keyDataItem">Type</p>
                                    <h1 className="keyDataTitle">Make+Model</h1>
                                    <p className="keyDataItem">year</p>
                                    <p className="keyDataItem">make</p>
                                    <p className="keyDataItem">model</p>
                                    <p className="keyDataItem">legthByBeam</p>
                                    <p className="keyDataItem">draft</p>
                                    <p className="keyDataItem">material</p>
                                    <p className="keyDataPrice">price</p>
                                    <button className="sharedOwnerBtn">SharedOwnership</button>
                                </div>
                            </div>
                            <div className="row" id="location">
                                <div className="col-6">
                                    <p className="header">Location</p>
                                        <div id="mapimg">
                                            <a href="/" ><img src={map} alt="map icon" /></a>
                                        </div>
                                    <p>Spain, Valencia</p>
                                </div>
                            </div>
                            <div className="row" id="description">
                                <div className="col">
                                    <h2>Description</h2>
                                    <p>Sparkman & Stephens 27 wird von Bootveiling.com verkauft.
        Für weitere Informationen, z.B. detaillierte Beschreibung, Bootsausrüstung, oder Fotos von Segelboot Sparkman & Stephens 27 - kontaktieren Sie bitte Bootveiling.com via E-Mail senden oder benutzen Sie den direkten Link oben, Händlerwebsite - auf den Sie die detaillierte Anzeige von Bootveiling.com sehen können.
        Um Anzeigen für ähnliche Boote wie die Sparkman & Stephens 27 zu sehen, klicken Sie in der rechten oberen Ecke der Anzeige, auf Ähnliche Segelboot.
        Bitte merke, Bootveiling.com könnte eine detailliertere Beschreibung von Sparkman & Stephens 27 auf Englisch, Schwedisch, Dänisch oder Niederländisch haben. Die Sprachen werden oben rechts neben "Anzeige aufgeben" gewählt
        Wenn Sie die anderen Segelboot Anzeigen von der Verkäufers auf scanboat.com sehen möchten, wählen Sie dies via, Anzeigen vom Verkäufer.</p>
                                </div>
                            </div>
                            <div className="row" id="services">
                                <div className="col">
                                    <a href="/">Insurance</a>
                                    <img src="" alt="" />
                                    <p>estimated insurance</p>
                                    <a href="/">Financing</a>
                                    <img src="" alt="" />
                                    <p> financing</p>
                                    <a href="/">Transport</a>
                                    <img src="" alt="" />
                                    <p>estimated boat transport</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row" id="sellerData">
                                <div className="col">
                                    <h2 className="sellerTitle">Beneteau</h2>
                                    <p className="sellerLocation"></p>
                                    <button className="showNumber"></button>
                                    <a href="http://">Other listings</a>
                                    <h3 className="sellerForm">
                                        <form action=""></form>
                                    </h3>
                                    <button className="sendMessage">Send Message</button>
                                    <p className="agb">AGB text</p>
                                </div>
                            </div>
                            <div className="row" id="listingStats">
                                <div className="col">
                                    <h2>Listing Stats</h2>
                                    <p className="listingID">ListingID</p>
                                    <p className="calls">Calls last 7 days</p>
                                    <p className="bookmarks">Bookmarked by people</p>
                                    <a href="http://">
                                        <p className="report">Report suspicious listing</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2" />
                </div>
            </div>
        </div>
    )
}
