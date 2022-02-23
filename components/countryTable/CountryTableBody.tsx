import { useMemo, useEffect } from "react";
import { TableBody } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { getFavsFromStorage } from "../../redux/thunk-actions";
import CountryRow from "./CountryRow";
import { Country } from "../../redux/types";
import { InitialState } from "../../redux/types";

type TBodyPropType = {
	countries: Country[];
};

export default function CountryTableBody({ countries }: TBodyPropType) {
	console.log(countries);
	const favorites = useSelector((state: InitialState) => state.favorites);
	const filterWord = useSelector(
		(state: InitialState) => state.countries.filterWord
	);
	const dispatch = useDispatch();

	const data = useMemo(() => {
		return (favorites.isShowing ? favorites.content : countries).filter(
			(c: Country) =>
				c.name?.includes(filterWord) ||
				c.region?.includes(filterWord) ||
				c.capital?.includes(filterWord)
		);
	}, [favorites, countries, filterWord]);

	useEffect(() => {
		dispatch(getFavsFromStorage());
	}, []);
	return (
		<>
			{data.length > 0 ? (
				<TableBody sx={{ fontSize: "large" }}>
					{data.map((c: Country) => (
						<CountryRow country={c} key={c.name}></CountryRow>
					))}
				</TableBody>
			) : (
				<></>
			)}
		</>
	);
}
