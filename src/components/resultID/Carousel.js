import React, { Component } from 'react'
import alexander from '../../images/alexander.jpg'
import boatjump from '../../images/boatjump.jpg'
import maritimo from '../../images/maritimo.jpg'
import HorizontalScroll from 'react-scroll-horizontal'

class scrollingHorizontally extends Component {
render() {
    const child   = { width: `30em`, height: `100%`}
    const parent  = { width: `60em`, height: `100%`}
    
    return (
    <div style={parent}>
        <HorizontalScroll>
            <div style={child} src={alexander}/>
            <div style={child} src={maritimo} />
            <div style={child} src={boatjump} />
        </HorizontalScroll>
    </div>
    )}
}

export default scrollingHorizontally;