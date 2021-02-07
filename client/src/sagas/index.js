import { all, takeLatest } from 'redux-saga/effects'
import { postProjectData } from './sagas'
import * as types from '../actions/actionTypes'

function* rootSaga() {
  yield all([
    takeLatest(types.POST_PROJECT_DATA, postProjectData)
  ])
}

export default rootSaga