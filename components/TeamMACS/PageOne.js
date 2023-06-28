import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, useMediaQuery, CardContent, Card } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon, Pattern } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import { animated, useTrail, to } from "@react-spring/web";
import BlurHashedImage from "../Partials/BlurHashedImage";
import { useRouter } from "next/router";

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
		config: { mass: 20, tension: 2000, friction: 200 },
		opacity: open ? 1 : 0,
		x: open ? 0 : -20,
		from: { opacity: 0, x: -20 },
		delay: delay ?? 0,
		width: "100%",
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

	const newFactor = useMediaQuery(theme.breakpoints.down("md")) ? 1.1 : 1;
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isLGPlus = useMediaQuery(theme.breakpoints.down("lgPlus"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const router = useRouter();

	const getMaximizedImageHeight = () => {
		if (isXS) return "50%";
		if (isXSPlus) return "60%";
		if (isSM) return "62%";
		if (isMD) return "320px";
		if (isMDPlus) return "320px";
		if (isLG) return "385px";
		if (isLGPlus) return "460px";
		if (isXL) return "500px";
		return "500px";
	};

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
				<div className={`${styles.slopeEndTop} ${styles.purple}`} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div className={styles.slopeBeginStart} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
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
								cellStyle={{ fill: theme.palette.hexagonYellow.main }}
								stroke='white'
								strokeWidth={1}
							/>
						</Layout>
					</HexGrid>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.35} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotating}
					sx={{
						position: "absolute",
						left: { xs: "-2%", md: "5%" },
						bottom: "5%",
						transform: "rotate(15deg)",
					}}>
					<HexGrid
						id='module-grid-10'
						height={"22vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 45, y: 45 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-10`}
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
			<ParallaxLayer offset={offset} speed={0.35} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingSlow}
					sx={{
						position: "absolute",
						right: { xs: "-2%", md: "5%" },
						bottom: "25%",
						transform: "rotate(15deg)",
					}}>
					<HexGrid
						id='module-grid-10'
						height={"22vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 45, y: 45 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-10`}
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
			<ParallaxLayer offset={offset} speed={0.7} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						left: { xs: "65%", md: "53%" },
						bottom: "5%",
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
						left: { xs: "70%", md: "30%" },
						bottom: { xs: "40%", md: "15%" },
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
								cellStyle={{ fill: theme.palette.hexagonRed.main }}
								stroke='white'
								strokeWidth={1}
							/>
						</Layout>
					</HexGrid>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer
				offset={offset}
				speed={0.3}
				onClick={onClick}
				style={{ zIndex: 9999, overflow: "visible" }}
				factor={newFactor}>
				<Container
					className='noselect'
					maxWidth='xl'
					sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 3 }}>
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
						}}>
						<Grid
							item
							xs={12}
							md={4}
							sx={{
								mt: { xs: 0, md: -4 },
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Trail open={open}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: { xs: "center", md: "flex-start" },
										justifyContent: "center",
									}}>
									<GradientText
										text='Team'
										gradient='background: rgb(255,255,255);
