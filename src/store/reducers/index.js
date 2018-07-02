import { combineReducers } from 'redux'
import categoryChange from './changeCategory'
import todo from './todo'

const reducers = combineReducers({
  categoryChange,
  todo,
})
export default reducers