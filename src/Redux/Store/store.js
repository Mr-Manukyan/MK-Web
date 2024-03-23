import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { gameReducer } from '../Reducers/GameReducer';


const rootReducer = combineReducers({
  gamePage: gameReducer,

})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

//@ts-ignore
window.store = store


