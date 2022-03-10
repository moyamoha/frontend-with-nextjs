import { useCallback } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Favorites from "./Favorites";
import Theme from "./Theme";

export default function Index() {
	const dispatch = useDispatch();
	const router = useRouter();
	const navigateBackToHome = useCallback(() => {
		router.push("/");
	}, [router]);

	return (
		<Paper className="header" elevation={0}>
			<Typography sx={{ cursor: "pointer" }} onClick={navigateBackToHome}>
				Countries Listed
			</Typography>
			<section className="header__navigation">
				<IconButton
					onClick={navigateBackToHome}
					color="inherit"
					aria-label="go-to-home"
				>
					<HomeIcon></HomeIcon>
				</IconButton>
				<Favorites></Favorites>
				<Theme></Theme>
			</section>
		</Paper>
	);
}
