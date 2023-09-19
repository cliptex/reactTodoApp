import React from 'react'
import { Card } from 'react-bootstrap'
import {FiTrash2} from 'react-icons/fi'

const Note = (props) => {

  return (
    <Card >
      <Card.Header>
        <Card.Title className='text-center'>
          <p>{ props.todo}</p>
        </Card.Title>
      </Card.Header>
      <Card.Footer className='d-flex justify-content-around card-footer'>
        <Card.Subtitle> <input type="checkbox" /> </Card.Subtitle>
        <Card.Subtitle><FiTrash2 onClick={()=> props.handleDel(props.todo)} className='text-danger icon' /></Card.Subtitle>
      </Card.Footer>
    </Card>
  )
}

export default Note