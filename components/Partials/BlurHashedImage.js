import { Box, CardMedia, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import theme from "../../styles/theme";

function BlurHashedImage({ src, hash, alt, height, hexagon, size, gallery, width, vertical, nonCard, team, ...props }) {
	const [imageLoaded, setImageLoaded] = useState(false);

	const isXS = useMediaQuery(theme.breakpoints.only("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.only("xsPlus"));
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

	const getBlurWidthTeam = () => {
		if (isXS) return "350px";
		if (isXSPlus) return "415px";
		if (isSM) return "475px";
		if (isSMPlus) return "600px";
		if (isMD) return "700px";
		if (isMDPlus) return "425px";
		if (isLG) return "475px";
		if (isLGPlus) return "500px";
		if (isXL) return "525px";
		return "650px";
	};

	const getBlurHeightTeam = () => {
		if (isXS) return "220px";
		if (isXSPlus) return "250px";
		if (isSM) return "280px";
		if (isSMPlus) return "300px";
		if (isMD) return "350px";
		if (isMDPlus) return "400px";
		if (isLG) return "400px";
		if (isLGPlus) return "400px";
		if (isXL) return "400px";
		return "40px";
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
						width: team
							? "100%"
							: hexagon
							? 350
							: height === "auto"
							? 300
							: height === "100%"
							? 750
							: "100%",
						height: team
							? "100%"
							: hexagon
							? 350
							: height === "auto"
							? 200
							: height === "100%"
							? getBlurHeight()
							: height,
					}}>
					<Blurhash
						hash={hash}
						width={team ? getBlurWidthTeam() : hexagon ? 350 : height === "auto" ? 300 : "100%"}
						height={
							team
								? getBlurHeightTeam()
								: hexagon
								? 350
								: height === "auto"
								? 200
								: height === "100%"
								? getBlurHeight()
								: height
						}
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
					sx={{ objectFit: "cover", marginTop: size, objectPosition: "50% 50%" }}
					image={src}
					{...props}
				/>
			)}
		</>
	);
}

export default BlurHashedImage;
