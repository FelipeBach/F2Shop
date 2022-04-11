import react from 'react';
import data from './data';
function App() {
  return (
    <div className='grid container'>
      <header className='row'>
        <div>
          <a  href='/'>
            <img src="/images/Prancheta 1.png" />
          </a>            
        </div>
        <div>
            <a href="/cart">Carrinho</a>
            <a href="/singin">Login</a>
        </div>     
    </header>   
    <main>
        <div className='row center'>
          {
            data.product.map((product) =>(
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                    <img 
                      className='medium' 
                      src={product.image} 
                      alt={product.name}>
                    </img>                        
                </a>
                <div className="card body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                </div>
                <div className="price">R${product.price}</div>                                              
            </div>      
            ))
          }
                            
        </div>
    </main>   
      <footer className="row center">All rights reserved</footer>        
    </div> 
  );
}
export default App;