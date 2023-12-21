import { configureStore } from "@reduxjs/toolkit";
import trainerNameSlice from "./trainerName.slice";

export default configureStore({
    reducer: {
        trainerName: trainerNameSlice,
    },
})