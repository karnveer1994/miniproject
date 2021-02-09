import * as types from '../actions/actionTypes'

const initialState = {
  results: [],
  errorMessage: '',
  timestamp: new Date(),
  createProjectModalShow: false,
  chooseCardModalStatus: false,
  showSectionPage: false
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
    case types.GET_PROJECT_DATA_SUCCESS:
      return {
        ...state,
        showSectionPage: true,
        chooseCardModalStatus: false,
        results: [action.payload]
      }
    case types.GET_PROJECT_DATA_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        timestamp: new Date(),
        results: []
      }
    default:
      return state
  }
}

export default DataProvider
