import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import './1k.css';
import { Container } from 'react-bootstrap';
import SingleResult from '../landing/results/SingleResult.js';

// function LanguageButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Grid
//         </button>
//     );
// }

// function LanguageButton(props) {
//     return (
//     <button onclick={props.onClick}>
//         List
//     </button>
//     );
// }

// function ViewMode(props) {
//     const isClicked = props.isClicked;
//     if (isClicked) {
//         return <ListView />;
//     }
//     return <GridView />;
// }


// ReactDOM.render(
//     <GridView isClicked={false} />,
//     document.getElementById('root')
// )

export default function underonek() {

    // Get the elements with class="column"
    const elements = document.getElementsByClassName("column");

    // Declare a loop variable
    var i;
    
    // List View
    function listView() {
        for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
        }
    }
    
    // Grid View
    function gridView() {
        for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
        }
    }

    return (
        <Container fluid>
            <button onclick="listView()"><i class="fa fa-bars"></i> List</button>
            <button onclick="gridView()"><i class="fa fa-th-large"></i> Grid</button>
            <div class="row">
                <div class="column" as={Link} to='/boat/1'>
                    <SingleResult />
                </div>
                <div class="column" as={Link} to='/boat/2'>
                    <SingleResult />
                </div>
                <div class="column" as={Link} to='/boat/3'>
                    <SingleResult />
                </div>
                <div class="column" as={Link} to='/boat/4'>
                    <SingleResult />
                </div>
            </div>

            <div class="row">
                <div class="column" as={Link} to='/boat/5'>
                    <SingleResult />
                </div>
                <div class="column" as={Link} to='/boat/6'>
                    <SingleResult />
                </div>
                <div class="column" as={Link} to='/boat/7'>
                    <SingleResult />
                </div>
                <div class="column" as={Link} to='/boat/8'>
                    <SingleResult />
                </div>
            </div>

            <div class="row">
                <div class="column" as={Link} to='/boat/9'>
                    <SingleResult />
                </div>
                <div class="column" as={Link} to='/boat/10'>
                    <SingleResult />
                </div>
                <div class="column" as={Link} to='/boat/11'>
                    <SingleResult />
                </div>
                <div class="column" as={Link} to='/boat/12'>
                    <SingleResult />
                </div>
            </div>
            
            <div class="row">
                <div class="column" as={Link} to='/boat/13'>
                    <SingleResult />
                </div>
                <div class="column" as={Link} to='/boat/14'>
                    <SingleResult />
                </div>
                <div class="column" as={Link} to='/boat/15'>
                    <SingleResult />
                </div>
                <div class="column" as={Link} to='/boat/16'>
                    <SingleResult />
                </div>
            </div>
        </Container>
    )
}



//              <Row>
//                 <Col className="leftResult" as={Link} to='/boat/1'><SingleResult /></Col>
//                 <Col className="result" as={Link} to='/boat/2'><SingleResult /></Col>
//                 <Col className="result" as={Link} to='/boat/3'><SingleResult /></Col>
//                 <Col className="rightResult" as={Link} to='/boat/4'><SingleResult /></Col>
//             </Row>
//             <Row>
//                 <Col as={Link} to='/boat/1'><SingleResult /></Col>
//                 <Col as={Link} to='/boat/2'><SingleResult /></Col>
//                 <Col as={Link} to='/boat/3'><SingleResult /></Col>
//                 <Col as={Link} to='/boat/4'><SingleResult /></Col>
//             </Row>
//             <Row>
//                 <Col><LandingPreviewSingle /></Col>
//                 <Col><LandingPreviewSingle /></Col>
//                 <Col><LandingPreviewSingle /></Col>
//                 <Col><LandingPreviewSingle /></Col>
//             </Row>
//             <Row>
//                 <Col><LandingPreviewSingle /></Col>
//                 <Col><LandingPreviewSingle /></Col>
//                 <Col><LandingPreviewSingle /></Col>
//                 <Col><LandingPreviewSingle /></Col>
//             </Row>