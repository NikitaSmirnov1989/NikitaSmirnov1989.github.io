import { configureStore } from '@reduxjs/toolkit'
import listSlice from './slices/listSlice';

export const store = configureStore({
  reducer: {
    list: listSlice,
  },
})

/*Тип стейта*/
export type RootState = ReturnType<typeof store.getState>
/*Тип диспатча*/ 
export type AppDispatch = typeof store.dispatch