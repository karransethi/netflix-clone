import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import userReducer from "../features/user/userSlice"

//setting of redux aka boiler plate
export default configureStore({
    reducer:{
        user: userReducer
    },
    middleware: getDefaultMiddleware({
       serializableCheck:false,
    }),
});
