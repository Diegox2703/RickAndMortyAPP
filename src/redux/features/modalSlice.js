import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        characters: {}
    },
    reducers: {
        toggleModal: ( state, action ) => {
            state.isOpen = !state.isOpen
            state.characters = action.payload
        } 
    }
})

export const { toggleModal } = modalSlice.actions
export default modalSlice.reducer