background: linear-gradient(125deg, rgba(255,255,255,1) 0%, rgba(200,130,255,1) 31%, rgba(143,0,255,1) 100%);'
										fontSize={{
											xs: "4rem",
											md: "5rem",
											mdPlus: "6rem",
											lg: "7rem",
											xl: "8rem",
										}}
										onClick={onClick}
										lineHeight='1.3'
										textAlign={{ xs: "center", md: "left" }}
									/>

									<Typography
										color='white'
										fontFamily={"bitcount-mono-single-line-ci"}
										fontSize={{ xs: "5rem", md: "6rem", mdPlus: "7rem", lg: "8rem", xl: "9rem" }}
										my={-7}
										onClick={onClick}
										sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
										MACS
									</Typography>
								</Box>
							</Trail>
						</Grid>
						<Grid
							item
							xs={12}
							md={8}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								height: "100%",
							}}>
							<Grid
								item
								xs={12}
								md={9}
								lg={7}
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "100%",
									flexGrow: 1,
									mb: -6,
								}}>
								<TrailAlt open={open} delay={150}>
									<Card
										elevation={4}
										sx={{
											display: "flex",
											position: "relative",
											alignSelf: "stretch",
											flex: 1,
											height: { xs: "200px", md: "250px", lg: "300px" },
											width: "100%",
											backgroundColor: "transparent",
											zIndex: -1,
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/capstone-competition-10.jpeg?tr=w-1800'
											hash='LgF#s[%1oexa~VofWBjZ%LRkRkRk'
											alt='macs team award photo'
											// height={"auto"}
											// width={"100%"}
											team={true}
											// sx={{
											// 	objectPosition: "50% 15%",
											// }}
										/>
									</Card>
								</TrailAlt>
							</Grid>
							<Grid
								item
								xs={12}
								md={10}
								lg={8}
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									zIndex: 9999,
								}}>
								<TrailAlt open={open} delay={200}>
									<Box
										className={boxStyles.darkGreyBox}
										sx={{
											borderRadius: 2,
											// py: { xs: 1, md: 4 },
											// px: { xs: 2, md: 4, lg: 5, xl: 6 },
											py: { xs: 1, md: 1.5, md: 1.5, xl: 2 },
											px: { xs: 2, md: 2.5, lg: 3 },
											mt: -8,
											mb: -2,
											zIndex: 100,
										}}>
										<Typography
											textAlign='justify'
											fontSize={"20px"}
											color={"white"}
											sx={{
												fontSize: {
													xs: "12px",
													md: "13px",
													mdPlus: "14px",
													lg: "14px",
													xl: "16px",
												},
											}}>
											Pictured from left to right: Liam Kennedy, Natalie Potapov, Jarrett
											Anderson, Michael McCooey, Jeff Zhou, William Freeman, and Canek
											Fuentes-Hernandez (Advisor)
										</Typography>
									</Box>
								</TrailAlt>
							</Grid>
							<Grid
								item
								xs={12}
								md={12}
								lgPlus={12}
								lgPlusPlus={12}
								xl={12}
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<TrailAlt open={open} delay={250}>
									<Box
										className={boxStyles.lightGreyBox}
										sx={{
											borderRadius: 2,
											py: { xs: 1, lg: 3, xl: 4 },
											px: { xs: 2, md: 4, lg: 5, xl: 6 },
											// py: { xs: 1, md: 2, lg: 2 },
											// px: { xs: 2, md: 2, mdPlus: 3, lg: 4 },
											mt: { md: -2, lg: -2, lgPlus: -2 },
										}}>
										<Typography
											textAlign='justify'
											fontSize={"20px"}
											color={"white"}
											sx={{
												fontSize: {
													xs: "12px",
													md: "13px",
													mdPlus: "16px",
													lg: "16px",
													lgPlus: "16px",
													lgPlusPlus: "18px",
													xl: "20px",
												},
												mb: 1,
											}}>
											To create the MACS, we allocated the responsibilities of the project into
											three teams: Module, Controller, and Application. Each team had two main
											members, and collaboration between teams was frequent. The Module team
											designed and assembled the modules, the Controller System team was designed
											and implemented the controller software, and the Application team was
											designed and implemented the desktop application. Throughout the project the
											team was advised by Professor Canek Fuentes-Hernandez.
										</Typography>
										<Grid
											container
											spacing={2}
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}>
											<Grid item xs={4}>
												<Card
													elevation={4}
													className={boxStyles.whiteBox}
													sx={{
														position: "relative",
														display: "flex",
														flex: 1,
													}}>
													<CardContent
														sx={{
															display: "flex",
															flex: 1,
															flexDirection: { xs: "row", md: "column" },
															position: "relative",
															alignItems: "center",
															justifyContent: "center",
															alignSelf: "stretch",
															p: "12px !important",
															backgroundColor: theme.palette.hexagonYellowAlt.main,
															transition: "all ease-in 0.25s",
															"&:hover": {
																backgroundColor: theme.palette.hexagonYellow.main,
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
																	fontSize={{
																		xs: "16px",
																		md: "16px",
																		mdPlus: "16px",
																		lg: "18px",
																		xl: "24px",
																	}}
																	fontWeight='bold'
																	textAlign='center'
																	color='backgroundBlack.main'
																	fontFamily='Gilroy-Bold'>
																	MODULE
																</Typography>
																<Typography
																	color='text.secondary'
																	textAlign='center'
																	fontSize={{
																		xs: "14px",
																		md: "14px",
																		mdPlus: "16px",
																		lg: "16px",
																		xl: "18px",
																	}}>
																	Michael McCooey E'23
																</Typography>
																<Typography
																	color='text.secondary'
																	textAlign='center'
																	fontSize={{
																		xs: "14px",
																		md: "14px",
																		mdPlus: "16px",
																		lg: "16px",
																		xl: "18px",
																	}}>
																	Jeff Zhou E'23
																</Typography>
															</Grid>
														</Grid>
													</CardContent>
												</Card>
											</Grid>
											<Grid item xs={4}>
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
															flex: 1,
															flexDirection: { xs: "row", md: "column" },
															position: "relative",
															alignItems: "center",
															justifyContent: "center",
															alignSelf: "stretch",
															p: "12px !important",
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
																	fontSize={{
																		xs: "16px",
																		md: "16px",
																		mdPlus: "16px",
																		lg: "18px",
																		xl: "24px",
																	}}
																	fontWeight='bold'
																	textAlign='center'
																	color='backgroundBlack.main'
																	fontFamily='Gilroy-Bold'>
																	CONTROLLER
																</Typography>
																<Typography
																	color='text.secondary'
																	textAlign='center'
																	fontSize={{
																		xs: "14px",
																		md: "14px",
																		mdPlus: "16px",
																		lg: "16px",
																		xl: "18px",
																	}}>
																	Liam Kennedy E'23
																</Typography>
																<Typography
																	color='text.secondary'
																	textAlign='center'
																	fontSize={{
																		xs: "14px",
																		md: "14px",
																		mdPlus: "16px",
																		lg: "16px",
																		xl: "18px",
																	}}>
																	Natalie Potapov E'23
																</Typography>
															</Grid>
														</Grid>
													</CardContent>
												</Card>
											</Grid>
											<Grid item xs={4}>
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
															flex: 1,
															flexDirection: { xs: "row", md: "column" },
															position: "relative",
															alignItems: "center",
															justifyContent: "center",
															alignSelf: "stretch",
															p: "12px !important",
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
																	fontSize={{
																		xs: "16px",
																		md: "16px",
																		mdPlus: "16px",
																		lg: "18px",
																		xl: "24px",
																	}}
																	fontWeight='bold'
																	textAlign='center'
																	color='backgroundBlack.main'
																	fontFamily='Gilroy-Bold'>
																	APPLICATION
																</Typography>
																<Typography
																	color='text.secondary'
																	textAlign='center'
																	fontSize={{
																		xs: "14px",
																		md: "14px",
																		mdPlus: "16px",
																		lg: "16px",
																		xl: "18px",
																	}}>
																	Jarrett Anderson E'23
																</Typography>
																<Typography
																	color='text.secondary'
																	textAlign='center'
																	fontSize={{
																		xs: "14px",
																		md: "14px",
																		mdPlus: "16px",
																		lg: "16px",
																		xl: "18px",
																	}}>
																	William Freeman E'23
																</Typography>
															</Grid>
														</Grid>
													</CardContent>
												</Card>
											</Grid>
										</Grid>
									</Box>
								</TrailAlt>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
		</>
	);
};
export default PageOne;
