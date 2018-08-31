import types from '../types'

const initialState = {
  counter: 0,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case types.AppActionType.COUNTER_INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      }
    case types.AppActionType.COUNTER_DOUBLE_ASYNC:
      return {
        ...state,
        counter: action.payload * 2,
      }
    default:
      return {
        ...state
      }
  }
}
