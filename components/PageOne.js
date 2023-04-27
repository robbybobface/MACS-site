import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Divider } from "@mui/material";
import styles from "../styles/Overview.module.css";
import boxStyles from "../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../styles/theme";
import GradientText from "./GradientText";
import { animated, useTrail, to } from "@react-spring/web";

const Trail = ({ open, children }) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 10, tension: 1000, friction: 100 },
		opacity: open ? 1 : 0,
		x: open ? 0 : 10,
		y: open ? 0 : 50,
		// height: open ? 110 : 0,
		from: { opacity: 0, x: 10, y: 50 },
	});
	return (
		<>
			{trail.map(({ ...style }, index) => (
				<animated.div key={index} style={style}>
					<animated.div>{items[index]}</animated.div>
				</animated.div>
			))}
		</>
	);
};

const TrailHexagon = ({ open, children }) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 5, tension: 2000, friction: 400 },
		opacity: open ? 1 : 0,
		from: { opacity: 0 },
	});
	return (
		<>
			{trail.map(({ ...style }, index) => (
				<animated.div key={index} style={style}>
					<animated.div>{items[index]}</animated.div>
				</animated.div>
			))}
		</>
	);
};

const PageOne = ({ offset, gradient, onClick }) => {
	const [open, setOpen] = useState(false);
	const [openHexagon, setOpenHexagon] = useState(false);

	useEffect(() => {
		setInterval(() => {
			setOpen(true);
		}, 250);
		setInterval(() => {
			setOpenHexagon(true);
		}, 400);
	}, []);
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
				<div className={`${styles.slopeEndTop} ${styles.blue}`} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.3} onClick={onClick} style={{ zIndex: 9999 }}>
				<Container className='noselect' maxWidth='xl'>
					{/* <Trail open={open}> */}
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
							<Trail open={open}>
								<GradientText
									text='Project Overview'
									gradient='linear-gradient(161deg, rgba(255,255,255,1) 0%, rgba(0,135,177,1) 100%)'
									fontSize='7.5rem'
									onClick={onClick}
									lineHeight='1.3'
								/>
							</Trail>
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
							<Grid container spacing={2} rowGap={2}>
								<Grid item xs={12}>
									<Box
										className={boxStyles.darkGreyBox}
										sx={{
											borderRadius: 2,
											py: 4,
											px: 6,
										}}>
										<Typography textAlign='justify' fontSize={"20px"} color={"white"}>
											In recent years, video gaming has become a cornerstone of digital
											entertainment. Despite this, the rigid form factor of controllers and their
											proprietary interfaces make for an inflexible and inaccessible gaming
											experience that alienates a vast percentage of the population. Although
											companies like Microsoft and Sony have developed their own modular
											controllers, their attempts have left something to be desired. The MACS
											(Modular Accessible Controller System) seeks to address these problems using
											specially designed, hot-swappable input modules that allow users to
											customize their controller according to their needs and preferences,
											enabling a more personalized and immersive experience.
										</Typography>
									</Box>
								</Grid>
								<Grid
									item
									xs={6}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
								</Grid>
								<Grid
									item
									xs={6}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										margin: 0,
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
											m: 0,
										}}>
										<Typography fontFamily={"Gilroy-Bold"} fontSize={"30px"} sx={{ mb: 2 }}>
											2.2 Billion Gamers
										</Typography>
										<Typography fontFamily={"Gilroy-Bold"} fontSize={"30px"}>
											23% are disabled
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{/* </Trail> */}
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
				<div className={styles.slopeBeginStart} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			{/* <TrailHexagon open={openHexagon}> */}
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
			{/* </TrailHexagon> */}
		</>
	);
};
export default PageOne;
