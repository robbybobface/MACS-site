import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Container } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import { ParallaxLayer } from "@react-spring/parallax";
import { Parallax } from "@react-spring/parallax";
import { BarLoader } from "react-spinners";

function Loading() {
	const router = useRouter();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = (url) => url !== router.asPath && setLoading(true);
		const handleComplete = (url) => url === router.asPath && setLoading(false);

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
		};
	});

	return (
		loading && (
			<>
				<Parallax className={`${styles.parallaxContainer} parallax-scroll`} pages={1}>
					<ParallaxLayer offset={0}>
						<div className={`${styles.slopeEndTop} ${styles.black}`} />
					</ParallaxLayer>
					<ParallaxLayer offset={0}>
						<div className={styles.slopeBeginStart} />
					</ParallaxLayer>
					<ParallaxLayer offset={0}>
						<div className={`${styles.slopeEnd} ${styles.black}`} />
					</ParallaxLayer>
					<ParallaxLayer
						className={`${styles.text} ${styles.number} noselect`}
						offset={0}
						style={{ zIndex: 9999 }}>
						<Container
							maxWidth='xl'
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<BarLoader color='#FFFFFF' loading={true} width={100} aria-label='Loading Spinner' />
						</Container>
					</ParallaxLayer>
				</Parallax>
			</>
		)
	);
}

export default Loading;
