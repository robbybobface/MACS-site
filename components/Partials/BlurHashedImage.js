import { Box, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function BlurHashedImage({ src, hash, alt, height, hexagon, ...props }) {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.onload = () => setImageLoaded(true);
		img.src = src;
	}, [src]);

	return (
		<>
			{!imageLoaded ? (
				<Box
					sx={{
						display: "flex",
						width: hexagon ? 350 : height === "auto" ? 300 : "100%",
						height: hexagon ? 350 : height === "auto" ? 200 : height,
					}}>
					<Blurhash
						hash={hash}
						width={hexagon ? 350 : height === "auto" ? 300 : "100%"}
						height={hexagon ? 350 : height === "auto" ? 200 : height}
						resolutionX={32}
						resolutionY={32}
						punch={1}
					/>
					<Box className='skeleton-loading' />
				</Box>
			) : (
				<CardMedia
					component='img'
					loading='lazy'
					title={alt}
					alt={alt}
					height={height}
					sx={{ objectPosition: "50% 60%", objectFit: "cover" }}
					image={src}
					{...props}
				/>
			)}
		</>
	);
}

export default BlurHashedImage;
