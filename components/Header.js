import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { MACSLogoWhite } from "../assets/macs_logo_white";
import theme from "../styles/theme";

const Header = ({ router }) => {
	return (
		<Box
			role='header'
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				zIndex: 99999999,
				background: "linear-gradient(to bottom, rgba( 255, 255, 255, 0.2 ), rgba( 255, 255, 255, 0 ))",
				boxShadow: "0 2px 8px 0 rgba( 0, 0, 0, 0.35 )",
				backdropFilter: "blur( 7px )",
				WebkitBackdropFilter: "blur( 7px )",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "flex-start",
				width: "100vw",
			}}>
			<Box
				role='navigation'
				aria-label='Go home'
				sx={{
					position: "relative",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					left: "5%",
					"&:hover": {
						cursor: "pointer",
					},
				}}
				onClick={() => router.push("/")}>
				<MACSLogoWhite height={useMediaQuery(theme.breakpoints.down("md")) ? 45 : 60} />
				<Typography
					role='navigation'
					aria-label='MACS Brand Go Home'
					fontFamily='bitcount-mono-single-line-ci'
					fontSize={{ xs: "2.5rem", md: "3.5rem" }}
					lineHeight={1.4}
					color='white'
					ml={2}
					fontWeight={300}
					sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
					MACS
				</Typography>
			</Box>
		</Box>
	);
};

export default Header;
