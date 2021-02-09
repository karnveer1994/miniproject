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
import SectionPage from './container/SectionPage';

function App(props) {
  return (
    <>
      {
        !props.showSectionPage &&
        <Button className='createProjectButton' variant="primary" onClick={() => props.createProjectModalShow(true)}>
          Create Project
        </Button>
      }
      <CreateProjectModal show={props.createProjectModalStatus} onHide={() => props.createProjectModalShow(false)} />
      <ChooseCardModal show={props.chooseCardModalStatus} onHide={() => props.chooseCardModalShow(false)} />
      {
        props.showSectionPage &&
        <SectionPage />
      }
    </>
  )
}

const mapStateToProps = state => ({
  createProjectModalStatus: state.DataProvider.createProjectModalShow,
  chooseCardModalStatus: state.DataProvider.chooseCardModalStatus,
  results: state.DataProvider.results,
  showSectionPage: state.DataProvider.showSectionPage
})

const mapDispatchToProps = { createProjectModalShow, chooseCardModalShow }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
