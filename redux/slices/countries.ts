import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../types";

export type CountriesStateType = {
	filterWord: string;
};

const initialState: CountriesStateType = {
	filterWord: "",
};

export const countriesSlice = createSlice({
	name: "favorites",
	initialState: initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<string>) => {
			state.filterWord = action.payload;
		},
	},
});

export const { setFilter } = countriesSlice.actions;

export default countriesSlice.reducer;
