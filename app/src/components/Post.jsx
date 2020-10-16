import React, { Component } from 'react';


const Post = (props) => {
        return (
            <div style={{display: 'flex', flexDirection: 'column' }}>
            <div className='mt-3' style={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                <img src={props.image} className='ml-3 mr-3' style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #000'}}/>
                <i>{props.title}</i>
                
            </div>
               <p style={{margin: '10px 60px'}}>{props.message}</p>
            </div>
        )
    
}



export default Post