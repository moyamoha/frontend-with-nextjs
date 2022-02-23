import { Dispatch } from "@reduxjs/toolkit";
import { setFavorites } from "./slices/favorites";
import { Country } from "./types";

export function getFavsFromStorage() {
	return (dispatch: Dispatch) => {
		const favsStr = localStorage.getItem("favorites");
		if (favsStr) {
			dispatch(setFavorites(JSON.parse(favsStr)));
		} else {
			localStorage.setItem("favorites", JSON.stringify([]));
		}
	};
}

export function addFavorite(favorite: Country) {
	return (dispatch: Dispatch) => {
		const favsStr = localStorage.getItem("favorites");

		if (favsStr) {
			const favorites = JSON.parse(favsStr);
			favorites.push(favorite);
			localStorage.setItem("favorites", JSON.stringify(favorites));
			dispatch(setFavorites(favorites));
		}
	};
}

export function removeFavorite(favorite: Country) {
	return (dispatch: Dispatch) => {
		const favsStr = localStorage.getItem("favorites");
		if (favsStr) {
			const favorites = JSON.parse(favsStr);
			const indexOfFav = favorites
				.map((f: Country) => f.name)
				.indexOf(favorite.name);
			favorites.splice(indexOfFav, 1);
			localStorage.setItem("favorites", JSON.stringify(favorites));
			dispatch(setFavorites(favorites));
		}
	};
}
