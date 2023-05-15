import React from "react";
import { Box, Typography } from "@mui/material";

const ImageCaptionAlt = ({ caption, light, center }) => {
	return (
		<Box
			sx={{
				borderRadius: 2,
				px: 1,
				py: 0.75,
				backgroundColor: light ? "white" : "#70828F",
				display: "flex",
				position: "absolute",
				bottom: -25,
				left: "50%",
				WebkitTransform: "translateX(-50%)",
				transform: "translateX(-50%)",
			}}>
			<Typography color={light ? "backgroundBlack.main" : "white"} fontWeight='bold' fontSize={"16px"}>
				{caption}
			</Typography>
		</Box>
	);
};

export default ImageCaptionAlt;
