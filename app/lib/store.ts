import { configureStore } from '@reduxjs/toolkit';
import playersReducer from '@/app/lib/features/players/playersSlice';
import scoresReducer from '@/app/lib/features/scores/scoresSlice'
import lifeReducer from '@/app/lib/features/life/lifeSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      players: playersReducer,
      scores: scoresReducer,
      life: lifeReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']