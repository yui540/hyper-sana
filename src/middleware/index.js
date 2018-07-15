import sessionAddData from './session-add-data'
import uiCommandExec from './ui-command-exec'

export default (store, next, action) => {
  if ('SESSION_ADD_DATA' === action.type) {
    sessionAddData(store, next, action)
  } else if ('UI_COMMAND_EXEC' === action.type) {
    uiCommandExec(store, next, action)
  } else {
    next(action)
  }
}
