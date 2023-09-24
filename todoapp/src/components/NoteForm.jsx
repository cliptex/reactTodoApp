/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { Button, Container, Form, FormControl } from "react-bootstrap"

const NoteForm = (props) => {
  const [formGone, setFormGone] = useState(false)


  const [val, setVal] = useState("")
  const handleVal = (e) => {
    setVal(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormGone(true)
  }

useEffect(() => {
  if (formGone) {
    fetch("https://6505eacfef808d3c66f09eb2.mockapi.io/react-basics/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ todoName: val })
    }).then(()=>{props.updateTodos()})
  }

  return () => {
    setFormGone(false)
    setVal("")
    
  }
}, [formGone])




  return (

    <Container className="w-25 text-center" >
      <Form  onSubmit={handleSubmit}>
        <FormControl
         
        type="text"
          placeholder="Enter Your Todo's"
          value={val}
          onChange={handleVal}
      />
        <Button
          className="mt-3"
          type="submit"
          
        >Send</Button>
        </Form>
    </Container>
    
  )
}

export default NoteForm