import { createSlice } from '@reduxjs/toolkit'

const InputReducer = createSlice({
  initialState: {
    value: 0,
    firstCurrency: '-',
    secondCurrency: '-'
  },
  name: 'inputReducer',
  reducers: {
    setValueToConvert (state, action) {
      state.value = action.payload
    },
    setFirstCurrency (state, action) {
      state.firstCurrency = action.payload
    },
    setSecondCurrency (state, action) {
      state.secondCurrency = action.payload
    },
  }
})

export default InputReducer.reducer
export const { setFirstCurrency, setSecondCurrency, setValueToConvert } = InputReducer.actions
