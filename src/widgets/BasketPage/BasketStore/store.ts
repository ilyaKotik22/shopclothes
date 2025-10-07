import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type initialStateBasket = {
    items: {}
}

const initialState:initialStateBasket = {
    items: {}
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers:{
        getFromFirebase(state:initialStateBasket ,action:PayloadAction){
            state.items = action.payload
        },
        updateBasket(state:initialStateBasket, action:PayloadAction<{id: string}>){
            const newKeys = Object.keys(state.items).filter(el=> el !== action.payload.id)
            const newBasket = {} 
            console.log(newKeys)
            newKeys.forEach(el=> newBasket[el] = state.items[el])
            state.items = newBasket
        }
    }
})
export default basketSlice.reducer
export const {getFromFirebase,updateBasket} = basketSlice.actions