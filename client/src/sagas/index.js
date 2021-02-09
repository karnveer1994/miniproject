import { all, takeLatest } from 'redux-saga/effects'
import { postProjectData, getProjectData } from './sagas'
import * as types from '../actions/actionTypes'

function* rootSaga() {
  yield all([
    takeLatest(types.POST_PROJECT_DATA, postProjectData), takeLatest(types.GET_PROJECT_DATA, getProjectData)
  ])
}

export default rootSaga