import { AnyAction } from "redux";
import { IStore } from "./types";

const initialState = {
  articles: []
}

const newsReducer = (state: IStore = initialState, action: AnyAction) => {
  switch(action.type) {
    case 'news/setNews':
      return {
        ...state,
        articles: [...action.payload]
      }
    default: 
      return state
  }
}

export default newsReducer