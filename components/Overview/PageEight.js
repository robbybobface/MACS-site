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
		? 593.6 / screen.height >= 0.7
			? 593.6 / screen.height
			: 0.7
		: 1;
	console.log(newFactor);
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div className={styles.slopeBegin} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div
					className={`${
						useMediaQuery(theme.breakpoints.down("md")) ? styles.slopeEndMobileEight : styles.slopeEnd
					} ${styles[gradient]}`}
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
					sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000000 }}>
					<Grid container spacing={2} sx={{ minHeight: "900px", mt: { xs: -10, md: 0 } }}>
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
									fontSize={{ xs: "7rem", md: "9rem" }}
									mb={-3}
									mt={-4}
									onClick={onClick}
									sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
									MACS
								</Typography>
								<GradientText
									text='Break'
									gradient='linear-gradient(145deg, rgba(139,68,102,1) 0%, rgba(105,129,162,1) 80%)'
									my={{ xs: -3.5, md: -5 }}
									fontSize={{ xs: "5rem", md: "8rem" }}
								/>
								<GradientText
									text='Down'
									gradient='linear-gradient(145deg, rgba(122,96,122,1) 0%, rgba(86,158,165,1) 80%)'
									my={-2}
									fontSize={{ xs: "5rem", md: "8rem" }}
								/>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={-0.15} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						position: "absolute",
						left: { xs: "25%", md: "61%" },
						top: { xs: "35%", md: "17%" },
						transform: "rotate(-3deg)",
					}}>
					<Box className={styles.rotatingReverseSlowEaseInOut}>
						<HexGrid
							id='module-grid-34'
							height={useMediaQuery(theme.breakpoints.down("md")) ? "25vh" : "40vh"}
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
							fontSize={{ xs: "1.75rem", md: "2.5rem" }}
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
							fontSize={{ xs: "2.25rem", md: "4rem" }}
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
						position: "absolute",
						left: { xs: "2%", md: "55%" },
						top: { xs: "57%", md: "45%" },
						transform: "rotate(15deg)",
					}}>
					<Box className={styles.rotatingSlow}>
						<HexGrid
							id='module-grid-33'
							height={useMediaQuery(theme.breakpoints.down("md")) ? "26vh" : "40vh"}
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
							fontSize={{ xs: "1.75rem", md: "2.5rem" }}
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
							fontSize={{ xs: "2.25rem", md: "4rem" }}
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
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} factor={newFactor}>
				<Box
					sx={{
						position: "absolute",
						left: { xs: "47%", md: "70%" },
						top: { xs: "40%", md: "35%" },
						transform: "rotate(-17deg)",
					}}>
					<Box className={styles.rotating}>
						<HexGrid
							id='module-grid-35'
							height={"50vh"}
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
							fontSize={{ xs: "1.75rem", md: "2.5rem" }}
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
							fontSize={{ xs: "2.25rem", md: "4rem" }}
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
			<ParallaxLayer offset={offset} speed={0.8} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{ position: "absolute", left: "-5%", top: "0%", transform: "rotate(15deg)" }}>
					<HexGrid
						id='module-grid-36'
						height={useMediaQuery(theme.breakpoints.down("md")) ? "20vh" : "32vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
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
						top: "12%",
						transform: "rotate(82deg)",
					}}>
					<HexGrid
						id='module-grid-37'
						height={useMediaQuery(theme.breakpoints.down("md")) ? "15vh" : "20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-37`}
								q={0}
								r={0}
								s={0}
								cellStyle={{
									fill: useMediaQuery(theme.breakpoints.down("md"))
										? theme.palette.hexagonOrange.main
										: theme.palette.hexagonBlack.main,
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
						position: "absolute",
						top: { xs: "30%", md: "50%" },
						left: "50%",
						transform: "translate(-50%, -50%)",
						height: useMediaQuery(theme.breakpoints.down("md")) ? "17vh" : "38vh",
						width: useMediaQuery(theme.breakpoints.down("md")) ? "17vh" : "38vh",
						zIndex: 10,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<MACSLogoGrey height={useMediaQuery(theme.breakpoints.down("md")) ? "15vh" : "36vh"} />
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
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 55, y: 55 }}
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
						<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
