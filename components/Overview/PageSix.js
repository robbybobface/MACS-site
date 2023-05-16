import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardActionArea, CardMedia, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import ImageCaption from "../ImageCaption";

const PageSix = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md"))
		? 1611.2 / screen.height >= 1.9
			? 1611.2 / screen.height
			: 1.9
		: 1;
	console.log(newFactor);
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div
					className={
						useMediaQuery(theme.breakpoints.down("md")) ? styles.slopeBeginMobileSix : styles.slopeBegin
					}
				/>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div
					className={`${
						useMediaQuery(theme.breakpoints.down("md")) ? styles.slopeEndMobileSix : styles.slopeEnd
					} ${styles[gradient]}`}
				/>
			</ParallaxLayer>
			<ParallaxLayer
				className={`noselect`}
				onClick={onClick}
				offset={offset}
				speed={0.3}
				style={{ zIndex: 100 }}
				factor={newFactor}>
				<Container
					maxWidth='xl'
					sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000000 }}>
					<Grid container spacing={2}>
						<Grid
							item
							xs={12}
							md={4}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly",
								alignItems: "center",
							}}>
							<Box
								sx={{
									borderRadius: 2,
									p: 3,
									boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
									background:
										"linear-gradient(315deg, rgba(192,0,69,0.65) 0%, rgba(255,184,0,0.65) 33%, rgba(160,232,134,0.65) 67%, rgba(0,135,177,0.65) 100%);",
									backdropFilter: "blur( 7px );",
									WebkitBackdropFilter: "blur( 7px );",
								}}>
								<Box
									sx={{
										borderRadius: 2,
										p: 3,
										boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
										backgroundColor: "rgba( 72, 88, 99, 0.8 )",
										backdropFilter: "blur( 7px );",
										WebkitBackdropFilter: "blur( 7px );",
									}}>
									<Typography
										className={styles.MACSText}
										fontFamily='Gilroy-Heavy'
										fontSize={{ xs: "3rem", md: "4rem" }}
										lineHeight={1.1}
										mb='20px'>
										Modular
									</Typography>
									<Typography
										className={styles.MACSText}
										fontFamily='Gilroy-Heavy'
										fontSize={{ xs: "3rem", md: "4rem" }}
										lineHeight={1.1}
										mb='20px'>
										Accessible
									</Typography>
									<Typography
										className={styles.MACSText}
										fontFamily='Gilroy-Heavy'
										fontSize={{ xs: "3rem", md: "4rem" }}
										lineHeight={1.1}
										mb='20px'>
										Controller
									</Typography>
									<Typography
										className={styles.MACSText}
										fontFamily='Gilroy-Heavy'
										fontSize={{ xs: "3rem", md: "4rem" }}
										lineHeight={1.1}
										mb='20px'>
										System
									</Typography>
									<Typography
										color='white'
										fontFamily={"bitcount-mono-single-line-ci"}
										fontSize={{ xs: "4rem", md: "5rem" }}
										lineHeight={1}
										mb={2}>
										MACS
									</Typography>
								</Box>
							</Box>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									mt: 2,
									p: { xs: 2, md: 3 },
								}}>
								<Typography
									textAlign='justify'
									sx={{ fontSize: { xs: "16px", md: "20px" } }}
									color={"white"}>
									With 5 distinct input modules, and a central hub users can physically build the
									controller that is perfect for them. Then with our software, users can further
									configure each module to emulate whatever action they want.
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							md={8}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly",
								alignItems: "center",
								minHeight: "725px",
							}}>
							<Grid
								container
								spacing={2}
								sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<Grid item xs={12} md={8}>
									<Box
										className={boxStyles.darkGreyBox}
										onClick={onClick}
										sx={{
											p: 2,
											my: 1,
										}}>
										<Grid container spacing={2}>
											<Grid
												item
												xs={1}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													alignSelf: "stretch",
												}}>
												<Typography
													color='white'
													fontFamily={"Gilroy-Heavy"}
													fontSize={{ xs: "2rem", md: "3rem" }}
													sx={{
														transform: "rotate(-90deg)",
														textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
													}}>
													Modules
												</Typography>
											</Grid>
											<Grid item xs={11}>
												<Grid container spacing={2}>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card elevation={4} sx={{ display: "flex" }}>
															<CardMedia
																component='img'
																alt='final central hub module'
																height='150'
																sx={{ objectFit: "cover" }}
																image='/central-hub.jpg'
															/>
														</Card>
														<ImageCaption caption={"Central Hub"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card elevation={4} sx={{ display: "flex" }}>
															<CardMedia
																component='img'
																alt='final button module'
																height='150'
																sx={{ objectFit: "cover" }}
																image='/button-module.jpg'
															/>
														</Card>
														<ImageCaption caption={"Button Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card elevation={4} sx={{ display: "flex" }}>
															<CardMedia
																component='img'
																alt='final switch module'
																height='150'
																sx={{ objectFit: "cover" }}
																image='/switch-module.jpg'
															/>
														</Card>
														<ImageCaption caption={"Switch Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card elevation={4} sx={{ display: "flex" }}>
															<CardMedia
																component='img'
																alt='final joystick module'
																height='150'
																sx={{ objectFit: "cover" }}
																image='/joystick-module.jpg'
															/>
														</Card>
														<ImageCaption caption={"Joystick Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card elevation={4} sx={{ display: "flex" }}>
															<CardMedia
																component='img'
																alt='final slider module'
																height='150'
																sx={{ objectFit: "cover" }}
																image='/slider-module.jpg'
															/>
														</Card>
														<ImageCaption caption={"Slider Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card elevation={4} sx={{ display: "flex" }}>
															<CardMedia
																component='img'
																alt='final dial module'
																height='150'
																sx={{ objectFit: "cover" }}
																image='/dial-module.jpg'
															/>
														</Card>
														<ImageCaption caption={"Dial Module"} light={true} />
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Box>
								</Grid>
								<Grid
									item
									xs={12}
									md={4}
									sx={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Box
										className={boxStyles.lightGreyBox}
										onClick={onClick}
										sx={{
											p: 2,
											my: 1,
										}}>
										<Grid
											container
											spacing={2}
											sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
											<Grid
												item
												xs={2}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													alignSelf: "stretch",
												}}>
												<Typography
													color='white'
													fontFamily={"Gilroy-Heavy"}
													fontSize={{ xs: "2.5rem", md: "3rem" }}
													sx={{
														transform: "rotate(-90deg)",
														textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
													}}>
													Controller
												</Typography>
											</Grid>
											<Grid item xs={10}>
												<Grid container spacing={2}>
													<Grid item xs={12}>
														<Card
															elevation={4}
															sx={{ display: "flex", alignSelf: "stretch" }}>
															<CardMedia
																component='img'
																alt='microsoft adaptive controller'
																height='200'
																image='/macs-config-3.jpg'
															/>
														</Card>
													</Grid>
													<Grid item xs={12}>
														<Card
															elevation={4}
															sx={{ display: "flex", alignSelf: "stretch" }}>
															<CardMedia
																component='img'
																alt='macs configuration 2'
																height='200'
																image='/macs-config-4.jpg'
															/>
														</Card>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Box>
								</Grid>
							</Grid>
							<Box
								className={boxStyles.whiteBox}
								onClick={onClick}
								sx={{
									p: 2,
									my: 1,
								}}>
								<Grid container spacing={2}>
									<Grid
										item
										xs={2}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											alignSelf: "stretch",
										}}>
										<Typography
											color='backgroundBlack.main'
											fontFamily={"Gilroy-Heavy"}
											fontSize={{ xs: "2.5rem", md: "3rem" }}
											sx={{
												transform: "rotate(-90deg)",
												textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
											}}>
											App
										</Typography>
									</Grid>
									<Grid item xs={10}>
										<Grid container spacing={2}>
											<Grid item xs={12} md={4} sx={{ position: "relative" }}>
												<Card elevation={4} sx={{ display: "flex" }}>
													<CardMedia
														component='img'
														alt='macs-application'
														height='auto'
														sx={{ objectFit: "contain" }}
														image='/macs-application.png'
													/>
												</Card>
												<ImageCaption caption={"User Interface"} light={false} />
											</Grid>
											<Grid item xs={12} md={4} sx={{ position: "relative" }}>
												<Card elevation={4} sx={{ display: "flex" }}>
													<CardMedia
														component='img'
														alt='application joystick configuration'
														height='auto'
														sx={{ objectFit: "contain" }}
														image='/joystick-config.png'
													/>
												</Card>
												<ImageCaption caption={"Joystick Configuration"} light={false} />
											</Grid>
											<Grid item xs={12} md={4} sx={{ position: "relative" }}>
												<Card elevation={4} sx={{ display: "flex" }}>
													<CardMedia
														component='img'
														alt='application button configuration'
														height='auto'
														sx={{ objectFit: "contain" }}
														image='/button-config.png'
													/>
												</Card>
												<ImageCaption caption={"Button Configuration"} light={false} />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.2} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						left: "20%",
						bottom: { xs: "0%", md: "25%" },
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-21'
						height={"25vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-21`}
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
			<ParallaxLayer offset={offset} speed={0.35} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotating}
					sx={{
						position: "absolute",
						left: { xs: "-5%", md: "2%" },
						bottom: "10%",
						transform: "rotate(154deg)",
					}}>
					<HexGrid
						id='module-grid-14'
						height={"20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-22`}
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
			<ParallaxLayer offset={offset} speed={-0.01} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingSlow}
					sx={{ position: "absolute", right: "-5%", bottom: "65%", transform: "rotate(98deg)" }}>
					<HexGrid
						id='module-grid-23'
						height={useMediaQuery(theme.breakpoints.down("md")) ? "32vh" : "40vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-23`}
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
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						left: { xs: "-10%", md: "0" },
						right: { md: "30%" },
						bottom: { xs: "-80%", md: "6%" },
						transform: "rotate(72deg)",
					}}>
					<HexGrid
						id='module-grid-24'
						height={"15vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 55, y: 55 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-24`}
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
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{ position: "absolute", left: { xs: "0%", md: "3%" }, top: "0%", transform: "rotate(34deg)" }}>
					<HexGrid
						id='module-grid-25'
						height={"20vh"}
						width={"20vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 55, y: 55 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-25`}
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
			<ParallaxLayer offset={offset} speed={-0.2} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingFast}
					sx={{
						position: "absolute",
						right: { xs: "0%", md: "5%" },
						bottom: { xs: "-10%", md: "25%" },
						transform: "rotate(216deg)",
					}}>
					<HexGrid
						id='module-grid-26'
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
								id={`hexagon-26`}
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
		</>
	);
};

export default PageSix;
