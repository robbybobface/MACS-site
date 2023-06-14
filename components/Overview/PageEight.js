import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { MACSLogoPurpleDark } from "../../assets/macs_logo_purple_dark";
import { MACSLogoGrey } from "../../assets/macs_logo_grey";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";

const PageEight = ({ offset, gradient, onClick, router }) => {
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
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const getGreyLogoSize = () => {
		if (isMD) {
			return "24min";
		} else if (isMDPlus) {
			return "24vmin";
		} else if (isLG) {
			return "28vmin";
		} else if (isXL) {
			return "36vmin";
		} else {
			return "36vmin";
		}
	};

	const getGreyLogoPaddingSize = () => {
		if (isMD) {
			return "26vmin";
		} else if (isMDPlus) {
			return "26vmin";
		} else if (isLG) {
			return "30vmin";
		} else if (isXL) {
			return "38vmin";
		} else {
			return "38vmin";
		}
	};

	const getPriceHexagonHeight = () => {
		if (isMD) {
			return "150px";
		} else if (isMDPlus) {
			return "225px";
		} else if (isLG) {
			return "250px";
		} else if (isXL) {
			return "300px";
		} else {
			return "300px";
		}
	};
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div
					// className={
					// 	useMediaQuery(theme.breakpoints.down("md")) ? styles.slopeBeginMobileEight : styles.slopeBegin
					// }
					className={styles.slopeBegin}
				/>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div
					className={`${isMD ? styles.slopeEndMobileEight : styles.slopeEnd} ${styles[gradient]}`}
					// className={`${styles.slopeEnd} ${styles[gradient]}`}
				/>
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
						justifyContent: "center",
						alignItems: "center",
						zIndex: 1000000,
					}}>
					<Grid container spacing={2} sx={{ minHeight: "750px", mt: { xs: 0, md: 0 } }}>
						<Grid
							item
							xs={12}
							md={5}
							sx={{
								display: "flex",
								alignItems: { xs: "flex-start", md: "center" },
								justifyContent: "center",
							}}>
							<Box
								// className={boxStyles.darkGreyBox}
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: { xs: "flex-start", md: "center" },
									alignItems: { xs: "center", md: "flex-start" },
									px: 8,
									py: 2,
								}}>
								<Typography
									color='white'
									fontFamily={"bitcount-mono-single-line-ci"}
									fontSize={{ xs: "6rem", mdPlus: "7rem", lg: "8rem", xl: "9rem" }}
									mb={-3}
									mt={-4}
									onClick={onClick}
									sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
									MACS
								</Typography>
								<GradientText
									text='Break'
									gradient='linear-gradient(145deg, rgba(139,68,102,1) 0%, rgba(105,129,162,1) 80%)'
									my={{ xs: -1, lg: -5 }}
									fontSize={{ xs: "5rem", mdPlus: "6rem", lg: "7rem", xl: "8rem" }}
								/>
								<GradientText
									text='Down'
									gradient='linear-gradient(145deg, rgba(122,96,122,1) 0%, rgba(86,158,165,1) 80%)'
									my={-2}
									fontSize={{ xs: "5rem", mdPlus: "6rem", lg: "7rem", xl: "8rem" }}
								/>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						left: { xs: "47%", md: "77%", lg: "77%" },
						top: { xs: "82%", md: "42%" },
						transform: "rotate(-17deg)",
					}}>
					<Box className={styles.rotating}>
						<HexGrid
							id='module-grid-35'
							height={getPriceHexagonHeight()}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-35`}
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
							fontSize={{ xs: "1.75rem", md: "2rem", lg: "2.5rem" }}
							mb={{ xs: 0, md: -2 }}
							onClick={onClick}
							lineHeight={{ xs: 1, md: 1.5 }}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							Per Module
						</Typography>
						<Typography
							fontFamily={"Gilroy-Heavy"}
							fontSize={{ xs: "2.25rem", md: "3rem", lg: "4rem" }}
							onClick={onClick}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							$15.50
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={-0.15} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						right: { xs: "30%", md: "15%", lg: "12%", xl: "18%" },
						top: { xs: "53%", md: "27%", lg: "17%" },
						transform: "rotate(-3deg)",
					}}>
					<Box className={styles.rotatingReverseSlowEaseInOut}>
						<HexGrid
							id='module-grid-34'
							height={getPriceHexagonHeight()}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-34`}
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
							fontSize={{ xs: "1.75rem", md: "2rem", lg: "2.5rem" }}
							mb={{ xs: 0, md: -2 }}
							onClick={onClick}
							lineHeight={{ xs: 1, md: 1.5 }}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							Actual
						</Typography>
						<Typography
							fontFamily={"Gilroy-Heavy"}
							fontSize={{ xs: "2.25rem", md: "3rem", lg: "4rem" }}
							onClick={onClick}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							$466.87
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						left: { xs: "55%", md: "60%", lg: "58%", xl: "58%" },
						top: { xs: "80%", md: "45%" },
						transform: "rotate(15deg)",
					}}>
					<Box className={styles.rotatingSlow}>
						<HexGrid
							id='module-grid-33'
							height={getPriceHexagonHeight()}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-33`}
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
							fontSize={{ xs: "1.75rem", md: "2rem", lg: "2.5rem" }}
							mb={{ xs: 0, md: -2 }}
							onClick={onClick}
							lineHeight={{ xs: 1, md: 1.5 }}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							Anticipated
						</Typography>
						<Typography
							fontFamily={"Gilroy-Heavy"}
							fontSize={{ xs: "2.25rem", md: "3rem", lg: "4rem" }}
							onClick={onClick}
							sx={{
								color: "white",
								textAlign: "center",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							$650
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.8} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{ position: "absolute", left: "-5%", top: "0%", transform: "rotate(15deg)" }}>
					<HexGrid
						id='module-grid-36'
						height={isMD ? "20vh" : "32vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isMD ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-36`}
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
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingReverse}
					sx={{
						position: "absolute",
						right: { xs: "0%", md: "3%" },
						top: { xs: "22%", md: "12%" },
						transform: "rotate(82deg)",
					}}>
					<HexGrid
						id='module-grid-37'
						height={isMD ? "15vmin" : "20vmin"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isMD ? { x: 45, y: 45 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-37`}
								q={0}
								r={0}
								s={0}
								cellStyle={{
									fill: isMD ? theme.palette.hexagonOrange.main : theme.palette.hexagonBlack.main,
								}}
								stroke='white'
								strokeWidth={1}
							/>
						</Layout>
					</HexGrid>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.2} onClick={onClick} factor={newFactor}>
				<Box
					className={boxStyles.whiteCircle}
					sx={{
						display: { xs: "none", md: "flex" },
						position: "absolute",
						top: { xs: "65%", md: "50%" },
						left: "50%",
						transform: "translate(-50%, -50%)",
						height: getGreyLogoPaddingSize(),
						width: getGreyLogoPaddingSize(),
						zIndex: 10,
						justifyContent: "center",
						alignItems: "center",
					}}>
					<MACSLogoGrey height={getGreyLogoSize()} />
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingSlow}
					sx={{
						position: "absolute",
						right: { xs: "70%", md: "45%" },
						bottom: { xs: "55%", md: "0%" },
						transform: "rotate(2deg)",
					}}>
					<HexGrid
						id='module-grid-38'
						height={"27vh"}
						width={"27vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isMD ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-38`}
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
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingReverseSlowEaseInOut}
					sx={{
						position: "absolute",
						left: "0%",
						bottom: "10%",
						transform: "rotate(2deg)",
						display: {
							xs: "none",
							md: "block",
						},
					}}>
					<HexGrid
						id='module-grid-47'
						height={"20vh"}
						width={"20vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 50, y: 50 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-47`}
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
			</ParallaxLayer>
		</>
	);
};

export default PageEight;
