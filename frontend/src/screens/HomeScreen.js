import React, { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useReducer } from "react";
import logger from "use-reducer-logger";


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function HomeScreen() {
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
    });

    //const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/products');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }

            //setProducts(result.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className='row center'>
                {loading ? (<div>Loading...</div>
                )
                :error ? (<div>{error}</div>
                )
                :(
                    products.map((product) => (
                    <div className="card" key={product.slug}>
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
                    </div>)
                ))
                }

            </div>
        </div>
    )
}
export default HomeScreen;