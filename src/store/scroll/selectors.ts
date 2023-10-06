import { IStore } from "./types"

export const selectScroll = (state: {scrollPositionReducer: IStore})  => state.scrollPositionReducer.position