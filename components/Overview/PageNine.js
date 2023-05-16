import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { MACSLogoBlue } from "../../assets/macs_logo_light_blue";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";

const PageNine = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md"))
		? 850 / screen.height >= 1
			? 850 / screen.height
			: 1
		: 1;
	console.log(newFactor);
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
				<div
					className={
						useMediaQuery(theme.breakpoints.down("md")) ? styles.slopeBeginMobileNine : styles.slopeBegin
					}
				/>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			<ParallaxLayer
				className={`${styles.text} ${styles.number} noselect`}
				onClick={onClick}
				offset={offset}
				speed={0.3}
				style={{ zIndex: 9999 }}>
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						alignItems: "flex-start",
						justifyContent: "flex-start",
						// zIndex: 1000000,
						minHeight: "80vh",
					}}>
					<Grid container spacing={2}>
						<Grid item xs={12} sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
							<Box
								// className={boxStyles.whiteBox}
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									px: 8,
									py: 2,
								}}>
								<GradientText
									text='Beyond'
									gradient={
										"linear-gradient(145deg, rgba(54,133,173,1) 0%, rgba(116,182,158,1) 100%)"
									}
									my={-5}
									fontSize={{ xs: "3.5rem", md: "6rem" }}
									onClick={onClick}
								/>
								<Typography
									color='white'
									fontFamily={"bitcount-mono-single-line-ci"}
									fontSize={{ xs: "4.5rem", md: "7rem" }}
									mb={-3}
									mt={-4}
									ml={{ xs: 2, md: 4 }}
									onClick={onClick}
									sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
									MACS
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
				<Box
					sx={{
						position: "absolute",
						left: { xs: "50%", md: "20%" },
						top: { xs: "20%", md: "25%" },
						transform: "rotate(4deg)",
					}}>
					<Box className={styles.rotating}>
						<HexGrid
							id='module-grid-39'
							height={useMediaQuery(theme.breakpoints.down("md")) ? "23vh" : "35vh"}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-39`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonRed.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
					<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
						<Typography
							fontFamily={"Gilroy-Heavy"}
							fontSize={{ xs: "1.65rem", md: "2.5rem" }}
							onClick={onClick}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							Magnetic Connectors
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.8} onClick={onClick}>
				<Box
					sx={{
						position: "absolute",
						left: { xs: "50%", md: "27%" },
						top: { xs: "57%", md: "60%" },
						transform: "rotate(-12deg)",
					}}>
					<Box className={styles.rotatingReverseNormal}>
						<HexGrid
							id='module-grid-40'
							height={useMediaQuery(theme.breakpoints.down("md")) ? "23vh" : "35vh"}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-40`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonYellow.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
					<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
						<Typography
							fontFamily={"Gilroy-Heavy"}
							fontSize={{ xs: "1.65rem", md: "2.5rem" }}
							onClick={onClick}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							Module Extension Cord
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.9} onClick={onClick}>
				<Box
					sx={{
						position: "absolute",
						right: { xs: "50%", md: "20%" },
						top: { xs: "20%", md: "25%" },
						transform: "rotate(-2deg)",
					}}>
					<Box className={styles.rotatingReverseSlowEaseInOut}>
						<HexGrid
							id='module-grid-41'
							height={useMediaQuery(theme.breakpoints.down("md")) ? "23vh" : "35vh"}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-41`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonBlue.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
					<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
						<Typography
							fontFamily={"Gilroy-Heavy"}
							fontSize={{ xs: "1.6rem", md: "2.5rem" }}
							onClick={onClick}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							More Non-Traditional Inputs
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
				<Box
					sx={{
						position: "absolute",
						right: { xs: "50%", md: "27%" },
						top: { xs: "57%", md: "60%" },
						transform: "rotate(10deg)",
					}}>
					<Box className={styles.rotatingSlow}>
						<HexGrid
							id='module-grid-42'
							height={useMediaQuery(theme.breakpoints.down("md")) ? "23vh" : "35vh"}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-42`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonGreen.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
					<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
						<Typography
							fontFamily={"Gilroy-Heavy"}
							fontSize={{ xs: "1.5rem", md: "2.25rem" }}
							onClick={onClick}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							Increased Configuration Options
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={-0.15} onClick={onClick}>
				<Box
					sx={{
						position: "absolute",
						left: { xs: "0%", md: "11%" },
						top: { xs: "77%", md: "60%" },
						transform: "rotate(10deg)",
					}}>
					<Box className={styles.rotatingSlowEaseInOut}>
						<HexGrid
							id='module-grid-43'
							height={useMediaQuery(theme.breakpoints.down("md")) ? "16vh" : "22vh"}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 50, y: 50 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-43`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonOrange.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
					<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
						<Typography
							fontFamily={"Gilroy-Heavy"}
							fontSize={{ xs: "1.1rem", md: "1.8rem" }}
							onClick={onClick}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							Wireless Connectivity
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={-0.1} onClick={onClick}>
				<Box
					sx={{
						position: "absolute",
						right: { xs: "2%", md: "8%" },
						top: { xs: "78%", md: "55%" },
						transform: "rotate(10deg)",
					}}>
					<Box className={styles.rotatingReverse}>
						<HexGrid
							id='module-grid-44'
							height={useMediaQuery(theme.breakpoints.down("md")) ? "13vh" : "20vh"}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 50, y: 50 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-44`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonBlack.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
					<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
						<Typography
							fontFamily={"Gilroy-Heavy"}
							fontSize={{ xs: "1.15rem", md: "1.75rem" }}
							onClick={onClick}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							Module LED Edges
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0} onClick={onClick}>
				<Box
					sx={{
						position: "absolute",
						left: { xs: "-3%", md: "2%" },
						top: { xs: "42%", md: "15%" },
						transform: "rotate(-15deg)",
					}}>
					<Box className={styles.rotatingSlow}>
						<HexGrid
							id='module-grid-45'
							height={useMediaQuery(theme.breakpoints.down("md")) ? "17vh" : "32vh"}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 50, y: 50 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-45`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonBlack.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
					<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -53%)" }}>
						<Typography
							fontFamily={"Gilroy-Heavy"}
							fontSize={{ xs: "1.4rem", md: "2.25rem" }}
							onClick={onClick}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							Multi-Platform Support
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={-0.15} onClick={onClick}>
				<Box
					sx={{
						position: "absolute",
						right: { xs: "0%", md: "5%" },
						top: { xs: "42%", md: "15%" },
						transform: "rotate(-7deg)",
					}}>
					<Box className={styles.rotatingSlow}>
						<HexGrid
							id='module-grid-46'
							height={useMediaQuery(theme.breakpoints.down("md")) ? "17vh" : "27vh"}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 50, y: 50 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-46`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonPurple.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
					<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
						<Typography
							fontFamily={"Gilroy-Heavy"}
							fontSize={{ xs: "1.4rem", md: "2.25rem" }}
							onClick={onClick}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							Multi-Group Modules
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick}>
				<Box
					className={boxStyles.whiteCircle}
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						height: useMediaQuery(theme.breakpoints.down("md")) ? "20vh" : "47vh",
						width: useMediaQuery(theme.breakpoints.down("md")) ? "20vh" : "47vh",
						zIndex: 10,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<MACSLogoBlue height={useMediaQuery(theme.breakpoints.down("md")) ? "18vh" : "44vh"} />
				</Box>
			</ParallaxLayer>
		</>
	);
};

export default PageNine;
