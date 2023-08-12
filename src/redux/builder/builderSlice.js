import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    components: {
        processor: {},
        motherboard: {},
        RAM: {},
        ["power supply"]: {},
        storage : {},
        monitor: {}
    },
    isLoading: false,
    isError: false,
    error: ""
}

const builderSlice = createSlice({
    name: "builder",
    initialState,
    reducers:  {
        selectComponent: (state, action) => {
            const { category } = action.payload;
            state.components[category] = action.payload;
        },
        removeComponent: (state, action) => {
            const { category } = action.payload;
            state.components[category] = {};
        }
    }
})


export default builderSlice.reducer;
export const { selectComponent, removeComponent } = builderSlice.actions;
