import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {FilterAreaType, FilterType} from "./types.ts";

const initialState:FilterAreaType = {

}
const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        spawnFilter(state:FilterAreaType, action:PayloadAction<FilterType>){
            state[action.payload.nameCatalog] = {
                nameCatalog: action.payload.nameCatalog,
                content: action.payload.content,
                status: action.payload.status,
                changed: ''
            }
        },
        changeStatusFilter(state:FilterAreaType, action: PayloadAction<string>){
            state[action.payload].status = !state[action.payload].status
        },
        changeItemFilter(state:FilterAreaType, action: PayloadAction<{nameCatalog: string, item: string}>){
            console.log('sda')
            state[action.payload.nameCatalog].changed = action.payload.item
        }
    }
})
export default FilterSlice.reducer
export const {spawnFilter,changeStatusFilter,changeItemFilter} = FilterSlice.actions