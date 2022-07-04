import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {listProducts} from '../actions/productActions'
import {listSubcategories} from '../actions/subcategoryActions'

function Product() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [])

    const checkboxHandler = (id) => {
        dispatch(listSubcategories(id))
      };

    console.log("products: ", products)
    return (
    <div>
        <h1>This is product component</h1>
        <Row>
            {products.map(product => (   
                <Col key={product.id}>
                    {product.productName}
                    <input type="checkbox" class="custom-control-input" id={product.id} onChange={checkboxHandler(product.id)} />
                </Col>
                
            ))}
        </Row>
    </div>
    )
}

export default Product