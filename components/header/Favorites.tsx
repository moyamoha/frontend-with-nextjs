import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { InitialState } from "../../redux/types";

export default function Favorites() {
	const countOfFavs = useSelector(
		(state: InitialState) => state.favorites.count
	);
	const router = useRouter();

	const gotoFavoritesPage = useCallback(() => {
		router.push("/favorites");
	}, [router]);

	return (
		<IconButton
			onClick={gotoFavoritesPage}
			color="inherit"
			aria-label="show-favorites"
		>
			<Badge badgeContent={countOfFavs} color="info">
				<FavoriteIcon></FavoriteIcon>
			</Badge>
		</IconButton>
	);
}
