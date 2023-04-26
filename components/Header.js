import React from "react";
import { Box, Typography } from "@mui/material";
import { MACSLogoWhite } from "../assets/macs_logo_white";

const Header = ({ router }) => {
	return (
		<Box
			sx={{
				position: "absolute",
				// top: "2.5%",
				// left: "6%",
				background: "linear-gradient(to bottom, rgba( 255, 255, 255, 0.2 ), rgba( 255, 255, 255, 0 ))",
				boxShadow: "0 2px 8px 0 rgba( 0, 0, 0, 0.35 )",
				backdropFilter: "blur( 7px )",
				WebkitBackdropFilter: "blur( 7px )",
				zIndex: 1,
				// pl: 10,
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "flex-start",
				width: "100vw",
			}}>
			<Box
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
				<MACSLogoWhite height={60} />
				<Typography
					fontFamily='bitcount-mono-single-line-ci'
					fontSize='3.5rem'
					lineHeight={1.4}
					color='white'
					ml={2}
					fontWeight={300}>
					MACS
				</Typography>
			</Box>
		</Box>
	);
};

export default Header;
