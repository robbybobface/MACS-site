import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid } from "@mui/material";
import styles from "../styles/Overview.module.css";
import boxStyles from "../styles/BoxStyles.module.css";
import { MACSLogoBlue } from "../assets/macs_logo_light_blue";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../styles/theme";
import GradientText from "./GradientText";

const PageNine = ({ offset, gradient, onClick, router }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBegin} />
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
					zIndex: 1000000,
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
								gradient={"linear-gradient(145deg, rgba(54,133,173,1) 0%, rgba(116,182,158,1) 100%)"}
								my={-5}
								fontSize={"6rem"}
								onClick={onClick}
							/>
							<Typography
								color='white'
								fontFamily={"bitcount-mono-single-line-ci"}
								fontSize='7rem'
								mb={-3}
								mt={-4}
								ml={4}
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
			<Box sx={{ position: "absolute", left: "20%", top: "25%", transform: "rotate(0deg)" }}>
				<Box className={styles.rotating}>
					<HexGrid
						id='module-grid-39'
						height={"35vh"}
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
						fontSize='2.5rem'
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
			<Box sx={{ position: "absolute", left: "27%", top: "60%", transform: "rotate(0deg)" }}>
				<Box className={styles.rotatingReverseNormal}>
					<HexGrid
						id='module-grid-40'
						height={"35vh"}
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
						fontSize='2.5rem'
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
			<Box sx={{ position: "absolute", right: "20%", top: "25%", transform: "rotate(0deg)" }}>
				<Box className={styles.rotatingReverseSlowEaseInOut}>
					<HexGrid
						id='module-grid-41'
						height={"35vh"}
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
						fontSize='2.5rem'
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
			<Box sx={{ position: "absolute", right: "27%", top: "60%", transform: "rotate(0deg)" }}>
				<Box className={styles.rotatingSlow}>
					<HexGrid
						id='module-grid-42'
						height={"35vh"}
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
						fontSize='2.25rem'
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
		<ParallaxLayer offset={offset} speed={0.5} onClick={onClick}>
			<Box
				className={boxStyles.whiteCircle}
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					height: "46vh",
					width: "46vh",
					zIndex: 10,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<MACSLogoBlue height='44vh' />
			</Box>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={-0.3} onClick={onClick}>
			<Box sx={{ position: "absolute", left: "0%", top: "60%", transform: "rotate(0deg)" }}>
				<Box className={styles.rotatingSlowEaseInOut}>
					<HexGrid
						id='module-grid-43'
						height={"29vh"}
						width={"29vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
						fontSize='2.4rem'
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
		<ParallaxLayer offset={offset} speed={-0.4} onClick={onClick}>
			<Box sx={{ position: "absolute", right: "3%", top: "55%", transform: "rotate(0deg)" }}>
				<Box className={styles.rotatingReverse}>
					<HexGrid
						id='module-grid-44'
						height={"25vh"}
						width={"25vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
						fontSize='2.25rem'
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
		<ParallaxLayer offset={offset} speed={-0.1} onClick={onClick}>
			<Box sx={{ position: "absolute", left: "-5%", top: "15%", transform: "rotate(0deg)" }}>
				<Box className={styles.rotatingSlow}>
					<HexGrid
						id='module-grid-45'
						height={"30vh"}
						width={"30vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
				<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
					<Typography
						fontFamily={"Gilroy-Heavy"}
						fontSize='2.25rem'
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
		<ParallaxLayer offset={offset} speed={-0.1} onClick={onClick}>
			<Box sx={{ position: "absolute", right: "-2%", top: "15%", transform: "rotate(0deg)" }}>
				<Box className={styles.rotatingSlow}>
					<HexGrid
						id='module-grid-46'
						height={"27vh"}
						width={"27vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
						fontSize='2.25rem'
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
	</>
);

export default PageNine;
