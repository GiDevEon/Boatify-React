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
        return `${value}Length`;
    }

export default function LengthSlider() {
        // const classes = useStyles();
        const [value, setValue] = React.useState([12, 10000000]);

        const handleChange = (event, newValue) => {
        setValue(newValue);
        };

        return (
        <div className="slider">
            <Typography id="range-slider" gutterBottom>
            Length
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
            min={2}
            max={200}
            />
        </div>
        );
    }