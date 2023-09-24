import { useState } from "react";
import { Card, FormCheck } from "react-bootstrap"
import {BiSolidTrash} from 'react-icons/bi'

const Notes = (props) => {
  const [isChecked, setIsChecked] = useState(props.checked || false);

  const handleChecked = (e) => { 
    setIsChecked(!isChecked);
    props.updateCheck(props.id , isChecked)
   }

  const handleDel = () => { 
    props.delTodo(props.id)
   }

  return (
    
    <Card className="card h-100">
      <Card.Header className="h-100">
      <Card.Title>{props.todoName}</Card.Title>
      </Card.Header>
      <Card.Body className="d-flex justify-content-around">
       
       <FormCheck name={props.id}
          checked={isChecked}
          onChange={handleChecked} />
        <BiSolidTrash
          className="fs-4 text-danger icon"
          onClick={handleDel}
        />
        
      </Card.Body>
    </Card>
    
  )
}

export default Notes