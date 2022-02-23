import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { InitialState } from "../../redux/types";
import CountryTableHead from "./CountryTableHead";
import CountryTableBody from "./CountryTableBody";

export default function CountryTable() {
	const isLoading = useSelector(
		(state: InitialState) => state.countries.loading
	);

	return (
		<>
			<TableContainer
				component={Paper}
				elevation={0}
				sx={{ overflowX: "initial", tableLayout: "fixed" }}
			>
				<Table stickyHeader>
					<CountryTableHead></CountryTableHead>
					<CountryTableBody></CountryTableBody>
				</Table>
			</TableContainer>
			{isLoading ? (
				<Typography sx={{ mt: 5, textAlign: "center", width: "100%" }}>
					Loading...
				</Typography>
			) : (
				<></>
			)}
		</>
	);
}
