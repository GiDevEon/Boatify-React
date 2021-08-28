import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import '../SearchParams.css';


    // const useStyles = makeStyles({
    //     root: {
    //     width: 300,
    //     },
    // });

    function valuetext(value) {
        return `${value}Year`;
    }

export default function YearSlider() {
        // const classes = useStyles();
        const [value, setValue] = React.useState([100, 10000000]);

        const handleChange = (event, newValue) => {
        setValue(newValue);
        };

        return (
        <div className="slider">
            <Typography id="range-slider" gutterBottom>
            Year(from/to)
            </Typography>
            <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            step={1}
            marks
            min={1800}
            max={2030}
            />
        </div>
        );
    }

    // export default function Hook () {
    //     const classes = useStyles();
    //     return <Button className={classes.root}>Hook</Button>;
    // }