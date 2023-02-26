import { createSlice} from "@reduxjs/toolkit";

const defState = false;

const modeSlice = createSlice({
    initialState: defState,
    name: 'mode',
    reducers: {
        changeMode(state) {
            return !state;
        }
    }
})

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;