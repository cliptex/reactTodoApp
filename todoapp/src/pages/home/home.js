import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import NoteForm from '../../components/NoteForm';
import Note from '../../components/Note';
const api = 'https://6505eacfef808d3c66f09eb2.mockapi.io/react-basics/users';

const HomePage = () => {
  const updateCheck = (id, isChecked) => {
    const data = { checked: !isChecked };

    fetch(`${api}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };
  const delTodo = async (id) => {
    await fetch(`${api}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    updateTodos();
  };

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    updateTodos();
  }, []);
  const updateTodos = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };

  return (
    <Container className="mainContainer">
      <NoteForm updateTodos={updateTodos} />
      <Note todos={todos} delTodo={delTodo} updateCheck={updateCheck} />
    </Container>
  );
};

export default HomePage;
