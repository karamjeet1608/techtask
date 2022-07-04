import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Subcategory() {

  const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList

  return (
        <div>
        <h1>This is my Sub category components</h1>
        {/* <Row>
            {products.map(product => (   
                <Col key={product.id}>
                    {product.productName}
                    <input type="checkbox" class="custom-control-input" id={product.id} onChange={checkboxHandler(product.id)} />
                    <Subcategory/>
                </Col>
                
            ))}
        </Row> */}
    </div>
  )
}

export default Subcategory