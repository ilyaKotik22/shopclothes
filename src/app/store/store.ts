import AuthPopupSlice from '../../widgets/accountPage/AuthPopup/store/authPopup.ts'
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore(
    {
        reducer: {
            AuthPopupSlice
        }
    }
)
export type RootState = ReturnType<typeof store.getState>