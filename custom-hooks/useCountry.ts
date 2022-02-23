// This hook is used to fetch one specific country
import { useState, useEffect } from "react";
import { Country } from "../redux/types";

export default function useCountry(countryName: string): [string, Country] {
	const [country, setCountry] = useState<Country>();
	const [error, setError] = useState("");

	useEffect(() => {
		const abortController = new AbortController();
		fetch(`https://restcountries.com/v2/name/${countryName}`, {
			method: "GET",
			signal: abortController.signal,
		})
			.then((res) => res.json())
			.then((data) => setCountry(data[0]))
			.catch((err) => {
				setError(err);
			});

		return () => {
			abortController.abort();
		};
	}, [countryName]);

	return [error, country];
}
