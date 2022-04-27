import React, {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
import Badge from 'react-bootstrap/esm/Badge';
import { useContext } from 'react';
import { Store } from './Store';
function App() {
  const { state } = useContext(Store);
  const { cart } = state;
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
                <Nav className='me-auto'>
                  <Link to='/cart' className="nav-link">
                    Carrinho
                    {cart.cartItems.length > 0 &&(
                      <Badge pill bg="danger">
                        {cart.cartItems.length }
                      </Badge>
                    )}
                  </Link> 
                </Nav>                 
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