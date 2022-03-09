import React from "react";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

import useCountry from "../custom-hooks/useCountry";
import { Country } from "../redux/types";
import Layout from "../components/layout/Layout";
import CountryCard from "../components/countryCard";

export default function Detail() {
	const router = useRouter();
	const { name } = router.query;
	const [error, country] = useCountry(name as string); // Believe me typescript, I know what I do, don't I?
	return (
		<Layout>
			<Paper className="country-page" elevation={0}>
				{country ? (
					<CountryCard country={country}></CountryCard>
				) : (
					<Typography sx={{ width: "100%", textAlign: "center" }}>
						Loading...
					</Typography>
				)}
			</Paper>
		</Layout>
	);
}
