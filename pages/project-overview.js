import { Typography } from "@mui/material";
import Head from "next/head";

export default function Overview() {
	return (
		<>
			<Head>
				<style>{"body { background-color: #272727; !important; }"}</style>
			</Head>
			<Typography sx={{ color: "#FFF" }}>Test</Typography>
		</>
	);
}
