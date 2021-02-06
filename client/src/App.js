 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import React, { useState } from 'react';
 import Button from 'react-bootstrap/Button'
 import CreateProjectModal from './create-project-modal';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Open modal to create project
      </Button>
      <CreateProjectModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default App;
