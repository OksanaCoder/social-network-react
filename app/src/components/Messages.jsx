import React, { Component, useState} from 'react';
import Post from './Post'
import { Col } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

const Messages = () => {
 
   const [messages, saveMessages] = useState([
       {
           title: 'Dan',
           message: 'Hola !'
       }
   ]);

 const [post, setPost] = useState('')
 const [title, setTitle] = useState('')
 
 
const handleSubmit = () => { 
    saveMessages([
        ...messages,
        {
            message: post, 
            title: title
        }
    ])
}

        return (
            <Col lg={9} md={9} sm={12} style={{ paddingTop: '20px', background:'rgb(220,220,220)'}}>
                <h6 style={{padding : '10px'}}>New post</h6>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
                <input value={title} onChange={ (e) => setTitle(e.target.value)} className='mr-3 mb-3 textField' placeholder='your title ...' style={{padding: '5px 20px 10px',  border: '1px solid grey', borderRadius: '50px', width: '20%', boxShadow: '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)' }}/>
               <div style={{display: 'flex', alignItems: 'center'}}>
                <textarea value={post} onChange={ (e) => setPost(e.target.value)} className='mr-3  mb-3  textField' placeholder='your message ...' style={{padding: '5px 20px',  borderRadius: '50px', width: '60%', boxShadow: '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)'}}/>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Add post
                </Button>
                </div>
            </div>
            <div>
                {/* <Post message={this.state.message} /> */}
                <Post title='Ksena' image='https://i.pinimg.com/originals/cb/7c/6a/cb7c6afd13741ce6a58c1584d8b59097.jpg' message='Hello there !'/>
                <Post title='Josh' image='https://www.pauldavidsmith.co.uk/wp-content/uploads/2019/08/corporate-portraits-peterborough-48-705x529.jpg' message='Welcome !'/>
                {messages.map(i => {
                    return (
                        <Post title={i.title} message={i.message}/>
                    )
                   
                })}
            </div>
            </Col>
        )
  
}


export default Messages;