import { createSlice } from '@reduxjs/toolkit'

export const playersSlice = createSlice({
  name: 'players',
  initialState: {
    value: [],
  },
  reducers: {
    addPlayers: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addPlayers } = playersSlice.actions

export default playersSlice.reducer