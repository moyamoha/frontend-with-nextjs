import React, { createContext, useState, useMemo, useEffect } from "react";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import Paper from "@mui/material/Paper";
import Header from "../header";
import Footer from "../footer";
import { useDispatch, useSelector } from "react-redux";
import { getModeFromStorage } from "../../redux/slices/ui";
import { InitialState } from "../../redux/types";

export default function Layout({ children }) {
	const mode = useSelector((state: InitialState) => state.ui.mode);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getModeFromStorage());
	}, [dispatch]);

	const theme = createTheme({
		palette: {
			mode: mode,
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Paper className="App" elevation={0}>
				<Paper className="App__content" elevation={0}>
					<Header></Header>
					{children}
					<Footer></Footer>
				</Paper>
			</Paper>
		</ThemeProvider>
	);
}
