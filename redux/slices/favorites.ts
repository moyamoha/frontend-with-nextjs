import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../types";

export type FavsStateType = {
	isShowing: boolean;
	count: number;
	content: Country[];
};

const initialState: FavsStateType = {
	isShowing: false,
	count: 0,
	content: [],
};

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState: initialState,
	reducers: {
		showAll: (state: FavsStateType) => {
			state.isShowing = false;
		},
		setFavorites: (state: FavsStateType, action: PayloadAction<Country[]>) => {
			state.content = action.payload;
			state.count = action.payload.length;
		},
		showFavorites: (state: FavsStateType) => {
			state.isShowing = true;
		},
		sortFavorites(
			state: FavsStateType,
			action: PayloadAction<(a: Country, b: Country) => number>
		) {
			state.content.sort(action.payload);
		},
	},
});

export const { showAll, showFavorites, setFavorites, sortFavorites } =
	favoritesSlice.actions;
export default favoritesSlice.reducer;
