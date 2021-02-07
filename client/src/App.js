import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { 
  createProjectModalShow,
  chooseCardModalShow
} from './actions/createProjectActions'
import CreateProjectModal from './container/CreateProjectModal';
import ChooseCardModal from './container/ChooseCardModal';

function App(props) {
  return (
    <>
      <Button variant="primary" onClick={() => props.createProjectModalShow(true)}>
        Open modal to create project
      </Button>
      <CreateProjectModal show={props.createProjectModalStatus} onHide={() => props.createProjectModalShow(false)} />
      <ChooseCardModal show={props.chooseCardModalStatus} onHide={() => props.chooseCardModalShow(false)} />
    </>
  )
}

const mapStateToProps = state => ({ 
    createProjectModalStatus: state.DataProvider.createProjectModalShow,
    chooseCardModalStatus: state.DataProvider.chooseCardModalStatus,
})

const mapDispatchToProps = { createProjectModalShow, chooseCardModalShow}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
