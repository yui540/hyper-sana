import sessionAddData from './session-add-data.js'

export default (store, next, action) => {
  if ('SESSION_ADD_DATA' === action.type) {
    sessionAddData(store, next, action)
  } else {
    next(action)
  }
}
