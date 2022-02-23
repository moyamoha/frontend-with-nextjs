import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Footer() {
	return (
		<Paper className="footer" elevation={0}>
			<Typography>
				Developed by
				<Link
					href="https://yahyasalimi.netlify.app"
					underline="hover"
					color="inherit"
					target="_blank"
				>
					{" "}
					Yahya Salimi
				</Link>
			</Typography>
		</Paper>
	);
}
