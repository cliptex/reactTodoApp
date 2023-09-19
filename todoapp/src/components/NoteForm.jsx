import React, { useState } from 'react'
import {  Container } from 'react-bootstrap'

const NoteForm = ({handleTodo} ) => {

  const [text, setText] = useState('');
  const [warning, setWarning] = useState('');

  const handleChange = (e) => {
    const val = e.target.value
    setText(val);
  };

  const handleSubmit = (e) => { 
    e.preventDefault()
    if (text.length >= 4 ) {
      setWarning("")
      handleTodo(text)
      setText("")
    }
    else {
      setWarning("*You must enter at least 4 characters in the blank!")
    }

   }

  return (

    <Container className='mt-5 w-50'>
      <h2 className='text-light'>Todo App</h2>
      <form onSubmit={handleSubmit} >
        <input 
          className='form-control my-3'
          type="text"
          value={text}
          onChange={handleChange}
          id='todo'

        />
        <button className='btn btn-primary' >Create Note</button>
      </form>
      <p className='text-danger mt-4'>{warning}</p>
    </Container>
    
  )
}

export default NoteForm