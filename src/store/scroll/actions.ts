import { IStore } from "./types"

export const setScrollPosition = (position : IStore['position']) => {
  return {
    type: 'scroll/setScroll',
    payload: position
  }
}