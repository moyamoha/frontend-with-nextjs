import { PaletteMode } from "@mui/material";
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

export type uiStateType = {
	mode: PaletteMode;
	firstTime: Boolean;
};

export const uiSlice = createSlice({
	name: "ui",
	initialState: {
		mode: "light",
		firstTime: true,
	},
	reducers: {
		toggleMode: (state) => {
			state.mode = state.mode === "light" ? "dark" : "light";
			localStorage.setItem("theme", JSON.stringify(state.mode));
		},
		setMode: (state, action: PayloadAction<PaletteMode>) => {
			state.mode = action.payload;
			localStorage.setItem("theme", JSON.stringify(state.mode));
		},
		setFirstTimeToFalse: (state) => {
			state.firstTime = false;
		},
	},
});

export const getModeFromStorage = () => {
	return (dispatch: Dispatch, getState) => {
		if (getState().ui.firstTime) {
			const themeInStr = localStorage.getItem("theme");
			if (themeInStr) {
				dispatch(setMode(JSON.parse(themeInStr)));
			} else {
				localStorage.setItem("theme", JSON.stringify("light"));
				dispatch(setMode("light"));
			}
			dispatch(setFirstTimeToFalse());
		}
	};
};

export const { toggleMode, setMode, setFirstTimeToFalse } = uiSlice.actions;
export default uiSlice.reducer;
