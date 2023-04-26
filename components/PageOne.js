import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Divider } from "@mui/material";
import styles from "../styles/Overview.module.css";
import boxStyles from "../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../styles/theme";
import GradientText from "./GradientText";

const PageOne = ({ offset, gradient, onClick }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEndTop} ${styles.blue}`} />
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.3} onClick={onClick} style={{ zIndex: 9999 }}>
			<Container className='noselect' maxWidth='xl'>
				<Grid
					container
					spacing={2}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						px: 5,
						zIndex: 10000,
					}}>
					<Grid item xs={5} sx={{ mt: -4 }}>
						<GradientText
							text='Project Overview'
							gradient='linear-gradient(161deg, rgba(255,255,255,1) 0%, rgba(0,135,177,1) 100%)'
							fontSize='7.5rem'
							onClick={onClick}
							lineHeight='1.3'
						/>
					</Grid>
					<Grid
						item
						xs={7}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Box
							className={boxStyles.darkGreyBox}
							sx={{
								borderRadius: 2,
								py: 4,
								px: 6,
							}}>
							<Typography textAlign='justify' fontSize={"20px"} color={"white"}>
								In recent years, video gaming has become a cornerstone of digital entertainment. Despite
								this, the rigid form factor of controllers and their proprietary interfaces make for an
								inflexible and inaccessible gaming experience that alienates a vast percentage of the
								population. Although companies like Microsoft and Sony have developed their own modular
								controllers, their attempts have left something to be desired. The MACS (Modular
								Accessible Controller System) seeks to address these problems using specially designed,
								hot-swappable input modules that allow users to customize their controller according to
								their needs and preferences, enabling a more personalized and immersive experience.
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								width: "100%",
								flexDirection: "row",
								justifyContent: "space-evenly",
								alignItems: "center",
								my: 2,
							}}>
							<Box
								className={boxStyles.whiteBox}
								sx={{
									maxWidth: 290,
									minHeight: 200,
									py: 2,
									px: 4,
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-evenly",
									alignItems: "flex-start",
									height: "100%",
								}}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "flex-start",
										mt: -2,
									}}>
									<Typography
										fontFamily='Gilroy-Heavy'
										color='hexagonBlueFull.main'
										fontSize='2.5rem'
										sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
										Accessibility
									</Typography>
									<Divider sx={{ borderColor: "hexagonBlueFull.main", borderWidth: 2 }} />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
									}}>
									<Typography
										fontFamily='Gilroy-Heavy'
										color='hexagonRedFull.main'
										fontSize='2.5rem'
										sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
										Repairability
									</Typography>
									<Divider sx={{ borderColor: "hexagonRedFull.main", borderWidth: 2 }} />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
									}}>
									<Typography
										fontFamily='Gilroy-Heavy'
										color='hexagonGreenFull.main'
										fontSize='2.5rem'
										sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
										Customizability
									</Typography>
									<Divider sx={{ borderColor: "hexagonGreenFull.main", borderWidth: 2 }} />
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Box
									className={boxStyles.lightGreyBox}
									sx={{
										maxWidth: 275,
										py: 2,
										px: 6,
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-evenly",
										alignItems: "center",
									}}>
									<Typography fontFamily={"Gilroy-Bold"} fontSize={"30px"} sx={{ mb: 2 }}>
										2.2 Billion Gamers
									</Typography>
									<Typography fontFamily={"Gilroy-Bold"} fontSize={"30px"}>
										23% are disabled
									</Typography>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBeginStart} />
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick}>
			<Box
				component='div'
				className={styles.rotating}
				sx={{
					position: "absolute",
					left: "75%",
					top: "10%",
					transform: `rotate(347deg)`,
				}}>
				<HexGrid
					id='module-grid-1'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-1`}
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
		<ParallaxLayer offset={offset} speed={0.35} onClick={onClick}>
			<Box
				className={styles.rotatingReverse}
				sx={{ position: "absolute", left: "33%", top: "30%", transform: "rotate(15deg)" }}>
				<HexGrid
					id='module-grid-2'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-2`}
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
		<ParallaxLayer offset={offset} speed={0.7} onClick={onClick}>
			<Box
				className={styles.rotatingReverseEaseInOut}
				sx={{ position: "absolute", left: "53%", top: "55%", transform: "rotate(10deg)" }}>
				<HexGrid
					id='module-grid-3'
					height={"30vh"}
					width={"30vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 50, y: 50 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-3`}
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
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<Box
				className={styles.rotatingFast}
				sx={{ position: "absolute", left: "45%", top: "15%", transform: "rotate(0deg)" }}>
				<HexGrid
					id='module-grid-4'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 30, y: 30 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-4`}
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
	</>
);

export default PageOne;
