
import { configureStore } from '@reduxjs/toolkit'
import builderReducer from "@/redux/builder/builderSlice"

export const store = configureStore({
  reducer: {
    builder: builderReducer
  },
})