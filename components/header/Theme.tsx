import { useContext } from "react";
import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DarkModeTwoTone from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoTone from "@mui/icons-material/LightModeTwoTone";
import { useDispatch } from "react-redux";
import { toggleMode } from "../../redux/slices/ui";

export default function Theme() {
	const theme = useTheme();
	const dispatch = useDispatch();

	return (
		<IconButton
			onClick={() => dispatch(toggleMode())}
			color="inherit"
			aria-label="toggle-dark-mode"
		>
			{theme.palette.mode === "dark" ? (
				<LightModeTwoTone />
			) : (
				<DarkModeTwoTone />
			)}
		</IconButton>
	);
}
