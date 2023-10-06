import { AnyAction } from "redux"
import { IStore } from "./types"

const initialState = {
  position: 0
}

const scrollPositionReducer = (state: IStore = initialState, action: AnyAction) => {
  switch(action.type) {
    case 'scroll/setScroll':
      return {
        ...state,
        position: action.payload
      }
    default:
      return state
  }
}

export default scrollPositionReducer