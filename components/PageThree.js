import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardMedia } from "@mui/material";
import styles from "../styles/Overview.module.css";
import boxStyles from "../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../styles/theme";
import GradientText from "./GradientText";

const PageThree = ({ offset, gradient, onClick, router }) => (
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
				sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000000 }}>
				<GradientText
					text='Existing Solutions'
					gradient='linear-gradient(161deg, rgba(94,196,176,1) 0%, rgba(255,190,0,1) 100%)'
					fontSize={"6rem"}
					onClick={onClick}
					lineHeight={1.3}
				/>
				<Box
					className={boxStyles.darkGreyBox}
					sx={{
						width: "100%",
					}}>
					<Grid
						container
						spacing={4}
						sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", px: 6, py: 4 }}>
						<Grid item xs={12}>
							<Typography color='white' fontSize={"20px"} textAlign='justify' sx={{ px: 4 }}>
								With the release of the Xbox Adaptive Controller in 2018 Microsoft has been almost the
								sole provider of accessible controllers for disabled gamers. Sony is also working on
								their accessible controller, codenamed Project Leonardo, which is scheduled to be
								released in 2024. Despite these positive developments, more can still be done to enable
								accessibility in these controllers. Whereas both of these controllers still suffer from
								the same rigid form factors that most modern controllers conform to. And the number of
								inputs are still limited and the supported input types are restricted by traditional
								controllers.
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
								<CardMedia
									component='img'
									alt='microsoft adaptive controller'
									height='250'
									sx={{ objectPosition: "50% 60%" }}
									image='/xbox-adaptive-controller.png'
								/>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
								<CardMedia
									component='img'
									alt='project leonardo'
									height='250'
									image='/project-leonardo.jpg'
								/>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.75} onClick={onClick}>
			<Box
				className={styles.rotatingSlowEaseInOut}
				sx={{ position: "absolute", left: "-0%", top: "0%", transform: "rotate(15deg)" }}>
				<HexGrid
					id='module-grid-8'
					height={"30vh"}
					width={"30vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-8`}
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
		<ParallaxLayer offset={offset} speed={0.4} onClick={onClick}>
			<Box
				className={styles.rotatingReverse}
				sx={{ position: "absolute", left: "27%", top: "27%", transform: "rotate(312deg)" }}>
				<HexGrid
					id='module-grid-9'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-9`}
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
		<ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
			<Box
				className={styles.rotatingFast}
				sx={{ position: "absolute", left: "7%", bottom: "0%", transform: "rotate(165deg)" }}>
				<HexGrid
					id='module-grid-10'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-10`}
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
		<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick}>
			<Box
				className={styles.rotatingSlow}
				sx={{ position: "absolute", right: "5%", top: "-10%", transform: "rotate(7deg)" }}>
				<HexGrid
					id='module-grid-11'
					height={"35vh"}
					width={"35vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-11`}
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
		<ParallaxLayer offset={offset} speed={-0.27} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseEaseInOut}
				sx={{ position: "absolute", right: "45%", bottom: "10%", transform: "rotate(216deg)" }}>
				<HexGrid
					id='module-grid-12'
					height={"15vh"}
					width={"15vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-12`}
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
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingSlowEaseInOut}
				sx={{ position: "absolute", right: "0%", bottom: "10%", transform: "rotate(216deg)" }}>
				<HexGrid
					id='module-grid-12'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-12`}
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

export default PageThree;
