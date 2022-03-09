import { configureStore, combineReducers } from "@reduxjs/toolkit";
import countriesReducer from "./slices/countries";
import favoritesReducer from "./slices/favorites";
import uiReducer from "./slices/ui";

const rootReducer = combineReducers({
	favorites: favoritesReducer,
	countries: countriesReducer,
	ui: uiReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
