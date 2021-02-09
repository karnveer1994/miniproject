import { call, put } from 'redux-saga/effects'
import * as types from '../actions/actionTypes'
import Api from '../utils/api'

export function* postProjectData(request) {
  try {
    const { payload } = request
    const response = yield call(
      Api.post,
      "/project",
      payload
    )

    if(response.status === 200) {
      yield put({ type: types.POST_PROJECT_DATA_SUCCESS, payload: response.data })
    } else {
      yield put({ type: types.POST_PROJECT_DATA_FAILURE, error: "something went wrong.." })
    }
  } catch (error) {
    yield put({ type: types.POST_PROJECT_DATA_FAILURE, error: error.message })
  }
}

export function* getProjectData() {
  try {
    const response = yield call(
      Api.get,
      "/project"
    )
    
    if(response.status === 200) {
      yield put({ type: types.GET_PROJECT_DATA_SUCCESS, payload: response.data })
    } else {
      yield put({ type: types.GET_PROJECT_DATA_FAILURE, error: "something went wrong.." })
    }
  } catch (error) {
    yield put({ type: types.GET_PROJECT_DATA_FAILURE, error: error.message })
  }
}