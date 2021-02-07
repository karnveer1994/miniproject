import { call, put } from 'redux-saga/effects'
import * as types from '../actions/actionTypes'
import Api from '../utils/api'

export function* postProjectData(request) {
  try {
    const { payload } = request
    // const response = yield call(
    //   Api.post,
    //   "/posts/",
    //   payload
    // )
    if(true) {
      yield put({ type: types.POST_PROJECT_DATA_SUCCESS, 'payload': 'response.data.result' })
    } else {
      yield put({ type: types.POST_PROJECT_DATA_FAILURE, error: "response.data.error" })
    }
  } catch (error) {
    yield put({ type: types.POST_PROJECT_DATA_FAILURE, error: error.message })
  }
}