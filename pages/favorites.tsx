import React from "react";
import { useSelector } from "react-redux";
import { InitialState } from "../redux/types";
import Head from "next/head";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Container from "@mui/material/Container";

import Layout from "../components/layout/Layout";
import SearchBar from "../components/searchbar";
import BackToTop from "../components/backtotop";
import CountryTableBody from "../components/countryTable/CountryTableBody";
import CountryTableHead from "../components/countryTable/CountryTableHead";

export default function favorites() {
	const favorites = useSelector(
		(state: InitialState) => state.favorites.content
	);

	return (
		<Layout>
			<Head>
				<title>Countries listed - favorites</title>
				<meta
					name="description"
					content="Shows all favorite countries marked by user"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
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
					<CountryTableBody countries={favorites}></CountryTableBody>
				</Table>
			</TableContainer>
			<BackToTop></BackToTop>
		</Layout>
	);
}
