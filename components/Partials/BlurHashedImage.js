import { Box, CardMedia, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import theme from "../../styles/theme";

function BlurHashedImage({ src, hash, alt, height, hexagon, size, gallery, width, vertical, nonCard, ...props }) {
	const [imageLoaded, setImageLoaded] = useState(false);

	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSMMinus = useMediaQuery(theme.breakpoints.down("smMinus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isSMPlus = useMediaQuery(theme.breakpoints.down("smPlus"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isLGPlus = useMediaQuery(theme.breakpoints.down("lgPlus"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const getBlurHeight = () => {
		if (isXS) return vertical ? "580px" : "280px";
		if (isXSPlus) return vertical ? "580px" : "280px";
		if (isSM) return vertical ? "650px" : "350px";
		if (isSMPlus) return vertical ? "650px" : "420px";
		if (isMD) return vertical ? "650px" : "500px";
		if (isMDPlus) return "400px";
		if (isLG) return "400px";
		if (isLGPlus) return "400px";
		if (isXL) return "400px";
		return "400px";
	};

	const wait = () => {
		return new Promise((resolve) => {
			setTimeout(resolve, 1000);
		});
	};

	useEffect(() => {
		const img = new Image();
		img.onload = () => (gallery ? wait(1000).then(() => setImageLoaded(true)) : setImageLoaded(true));
		img.src = src;
	}, [src]);

	return (
		<>
			{!imageLoaded ? (
				<Box
					className='noselect'
					sx={{
						display: "flex",
						width: hexagon ? 350 : height === "auto" ? 300 : height === "100%" ? 750 : "100%",
						height: hexagon ? 350 : height === "auto" ? 200 : height === "100%" ? getBlurHeight() : height,
					}}>
					<Blurhash
						hash={hash}
						width={hexagon ? 350 : height === "auto" ? 300 : "100%"}
						height={hexagon ? 350 : height === "auto" ? 200 : height === "100%" ? getBlurHeight() : height}
						resolutionX={32}
						resolutionY={32}
						punch={1}
					/>
					<Box className='skeleton-loading' />
				</Box>
			) : nonCard ? (
				<Box
					component='img'
					loading='lazy'
					title={alt}
					alt={alt}
					height={height}
					width={width ?? "auto"}
					sx={{ objectFit: "cover", marginTop: size }}
					src={src}
					{...props}
				/>
			) : (
				<CardMedia
					className='noselect'
					component='img'
					loading='lazy'
					title={alt}
					alt={alt}
					height={height}
					width={width ?? "auto"}
					sx={{ objectFit: "cover", marginTop: size }}
					image={src}
					{...props}
				/>
			)}
		</>
	);
}

export default BlurHashedImage;
