import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux toolkit/reducer/Count";


export default configureStore({
    reducer: {
        counter: counterReducer
    },
})