import * as types from './actionTypes'

export const postProjectData = payload => ({
  type: types.POST_PROJECT_DATA,
  payload
})

export const fetchResultDataIdSuccess = payload => ({
  type: types.POST_PROJECT_DATA_SUCCESS,
  payload
})

export const fetchResultDataIdFailure = payload => ({
  type: types.POST_PROJECT_DATA_FAILURE,
  payload
})

export const createProjectModalShow = payload => ({
  type: types.CREATE_PROJECT_MODAL,
  payload
})

export const chooseCardModalShow = payload => ({
  type: types.CHOOSE_CARD_MODAL,
  payload
})