import React from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap'
import Head from './components/Head'
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
  return (
    <>
      <Head />
      <Container>
        <Row style={{height: '100vh'}}>
          <NavBar />
          <Main />

        </Row>
      </Container>
    </>
  );
}

export default App;
