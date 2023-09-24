
import { Col, Container, Row } from "react-bootstrap"
import Notes from "./Notes"

const Note = (props) => {


  return (
    <Container>
      <Row >
        {
          props.todos.map((data) => (
            <Col md={6} lg={4} xl={2} className="mb-4" key={data.id}>
              <Notes {...data} delTodo={props.delTodo} updateCheck={props.updateCheck} />
            </Col>
          ))
   }
         </Row>
  </Container>
  )
}

export default Note


