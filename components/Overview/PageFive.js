import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Button, Container, Grid, Card, CardContent, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { MACSFlowchart } from "../../assets/macs_flowchart";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";

const PageFive = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md"))
		? 932.8 / screen.height >= 1.1
			? 932.8 / screen.height
			: 1.1
		: 1;
	console.log(newFactor);
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div className={styles.slopeBegin} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			<ParallaxLayer
				className={`${styles.text} ${styles.number} noselect`}
				offset={offset}
				speed={0.3}
				style={{ zIndex: 9999 }}
				factor={newFactor}>
				<Container maxWidth='xl' sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					<Grid
						container
						spacing={2}
						sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" } }}>
						<Grid
							item
							onClick={onClick}
							xs={12}
							md={7}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly",
								alignItems: "center",
								minHeight: { xs: "100px", md: "725px" },
							}}>
							<Box
								className={boxStyles.whiteBox}
								sx={{
									overflow: "clip",
									display: "flex",
								}}>
								<MACSFlowchart width={useMediaQuery(theme.breakpoints.down("md")) ? "95vw" : "43vw"} />
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							md={5}
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
								fontSize={{ xs: "3rem", md: "5rem" }}
								textAlign='center'
								mb={2}
							/>
							<Box
								onClick={onClick}
								className={boxStyles.lightGreyBox}
								sx={{
									px: { xs: 2, md: 4 },
									py: 2,
									mb: 2,
								}}>
								<Typography
									color={"white"}
									sx={{ fontSize: { xs: "14px", md: "20px" } }}
									textAlign='center'>
									The design ascpets of the project were broken down into three main categories. Click
									to learn more about each section of the project.
								</Typography>
							</Box>
							<Grid
								container
								spacing={1}
								sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
								<Grid item xs={11} md={4}>
									<Card
										elevation={4}
										className={boxStyles.whiteBox}
										sx={{
											position: "relative",
											display: "flex",
											alignSelf: "stretch",
										}}>
										<CardContent
											sx={{
												display: "flex",
												flexDirection: { xs: "row", md: "column" },
												position: "relative",
												alignItems: "center",
												justifyContent: "center",
												alignSelf: "stretch",
												p: "16px !important",
												backgroundColor: theme.palette.hexagonBlueAlt.main,
												transition: "all ease-in 0.25s",
												"&:hover": {
													backgroundColor: theme.palette.hexagonBlue.main,
												},
											}}>
											<Grid
												container
												spacing={1}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}>
												<Grid item xs={8} md={12}>
													<Typography
														gutterBottom
														fontSize={{ xs: "20px", md: "24px" }}
														fontWeight='bold'
														textAlign='center'
														color='backgroundBlack.main'
														fontFamily='Gilroy-Bold'>
														MODULE
													</Typography>
													<Typography
														color='text.secondary'
														textAlign='center'
														fontSize={{ xs: "16px", md: "18px" }}>
														The design of each module and the central hub
													</Typography>
												</Grid>
												<Grid
													item
													xs={4}
													md={12}
													sx={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
													}}>
													<Button variant='contained' onClick={() => router.push("/modules")}>
														Learn More
													</Button>
												</Grid>
											</Grid>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={11} md={4}>
									<Card
										elevation={4}
										className={boxStyles.whiteBox}
										sx={{
											position: "relative",
											display: "flex",
											alignSelf: "stretch",
										}}>
										<CardContent
											sx={{
												display: "flex",
												flexDirection: { xs: "row", md: "column" },
												position: "relative",
												height: "100%",
												alignItems: "center",
												alignSelf: "stretch",
												p: "16px !important",
												backgroundColor: theme.palette.hexagonGreenAlt.main,
												transition: "all ease-in 0.25s",
												"&:hover": {
													backgroundColor: theme.palette.hexagonGreen.main,
												},
											}}>
											<Grid
												container
												spacing={1}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}>
												<Grid item xs={8} md={12}>
													<Typography
														gutterBottom
														fontSize={{ xs: "20px", md: "24px" }}
														fontWeight='bold'
														textAlign='center'
														color='backgroundBlack.main'
														fontFamily='Gilroy-Bold'>
														CONTROLLER
													</Typography>
													<Typography
														color='text.secondary'
														textAlign='center'
														fontSize={{ xs: "16px", md: "18px" }}>
														The communication between the modules and the application
													</Typography>
												</Grid>
												<Grid
													item
													xs={4}
													md={12}
													sx={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
													}}>
													<Button
														variant='contained'
														onClick={() => router.push("/controller")}>
														Learn More
													</Button>
												</Grid>
											</Grid>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={11} md={4}>
									<Card
										elevation={4}
										className={boxStyles.whiteBox}
										sx={{
											display: "flex",
											alignSelf: "stretch",
										}}>
										<CardContent
											sx={{
												display: "flex",
												flexDirection: { xs: "row", md: "column" },
												position: "relative",
												justifyContent: "center",
												alignItems: "center",
												alignSelf: "stretch",
												p: "16px !important",
												backgroundColor: theme.palette.hexagonRedAlt.main,
												transition: "all ease-in 0.25s",
												"&:hover": {
													backgroundColor: theme.palette.hexagonRed.main,
												},
											}}>
											<Grid
												container
												spacing={1}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}>
												<Grid item xs={8} md={12}>
													<Typography
														gutterBottom
														fontSize={{ xs: "20px", md: "24px" }}
														fontWeight='bold'
														textAlign='center'
														color='backgroundBlack.main'
														fontFamily='Gilroy-Bold'>
														APPLICATION
													</Typography>
													<Typography
														color='text.secondary'
														textAlign='center'
														fontSize={{ xs: "16px", md: "18px" }}>
														The interpretation and emulation of inputs
													</Typography>
												</Grid>
												<Grid
													item
													xs={4}
													md={12}
													sx={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
													}}>
													<Button
														variant='contained'
														onClick={() => router.push("/application")}>
														Learn More
													</Button>
												</Grid>
											</Grid>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
							<Box
								onClick={onClick}
								className={boxStyles.darkGreyBox}
								sx={{
									p: { xs: 2, md: 4 },
								}}>
								<Typography
									color={"white"}
									sx={{ fontSize: { xs: "14px", md: "20px" } }}
									textAlign='justify'>
									MACS works using two bridges of communication. The communication between modules and
									central hub, as well as the communication between the central hub and the
									application.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.2} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotating}
					sx={{
						position: "absolute",
						right: "30%",
						bottom: { xs: "-10%", md: "5%" },
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-16'
						height={"30vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseSlowEaseInOut}
					sx={{
						position: "absolute",
						left: { xs: "-10%", md: "0%" },
						bottom: "35%",
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-17'
						height={"25vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{ position: "absolute", right: "0%", top: "0%", transform: "rotate(212deg)" }}>
					<HexGrid
						id='module-grid-18'
						height={"15vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseSlow}
					sx={{
						position: "absolute",
						right: "50%",
						top: { xs: "15%", md: "0%" },
						transform: "rotate(212deg)",
					}}>
					<HexGrid
						id='module-grid-19'
						height={"20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseNormal}
					sx={{
						position: "absolute",
						right: { xs: "-10%", md: "3%" },
						bottom: "15%",
						transform: "rotate(212deg)",
					}}>
					<HexGrid
						id='module-grid-20'
						height={useMediaQuery(theme.breakpoints.down("md")) ? "25vh" : "20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
};

export default PageFive;