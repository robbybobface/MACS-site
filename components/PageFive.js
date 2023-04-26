import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Button, Container, Grid, Card, CardContent } from "@mui/material";
import styles from "../styles/Overview.module.css";
import boxStyles from "../styles/BoxStyles.module.css";
import { MACSFlowchart } from "../assets/macs_flowchart";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../styles/theme";
import GradientText from "./GradientText";

const PageFive = ({ offset, gradient, onClick, router }) => (
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
						xs={7}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly",
							alignItems: "center",
							minHeight: "725px",
						}}>
						<Box
							className={boxStyles.whiteBox}
							sx={{
								overflow: "clip",
								display: "flex",
							}}>
							<MACSFlowchart width={"43vw"} />
						</Box>
					</Grid>
					<Grid
						item
						xs={5}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<GradientText
							text='Design & Implementation'
							gradient='linear-gradient(161deg, rgba(245,186,60,1) 0%, rgba(177,40,70,1) 100%)'
							lineHeight={1.2}
							fontSize={"5rem"}
							textAlign='center'
							mb={2}
						/>
						<Box
							onClick={onClick}
							className={boxStyles.lightGreyBox}
							sx={{
								px: 4,
								py: 2,
								mb: 2,
							}}>
							<Typography color={"white"} fontSize={"20px"} textAlign='center'>
								The design ascpets of the project were broken down into three main categories. Click to
								learn more about each section of the project.
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-evenly",
								width: "100%",
								alignItems: "center",
								mb: 2,
							}}>
							<Card
								elevation={4}
								className={boxStyles.whiteBox}
								sx={{
									position: "relative",
									display: "flex",
									alignSelf: "stretch",
									maxWidth: "200px",
									minHeight: "190px",
								}}>
								<CardContent
									sx={{
										display: "flex",
										flexDirection: "column",
										position: "relative",
										height: "100%",
										alignItems: "center",
										alignSelf: "stretch",
										backgroundColor: theme.palette.hexagonBlueAlt.main,
										transition: "all ease-in 0.25s",
										"&:hover": {
											backgroundColor: theme.palette.hexagonBlue.main,
										},
									}}>
									<Typography
										gutterBottom
										fontSize='24px'
										fontWeight='bold'
										textAlign='center'
										color='backgroundBlack.main'
										fontFamily='Gilroy-Bold'>
										MODULE
									</Typography>
									<Typography color='text.secondary' textAlign='center'>
										The design of each module and the central hub
									</Typography>
									<Button
										variant='contained'
										onClick={() => router.push("/modules")}
										sx={{ my: 2, position: "absolute", bottom: 38 }}>
										Learn More
									</Button>
								</CardContent>
							</Card>
							<Card
								elevation={4}
								className={boxStyles.whiteBox}
								sx={{
									position: "relative",
									display: "flex",
									alignSelf: "stretch",
									maxWidth: "200px",
									minHeight: "190px",
								}}>
								<CardContent
									sx={{
										display: "flex",
										flexDirection: "column",
										position: "relative",
										height: "100%",
										alignItems: "center",
										alignSelf: "stretch",
										backgroundColor: theme.palette.hexagonGreenAlt.main,
										transition: "all ease-in 0.25s",
										"&:hover": {
											backgroundColor: theme.palette.hexagonGreen.main,
										},
									}}>
									<Typography
										gutterBottom
										fontSize='24px'
										fontWeight='bold'
										textAlign='center'
										color='backgroundBlack.main'
										fontFamily='Gilroy-Bold'>
										CONTROLLER
									</Typography>
									<Typography color='text.secondary' textAlign='center'>
										The communication between the modules and the application
									</Typography>
									<Button
										variant='contained'
										onClick={() => router.push("/controller")}
										sx={{ my: 2, position: "absolute", bottom: 38 }}>
										Learn More
									</Button>
								</CardContent>
							</Card>
							<Card
								elevation={4}
								className={boxStyles.whiteBox}
								sx={{
									display: "flex",
									alignSelf: "stretch",
									maxWidth: "200px",
									minHeight: "190px",
								}}>
								<CardContent
									sx={{
										display: "flex",
										flexDirection: "column",
										position: "relative",
										height: "100%",
										alignItems: "center",
										alignSelf: "stretch",
										backgroundColor: theme.palette.hexagonRedAlt.main,
										transition: "all ease-in 0.25s",
										"&:hover": {
											backgroundColor: theme.palette.hexagonRed.main,
										},
									}}>
									<Typography
										gutterBottom
										fontSize='24px'
										fontWeight='bold'
										textAlign='center'
										color='backgroundBlack.main'
										fontFamily='Gilroy-Bold'>
										APPLICATION
									</Typography>
									<Typography color='text.secondary' textAlign='center'>
										The interpretation and emulation of inputs
									</Typography>
									<Button
										variant='contained'
										onClick={() => router.push("/application")}
										sx={{ my: 2, position: "absolute", bottom: 38 }}>
										Learn More
									</Button>
								</CardContent>
							</Card>
						</Box>
						<Box
							onClick={onClick}
							className={boxStyles.darkGreyBox}
							sx={{
								p: 4,
							}}>
							<Typography color={"white"} fontSize={"20px"} textAlign='justify'>
								MACS works using two bridges of communication. The communication between modules and
								central hub, as well as the communication between the central hub and the application.
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.2} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotating}
				sx={{ position: "absolute", right: "30%", bottom: "5%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-16'
					height={"30vh"}
					width={"30vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-16`}
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
		<ParallaxLayer offset={offset} speed={0.5} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseSlowEaseInOut}
				sx={{ position: "absolute", left: "0%", bottom: "35%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-17'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-17`}
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
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingSlowEaseInOut}
				sx={{ position: "absolute", right: "0%", top: "0%", transform: "rotate(212deg)" }}>
				<HexGrid
					id='module-grid-18'
					height={"15vh"}
					width={"15vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-18`}
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
		<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseSlow}
				sx={{ position: "absolute", right: "50%", top: "0%", transform: "rotate(212deg)" }}>
				<HexGrid
					id='module-grid-19'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-19`}
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
		<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseNormal}
				sx={{ position: "absolute", right: "0%", bottom: "15%", transform: "rotate(212deg)" }}>
				<HexGrid
					id='module-grid-20'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-20`}
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
	</>
);

export default PageFive;
