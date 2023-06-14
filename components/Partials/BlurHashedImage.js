import { Box, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function BlurHashedImage({ src, hash, alt, height, hexagon, size, ...props }) {
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
					className='noselect'
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
					className='noselect'
					component='img'
					loading='lazy'
					title={alt}
					alt={alt}
					height={height}
					sx={{ objectPosition: "50% 50%", objectFit: "cover", marginTop: size }}
					image={src}
					{...props}
				/>
			)}
		</>
	);
}

export default BlurHashedImage;
