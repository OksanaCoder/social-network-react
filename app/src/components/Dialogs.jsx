import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Message from './Message'
class Dialogs extends Component {

    render() {
        return (
            <>
            <Col lg={2} md={2} sm={12} style={{ paddingTop: '20px'}}>
                <ul className=' listOfUsers list-unstyled'>
                    <li><NavLink to='/dialogs/jane' activeClassName='active'>Jane</NavLink></li>
                    <li><NavLink to='/dialogs/oksi' activeClassName='active'>Oksi</NavLink></li>
                    <li><NavLink to='/dialogs/emmanuel' activeClassName='active'>Emmanuel</NavLink></li>
                    <li><NavLink to='/dialogs/sofia' activeClassName='active'>Sofia</NavLink></li>
                    <li><NavLink to='/dialogs/kate' activeClassName='active'>Kate</NavLink></li>
                </ul>
            </Col>
             <Col lg={4} md={4} sm={12} style={{ paddingTop: '20px', background:'rgb(220,220,220)'}}>
             <ul>
                <Message text='hello there'/>
             </ul>
         </Col>
         </>
        )
    }
}


export default Dialogs