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
		? 1000 / window.innerHeight >= 1
			? 1000 / window.innerHeight
			: 1
		: 1;
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isLGPlus = useMediaQuery(theme.breakpoints.down("lgPlus"));
	const isLGPLusPlus = useMediaQuery(theme.breakpoints.down("lgPlusPlus"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const getBlueLogoSize = () => {
		if (isMD) {
			return "36min";
		} else if (isMDPlus) {
			return "24vmin";
		} else if (isLG) {
			return "27vmin";
		} else if (isLGPlus) {
			return "29vmin";
		} else if (isLGPLusPlus) {
			return "31vmin";
		} else if (isXL) {
			return "35vmin";
		} else {
			return "44vmin";
		}
	};

	const getBlueLogoPaddingSize = () => {
		if (isMD) {
			return "27min";
		} else if (isMDPlus) {
			return "26vmin";
		} else if (isLG) {
			return "29vmin";
		} else if (isLGPlus) {
			return "32vmin";
		} else if (isLGPLusPlus) {
			return "34vmin";
		} else if (isXL) {
			return "38vmin";
		} else {
			return "47vmin";
		}
	};
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div
					// className={
					// 	useMediaQuery(theme.breakpoints.down("md")) ? styles.slopeBeginMobileNine : styles.slopeBegin
					// }
					className={styles.slopeBegin}
				/>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			<ParallaxLayer
				className={`${styles.text} ${styles.number} noselect`}
				onClick={onClick}
				offset={offset}
				speed={0.3}
				style={{ zIndex: 9999 }}
				factor={newFactor}>
				<Container
					maxWidth='xl'
					sx={{
						display: { xs: "none", md: "flex" },
						alignItems: "flex-start",
						justifyContent: "flex-start",
						minHeight: { md: "80vmin", lg: "80vmin" },
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
									fontSize={{ xs: "4rem", mdPlus: "4rem", lg: "5rem", xl: "6rem" }}
									onClick={onClick}
								/>
								<Typography
									color='white'
									fontFamily={"bitcount-mono-single-line-ci"}
									fontSize={{ xs: "5rem", mdPlus: "5rem", lg: "6rem", xl: "7rem" }}
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
			<ParallaxLayer offset={offset} speed={0.6} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						left: { xs: "55%", md: "18%", lg: "20%" },
						top: { xs: "40%", md: "25%" },
						transform: "rotate(4deg)",
					}}>
					<Box className={styles.rotating}>
						<HexGrid
							id='module-grid-39'
							height={isLG ? "32vmin" : "35vmin"}
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
							fontSize={{ xs: "1.65rem", md: "2.1rem", mdPlus: "2.25", lg: "2.5rem" }}
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
			<ParallaxLayer offset={offset} speed={0.8} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						left: { xs: "55%", md: "20%", lg: "27%" },
						top: { xs: "77%", md: "64%", lg: "60%" },
						transform: "rotate(-12deg)",
					}}>
					<Box className={styles.rotatingReverseNormal}>
						<HexGrid
							id='module-grid-40'
							height={isLG ? "32vmin" : "35vmin"}
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
							fontSize={{ xs: "1.65rem", md: "2.1rem", mdPlus: "2.25", lg: "2.5rem" }}
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
			<ParallaxLayer offset={offset} speed={0.9} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						right: { xs: "57%", md: "18%", lg: "20%" },
						top: { xs: "53%", md: "25%" },
						transform: "rotate(-2deg)",
					}}>
					<Box className={styles.rotatingReverseSlowEaseInOut}>
						<HexGrid
							id='module-grid-41'
							height={isLG ? "32vmin" : "35vmin"}
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
							fontSize={{ xs: "1.65rem", md: "2.1rem", mdPlus: "2.25", lg: "2.5rem" }}
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
			<ParallaxLayer offset={offset} speed={0.6} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						right: { xs: "50%", md: "20%", lg: "27%" },
						top: { xs: "69%", md: "64%", lg: "60%" },
						transform: "rotate(10deg)",
					}}>
					<Box className={styles.rotatingSlow}>
						<HexGrid
							id='module-grid-42'
							height={isLG ? "32vmin" : "35vmin"}
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
							fontSize={{ xs: "1.5rem", md: "1.9rem", mdPlus: "2rem", lg: "2.25rem" }}
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
			<ParallaxLayer offset={offset} speed={-0.15} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						left: { xs: "0%", md: "3%", mdPlus: "3%", lg: "11%" },
						top: { xs: "56%", md: "60%" },
						transform: "rotate(10deg)",
					}}>
					<Box className={styles.rotatingSlowEaseInOut}>
						<HexGrid
							id='module-grid-43'
							height={isMD ? "16vmin" : "22vmin"}
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
							fontSize={{ xs: "1.1rem", md: "1.65rem", lg: "1.8rem" }}
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
			<ParallaxLayer offset={offset} speed={-0.1} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						right: { xs: "2%", md: "2%", lg: "8%" },
						top: { xs: "59%", md: "55%" },
						transform: "rotate(10deg)",
					}}>
					<Box className={styles.rotatingReverse}>
						<HexGrid
							id='module-grid-44'
							height={isMD ? "13vmin" : "20vmin"}
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
			<ParallaxLayer offset={offset} speed={0} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						left: { xs: "0%", md: "2%" },
						top: { xs: "35%", md: "15%" },
						transform: "rotate(-15deg)",
					}}>
					<Box className={styles.rotatingSlow}>
						<HexGrid
							id='module-grid-45'
							height={isLG ? "27vmin" : "32vmin"}
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
							fontSize={{ xs: "1.4rem", md: "1.9rem", mdPlus: "2rem", lg: "2.25rem" }}
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
			<ParallaxLayer offset={offset} speed={-0.15} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						right: { xs: "0%", md: "2%", lg: "5%" },
						top: { xs: "28%", md: "15%" },
						transform: "rotate(-7deg)",
					}}>
					<Box className={styles.rotatingSlow}>
						<HexGrid
							id='module-grid-46'
							height={isLG ? "25vmin" : "27vmin"}
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
							fontSize={{ xs: "1.4rem", md: "1.9rem", mdPlus: "2rem", lg: "2.25rem" }}
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
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick} factor={newFactor}>
				<Box
					className={boxStyles.whiteCircle}
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						top: "55%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						height: getBlueLogoPaddingSize(),
						width: getBlueLogoPaddingSize(),
						zIndex: 10,
						justifyContent: "center",
						alignItems: "center",
					}}>
					<MACSLogoBlue height={getBlueLogoSize()} />
				</Box>
			</ParallaxLayer>
		</>
	);
};

export default PageNine;
