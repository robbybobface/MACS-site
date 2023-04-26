import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid } from "@mui/material";
import styles from "../styles/Overview.module.css";
import boxStyles from "../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../styles/theme";
import GradientText from "./GradientText";

const PageSeven = ({ offset, gradient, onClick, router }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBegin} />
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>
		<ParallaxLayer
			className={`${styles.text} ${styles.number} noselect`}
			offset={offset}
			speed={0.3}
			style={{ zIndex: 9999 }}>
			<Container maxWidth='xl' sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Grid container spacing={2}>
					<Grid
						item
						onClick={onClick}
						xs={4}
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
						}}>
						<Typography
							color='white'
							fontFamily={"bitcount-mono-single-line-ci"}
							fontSize='9rem'
							my={-1}
							onClick={onClick}
							sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
							MACS
						</Typography>
						<GradientText
							text='in'
							gradient='linear-gradient(145deg, rgba(177,40,70,1) 0%, rgba(107,93,128,1) 100%)'
							my={-5}
							fontSize={"8rem"}
						/>
						<GradientText
							text='action'
							gradient='linear-gradient(145deg, rgba(177,40,70,1) 0%, rgba(107,93,128,1) 36%, rgba(55,132,173,1) 90%)'
							fontSize={"8rem"}
						/>
					</Grid>
					<Grid
						item
						xs={8}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Box
							className={boxStyles.darkGreyBox}
							onClick={onClick}
							sx={{
								display: "flex",
								position: "relative",
								overflow: "hidden",
								width: "100%",
								paddingTop: "56.25%",
							}}>
							<iframe
								className={styles.responsiveIframe}
								title='MACS in action'
								src='https://drive.google.com/file/d/1QmNI558EnRjYwXppvZrDmpxlafCn1kr1/preview?=controls=0'
								allow='autoplay'
								allowFullScreen
								contextMenu={false}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.7} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotating}
				sx={{ position: "absolute", left: "25%", bottom: "5%", transform: "rotate(112deg)" }}>
				<HexGrid
					id='module-grid-27'
					height={"30vh"}
					width={"30vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-27`}
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
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseSlowEaseInOut}
				sx={{ position: "absolute", left: "40%", top: "10%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-28'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-28`}
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
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingSlowEaseInOut}
				sx={{ position: "absolute", right: "3%", top: "15%", transform: "rotate(212deg)" }}>
				<HexGrid
					id='module-grid-29'
					height={"15vh"}
					width={"15vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-29`}
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
		<ParallaxLayer offset={offset} speed={0.45} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseSlow}
				sx={{ position: "absolute", left: "0%", top: "0%", transform: "rotate(212deg)" }}>
				<HexGrid
					id='module-grid-30'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-30`}
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
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseNormal}
				sx={{ position: "absolute", right: "5%", bottom: "5%", transform: "rotate(212deg)" }}>
				<HexGrid
					id='module-grid-31'
					height={"40vh"}
					width={"40vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-31`}
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
		</ParallaxLayer>
	</>
);

export default PageSeven;
