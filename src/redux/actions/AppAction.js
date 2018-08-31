import types from '../types'

export function increment (value = 1) {
  return {
    type: types.AppActionType.COUNTER_INCREMENT,
    payload: value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type: types.AppActionType.COUNTER_DOUBLE_ASYNC,
          payload: getState().AppReducer.counter
        })
        resolve()
      }, 200)
    })
  }
}
