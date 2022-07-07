import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'


function Subcategory() {

  const subcategoryList = useSelector(state => state.subcategoryList)
  console.log("subcategoryList: ", subcategoryList)
  const { error, loading, subcategories } = subcategoryList

  return (
        <div>
        <h1>This is my Sub category components</h1>
        <Row>
            {subcategories.map(subcategory => (   
                <Col key={subcategory.id}>
                    {subcategory.subCategoryName}
                    <input type="checkbox" class="custom-control-input" id={subcategory.id} />
                    <Subcategory/>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default Subcategory