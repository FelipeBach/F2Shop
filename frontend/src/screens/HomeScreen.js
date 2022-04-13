//import data from "../data";
import React, {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";

function HomeScreen(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/products')
            setProducts(result.data);
        };
        fetchData();
    }, []);    
    return (
        <div>
            <div className='row center'>
                {
                products.map((product) =>(
                    <div key={product.slug} className="card">
                    <Link to={`/product/${product.slug}`}>
                        <img 
                            className='medium' 
                            src={product.image} 
                            alt={product.name}>
                        </img>                        
                    </Link>
                    <div className="card body">
                        <Link to={`/product/${product.slug}`}>
                            <h2>{product.name}</h2>
                        </Link>
                    </div>
                    <div className="price">R${product.price}</div>
                    <button>Adicionar ao carrinho</button>                                              
                </div>      
                ))
                }
                                
            </div>
        </div>
    )    
}
export default HomeScreen;