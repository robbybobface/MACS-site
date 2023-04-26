import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import styles from "../styles/Overview.module.css";
import boxStyles from "../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../styles/theme";
import GradientText from "./GradientText";

const PageFour = ({ offset, gradient, onClick, router }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBegin} />
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>
		<ParallaxLayer className={`noselect`} onClick={onClick} offset={offset} speed={0.3} style={{ zIndex: 100 }}>
			<Container
				maxWidth='xl'
				sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000000 }}>
				<Grid container spacing={2}>
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
							text='Solution Proposition'
							gradient='linear-gradient(161deg, rgba(159,242,130,1) 0%, rgba(255,105,48,1) 100%)'
							onClick={onClick}
							fontSize={"6rem"}
							textAlign={"center"}
							lineHeight={1.1}
							mb={3}
						/>
						<Box
							className={boxStyles.darkGreyBox}
							sx={{
								p: 4,
							}}>
							<Typography color={"white"} fontSize={"20px"} textAlign='justify'>
								To address the problems of accessibility, repairability, and configurability (or lack
								thereof) in modern game controllers, we aimed to design a modular game controller. In
								doing so, we could break free from the previously stated shortcomings that stem from a
								static form factor controller. The controller would be made of a variable number of
								modules, all containing one form of input. This design will allow for several core
								design values to be achieved.
							</Typography>
						</Box>
					</Grid>
					<Grid
						item
						xs={7}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly",
							alignItems: "center",
							minHeight: "725px",
						}}>
						<Card
							elevation={4}
							className={boxStyles.whiteBox}
							sx={{
								maxWidth: "700px",
							}}>
							<CardContent
								sx={{
									backgroundColor: theme.palette.hexagonGreenAlt.main,
									transition: "all ease-in 0.25s",
									"&:hover": {
										backgroundColor: theme.palette.hexagonGreen.main,
									},
								}}>
								<Typography
									gutterBottom
									component='div'
									fontSize='24px'
									fontWeight='bold'
									fontFamily='Gilroy-Bold'>
									Flexibility
								</Typography>
								<Typography color='text.secondary' textAlign='justify'>
									Our design will mean that modules can be arranged in any way you want. With no
									limitations on the number of modules connected, the controller is flexible in its
									size, shape, and complexity. This allows the controller to be catered to the user’s
									needs at will.
								</Typography>
							</CardContent>
						</Card>
						<Card
							elevation={4}
							className={styles.whiteBox}
							sx={{
								maxWidth: "700px",
							}}>
							<CardContent
								sx={{
									backgroundColor: theme.palette.hexagonBlueAlt.main,
									transition: "all ease-in 0.25s",
									"&:hover": {
										backgroundColor: theme.palette.hexagonBlue.main,
									},
								}}>
								<Typography
									gutterBottom
									component='div'
									fontSize='24px'
									fontWeight='bold'
									fontFamily='Gilroy-Bold'>
									Customizability
								</Typography>
								<Typography color='text.secondary' textAlign='justify'>
									Not only is the controller mechanically flexible, but the software associated with
									it will allow the user to fully customize their controller. After constructing the
									controller to their liking, a user can map and remap each module to emulate certain
									types of inputs. Digital to digital, analog to analog and even digital to
									analog/analog to digital translation will be possible.
								</Typography>
							</CardContent>
						</Card>
						<Card
							elevation={4}
							className={styles.whiteBox}
							sx={{
								maxWidth: "700px",
							}}>
							<CardContent
								sx={{
									backgroundColor: theme.palette.hexagonYellowAlt.main,
									transition: "all ease-in 0.25s",
									"&:hover": {
										backgroundColor: theme.palette.hexagonYellow.main,
									},
								}}>
								<Typography
									gutterBottom
									component='div'
									fontSize='24px'
									fontWeight='bold'
									fontFamily='Gilroy-Bold'>
									Accessibility
								</Typography>
								<Typography color='text.secondary' textAlign='justify'>
									A modular controller will allow for easier development for physical modules that can
									address the needs of any gamer according to their disability if they have one. In
									conjunction with our software, both new and existing input types can be repurposed
									to address a physical need.
								</Typography>
							</CardContent>
						</Card>
						<Card
							elevation={4}
							className={styles.whiteBox}
							sx={{
								maxWidth: "700px",
							}}>
							<CardContent
								sx={{
									backgroundColor: theme.palette.hexagonRedAlt.main,
									transition: "all ease-in 0.25s",
									"&:hover": {
										backgroundColor: theme.palette.hexagonRed.main,
									},
								}}>
								<Typography
									gutterBottom
									component='div'
									fontSize='24px'
									fontWeight='bold'
									fontFamily='Gilroy-Bold'>
									Repairability
								</Typography>
								<Typography color='text.secondary' textAlign='justify'>
									Inherently, a modular controller would be easily reparable since the operation of
									the controller would not depend on any one particular module. In the event of a
									module failure, only that specific module requires repair, rather than having to
									repair or replace the entire controller.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.05} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseEaseInOut}
				sx={{ position: "absolute", right: "0%", bottom: "10%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-13'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-13`}
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
		<ParallaxLayer offset={offset} speed={0.25} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotating}
				sx={{ position: "absolute", right: "40%", bottom: "30%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-14'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-14`}
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
		<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotating}
				sx={{ position: "absolute", right: "0%", bottom: "45%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-15'
					height={"35vh"}
					width={"35vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-15`}
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

export default PageFour;
