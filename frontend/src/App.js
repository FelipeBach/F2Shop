import React, {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {

  return (
    <BrowserRouter>    
      <div className='grid container'>
        <header className='row'>
          <div>
            <Link  to='/'>
              <img src="/images/logof2.png" alt='F2 Shop'/>
            </Link>            
          </div>
          <div>
              <Link to="/cart">Carrinho</Link>
              <Link to="/singin">Login</Link>
          </div>     
      </header>   
      <main>
        <Routes>
          <Route path='/product/:slug' element={<ProductScreen/>}/>
          <Route path='/' element={<HomeScreen />}/>
        </Routes>
          
      </main>   
        <footer className="row center">All rights reserved</footer>        
      </div> 
    </BrowserRouter>
  );
}
export default App;