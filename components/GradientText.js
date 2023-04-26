import React from "react";
import { Box, Typography } from "@mui/material";

const GradientText = ({ text, gradient, ...props }) => {
	return (
		<Box sx={{ position: "relative" }}>
			<Typography
				fontFamily={"Gilroy-Heavy"}
				fontSize='8rem'
				sx={{
					position: "relative",
					background: "rgb(199,14,81)",
					backgroundImage: gradient,
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
				}}
				{...props}>
				{text}
			</Typography>
			<Typography
				fontFamily={"Gilroy-Heavy"}
				fontSize='8rem'
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					WebkitTextFillColor: "transparent",
					textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
					zIndex: -1,
				}}
				{...props}>
				{text}
			</Typography>
		</Box>
	);
};

export default GradientText;
