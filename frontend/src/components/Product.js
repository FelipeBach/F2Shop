import React, { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Product(props){
    const {product} = props;
    return (
        <Card>
            <Link to={`/products/${product.slug}`}>
                <img
                    className='card-img-top'
                    src={product.image}
                    alt={product.name}>
                </img>
            </Link>
            <Card.Body>
                <Link to={`/products/${product.slug}`}>
                        <Card.Title>{product.name}</Card.Title>
                </Link>
            </Card.Body>            
            <Card.Text>R${product.price}</Card.Text>
            <Button>Adicionar ao carrinho</Button>
        </Card>
    )
}
export default Product;