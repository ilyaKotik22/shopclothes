import {createSlice} from "@reduxjs/toolkit";
import type {InitialAuthPopup} from "./types.ts";

const initialState:InitialAuthPopup = {
    AuthPopup: false
}
const AuthPopupSlice = createSlice({
    name: 'authPopup',
    initialState,
    reducers: {
        ChangeStatus(state:InitialAuthPopup){
            state.AuthPopup = !state.AuthPopup
        }
    }
})
export default AuthPopupSlice.reducer
export const {ChangeStatus} = AuthPopupSlice.actions