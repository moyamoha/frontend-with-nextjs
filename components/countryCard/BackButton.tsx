import { useRouter } from "next/router";
import Button from "@mui/material/Button";

export default function BackButton() {
	const router = useRouter();
	return (
		<Button
			variant="contained"
			onClick={() => router.push("/home")}
			sx={{ mt: 1, width: "100%" }}
			size="large"
			color="success"
		>
			Back
		</Button>
	);
}
