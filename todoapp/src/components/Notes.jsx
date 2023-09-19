import React from 'react'
import Note from './Note'
import { Col, Container, Row } from 'react-bootstrap'

const Notes = (props) => {

  const handleDel = (data) => { 
    console.log(data.id);
   }

  return (
    <Container className='my-5'>
      <Row className='row-cols-3 gy-3'>
        {
          props.datas.map((data) => (
            
            <Col key={data.id}>
              <Note
                {...data}
                handleDel={handleDel}
              />
          </Col>
            
          ))
        }
       
      </Row>
          
    </Container>
  )
}

export default Notes