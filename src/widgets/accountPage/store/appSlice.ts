import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ActionUser, InitialStateApp} from "./types.ts";

const initialState:InitialStateApp = {
    user: {
        login: '',
        password: ''
    }
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers:{
        updateUser(state:InitialStateApp, action:PayloadAction<ActionUser>){
            state.user.login = action.payload.login
            state.user.password = action.payload.password
        }
    }

})
export default appSlice.reducer
export const {updateUser} = appSlice.actions