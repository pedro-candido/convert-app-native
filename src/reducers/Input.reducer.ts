import { createSlice } from '@reduxjs/toolkit'

const InputReducer = createSlice({
  initialState: {
    value: 0,
    currency: ''
  },
  name: 'inputReducer',
  reducers: {
    setValue (state, action) {
      state.value = action.payload
    },
    setCurrency (state, action) {
      state.value = action.payload
    }
  }
})

export default InputReducer.reducer
export const { setCurrency, setValue } = InputReducer.actions
