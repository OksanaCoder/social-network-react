import React, { Component } from 'react';
import Post from './Post'
import { Col } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class Messages extends Component {

    render() {
        return (
            <Col lg={9} md={9} sm={12} style={{border: '1px solid grey', paddingTop: '20px'}}>
            <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                <textarea className='mr-3 textField' placeholder='your message ...' style={{padding: '5px 20px',  borderRadius: '50px', width: '60%', boxShadow: '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)'}}/>
                <Button variant="contained" color="primary">
                    Add post
                </Button>
            </div>
            <div>
                <Post title='Ksena' image='https://i.pinimg.com/originals/cb/7c/6a/cb7c6afd13741ce6a58c1584d8b59097.jpg' message='Hello there !'/>
                <Post title='Josh' image='https://www.pauldavidsmith.co.uk/wp-content/uploads/2019/08/corporate-portraits-peterborough-48-705x529.jpg' message='Welcome !'/>

            </div>
            </Col>
        )
    }
}


export default Messages;