import { createSlice } from '@reduxjs/toolkit'
import { LifeInterface } from '../../definitions';

export const lifeSlice = createSlice({
  name: 'life',
  initialState: {
    value: {} as LifeInterface,
  },
  reducers: {
    initLife: (state, action) => {
      state.value = action.payload;
    },
    updateLife: (state, action) => {
      const life = action.payload.life as 'life1'|'life2'|'life3'|'life4';
      state.value[action.payload.player][life] = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { initLife, updateLife } = lifeSlice.actions

export default lifeSlice.reducer