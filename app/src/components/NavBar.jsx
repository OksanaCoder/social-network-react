import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
   render() {
    return (
        <>
            <Col lg={3} md={3} sm={12} style={{ background:'#343A40'}}>
               <ul className='list-unstyled links' style={{lineHeight: '3',  margin: '30px 30px'}}>
                   <li><NavLink to='/dialogs' activeClassName='active'>Profile</NavLink></li>
                   <li><NavLink to='/messages' activeClassName='active'>Messages</NavLink></li>
                   <li><NavLink to='/news' activeClassName='active'>News</NavLink></li>
                   <li> <NavLink to='/music' activeClassName='active'>Music</NavLink></li>
                   <li><NavLink to='/settings' activeClassName='active'>Settings</NavLink></li>
               </ul>
            </Col>
        </>
    )
   }
       
  
}


export default NavBar;