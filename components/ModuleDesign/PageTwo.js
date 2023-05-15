import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardContent, useMediaQuery, CardMedia } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import ImageCaption from "../ImageCaption";

const PageTwo = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md")) ? 1.1 : 1;
	return (
		<>
			<ParallaxLayer offset={offset} onClick={onClick} speed={0.1} factor={newFactor}>
				<div
					className={
						useMediaQuery(theme.breakpoints.down("md"))
							? styles.slopeBeginModuleMobileTwo
							: styles.slopeBegin
					}
				/>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} onClick={onClick} speed={0.15} factor={newFactor}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			<ParallaxLayer
				className={`${styles.text} ${styles.number} noselect`}
				offset={offset}
				speed={0.3}
				onClick={onClick}
				style={{ zIndex: 9999 }}
				factor={newFactor}>
				<Container
					maxWidth='xl'
					sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000000 }}>
					<Box
						className={boxStyles.whiteBox}
						sx={{
							width: { xs: "100%", md: "85%" },
							minHeight: 700,
							zIndex: 10000000,
							px: { xs: 2, md: 0 },
						}}>
						<GradientText
							text='Module Design'
							gradient='linear-gradient(170deg, rgba(112,130,143,1) 0%, rgba(50,50,50,1) 100%)'
							onClick={onClick}
							lineHeight='1.2'
							textAlign='center'
							fontSize={{ xs: "2.5rem", md: "6rem" }}
							width='100%'
							pt={1}
						/>
						<Grid
							container
							spacing={2}
							rowSpacing={3}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								px: { xs: 0, md: 6 },
								pb: { xs: 4, md: 6 },
							}}>
							<Grid item xs={12}>
								<Typography
									color='backgroundBlack.main'
									sx={{
										fontSize: { xs: "14px", md: "20px" },
										px: { xs: 0, md: 4 },
										mt: { xs: 1, md: 0 },
									}}
									textAlign='justify'>
									Five input modules were fully developed, alongside the central hub. These inputs are
									a button, a switch, a slider, a dial, and a joystick. Housings were designed on
									SolidWorks for each module type. In order to make housing easy to print and
									assemble, each design was split in half and printed as a top and bottom. Mating
									posts were added at the intersection so that the housing would stay together nicely
									without any extra adhesive.
								</Typography>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
								<Box sx={{ position: "relative" }}>
									<Card elevation={4} sx={{ position: "relative" }}>
										<CardMedia
											component='img'
											alt='central hub top'
											height={useMediaQuery(theme.breakpoints.down("md")) ? "150" : "250"}
											sx={{ objectPosition: "50% 60%" }}
											image='/central-hub-top.png'
										/>
									</Card>
									<ImageCaption caption={"Central Hub Top"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
								<Box sx={{ position: "relative" }}>
									<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
										<CardMedia
											component='img'
											alt='button top'
											height={useMediaQuery(theme.breakpoints.down("md")) ? "150" : "250"}
											sx={{ objectPosition: "50% 60%" }}
											image='/button-top.png'
										/>
									</Card>
									<ImageCaption caption={"Button Top"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									display: { xs: "flex", md: "none" },
									alignItems: "center",
									justifyContent: "center",
								}}>
								<Box sx={{ position: "relative" }}>
									<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
										<CardMedia
											component='img'
											alt='central hub bottom'
											height={useMediaQuery(theme.breakpoints.down("md")) ? "150" : "250"}
											sx={{ objectPosition: "50% 60%" }}
											image='/central-hub-bottom.png'
										/>
									</Card>
									<ImageCaption caption={"Central Hub Bottom"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={4}
								sx={{
									display: { xs: "flex", md: "none" },
									alignItems: "center",
									justifyContent: "center",
								}}>
								<Box sx={{ position: "relative" }}>
									<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
										<CardMedia
											component='img'
											alt='general module bottom'
											height={useMediaQuery(theme.breakpoints.down("md")) ? "150" : "250"}
											sx={{ objectPosition: "50% 60%" }}
											image='/general-bottom.png'
										/>
									</Card>
									<ImageCaption caption={"General Bottom"} light={false} />
								</Box>
							</Grid>

							<Grid
								item
								xs={6}
								md={3}
								sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
								<Box sx={{ position: "relative" }}>
									<Card elevation={4} sx={{ alignSelf: "stretch" }}>
										<CardMedia
											component='img'
											alt='switch top'
											height={useMediaQuery(theme.breakpoints.down("md")) ? "150" : "250"}
											sx={{ objectPosition: "50% 60%" }}
											image='/switch-top.png'
										/>
									</Card>
									<ImageCaption caption={"Switch Top"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
								<Box sx={{ position: "relative" }}>
									<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
										<CardMedia
											component='img'
											alt='slider top'
											height={useMediaQuery(theme.breakpoints.down("md")) ? "150" : "250"}
											sx={{ objectPosition: "50% 60%" }}
											image='/slider-top.png'
										/>
									</Card>
									<ImageCaption caption={"Slider Top"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									display: { xs: "none", md: "flex" },
									alignItems: "center",
									justifyContent: "center",
								}}>
								<Box sx={{ position: "relative" }}>
									<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
										<CardMedia
											component='img'
											alt='central hub bottom'
											height={useMediaQuery(theme.breakpoints.down("md")) ? "150" : "250"}
											width={useMediaQuery(theme.breakpoints.down("md")) ? "150" : "250"}
											sx={{ objectPosition: "50% 60%" }}
											image='/central-hub-bottom.png'
										/>
									</Card>
									<ImageCaption caption={"Central Hub Bottom"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									display: { xs: "none", md: "flex" },
									alignItems: "center",
									justifyContent: "center",
								}}>
								<Box sx={{ position: "relative" }}>
									<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
										<CardMedia
											component='img'
											alt='general module bottom'
											height={useMediaQuery(theme.breakpoints.down("md")) ? "150" : "250"}
											width={useMediaQuery(theme.breakpoints.down("md")) ? "150" : "250"}
											sx={{ objectPosition: "50% 60%" }}
											image='/general-bottom.png'
										/>
									</Card>
									<ImageCaption caption={"General Bottom"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
								<Box sx={{ position: "relative" }}>
									<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
										<CardMedia
											component='img'
											alt='dial top'
											height={useMediaQuery(theme.breakpoints.down("md")) ? "150" : "250"}
											sx={{ objectPosition: "50% 60%" }}
											image='/dial-top.png'
										/>
									</Card>
									<ImageCaption caption={"Dial Top"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
								<Box sx={{ position: "relative" }}>
									<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
										<CardMedia
											component='img'
											alt='joystick top'
											height={useMediaQuery(theme.breakpoints.down("md")) ? "150" : "250"}
											sx={{ objectPosition: "50% 60%" }}
											image='/joystick-top.png'
										/>
									</Card>
									<ImageCaption caption={"Joystick Top"} light={false} />
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} onClick={onClick} speed={-0.05} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{
						position: "absolute",
						left: { xs: "-20%", md: "0%" },
						top: "-10%",
						transform: "rotate(15deg)",
					}}>
					<HexGrid
						id='module-grid-5'
						height={"40vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-5`}
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
			<ParallaxLayer offset={offset} onClick={onClick} speed={0.2} factor={newFactor}>
				<Box
					className={styles.rotatingReverse}
					sx={{
						position: "absolute",
						right: { xs: "-10%", md: "5%" },
						top: "30%",
						transform: "rotate(15deg)",
					}}>
					<HexGrid
						id='module-grid-6'
						height={"20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-6`}
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
			<ParallaxLayer offset={offset} onClick={onClick} speed={0.2} factor={newFactor}>
				<Box
					className={styles.rotatingSlow}
					sx={{
						position: "absolute",
						left: { xs: "-15%" },
						right: { md: "45%" },
						bottom: "0%",
						transform: "rotate(15deg)",
					}}>
					<HexGrid
						id='module-grid-7'
						height={"30vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 55, y: 55 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-7`}
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
		</>
	);
};

export default PageTwo;
