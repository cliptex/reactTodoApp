import { Container } from 'react-bootstrap';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import { useEffect, useState } from 'react';

const base = 'https://6505eacfef808d3c66f09eb2.mockapi.io';
function App() {
  const [todo, setTodo] = useState('');
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    return async () => {
      await fetch(`${base}/react-basics/users`)
        .then((res) => res.json())
        .then((data) => setDatas(data));
    };
  }, [todo]);

  const handleTodo = async (todo) => {
    const newTodo = {
      todo: `${todo}`,
    };
    await fetch(`${base}/react-basics/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    setTodo(todo);
  };

  return (
    <Container className="d-flex">
      <NoteForm handleTodo={handleTodo} />
      <Notes datas={datas} setDatas={setDatas} />
    </Container>
  );
}

export default App;
