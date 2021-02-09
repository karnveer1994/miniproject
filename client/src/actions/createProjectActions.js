import * as types from './actionTypes'

export const postProjectData = payload => ({
  type: types.POST_PROJECT_DATA,
  payload
})

export const getProjectData = () => ({
  type: types.GET_PROJECT_DATA
})

export const createProjectModalShow = payload => ({
  type: types.CREATE_PROJECT_MODAL,
  payload
})

export const chooseCardModalShow = payload => ({
  type: types.CHOOSE_CARD_MODAL,
  payload
})