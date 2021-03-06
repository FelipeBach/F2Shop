import React, { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useReducer } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";
import Badge from "react-bootstrap/esm/Badge";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { Store } from "../Store";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, product: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function ProductScreen(){    
    const params = useParams();
    const{slug} = params;

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
    });
    
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/api/products/slug/${slug}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
            
        };
        fetchData();
    }, [slug]);

    const {state, dispatch: ctxDispacth} = useContext(Store)
    const addToCartHandler = () => {
        ctxDispacth({
            type: 'CART_ADD_ITEM',
            payload: {...product, quantity: 1},
        })
    }

    return loading ? (
        <LoadingBox/>
    )
    :error ? (
        <MessageBox variant="danger">{error}</MessageBox>
    )
    :( 
        <div>
            <Row>
                <Col md={6}>
                    <img
                    className="img-large"
                    src={product.image}
                    alt={product.name}                    
                    ></img>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Helmet>
                                <title>{product.name}</title>
                            </Helmet>
                            <h1>{product.name}</h1>
                        </ListGroup.Item>
                        <ListGroup.Item>R${product.price}</ListGroup.Item>
                        <ListGroup.Item>
                            <p>{product.description}</p>   
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <Row>
                                    <Col>Status: </Col>
                                    <Col>{product.countInStock > 0?
                                        <Badge bg="success">Produto dispon??vel</Badge>
                                        :
                                        <Badge bg="danger">Produto indispon??vel</Badge>
                                    }
                                    </Col>       
                                </Row>
                            </ListGroupItem>

                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <div className="d-grid">
                                        <Button onClick={addToCartHandler} variant='primary'>Adicionar ao Carrinho</Button>
                                    </div>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
export default ProductScreen; 