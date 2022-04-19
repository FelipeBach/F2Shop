import React, {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
function App() {

  return (
    <BrowserRouter>    
      <div>
        <header className='row'>
          <Container>
            <Navbar className='nav-color'>
              <Container>
                <LinkContainer to='/'>
                  <Navbar.Brand><img src="/images/logof2.png" alt='F2 Shop'/></Navbar.Brand>
                </LinkContainer>  
                <LinkContainer to='/cart'>
                  <Navbar>Carrinho</Navbar>
                </LinkContainer> 
                <LinkContainer to='/singin'>
                <Navbar>Login</Navbar>
                </LinkContainer>             
              </Container>
            </Navbar>
          </Container>                         
      </header>   
      <main>
        <Container>        
          <Routes>
            <Route path='/products/:slug' element={<ProductScreen/>}/>
            <Route path='/' element={<HomeScreen />}/>
          </Routes>
        </Container>         
      </main>   
        <footer className="row center">All rights reserved</footer>        
      </div> 
    </BrowserRouter>
  );
}
export default App;