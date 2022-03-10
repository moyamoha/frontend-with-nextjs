import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../types";

export type FavsStateType = {
	count: number;
	content: Country[];
};

const initialState: FavsStateType = {
	count: 0,
	content: [],
};

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState: initialState,
	reducers: {
		setFavorites: (state: FavsStateType, action: PayloadAction<Country[]>) => {
			state.content = action.payload;
			state.count = action.payload.length;
		},
		sortFavorites(
			state: FavsStateType,
			action: PayloadAction<(a: Country, b: Country) => number>
		) {
			state.content.sort(action.payload);
		},
	},
});

export const { setFavorites, sortFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
