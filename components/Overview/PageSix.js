import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardActionArea, CardMedia, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import ImageCaption from "../ImageCaption";
import BlurHashedImage from "../Partials/BlurHashedImage";

const PageSix = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md"))
		? 1800 / window.innerHeight >= 2.4
			? 1800 / window.innerHeight
			: 2.4
		: 1;
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const getModuleImageHeights = () => {
		if (isMD) {
			return 100;
		} else if (isMDPlus) {
			return 125;
		} else if (isLG) {
			return 150;
		} else if (isXL) {
			return 150;
		} else {
			return 150;
		}
	};

	const getControllerImageHeights = () => {
		if (isMD) {
			return 175;
		} else if (isMDPlus) {
			return 200;
		} else if (isLG) {
			return 225;
		} else if (isXL) {
			return 225;
		} else {
			return 225;
		}
	};
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div className={isMD ? styles.slopeBeginMobileSix : styles.slopeBegin} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${isMD ? styles.slopeEndMobileSix : styles.slopeEnd} ${styles[gradient]}`} />
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
					sx={{
						display: { xs: "none", md: "flex" },
						justifyContent: "center",
						alignItems: "center",
						zIndex: 1000000,
					}}>
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
										fontSize={{ xs: "3rem", md: "2.5rem", mdPlus: "3rem", lg: "4rem" }}
										lineHeight={1.1}
										mb={{ xs: "10px", lg: "20px" }}>
										Modular
									</Typography>
									<Typography
										className={styles.MACSText}
										fontFamily='Gilroy-Heavy'
										fontSize={{ xs: "3rem", md: "2.5rem", mdPlus: "3rem", lg: "4rem" }}
										lineHeight={1.1}
										mb={{ xs: "10px", lg: "20px" }}>
										Accessible
									</Typography>
									<Typography
										className={styles.MACSText}
										fontFamily='Gilroy-Heavy'
										fontSize={{ xs: "3rem", md: "2.5rem", mdPlus: "3rem", lg: "4rem" }}
										lineHeight={1.1}
										mb={{ xs: "10px", lg: "20px" }}>
										Controller
									</Typography>
									<Typography
										className={styles.MACSText}
										fontFamily='Gilroy-Heavy'
										fontSize={{ xs: "3rem", md: "2.5rem", mdPlus: "3rem", lg: "4rem" }}
										lineHeight={1.1}
										mb={{ xs: "10px", lg: "20px" }}>
										System
									</Typography>
									<Typography
										color='white'
										fontFamily={"bitcount-mono-single-line-ci"}
										fontSize={{ xs: "4rem", md: "3.5rem", mdPlus: "4rem", lg: "5rem" }}
										lineHeight={1}
										mb={{ xs: 0, lg: 2 }}>
										MACS
									</Typography>
								</Box>
							</Box>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									mt: 2,
									p: { xs: 2, lg: 3 },
								}}>
								<Typography
									textAlign='justify'
									sx={{
										fontSize: {
											xs: "14px",
											md: "15px",
											mdPlus: "16px",
											lg: "18px",
											xl: "20px",
										},
									}}
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
								<Grid item xs={12} md={12} lg={8}>
									<Box
										className={boxStyles.darkGreyBox}
										onClick={onClick}
										sx={{
											p: 2,
											my: 1,
											width: "93%",
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
													fontSize={{
														xs: "2rem",
														md: "2.25rem",
														mdPlus: "2.5rem",
														lg: "3rem",
													}}
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
														<Card
															elevation={4}
															sx={{ display: "flex", position: "relative" }}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/central-hub.jpg?tr=h-1500'
																hash='LILqC9xu~VE1M{WWE1M{R3M{9bs.'
																alt='final central hub module'
																height={getModuleImageHeights()}
															/>
														</Card>
														<ImageCaption caption={"Central Hub"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{ display: "flex", position: "relative" }}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/button-module.jpg?tr=h-1500'
																hash='LNLgkQjr~Ut7%Mt7M{f6=^RjE2jY'
																alt='final button module'
																height={getModuleImageHeights()}
															/>
														</Card>
														<ImageCaption caption={"Button Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{ display: "flex", position: "relative" }}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/switch-module.jpg?tr=h-1500'
																hash='LJM7V_t6~VbIxtogE1WB-ORj9aWA'
																alt='final switch module'
																height={getModuleImageHeights()}
															/>
														</Card>
														<ImageCaption caption={"Switch Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{ display: "flex", position: "relative" }}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/joystick-module.jpg?tr=h-1500'
																hash='LPLqC8Rj~Vof-;tRRjju=@RjIpjY'
																alt='final joystick module'
																height={getModuleImageHeights()}
															/>
														</Card>
														<ImageCaption caption={"Joystick Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{ display: "flex", position: "relative" }}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/slider-module.jpg?tr=h-1500'
																hash='LIMQbIjE~VkDxut8RjRj^hNG9as.'
																alt='final slider module'
																height={getModuleImageHeights()}
															/>
														</Card>
														<ImageCaption caption={"Slider Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{ display: "flex", position: "relative" }}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/dial-module.jpg?tr=h-1500'
																hash='LOL;Kdax~VkC%Mt8Rjf6=^RjE3o0'
																alt='final dial module'
																height={getModuleImageHeights()}
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
									md={12}
									lg={4}
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
											width: "90%",
										}}>
										<Grid
											container
											spacing={2}
											sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
											<Grid
												item
												xs={1}
												lg={2}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													alignSelf: "stretch",
												}}>
												<Typography
													color='white'
													fontFamily={"Gilroy-Heavy"}
													fontSize={{
														xs: "2rem",
														md: "2.25rem",
														mdPlus: "2.5rem",
														lg: "3rem",
													}}
													sx={{
														transform: "rotate(-90deg)",
														textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
													}}>
													Controller
												</Typography>
											</Grid>
											<Grid item xs={11} lg={10}>
												<Grid container spacing={2}>
													<Grid item xs={6} lg={12}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																alignSelf: "stretch",
																position: "relative",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/macs-config-3.jpg?tr=h-1500'
																hash='LIKdYr_N},t7%Mi^V?Ri}*kDI]R*'
																alt='macs configuration 1'
																height={getControllerImageHeights()}
															/>
														</Card>
													</Grid>
													<Grid item xs={6} lg={12}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																alignSelf: "stretch",
																position: "relative",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/macs-config-4.jpg?tr=h-1500'
																hash='LKJk4M~p==%0S$s8M{e-^Gx[JDR+'
																alt='macs configuration 2'
																height={getControllerImageHeights()}
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
										xs={0.75}
										lg={2}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											alignSelf: "stretch",
										}}>
										<Typography
											color='backgroundBlack.main'
											fontFamily={"Gilroy-Heavy"}
											fontSize={{
												xs: "2rem",
												md: "2.25rem",
												mdPlus: "2.5rem",
												lg: "3rem",
											}}
											sx={{
												transform: "rotate(-90deg)",
												textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
											}}>
											App
										</Typography>
									</Grid>
									<Grid item xs={11.25} lg={10}>
										<Grid container spacing={{ xs: 0.5, md: 0.5, lg: 2 }}>
											<Grid item xs={12} md={4} sx={{ position: "relative" }}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/macs-application.png?tr=h-1500'
														hash='L39jT61j00{e8|iwx=k;0f^d[J5Y'
														alt='macs application'
														height={"auto"}
													/>
												</Card>
												<ImageCaption caption={"User Interface"} light={false} />
											</Grid>
											<Grid item xs={12} md={4} sx={{ position: "relative" }}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/joystick-config.png?tr=h-1500'
														hash='L3A-Fx0E8w?Zm1GO$TML00rD*0%D'
														alt='application joystick configuration'
														height={"auto"}
													/>
												</Card>
												<ImageCaption caption={"Joystick Configuration"} light={false} />
											</Grid>
											<Grid item xs={12} md={4} sx={{ position: "relative" }}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/button-config.png?tr=h-1500'
														hash='L6E2qc3WBV=^00IA9YVc34,G~X-5'
														alt='application button configuration'
														height={"auto"}
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
						left: { xs: "0%", md: "27%" },
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
							size={isLG ? { x: 45, y: 45 } : { x: 50, y: 50 }}
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
						height={"20vmin"}
						width={"20vmin"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isLG ? { x: 45, y: 45 } : { x: 50, y: 50 }}
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
