import AuthPopupSlice from '../../widgets/accountPage/AuthPopup/store/authPopup.ts'
import {configureStore} from "@reduxjs/toolkit";
import appSlice from "../../widgets/accountPage/store/appSlice.ts";
import NavigationSlice from '../../widgets/CatalogPage/navigation/store/NavigationSlice.ts'
import FilterSlice from "../../widgets/CatalogPage/filter/store/FilterSlice.ts";
import basketSlice from '../../widgets/BasketPage/BasketStore/store.ts'

export const store = configureStore(
    {
        reducer: {
            appSlice,
            AuthPopupSlice,
            NavigationSlice,
            FilterSlice,
            basketSlice
        }
    }
)
export type RootState = ReturnType<typeof store.getState>