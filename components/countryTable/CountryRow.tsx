import Link from "next/link";
import Image from "next/image";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

import Heart from "../favoriteCountry";
import { Country } from "../../redux/types";

type CountryRowProps = {
	country: Country;
};

export default function CountryRow({ country }: CountryRowProps) {
	return (
		<TableRow>
			<TableCell>
				<img
					src={country.flag}
					alt={`flag of ${country.name}`}
					width="40px"
					height="30px"
				></img>
			</TableCell>
			<TableCell>
				<Link href={`/${country.name}`} passHref>
					<MuiLink className="country-link">{country.name}</MuiLink>
				</Link>
			</TableCell>
			<TableCell>{country.region}</TableCell>
			<TableCell>{country.capital}</TableCell>
			<TableCell>{country.population}</TableCell>
			<TableCell align="center">
				<Heart country={country}></Heart>
			</TableCell>
		</TableRow>
	);
}
