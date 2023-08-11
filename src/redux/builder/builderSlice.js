import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    components: {
        processor: {},
        motherboard: {},
        RAM: {},
        power_supply: {},
        storage_device: {},
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
            const { category, component } = action.payload;
            state.components[category] = component;
        },
        removeComponent: (state, action) => {
            const { category } = action.payload;
            state.components[category] = {};
        }
    }
})


export default builderSlice.reducer;
export const { selectComponent, removeComponent } = builderSlice.actions;