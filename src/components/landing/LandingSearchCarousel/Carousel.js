import React from 'react';
import Carousel from 'react-responsive-carousel';


export default function BoatArticleCarousel() {
    return (
        <>
            <Carousel showArrows={true}>
                <div>
                    <img src="assets/1.jpeg" alt=""/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" alt=""/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" alt=""/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" alt=""/>
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" alt=""/>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" alt=""/>
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        </>
    )
}
