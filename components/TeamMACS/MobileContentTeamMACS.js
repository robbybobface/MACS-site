import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import {
	Box,
	Typography,
	Container,
	Grid,
	Divider,
	useMediaQuery,
	CardContent,
	Card,
	IconButton,
	Paper,
	Button,
} from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon, Pattern } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import { animated, useTrail, to } from "@react-spring/web";
import { Grid as MauerGrid, Slug, Fade } from "mauerwerk";
import { Blurhash } from "react-blurhash";
import BlurHashedImage from "../Partials/BlurHashedImage";
import { GalleryPhotos } from "../../utils/GalleryData";
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
		config: { mass: 3, tension: 1000, friction: 100 },
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

function MobileContentTeamMACS() {
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSMMinus = useMediaQuery(theme.breakpoints.down("smMinus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isSMPlus = useMediaQuery(theme.breakpoints.down("smPlus"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isLGPlus = useMediaQuery(theme.breakpoints.down("lgPlus"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const getMaximizedSize = () => {
		if (isXS) return "100%";
		if (isXSPlus) return "100%";
		if (isSM) return "100%";
		if (isSMPlus) return "100%";
		if (isMD) return "100%";
		if (isMDPlus) return "50%";
		if (isLG) return "60%";
		if (isLGPlus) return "70%";
		if (isXL) return "75%";
		return "80%";
	};

	const getMaximizedImageHeight = () => {
		if (isXS) return "100%";
		if (isXSPlus) return "100%";
		if (isSM) return "100%";
		if (isSMPlus) return "100%";
		if (isMD) return "100%";
		if (isMDPlus) return "320px";
		if (isLG) return "385px";
		if (isLGPlus) return "460px";
		if (isXL) return "500px";
		return "520px";
	};

	return (
		<>
			<Box
				className='noselect'
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					backgroundColor: "#323232",
					overflow: "hidden",
				}}>
				<Box className={`${styles.slopeTopMobile} ${styles.purple}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffset} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					className='noselect'
					maxWidth='xl'
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 3,
						mb: { xs: 17, sm: 15, smPlus: 10 },
					}}>
					<Grid
						container
						spacing={2}
						rowGap={0}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							px: { xs: 0, md: 5 },
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
										flexDirection: "row",
										alignItems: { xs: "center", md: "flex-start" },
										justifyContent: "center",
										mb: -2,
									}}>
									<GradientText
										text='Team'
										gradient='background: rgb(255,255,255);
background: linear-gradient(125deg, rgba(255,255,255,1) 0%, rgba(200,130,255,1) 31%, rgba(143,0,255,1) 100%);'
										fontSize={{
											xs: "3.5rem",
											xsPlus: "4rem",
											smMinus: "4.5rem",
											sm: "5rem",
											mdPlus: "6rem",
											lg: "7rem",
											xl: "8rem",
										}}
										mr={2}
										mt={2}
										lineHeight='1.3'
										textAlign={{ xs: "center", md: "left" }}
									/>

									<Typography
										color='white'
										fontFamily={"bitcount-mono-single-line-ci"}
										fontSize={{
											xs: "4.25rem",
											xsPlus: "5rem",
											smMinus: "5.5rem",
											sm: "6rem",
											mdPlus: "7rem",
											lg: "8rem",
											xl: "9rem",
										}}
										my={0}
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
							}}>
							<Grid
								container
								spacing={1}
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Grid
									item
									xs={12}
									smPlus={10}
									sx={{
										position: "relative",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
									}}>
									<TrailAlt open={open} delay={150}>
										<Card
											elevation={4}
											sx={{
												display: "flex",
												position: "relative",
												justifyContent: "center",
												alignItems: "center",
												alignSelf: "stretch",
												flex: 1,
												height: { xs: "250px", xsPlus: "300px", sm: "350px", smPlus: "375px" },
												// width: "100%",
												backgroundColor: "transparent",
												zIndex: -1,
											}}>
											<BlurHashedImage
												src='https://ik.imagekit.io/5ywj5edvn/capstone-competition-10.jpeg?tr=w-1800'
												hash='data:image/png;base64,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'
												alt='macs team award photo'
												team={true}
											/>
										</Card>
									</TrailAlt>
								</Grid>
								<Grid
									item
									xs={12}
									smPlus={11.25}
									md={10}
									lg={8}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<TrailAlt open={open} delay={200}>
										<Box
											className={boxStyles.darkGreyBox}
											sx={{
												borderRadius: 2,
												py: { xs: 1, md: 2 },
												px: { xs: 2, sm: 2.5, md: 2.5, lg: 3 },
												mt: -7,
												zIndex: 100,
											}}>
											<Typography
												textAlign='justify'
												fontSize={"20px"}
												color={"white"}
												sx={{
													fontSize: {
														xs: "12px",
														xsPlus: "13px",
														sm: "14px",
														md: "13px",
														mdPlus: "13px",
														lg: "13px",
														xl: "14px",
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
									smPlus={11}
									md={12}
									lgPlus={10}
									lgPlusPlus={9}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										zIndex: 100,
									}}>
									<TrailAlt open={open} delay={250}>
										<Box
											className={boxStyles.lightGreyBox}
											sx={{
												borderRadius: 2,
												py: { xs: 1.5, smMinus: 1.5, sm: 2, md: 2, lg: 2 },
												px: { xs: 2, smMinus: 3, sm: 4, md: 2, mdPlus: 3, lg: 4 },
												mt: { md: -3, lg: -2, lgPlus: 0 },
											}}>
											<Typography
												textAlign='justify'
												fontSize={"20px"}
												color={"white"}
												sx={{
													fontSize: {
														xs: "14px",
														sm: "15px",
														smPlus: "15px",
														md: "13px",
														mdPlus: "14px",
														lg: "15px",
														xl: "16px",
													},
													mb: 1,
												}}>
												To create the MACS, we allocated the responsibilities of the project
												into three teams: Module, Controller, and Application. Each team
												comprised of two main members, and collaboration between teams was
												frequent. The Module team was responsible for the design and assembly of
												the modules, the Controller System team was responsible for the design
												and implementation of the controller software architecture, and the
												Application team was responsible for the design and implementation of
												the desktop application. Throughout the project the team was advised by
												Professor Canek Fuentes-Hernandez.
											</Typography>
											<Grid
												container
												spacing={2}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													zIndex: 100,
												}}>
												<Grid item xs={11} xsPlus={4}>
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
																<Grid item xs={12} md={12}>
																	<Typography
																		fontSize={{
																			xs: "18px",
																			xsPlus: "16px",
																			md: "16px",
																			mdPlus: "16px",
																			lg: "17px",
																			xl: "18px",
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
																			xs: "17px",
																			xsPlus: "14px",
																			md: "14px",
																			mdPlus: "14px",
																			lg: "14px",
																			xl: "14px",
																		}}>
																		Michael McCooey E'23
																	</Typography>
																	<Typography
																		color='text.secondary'
																		textAlign='center'
																		fontSize={{
																			xs: "17px",
																			xsPlus: "14px",
																			md: "14px",
																			mdPlus: "14px",
																			lg: "14px",
																			xl: "14px",
																		}}>
																		Jeff Zhou E'23
																	</Typography>
																</Grid>
															</Grid>
														</CardContent>
													</Card>
												</Grid>
												<Grid item xs={11} xsPlus={4}>
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
																<Grid item xs={12} md={12}>
																	<Typography
																		fontSize={{
																			xs: "18px",
																			xsPlus: "14px",
																			md: "14px",
																			mdPlus: "14px",
																			lg: "14px",
																			xl: "14px",
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
																			xs: "17px",
																			xsPlus: "14px",
																			md: "14px",
																			mdPlus: "14px",
																			lg: "14px",
																			xl: "14px",
																		}}>
																		Liam Kennedy E'23
																	</Typography>
																	<Typography
																		color='text.secondary'
																		textAlign='center'
																		fontSize={{
																			xs: "17px",
																			xsPlus: "14px",
																			md: "14px",
																			mdPlus: "14px",
																			lg: "14px",
																			xl: "14px",
																		}}>
																		Natalie Potapov E'23
																	</Typography>
																</Grid>
															</Grid>
														</CardContent>
													</Card>
												</Grid>
												<Grid item xs={11} xsPlus={4}>
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
																<Grid item xs={12} md={12}>
																	<Typography
																		fontSize={{
																			xs: "18px",
																			xsPlus: "14px",
																			md: "14px",
																			mdPlus: "14px",
																			lg: "14px",
																			xl: "14px",
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
																			xs: "17px",
																			xsPlus: "14px",
																			md: "14px",
																			mdPlus: "14px",
																			lg: "14px",
																			xl: "14px",
																		}}>
																		Jarrett Anderson E'23
																	</Typography>
																	<Typography
																		color='text.secondary'
																		textAlign='center'
																		fontSize={{
																			xs: "17px",
																			xsPlus: "14px",
																			md: "14px",
																			mdPlus: "14px",
																			lg: "14px",
																			xl: "14px",
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
					</Grid>
				</Container>
				<Box className={`${styles.slopeBottomMobile} ${styles.purpleAlt}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeBottomMobileOffset} ${styles.white}`} sx={{ zIndex: 1 }} />
			</Box>
		</>
	);
}

export default MobileContentTeamMACS;
