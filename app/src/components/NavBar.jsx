import React, { Component } from 'react';
import { Col } from 'react-bootstrap'

class NavBar extends Component {
   render() {
    return (
        <>
            <Col lg={3} md={3} sm={12} style={{border: '1px solid grey'}}>
               <ul className='list-unstyled' style={{lineHeight: '3',  margin: '30px 30px'}}>
                   <li>Profile</li>
                   <li>Messages</li>
                   <li>News</li>
                   <li>Music</li>
                   <li>Settings</li>
               </ul>
            </Col>
        </>
    )
   }
       
  
}


export default NavBar;