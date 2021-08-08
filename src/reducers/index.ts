import InputReducer from "./Input.reducer";
import { combineReducers } from '@reduxjs/toolkit'

export { setFirstCurrency, setSecondCurrency, setValueToConvert } from './Input.reducer'

const reducer = combineReducers({ InputReducer })

export default reducer