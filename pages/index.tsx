import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import Container from "@mui/material/Container";
import CountryTableBody from "../components/countryTable/CountryTableBody";
import CountryTableHead from "../components/countryTable/CountryTableHead";
import SearchBar from "../components/searchbar";
import { Country } from "../redux/types";
import BackToTop from "../components/backtotop";

export async function getStaticProps() {
	const response = await fetch("https://restcountries.com/v2/all");
	const countries = await response.json();
	return {
		props: {
			countries,
		},
	};
}

export default function Home({ countries }: { countries: Country[] }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Container className="intro" id="top">
					<h1 className="intro__header">COUNTRY DATA</h1>
					<span className="intro__description">
						Detailed info of each country
					</span>
				</Container>
				<SearchBar></SearchBar>
				<TableContainer
					component={Paper}
					elevation={0}
					sx={{ overflowX: "initial", tableLayout: "fixed" }}
				>
					<Table stickyHeader>
						<CountryTableHead></CountryTableHead>
						<CountryTableBody countries={countries}></CountryTableBody>
					</Table>
				</TableContainer>
				<BackToTop></BackToTop>
			</Layout>
		</div>
	);
}
