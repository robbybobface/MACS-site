import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import "../styles/globals.css";
import Loading from "../components/Partials/Loading";

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>MACS</title>
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<Component {...pageProps} />
			{/* <Loading /> */}
		</ThemeProvider>
	);
};
export default MyApp;
