import React, { createContext, useState, useMemo, useEffect } from "react";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import Paper from "@mui/material/Paper";
import Header from "../header";
import Footer from "../footer";

export const ThemeContext = createContext({ toggleColorMode: () => {} });

export default function Layout({ children }) {
	const [mode, setMode] = useState<PaletteMode>("light");

	useEffect(() => {
		const themeInStr = localStorage.getItem("theme");
		if (themeInStr) {
			setMode(JSON.parse(themeInStr));
		} else {
			localStorage.setItem("theme", JSON.stringify("light"));
			setMode("light");
		}
	}, [setMode]);

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => {
					if (prevMode === "light") {
						localStorage.setItem("theme", JSON.stringify("dark"));
						return "dark";
					} else {
						localStorage.setItem("theme", JSON.stringify("light"));
						return "light";
					}
				});
			},
		}),
		[]
	);

	const theme = createTheme({
		palette: {
			mode: mode,
		},
	});

	return (
		<ThemeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Paper className="App" elevation={0}>
					<Paper className="App__content" elevation={0}>
						<Header></Header>
						{children}
						<Footer></Footer>
					</Paper>
				</Paper>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
