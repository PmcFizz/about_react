import { combineReducers } from 'redux'
import { CHANGE_CATEGORY } from 'src/store/actions/changeCategory'
import sideMenuData from 'container/app/sideMenuData'

function headNav(state='a', action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return action.categoryNum
    default:
      return state
  }
}

function sideMenu(state={}, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return JSON.parse(JSON.stringify(sideMenuData[action.categoryNum]))
    default:
      return state
  }
}

const categoryChange = combineReducers({
  headNav,
  sideMenu
})

export default categoryChange