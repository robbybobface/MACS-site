import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Divider, useMediaQuery, Card, CardContent } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
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

const TrailAlt = ({ open, children, delay }) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 3, tension: 1000, friction: 100 },
		opacity: open ? 1 : 0,
		x: open ? 0 : -40,
		from: { opacity: 0, x: 0 },
		delay: delay ?? 0,
		backdropBlur: "blur(7px)",
		zIndex: 1000,
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

	const newFactor = useMediaQuery(theme.breakpoints.down("md"))
		? 1000 / window.innerHeight >= 1
			? 1000 / window.innerHeight
			: 1
		: 1;
	// console.log(newFactor);

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
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${styles.slopeEndTop} ${styles.blue}`} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div className={styles.slopeBeginStart} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			{/* <TrailHexagon open={openHexagon}> */}
			<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick} factor={newFactor}>
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
						width={"25vh"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 49, y: 49 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={0.35} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingReverse}
					sx={{
						position: "absolute",
						left: { xs: "-2%", md: "33%" },
						top: "30%",
						transform: "rotate(15deg)",
					}}>
					<HexGrid
						id='module-grid-2'
						height={"20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 45, y: 45 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={0.7} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						left: { xs: "65%", md: "53%" },
						top: "55%",
						transform: "rotate(10deg)",
					}}>
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
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingFast}
					sx={{
						position: "absolute",
						left: { xs: "70%", md: "45%" },
						top: { xs: "40%", md: "15%" },
						transform: "rotate(0deg)",
					}}>
					<HexGrid
						id='module-grid-4'
						height={"25vh"}
						width={"25vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 35, y: 35 } : { x: 30, y: 30 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer
				className={`${styles.text} ${styles.number} noselect`}
				offset={offset}
				speed={0.3}
				style={{ zIndex: 9999 }}
				factor={newFactor}>
				<Container
					className='noselect'
					maxWidth='xl'
					sx={{ mb: { xs: 6, md: 0 }, display: { xs: "none", md: "flex" } }}>
					{/* <Trail open={open}> */}
					<Grid
						container
						spacing={2}
						rowGap={0}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							px: { xs: 0, md: 5 },
							zIndex: 10000,
							// minHeight: "1000px",
							mt: { xs: -10, md: 0 },
						}}>
						<Grid
							item
							xs={12}
							md={5}
							sx={{
								mt: { xs: 0, md: -4 },
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Trail open={open}>
								<GradientText
									text='Project Overview'
									gradient='linear-gradient(161deg, rgba(255,255,255,1) 0%, rgba(0,135,177,1) 100%)'
									fontSize={{ xs: "2.5rem", md: "4.5rem", mdPlus: "5rem", lg: "6rem", xl: "7.5rem" }}
									onClick={onClick}
									lineHeight='1.3'
								/>
							</Trail>
						</Grid>
						<Grid
							item
							xs={12}
							md={7}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Grid container spacing={2}>
								<Grid
									item
									xs={12}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<TrailAlt open={open}>
										<Box
											className={boxStyles.darkGreyBox}
											sx={{
												borderRadius: 2,
												py: { xs: 1, md: 2, lg: 4 },
												px: { xs: 2, md: 4, lg: 5, xl: 6 },
											}}>
											<Typography
												textAlign='justify'
												fontSize={"20px"}
												color={"white"}
												sx={{
													fontSize: {
														xs: "14px",
														md: "15px",
														mdPlus: "16px",
														lg: "18px",
														xl: "20px",
													},
												}}>
												In recent years, video gaming has become a cornerstone of digital
												entertainment. Despite this, the rigid form factor of controllers and
												their proprietary interfaces make for an inflexible and inaccessible
												gaming experience that alienates a vast percentage of the population.
												Although companies like Microsoft and Sony have developed their own
												modular controllers, their attempts have left something to be desired.
												The MACS (Modular Accessible Controller System) seeks to address these
												problems using specially designed, hot-swappable input modules that
												allow users to customize their controller according to their needs and
												preferences, enabling a more personalized and immersive experience.
											</Typography>
										</Box>
									</TrailAlt>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<TrailAlt open={open} delay={100}>
										<Box
											className={boxStyles.whiteBox}
											sx={{
												maxWidth: 290,
												minHeight: { xs: 175, md: 200 },
												py: { xs: 1, md: 2 },
												px: { xs: 3, md: 3, lg: 4 },
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
													fontSize={{
														xs: "1.75rem",
														md: "1.9rem",
														mdPlus: "2.1rem",
														lg: "2.3rem",
														xl: "2.5rem",
													}}
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
													fontSize={{
														xs: "1.75rem",
														md: "1.9rem",
														mdPlus: "2.1rem",
														lg: "2.3rem",
														xl: "2.5rem",
													}}
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
													fontSize={{
														xs: "1.75rem",
														md: "1.9rem",
														mdPlus: "2.1rem",
														lg: "2.3rem",
														xl: "2.5rem",
													}}
													sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
													Customizability
												</Typography>
												<Divider
													sx={{ borderColor: "hexagonGreenFull.main", borderWidth: 2 }}
												/>
											</Box>
										</Box>
									</TrailAlt>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										margin: 0,
									}}>
									<TrailAlt open={open} delay={200}>
										<Box
											className={boxStyles.lightGreyBox}
											sx={{
												maxWidth: 275,
												py: 2,
												px: { xs: 4, md: 2, lg: 4, xl: 6 },
												display: "flex",
												flexDirection: "column",
												justifyContent: "space-evenly",
												alignItems: "center",
												m: 0,
											}}>
											<Typography
												fontFamily={"Gilroy-Bold"}
												fontSize={{
													xs: "20px",
													md: "22px",
													mdPlus: "22px",
													lg: "26px",
													lgPlus: "27px",
													xl: "30px",
												}}
												textAlign='center'
												sx={{ mb: 2 }}>
												2.2 Billion Gamers
											</Typography>
											<Typography
												fontFamily={"Gilroy-Bold"}
												textAlign='center'
												fontSize={{
													xs: "20px",
													md: "22px",
													mdPlus: "22px",
													lg: "26px",
													lgPlus: "27px",
													xl: "30px",
												}}>
												23% are disabled
											</Typography>
										</Box>
									</TrailAlt>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{/* </Trail> */}
				</Container>
			</ParallaxLayer>
			{/* </TrailHexagon> */}
		</>
	);
};
export default PageOne;
