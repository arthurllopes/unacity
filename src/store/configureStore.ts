import {combineReducers, configureStore} from '@reduxjs/toolkit'
import Category from './Category'

const reducer = combineReducers({Category})
const store = configureStore({reducer})
export type RootState = ReturnType<typeof reducer>;

export default store;