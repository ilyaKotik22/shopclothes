import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type initialStateNavigation ={
    changeNavigation:string
}

const initialState:initialStateNavigation = {
    changeNavigation: 'Верхняя одежда'
}
const NavigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers:{
        changeNavigation(state:initialStateNavigation, action: PayloadAction<string>){
            state.changeNavigation = action.payload
        }
    }
})
export default NavigationSlice.reducer
export const {changeNavigation} = NavigationSlice.actions