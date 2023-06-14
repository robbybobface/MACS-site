import React from "react";
import { Box, Typography } from "@mui/material";

const ImageCaption = ({ caption, light, center }) => {
	return (
		<Box
			sx={{
				borderRadius: 2,
				px: 1,
				py: 0.75,
				backgroundColor: light ? "white" : "#70828F",
				display: "flex",
				position: "absolute",
				bottom: -10,
				left: 10,
				zIndex: 100,
			}}>
			<Typography color={light ? "backgroundBlack.main" : "white"} fontWeight='bold' fontSize={"12px"}>
				{caption}
			</Typography>
		</Box>
	);
};

export default ImageCaption;
