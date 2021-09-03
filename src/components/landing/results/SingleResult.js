import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import lagoon from './../../../images/preview/lagoon.jpg';
import lagoon2 from './../../../images/preview/lagoon2.jpg';
import lagoon3 from './../../../images/preview/lagoon3.jpg';
import lagoon4 from './../../../images/preview/lagoon4.jpg';
import './Results.css';

export default function SingleResult() {
    return (
        <Carousel className="single">
                <div className="resultItem">
                    <img src={lagoon} alt=""/>
                    <div id="overlay">
                        <p className="previewdata">Name</p>
                        <p className="previewdata">Length</p>
                        <p className="previewdata">Location</p>
                        <p className="pricepreview">Price</p>
                    </div>
                </div>
                <div className="resultItem">
                    <img src={lagoon2} alt=""/>
                    <div id="overlay">
                        <p className="previewdata">Name</p>
                        <p className="previewdata">Length</p>
                        <p className="previewdata">Location</p>
                        <p className="pricepreview">Price</p>
                    </div>
                </div>
                <div className="resultItem">
                    <img src={lagoon3} alt=""/>
                    <div id="overlay">
                        <p className="previewdata">Name</p>
                        <p className="previewdata">Length</p>
                        <p className="previewdata">Location</p>
                        <p className="pricepreview">Price</p>
                    </div>
                </div>
                <div className="resultItem">
                    <img src={lagoon4} alt=""/>
                    <div id="overlay">
                        <p className="previewdata">Name</p>
                        <p className="previewdata">Length</p>
                        <p className="previewdata">Location</p>
                        <p className="pricepreview">Price</p>
                    </div>
                </div>
            </Carousel>
    )
}




// import React from 'react';
// import $ from 'jquery';
// import { findDOMNode } from 'react-dom';




// export default function LandingPreviewSingle() {
//     useEffect(() => {
//         $('#element').frameScrub({defaultImage:"Element Id"});

//     }, [input])
//     return (
//         <div>
//             <div id="element" style="width:100%;height:200px;overflow:hidden;">
//                 <img src="" id="1"/>
//                 <img src="" id="1"/>  
//                 <img src="" id="1"/>  
//                 <img src="" id="1"/>    
//             </div>
//         </div>
//     )
// }
