import { PaletteMode } from "@mui/material";
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

export type uiStateType = {
	mode: PaletteMode;
};

export const uiSlice = createSlice({
	name: "ui",
	initialState: {
		mode: "light",
	},
	reducers: {
		toggleMode: (state) => {
			state.mode = state.mode === "light" ? "dark" : "light";
		},
		setMode: (state, action: PayloadAction<PaletteMode>) => {
			state.mode = action.payload;
		},
	},
});

export const getModeFromStorage = () => {
	return (dispatch: Dispatch, getState) => {
		if (!getState().ui.mode) {
			const themeInStr = localStorage.getItem("theme");
			if (themeInStr) {
				dispatch(setMode(JSON.parse(themeInStr)));
			} else {
				localStorage.setItem("theme", JSON.stringify("light"));
				dispatch(setMode("light"));
			}
		}
	};
};

export const { toggleMode, setMode } = uiSlice.actions;
export default uiSlice.reducer;
