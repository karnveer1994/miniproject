import * as types from '../actions/actionTypes'

const initialState = {
  resultDataId: '',
  resultList: [],
  successResult: '',
  errorMessage: '',
  timestamp: new Date(),
  listings: [],
  createProjectModalShow: false,
  chooseCardModalStatus: false,
}

const DataProvider = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_PROJECT_MODAL:
      return {
        ...state,
        createProjectModalShow: action.payload
      }
    case types.CHOOSE_CARD_MODAL:
      return {
        ...state,
        chooseCardModalStatus: action.payload
      } 
    case types.POST_PROJECT_DATA_SUCCESS:
      return {
        ...state,
        createProjectModalShow: false,
        chooseCardModalStatus: true,
      }
    case types.POST_PROJECT_DATA_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        timestamp: new Date()
      }
    default:
      return state
  }
}

export default DataProvider
