// eslint-disable-next-line

import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './RangeSlider.css';


    // const useStyles = makeStyles({
    //     root: {
    //     width: 300,
    //     },
    // });

    function valuetext(value) {
        return `${value}Price`;
    };

export default function PriceSlider() {
        // const classes = useStyles();
        const [value, setValue] = React.useState([100, 10000000]);

        const handleChange = (event, newValue) => {
        setValue(newValue);
        };

        return (
        <div className="slider">
            <Typography id="range-slider" gutterBottom>
            Price
            </Typography>
            <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            step={1}
            marks
            track="inverted"
            min={1800}
            max={2030}
            />
        </div>
        );
    };

    // export function Hook () {
    //     const classes = useStyles();
    //     return <Slider className={classes.root}>Hook</Slider>;
    // }




// /* eslint-disable no-undef */
// import './RangeSlider.css';
// import React from 'react';
// import PropTypes from 'prop-types';
// import { useState, useRef } from 'react';
// import { useCallback, useEffect } from 'react';


// function PriceSlider() {

//     // Call the props
//     const MultiRangeSlider = ({ min, max, onChange}) => {};

//     // Set the type of each prop
//         MultiRangeSlider.propTypes = {
//             min: PropTypes.number.isRequired,
//             max: PropTypes.number.isRequired,
//             onChange: PropTypes.func.isRequired
//         };

//     // Creating the state variables
//     const [minVal, setMinVal] = useState(min);
//     const [maxVal, setMaxVal] = useState(max);

//     // Creating the refs
//     const minValRef = useRef(min);
//     const maxValRef = useRef(max);
    
//     // Create a ref
//     const range = useRef(null);

//     // Convert to percentage
//     const getPercent = useCallback((value) => {
//         Math.round(((value - min) / (max - min)) * 100);
//     }, [min, max]);

//     // Set width of the range to change from the left side
//     useEffect(() => {
//         const minPercent = getPercent(minVal);
//         const maxPercent = getPercent(maxVal);

//         if (range.current) {
//             range.current.style.left = `${minPercent}%`;
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [minVal, getPercent]);

//     // Set width of the range to change from the right side
//     useEffect(() => {
//         const minPercent = getPercent(minValRef.current);
//         const maxPercent = getPercent(maxVal);

//         if (range.current) {
//             range.current.style.width = `${maxPercent - minPercent}%`;
//         }
//     }, [maaxVal, getPercent]);

//     // Get min and max values when their state changes
//     useEffect(() => {
//         onChange({ min: minVal, max: maxVal });
//     }, [minVal, maxVal, onChange]);


//     return (
//         <>
//             <input
//                 type="range"
//                 min={min}
//                 max={max}
//                 value={minVal}
//                 onChange={event => {
//                     const value = Math.min(Number(event.target.value), maxVal - 1 );
//                     setMinVal(value);
//                     minValRef.current = value;
//                 }}
//                 className="thumb thumb--left"
//                 style={{ zIndex: minVal > max - 100 && "5" }}
//             />
//             <input
//                 type="range"
//                 min={min}
//                 max={max}
//                 value={maxVal}
//                 onChange={event => {
//                     const value = Math.max(Number(event.target.value), minVal + 1);
//                     setMaxVal(value);
//                     maxValRef.current = value;
//                 }}
//                 className="thumb thumb--right"
//             />
            
//             <div className="slider">
//                 <div ref={range} className="slider__track" />{/* Attach the ref*/}
//                 <div className="slider__range" />
//             </div>

//             <div className="slider__left-value">{minVal}</div>
//             <div className="slider__right-value">{maxVal}</div>
//         </>
//     );
// };

// export default PriceSlider;