import { createSlice } from '@reduxjs/toolkit'
import { ScoresInterface } from '../../definitions';

export const scoresSlice = createSlice({
  name: 'scores',
  initialState: {
    value: {} as ScoresInterface,
  },
  reducers: {
    initScores: (state, action) => {
      state.value = action.payload;
    },
    updateScores: (state, action) => {
      state.value[action.payload.player].score = action.payload.score;
      state.value[action.payload.player].correct = action.payload.correct;
      state.value[action.payload.player].wrong = action.payload.wrong;
      state.value[action.payload.player].skipped = action.payload.skipped;
    },
  },
})

// Action creators are generated for each case reducer function
export const { initScores, updateScores } = scoresSlice.actions

export default scoresSlice.reducer