import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './features/modalSlice.js'
import sideBarReducer from './features/sideBarSlice.js'

const store = configureStore({
    reducer: {
        modal: modalReducer,
        sideBar: sideBarReducer
    }
})

export default store