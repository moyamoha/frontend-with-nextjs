import { configureStore, combineReducers } from "@reduxjs/toolkit";
import countriesReducer from "./slices/countries";
import favoritesReducer from "./slices/favorites";

const rootReducer = combineReducers({
	favorites: favoritesReducer,
	countries: countriesReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
