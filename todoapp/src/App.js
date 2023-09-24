import { Container } from 'react-bootstrap';
import NoteForm from './components/NoteForm';
import Note from './components/Note';

function App() {
  return (
    <Container className="d-flex m-5">
      <NoteForm />
      <Note />
    </Container>
  );
}

export default App;
