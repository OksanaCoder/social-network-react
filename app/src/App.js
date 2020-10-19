import React from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap'
import Head from './components/Head'
import NavBar from './components/NavBar';
import Messages from './components/Messages';
import Dialogs from './components/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Head />
      <Container>
        <Row style={{height: '100vh'}}>
          <NavBar />
          <Route path='/messages' render={ () => <Messages />}/>
          <Route path='/dialogs' render={ () => <Dialogs />}/>  
        </Row>
      </Container>
      </BrowserRouter>
  )
}

export default App;
