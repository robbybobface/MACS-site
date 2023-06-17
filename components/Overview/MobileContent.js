import React, { useState, useEffect, useRef, memo, use } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import {
	Box,
	Typography,
	Container,
	Grid,
	Divider,
	useMediaQuery,
	Card,
	CardContent,
	CardMedia,
	Button,
	CardActionArea,
} from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import { animated, useTrail, to } from "@react-spring/web";
import { MACSFlowchart } from "../../assets/macs_flowchart";
import ImageCaption from "../ImageCaption";
import { MACSLogoGrey } from "../../assets/macs_logo_grey";
import { MACSLogoBlue } from "../../assets/macs_logo_light_blue";
import { HexagonsAltTwo } from "../../utils/Hexagons";
import {
	getWidthOffset,
	getHeightOffset,
	gridScaler,
	ModuleSVG,
	getElevation,
	getModuleBackgroundColor,
	GeneratedHexagon,
} from "../../utils/HelperFunctions";
import PageTenMobile from "./PageTenMobile";
import BlurHashedImage from "../Partials/BlurHashedImage";

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

const MobileContent = ({ offset, gradient, onClick, router }) => {
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const getSolutionImageHeights = () => {
		if (isXS) {
			return 200;
		} else if (isXSPlus) {
			return 200;
		} else if (isSM) {
			return 250;
		} else if (isMD) {
			return 300;
		} else {
			return 350;
		}
	};

	const getModuleImageHeight = useMediaQuery("(min-width: 0px)") && useMediaQuery("(max-width: 600px)") ? 150 : 200;

	const getFlowchartWidth = () => {
		if (isXS) {
			return "90vmin";
		} else if (isXSPlus) {
			return "90vmin";
		} else if (isSM) {
			return "55vmax";
		} else if (isMD) {
			return "80vmax";
		} else {
			return "43vmax";
		}
	};

	const getBlueLogoHeight = () => {
		if (isXS) {
			return "16vmax";
		} else if (isXSPlus) {
			return "16vmax";
		} else if (isSM) {
			return "21vmax";
		} else if (isMD) {
			return "24vmax";
		} else {
			return "44vmax";
		}
	};

	const getGreyLogoHeight = () => {
		if (isXS) {
			return "13vmax";
		} else if (isXSPlus) {
			return "17vmax";
		} else if (isSM) {
			return "21vmax";
		} else if (isMD) {
			return "24vmax";
		} else {
			return "44vmax";
		}
	};

	const getPriceHexagonHeight = () => {
		if (isXS) {
			return "22vmax";
		} else if (isXSPlus) {
			return "22vmax";
		} else if (isSM) {
			return "25vmax";
		} else if (isMD) {
			return "27vmax";
		} else {
			return "30vmax";
		}
	};

	const getFutureHexagonHeights = (size) => {
		switch (size) {
			case "normal":
				if (isXS) {
					return "18vmax";
				} else if (isXSPlus) {
					return "18vmax";
				} else if (isSM) {
					return "22vmax";
				} else if (isMD) {
					return "24vmax";
				} else {
					return "27vmax";
				}
			case "small":
				if (isXS) {
					return "15vmax";
				} else if (isXSPlus) {
					return "15vmax";
				} else if (isSM) {
					return "19vmax";
				} else if (isMD) {
					return "21vmax";
				} else {
					return "24vmax";
				}
			case "xs":
				if (isXS) {
					return "15vmax";
				} else if (isXSPlus) {
					return "15vmax";
				} else if (isSM) {
					return "19vmax";
				} else if (isMD) {
					return "21vmax";
				} else {
					return "24vmax";
				}
			default:
				return "18vmax";
		}
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
				<Box className={`${styles.slopeTopMobile} ${styles.blue}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffset} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					className='noselect'
					maxWidth='xl'
					sx={{ mb: { xs: 6, md: 0 }, px: { xs: 2, smMinus: 10 }, zIndex: 3 }}>
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
							mt: { xs: 0, md: 0 },
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
									fontSize={{
										xs: "2.5rem",
										xsPlus: "2.6rem",
										smMinus: "2.7rem",
										sm: "3rem",
										md: "7.5rem",
									}}
									textAlign='center'
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
									<Box
										className={boxStyles.darkGreyBox}
										sx={{
											borderRadius: 2,
											py: { xs: 1, md: 4 },
											px: { xs: 2, md: 6 },
										}}>
										<Typography
											textAlign='justify'
											fontSize={"20px"}
											color={"white"}
											sx={{ fontSize: { xs: "14px", smMinus: "15px", sm: "16px", md: "20px" } }}>
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
									xs={12}
									sm={6}
									md={6}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Box
										className={boxStyles.whiteBox}
										sx={{
											maxWidth: 290,
											minHeight: { xs: 175, md: 200 },
											py: { xs: 1, md: 2 },
											px: { xs: 3, md: 4 },
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
												fontSize={{ xs: "1.75rem", md: "2.5rem" }}
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
												fontSize={{ xs: "1.75rem", md: "2.5rem" }}
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
												fontSize={{ xs: "1.75rem", md: "2.5rem" }}
												sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
												Customizability
											</Typography>
											<Divider sx={{ borderColor: "hexagonGreenFull.main", borderWidth: 2 }} />
										</Box>
									</Box>
								</Grid>
								<Grid
									item
									xs={12}
									sm={6}
									md={6}
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
											px: { xs: 4, sm: 2, md: 6 },
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-evenly",
											alignItems: "center",
											m: 0,
										}}>
										<Typography
											fontFamily={"Gilroy-Bold"}
											fontSize={"30px"}
											sx={{ mb: 2, textAlign: "center" }}>
											2.2 Billion Gamers
										</Typography>
										<Typography
											fontFamily={"Gilroy-Bold"}
											fontSize={"30px"}
											sx={{ textAlign: "center" }}>
											23% are disabled
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{/* </Trail> */}
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.greenBlue}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 3,
						mt: -20,
						mb: -5,
						px: { xs: 2, smMinus: 8 },
					}}>
					<Box
						className={boxStyles.whiteBox}
						sx={{
							width: { xs: "100%", md: "85%" },
							minHeight: 700,
							px: { xs: 2, md: 0 },
						}}>
						<GradientText
							text='Problem Formulation'
							gradient='linear-gradient(170deg, rgba(112,130,143,1) 0%, rgba(50,50,50,1) 100%)'
							onClick={onClick}
							lineHeight='1.2'
							textAlign='center'
							fontSize={{
								xs: "2.5rem",
								xsPlus: "2.6rem",
								smMinus: "2.7rem",
								sm: "3rem",
								md: "7.5rem",
							}}
							width='100%'
							pt={1}
						/>
						<Grid
							container
							spacing={4}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "flex-start",
								px: { xs: 0, md: 6 },
								pb: 6,
							}}>
							<Grid item xs={12}>
								<Typography
									color='backgroundBlack.main'
									sx={{
										fontSize: {
											xs: "14px",
											xsPlus: "15px",
											smMinus: "16px",
											sm: "16px",
											md: "20px",
										},
										px: { xs: 0, md: 4 },
										mt: { xs: 1, md: 0 },
									}}
									textAlign='justify'>
									Despite gaming being one of the biggest emerging markets of the past few decades,
									there still remain holes in the market, specifically concerning controller options.
									Most controllers sold today give little to no regard for accessibility,
									reparability, and configurability.
								</Typography>
							</Grid>
							<Grid item xs={12} md={4} sx={{ display: "flex", alignSelf: "stretch" }}>
								<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
									<CardContent
										sx={{
											backgroundColor: "#70828f77",
											transition: "all ease-in 0.25s",
											"&:hover": {
												backgroundColor: "#70828fAA",
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
										<Typography
											color='text.secondary'
											textAlign='justify'
											sx={{
												fontSize: {
													xs: "14px",
													xsPlus: "15px",
													smMinus: "16px",
													sm: "16px",
													md: "20px",
												},
											}}>
											For would-be gamers with motor disabilities, controller usability poses a
											significant barrier to entry. Most gamers can relate to the frustration of
											feeling limited by their controller; unfortunately, this is a struggle that
											disabled gamers face on a daily basis. Due to a lack of accessible
											controller alternatives, these gamers are inclined to give up on gaming
											entirely. For example, a gamer with a Spinal Cord Injury (SCI) may find it
											challenging to depress a trigger and press a button simultaneously using
											Sony PlayStation's DualSense controller. This severely limits what can be
											done in a game, since most modern games require multiple concurrent inputs
											at most times.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={4} sx={{ display: "flex", alignSelf: "stretch" }}>
								<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
									<CardContent
										sx={{
											backgroundColor: "#70828f77",
											transition: "all ease-in 0.25s",
											"&:hover": {
												backgroundColor: "#70828fAA",
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
										<Typography
											color='text.secondary'
											textAlign='justify'
											sx={{
												fontSize: {
													xs: "14px",
													xsPlus: "15px",
													smMinus: "16px",
													sm: "16px",
													md: "20px",
												},
											}}>
											Video game controllers comprise several components and inputs. In many
											instances of failure, proprietary controllers were mostly functional save
											for one critical piece. For instance, the Nintendo Switch is notorious for
											having faulty joy-cons, causing repair facilities to need to repair
											thousands of Joy-Cons… in a single week. Like the Nintendo Switch, most
											controllers are not designed to be durable or easily reparable. In most
											cases, non-functioning controllers have to be sent to designated repair
											facilities and only if the user purchased a warranty. As a result, broken
											controllers are either sent in for expensive third-party repairs or thrown
											out, even though most components are completely fine.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={4} sx={{ display: "flex", alignSelf: "stretch" }}>
								<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
									<CardContent
										sx={{
											backgroundColor: "#70828f77",
											transition: "all ease-in 0.25s",
											"&:hover": {
												backgroundColor: "#70828fAA",
											},
										}}>
										<Typography
											gutterBottom
											component='div'
											fontSize='24px'
											fontWeight='bold'
											fontFamily='Gilroy-Bold'>
											Configuability
										</Typography>
										<Typography
											color='text.secondary'
											textAlign='justify'
											sx={{
												fontSize: {
													xs: "14px",
													xsPlus: "15px",
													smMinus: "16px",
													sm: "16px",
													md: "20px",
												},
											}}>
											The problem is not necessarily that video games demand too much of the user,
											but also that the user is limited by their physical interaction with the
											game. Ultimately, this is because traditional controllers have no means of
											adapting to the needs of their users. Because controllers are designed with
											a static arrangement of inputs and a fixed set of input types, they can’t be
											customized to cater to each user individually. While many video games allow
											users to remap inputs in software, it is certainly not universal, and the
											inputs are usually restricted to specific mappings. This can sometimes be a
											hinderance in games where the layout of the controller is ill-suited to the
											game or the user.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Box>
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.yellowGreen}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: { xs: "column", md: "row" },
						zIndex: 3,
						mb: -5,
						px: { xs: 2, smMinus: 10 },
					}}>
					<GradientText
						text='Existing Solutions'
						gradient='linear-gradient(161deg, rgba(94,196,176,1) 0%, rgba(255,190,0,1) 100%)'
						onClick={onClick}
						fontSize={{
							xs: "2.5rem",
							xsPlus: "2.6rem",
							smMinus: "2.7rem",
							sm: "3rem",
							md: "7.5rem",
						}}
						textAlign='center'
						lineHeight={1.3}
						mb={{ xs: 3, md: 0 }}
					/>
					<Box
						className={boxStyles.darkGreyBox}
						sx={{
							width: "100%",
						}}>
						<Grid
							container
							spacing={{ xs: 2, md: 4 }}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "flex-start",
								px: { xs: 2, md: 6 },
								py: { xs: 2, md: 4 },
							}}>
							<Grid item xs={12}>
								<Typography
									color='white'
									textAlign='justify'
									sx={{
										px: { xs: 0, md: 4 },
										fontSize: {
											xs: "14px",
											xsPlus: "15px",
											smMinus: "16px",
											sm: "16px",
											md: "20px",
										},
									}}>
									With the release of the Xbox Adaptive Controller in 2018 Microsoft has been almost
									the sole provider of accessible controllers for disabled gamers. Sony is also
									working on their accessible controller, codenamed Project Leonardo, which is
									scheduled to be released in 2024. Despite these positive developments, more can
									still be done to enable accessibility in these controllers. Whereas both of these
									controllers still suffer from the same rigid form factors that most modern
									controllers conform to. And the number of inputs are still limited and the supported
									input types are restricted by traditional controllers.
								</Typography>
							</Grid>
							<Grid item xs={12} md={6}>
								<Card
									elevation={4}
									sx={{ display: "flex", alignSelf: "stretch", position: "relative" }}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/xbox-adaptive-controller.png'
										hash='LNRC[6E1-;-;IVM{%Mt7~qt7WBRj'
										alt='xbox adaptive controller'
										height={getSolutionImageHeights()}
									/>
								</Card>
							</Grid>
							<Grid item xs={12} md={6}>
								<Card
									elevation={4}
									sx={{ display: "flex", alignSelf: "stretch", position: "relative" }}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/project-leonardo.jpg'
										hash='LNR:KPWA_2a$xuofoej[~qog9FWA'
										alt="sony's project leonardo"
										height={getSolutionImageHeights()}
									/>
								</Card>
							</Grid>
						</Grid>
					</Box>
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.yellowGreenAlt}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 3,
						mb: -8,
						px: { xs: 2, smMinus: 7 },
					}}>
					<Grid
						container
						spacing={2}
						sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
								text='Solution Proposition'
								gradient='linear-gradient(161deg, rgba(159,242,130,1) 0%, rgba(255,105,48,1) 100%)'
								onClick={onClick}
								fontSize={{
									xs: "2.5rem",
									xsPlus: "2.6rem",
									smMinus: "2.7rem",
									sm: "3rem",
									md: "7.5rem",
								}}
								textAlign={"center"}
								lineHeight={1.1}
								mb={3}
							/>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									p: { xs: 2, md: 4 },
								}}>
								<Typography
									color={"white"}
									sx={{
										fontSize: {
											xs: "14px",
											xsPlus: "15px",
											smMinus: "16px",
											sm: "16px",
											md: "20px",
										},
									}}
									textAlign='justify'>
									To address the problems of accessibility, repairability, and configurability (or
									lack thereof) in modern game controllers, we aimed to design a modular game
									controller. In doing so, we could break free from the previously stated shortcomings
									that stem from a static form factor controller. The controller would be made of a
									variable number of modules, all containing one form of input. This design will allow
									for several core design values to be achieved.
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							sm={10}
							md={7}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly",
								alignItems: "center",
								minHeight: { xs: "750px", smMinus: "650px", md: "650px" },
							}}>
							<Card
								elevation={4}
								className={boxStyles.whiteBox}
								sx={{
									maxWidth: "700px",
									mb: 1,
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
										sx={{ fontSize: { xs: "18px", md: "24px" } }}
										fontWeight='bold'
										fontFamily='Gilroy-Bold'>
										Flexibility
									</Typography>
									<Typography
										color='text.secondary'
										textAlign='justify'
										sx={{
											fontSize: {
												xs: "14px",
												xsPlus: "15px",
												smMinus: "16px",
												sm: "16px",
												md: "1rem",
											},
										}}>
										Our design will mean that modules can be arranged in any way you want. With no
										limitations on the number of modules connected, the controller is flexible in
										its size, shape, and complexity. This allows the controller to be catered to the
										user’s needs at will.
									</Typography>
								</CardContent>
							</Card>
							<Card
								elevation={4}
								className={boxStyles.whiteBox}
								sx={{
									maxWidth: "700px",
									mb: 1,
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
										sx={{ fontSize: { xs: "18px", md: "24px" } }}
										fontWeight='bold'
										fontFamily='Gilroy-Bold'>
										Customizability
									</Typography>
									<Typography
										color='text.secondary'
										textAlign='justify'
										sx={{
											fontSize: {
												xs: "14px",
												xsPlus: "15px",
												smMinus: "16px",
												sm: "16px",
												md: "1rem",
											},
										}}>
										Not only is the controller mechanically flexible, but the software associated
										with it will allow the user to fully customize their controller. After
										constructing the controller to their liking, a user can map and remap each
										module to emulate certain types of inputs. Digital to digital, analog to analog
										and even digital to analog/analog to digital translation will be possible.
									</Typography>
								</CardContent>
							</Card>
							<Card
								elevation={4}
								className={boxStyles.whiteBox}
								sx={{
									maxWidth: "700px",
									mb: 1,
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
										sx={{ fontSize: { xs: "18px", md: "24px" } }}
										fontWeight='bold'
										fontFamily='Gilroy-Bold'>
										Accessibility
									</Typography>
									<Typography
										color='text.secondary'
										textAlign='justify'
										sx={{
											fontSize: {
												xs: "14px",
												xsPlus: "15px",
												smMinus: "16px",
												sm: "16px",
												md: "1rem",
											},
										}}>
										A modular controller will allow for easier development for physical modules that
										can address the needs of any gamer according to their disability if they have
										one. In conjunction with our software, both new and existing input types can be
										repurposed to address a physical need.
									</Typography>
								</CardContent>
							</Card>
							<Card
								elevation={4}
								className={boxStyles.whiteBox}
								sx={{
									maxWidth: "700px",
									mb: 1,
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
										sx={{ fontSize: { xs: "18px", md: "24px" } }}
										fontWeight='bold'
										fontFamily='Gilroy-Bold'>
										Repairability
									</Typography>
									<Typography
										color='text.secondary'
										textAlign='justify'
										sx={{
											fontSize: {
												xs: "14px",
												xsPlus: "15px",
												smMinus: "16px",
												sm: "16px",
												md: "1rem",
											},
										}}>
										Inherently, a modular controller would be easily reparable since the operation
										of the controller would not depend on any one particular module. In the event of
										a module failure, only that specific module requires repair, rather than having
										to repair or replace the entire controller.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.redYellow}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						mb: { xs: 6, md: 0 },
						zIndex: 3,
						mb: -5,
						px: { xs: 2, smMinus: 5 },
					}}>
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
								<MACSFlowchart width={getFlowchartWidth()} />
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
								fontSize={{
									xs: "2.5rem",
									xsPlus: "2.6rem",
									smMinus: "2.7rem",
									sm: "3rem",
									md: "7.5rem",
								}}
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
									sx={{
										fontSize: {
											xs: "14px",
											xsPlus: "15px",
											smMinus: "16px",
											sm: "16px",
											md: "1rem",
										},
									}}
									textAlign='center'>
									The design ascpets of the project were broken down into three main categories. Click
									to learn more about each section of the project.
								</Typography>
							</Box>
							<Grid
								container
								spacing={1}
								sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
								<Grid item xs={11} sm={9} md={4}>
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
												width: "100%",
												alignItems: "center",
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
								<Grid item xs={11} sm={9} md={4}>
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
												width: "100%",
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
								<Grid item xs={11} sm={9} md={4}>
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
												height: "100%",
												width: "100%",
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
									sx={{
										fontSize: {
											xs: "14px",
											xsPlus: "15px",
											smMinus: "16px",
											sm: "16px",
											md: "1rem",
										},
									}}
									textAlign='justify'>
									MACS works using two bridges of communication. The communication between modules and
									central hub, as well as the communication between the central hub and the
									application.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.redYellowAlt}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 3,
						mb: -10,
						px: { xs: 2, smMinus: 5 },
					}}>
					<Grid
						container
						spacing={2}
						sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
							<Grid
								container
								spacing={2}
								sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<Grid
									item
									xs={12}
									smPlus={6}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
								</Grid>
								<Grid item xs={12} smPlus={6}>
									<Box
										className={boxStyles.darkGreyBox}
										sx={{
											mt: 2,
											p: { xs: 2, md: 3 },
										}}>
										<Typography
											textAlign='justify'
											sx={{ fontSize: { xs: "16px", smPlus: "18px", md: "20px" } }}
											color={"white"}>
											With 5 distinct input modules, and a central hub users can physically build
											the controller that is perfect for them. Then with our software, users can
											further configure each module to emulate whatever action they want.
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							xs={12}
							smPlus={10}
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
											mx: 0,
										}}>
										<Grid
											container
											spacing={2}
											sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
														<Card
															elevation={4}
															sx={{
																display: "flex",
																maxWidth: 260,
																position: "relative",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/central-hub.jpg'
																hash='LILqC9xu~VE1M{WWE1M{R3M{9bs.'
																alt='final central hub module'
																height={getModuleImageHeight}
															/>
														</Card>
														<ImageCaption caption={"Central Hub"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																maxWidth: 260,
																position: "relative",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/button-module.jpg'
																hash='LNLgkQjr~Ut7%Mt7M{f6=^RjE2jY'
																alt='final button module'
																height={getModuleImageHeight}
															/>
														</Card>
														<ImageCaption caption={"Button Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																maxWidth: 260,
																position: "relative",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/switch-module.jpg'
																hash='LJM7V_t6~VbIxtogE1WB-ORj9aWA'
																alt='final switch module'
																height={getModuleImageHeight}
															/>
														</Card>
														<ImageCaption caption={"Switch Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																maxWidth: 260,
																position: "relative",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/joystick-module.jpg'
																hash='LPLqC8Rj~Vof-;tRRjju=@RjIpjY'
																alt='final joystick module'
																height={getModuleImageHeight}
															/>
														</Card>
														<ImageCaption caption={"Joystick Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																maxWidth: 260,
																position: "relative",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/slider-module.jpg'
																hash='LIMQbIjE~VkDxut8RjRj^hNG9as.'
																alt='final slider module'
																height={getModuleImageHeight}
															/>
														</Card>
														<ImageCaption caption={"Slider Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																maxWidth: 260,
																position: "relative",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/dial-module.jpg'
																hash='LOL;Kdax~VkC%Mt8Rjf6=^RjE3o0'
																alt='final dial module'
																height={getModuleImageHeight}
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
									smPlus={10}
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
											width: "100%",
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
															sx={{
																display: "flex",
																alignSelf: "stretch",
																position: "relative",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/macs-config-3.jpg'
																hash='LIKdYr_N},t7%Mi^V?Ri}*kDI]R*'
																alt='macs configuration 1'
																height={"auto"}
															/>
														</Card>
													</Grid>
													<Grid item xs={12}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																alignSelf: "stretch",
																position: "relative",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/macs-config-4.jpg'
																hash='LKJk4M~p==%0S$s8M{e-^Gx[JDR+'
																alt='macs configuration 2'
																height={"auto"}
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
									width: "92%",
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
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/macs-application.png'
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
														src='https://ik.imagekit.io/5ywj5edvn/joystick-config.png'
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
														src='https://ik.imagekit.io/5ywj5edvn/button-config.png'
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
				<Box className={`${styles.slopeTopMobile} ${styles.blueRedMobile}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						mt: { xs: 0, md: 10 },
						zIndex: 3,
						mb: -5,
					}}>
					<Grid
						container
						spacing={2}
						sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Grid
							item
							onClick={onClick}
							xs={12}
							md={4}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: { xs: "center", md: "flex-start" },
							}}>
							<Typography
								color='white'
								fontFamily={"bitcount-mono-single-line-ci"}
								fontSize={{ xs: "7rem", md: "9rem" }}
								my={-1}
								onClick={onClick}
								sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
								MACS
							</Typography>
							<GradientText
								text='in'
								gradient='linear-gradient(145deg, rgba(177,40,70,1) 0%, rgba(107,93,128,1) 100%)'
								my={-5}
								fontSize={{ xs: "5rem", md: "8rem" }}
							/>
							<GradientText
								text='action'
								gradient='linear-gradient(145deg, rgba(177,40,70,1) 0%, rgba(107,93,128,1) 36%, rgba(55,132,173,1) 90%)'
								fontSize={{ xs: "5rem", md: "8rem" }}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={10}
							md={8}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Box
								className={boxStyles.darkGreyBox}
								onClick={onClick}
								sx={{
									display: "flex",
									position: "relative",
									overflow: "hidden",
									width: "100%",
									paddingTop: "56.25%",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<iframe
									className={styles.responsiveIframe}
									title='MACS in action'
									src='https://drive.google.com/file/d/1QmNI558EnRjYwXppvZrDmpxlafCn1kr1/preview?=controls=0'
									allow='autoplay'
									allowFullScreen
								/>
							</Box>
						</Grid>
					</Grid>
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.purpleBlueMobile}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 3, mb: 0, mt: -5 }}>
					<Grid container spacing={2} sx={{ mt: { xs: 0, md: 0 } }}>
						<Grid
							item
							xs={12}
							md={5}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: { xs: "flex-start", md: "center" },
									alignItems: { xs: "center", md: "flex-start" },
									px: 8,
									py: 2,
								}}>
								<Typography
									color='white'
									fontFamily={"bitcount-mono-single-line-ci"}
									fontSize={{ xs: "7rem", md: "9rem" }}
									mb={-3}
									mt={-4}
									onClick={onClick}
									sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
									MACS
								</Typography>
								<GradientText
									text='Break'
									gradient='linear-gradient(145deg, rgba(139,68,102,1) 0%, rgba(105,129,162,1) 80%)'
									my={{ xs: -3.5, md: -5 }}
									fontSize={{ xs: "5rem", md: "8rem" }}
								/>
								<GradientText
									text='Down'
									gradient='linear-gradient(145deg, rgba(122,96,122,1) 0%, rgba(86,158,165,1) 80%)'
									my={-2}
									fontSize={{ xs: "5rem", md: "8rem" }}
								/>
							</Box>
							<Box
								className={boxStyles.whiteCircle}
								sx={{
									height: { xs: "19vmax", xsPlus: "23vmax", sm: "26vmax", md: "30vmax" },
									width: { xs: "19vmax", xsPlus: "23vmax", sm: "26vmax", md: "30vmax" },
									zIndex: 10,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<MACSLogoGrey height={getGreyLogoHeight()} />
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							mt={-8}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Box
								sx={{
									transform: "rotate(-3deg)",
								}}>
								<Box className={styles.rotatingReverseSlowEaseInOut}>
									<HexGrid
										id='module-grid-34'
										height={getPriceHexagonHeight()}
										width={getPriceHexagonHeight()}
										viewBox='-50 -50 100 100'
										preserveAspectRatio='xMidYMid meet'>
										<Layout
											size={{ x: 45, y: 45 }}
											flat={true}
											spacing={1.05}
											origin={{ x: 0, y: 0 }}>
											<Hexagon
												id={`hexagon-34`}
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
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
									}}>
									<Typography
										fontFamily={"Gilroy-Heavy"}
										fontSize={{ xs: "1.75rem", md: "2.5rem" }}
										mb={{ xs: 0, md: -2 }}
										onClick={onClick}
										lineHeight={{ xs: 1, md: 1.5 }}
										sx={{
											color: "white",
											textAlign: "center",
											textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										}}>
										Actual
									</Typography>
									<Typography
										fontFamily={"Gilroy-Heavy"}
										fontSize={{ xs: "2.25rem", md: "4rem" }}
										onClick={onClick}
										sx={{
											color: "white",
											textAlign: "center",
											textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										}}>
										$466.87
									</Typography>
								</Box>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								mt: { xs: -12, xsPlus: -10 },
							}}>
							<Box
								sx={{
									transform: "rotate(15deg)",
									mr: { xs: -5, xsPlus: -1 },
									zIndex: 4,
								}}>
								<Box className={styles.rotatingSlow}>
									<HexGrid
										id='module-grid-33'
										height={getPriceHexagonHeight()}
										width={getPriceHexagonHeight()}
										viewBox='-50 -50 100 100'
										preserveAspectRatio='xMidYMid meet'>
										<Layout
											size={{ x: 45, y: 45 }}
											flat={true}
											spacing={1.05}
											origin={{ x: 0, y: 0 }}>
											<Hexagon
												id={`hexagon-33`}
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
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
									}}>
									<Typography
										fontFamily={"Gilroy-Heavy"}
										fontSize={{ xs: "1.75rem", md: "2.5rem" }}
										mb={{ xs: 0, md: -2 }}
										onClick={onClick}
										lineHeight={{ xs: 1, md: 1.5 }}
										sx={{
											color: "white",
											textAlign: "center",
											textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										}}>
										Anticipated
									</Typography>
									<Typography
										fontFamily={"Gilroy-Heavy"}
										fontSize={{ xs: "2.25rem", md: "4rem" }}
										onClick={onClick}
										sx={{
											color: "white",
											textAlign: "center",
											textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										}}>
										$650
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									transform: "rotate(-17deg)",
									zIndex: 3,
								}}>
								<Box className={styles.rotating}>
									<HexGrid
										id='module-grid-35'
										height={getPriceHexagonHeight()}
										width={getPriceHexagonHeight()}
										viewBox='-50 -50 100 100'
										preserveAspectRatio='xMidYMid meet'>
										<Layout
											size={{ x: 45, y: 45 }}
											flat={true}
											spacing={1.05}
											origin={{ x: 0, y: 0 }}>
											<Hexagon
												id={`hexagon-35`}
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
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
									}}>
									<Typography
										fontFamily={"Gilroy-Heavy"}
										fontSize={{ xs: "1.75rem", md: "2.5rem" }}
										mb={{ xs: 0, md: -2 }}
										onClick={onClick}
										lineHeight={{ xs: 1, md: 1.5 }}
										sx={{
											color: "white",
											textAlign: "center",
											textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										}}>
										Per Module
									</Typography>
									<Typography
										fontFamily={"Gilroy-Heavy"}
										fontSize={{ xs: "2.25rem", md: "4rem" }}
										onClick={onClick}
										sx={{
											color: "white",
											textAlign: "center",
											textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										}}>
										$15.50
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.blue}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						zIndex: 3,
						mb: 10,
					}}>
					<Grid container spacing={2}>
						<Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
									px: 8,
									py: 2,
								}}>
								<GradientText
									text='Beyond'
									gradient={
										"linear-gradient(145deg, rgba(54,133,173,1) 0%, rgba(116,182,158,1) 100%)"
									}
									my={-5}
									fontSize={{ xs: "3.3rem", smMinus: "4rem", md: "6rem" }}
									onClick={onClick}
								/>
								<Typography
									color='white'
									fontFamily={"bitcount-mono-single-line-ci"}
									fontSize={{ xs: "4rem", smMinus: "5rem", md: "7rem" }}
									mb={-3}
									mt={-4}
									ml={{ xs: 2, md: 4 }}
									onClick={onClick}
									sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
									MACS
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							mt={-4}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: { xs: "space-between", xsPlus: "space-evenly" },
							}}>
							<Box
								sx={{
									transform: "rotate(-2deg)",
								}}>
								<Box className={styles.rotatingReverseSlowEaseInOut}>
									<HexGrid
										id='module-grid-41'
										height={getFutureHexagonHeights("normal")}
										width={getFutureHexagonHeights("normal")}
										viewBox='-50 -50 100 100'
										preserveAspectRatio='xMidYMid meet'>
										<Layout
											size={{ x: 45, y: 45 }}
											flat={true}
											spacing={1.05}
											origin={{ x: 0, y: 0 }}>
											<Hexagon
												id={`hexagon-41`}
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
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
									}}>
									<Typography
										fontFamily={"Gilroy-Heavy"}
										fontSize={{ xs: "1.6rem", md: "2.5rem" }}
										onClick={onClick}
										sx={{
											color: "white",
											textAlign: "center",
											textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										}}>
										More Non-Traditional Inputs
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									transform: "rotate(4deg)",
								}}>
								<Box className={styles.rotating}>
									<HexGrid
										id='module-grid-39'
										height={getFutureHexagonHeights("normal")}
										width={getFutureHexagonHeights("normal")}
										viewBox='-50 -50 100 100'
										preserveAspectRatio='xMidYMid meet'>
										<Layout
											size={{ x: 45, y: 45 }}
											flat={true}
											spacing={1.05}
											origin={{ x: 0, y: 0 }}>
											<Hexagon
												id={`hexagon-39`}
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
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
									}}>
									<Typography
										fontFamily={"Gilroy-Heavy"}
										fontSize={{ xs: "1.65rem", md: "2.5rem" }}
										onClick={onClick}
										sx={{
											color: "white",
											textAlign: "center",
											textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										}}>
										Magnetic Connectors
									</Typography>
								</Box>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							mt={-3}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: { xs: "space-between", xsPlus: "space-evenly" },
									position: "relative",
									width: "100%",
								}}>
								<Box
									sx={{
										transform: "rotate(-15deg)",
										ml: -2,
										mr: { xs: 0, xsPlus: 20 },
									}}>
									<Box className={styles.rotatingSlow}>
										<HexGrid
											id='module-grid-45'
											height={getFutureHexagonHeights("small")}
											width={getFutureHexagonHeights("small")}
											viewBox='-50 -50 100 100'
											preserveAspectRatio='xMidYMid meet'>
											<Layout
												size={{ x: 50, y: 50 }}
												flat={true}
												spacing={1.05}
												origin={{ x: 0, y: 0 }}>
												<Hexagon
													id={`hexagon-45`}
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
									<Box
										sx={{
											position: "absolute",
											top: "50%",
											left: "50%",
											transform: "translate(-50%, -53%)",
										}}>
										<Typography
											fontFamily={"Gilroy-Heavy"}
											fontSize={{ xs: "1.4rem", xsPlus: "1.6rem", md: "2.25rem" }}
											onClick={onClick}
											sx={{
												color: "white",
												textAlign: "center",
												textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
											}}>
											Multi-Platform Support
										</Typography>
									</Box>
								</Box>
								<Box
									sx={{
										transform: "rotate(-7deg)",
										mr: -2,
									}}>
									<Box className={styles.rotatingSlow}>
										<HexGrid
											id='module-grid-46'
											height={getFutureHexagonHeights("small")}
											width={getFutureHexagonHeights("small")}
											viewBox='-50 -50 100 100'
											preserveAspectRatio='xMidYMid meet'>
											<Layout
												size={{ x: 50, y: 50 }}
												flat={true}
												spacing={1.05}
												origin={{ x: 0, y: 0 }}>
												<Hexagon
													id={`hexagon-46`}
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
									<Box
										sx={{
											position: "absolute",
											top: "50%",
											left: "50%",
											transform: "translate(-50%, -50%)",
										}}>
										<Typography
											fontFamily={"Gilroy-Heavy"}
											fontSize={{ xs: "1.4rem", xsPlus: "1.6rem", md: "2.25rem" }}
											onClick={onClick}
											sx={{
												color: "white",
												textAlign: "center",
												textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
											}}>
											Multi-Group Modules
										</Typography>
									</Box>
								</Box>
							</Box>
							<Box
								className={boxStyles.whiteCircle}
								sx={{
									position: "absolute",
									height: { xs: "18vmax", xsPlus: "23vmax", sm: "26vmax", md: "30vmax" },
									width: { xs: "18vmax", xsPlus: "23vmax", sm: "26vmax", md: "30vmax" },
									zIndex: 10,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<MACSLogoBlue height={getBlueLogoHeight()} />
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							mt={-3}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: { xs: "space-between", xsPlus: "space-evenly" },
							}}>
							<Box
								sx={{
									transform: "rotate(10deg)",
								}}>
								<Box className={styles.rotatingSlow}>
									<HexGrid
										id='module-grid-42'
										height={getFutureHexagonHeights("normal")}
										width={getFutureHexagonHeights("normal")}
										viewBox='-50 -50 100 100'
										preserveAspectRatio='xMidYMid meet'>
										<Layout
											size={{ x: 45, y: 45 }}
											flat={true}
											spacing={1.05}
											origin={{ x: 0, y: 0 }}>
											<Hexagon
												id={`hexagon-42`}
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
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
									}}>
									<Typography
										fontFamily={"Gilroy-Heavy"}
										fontSize={{ xs: "1.5rem", md: "2.25rem" }}
										onClick={onClick}
										sx={{
											color: "white",
											textAlign: "center",
											textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										}}>
										Increased Configuration Options
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									transform: "rotate(-12deg)",
								}}>
								<Box className={styles.rotatingReverseNormal}>
									<HexGrid
										id='module-grid-40'
										height={getFutureHexagonHeights("normal")}
										width={getFutureHexagonHeights("normal")}
										viewBox='-50 -50 100 100'
										preserveAspectRatio='xMidYMid meet'>
										<Layout
											size={{ x: 45, y: 45 }}
											flat={true}
											spacing={1.05}
											origin={{ x: 0, y: 0 }}>
											<Hexagon
												id={`hexagon-40`}
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
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
									}}>
									<Typography
										fontFamily={"Gilroy-Heavy"}
										fontSize={{ xs: "1.65rem", md: "2.5rem" }}
										onClick={onClick}
										sx={{
											color: "white",
											textAlign: "center",
											textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										}}>
										Module Extension Cord
									</Typography>
								</Box>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							mt={-3}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: { xs: "space-between", xsPlus: "space-evenly" },
							}}>
							<Box
								sx={{
									transform: "rotate(10deg)",
									mr: { xs: 0, xsPlus: 20 },
								}}>
								<Box className={styles.rotatingSlowEaseInOut}>
									<HexGrid
										id='module-grid-43'
										height={getFutureHexagonHeights("small")}
										width={getFutureHexagonHeights("small")}
										viewBox='-50 -50 100 100'
										preserveAspectRatio='xMidYMid meet'>
										<Layout
											size={{ x: 50, y: 50 }}
											flat={true}
											spacing={1.05}
											origin={{ x: 0, y: 0 }}>
											<Hexagon
												id={`hexagon-43`}
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
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
									}}>
									<Typography
										fontFamily={"Gilroy-Heavy"}
										fontSize={{ xs: "1.1rem", xsPlus: "1.4rem", md: "1.8rem" }}
										onClick={onClick}
										sx={{
											color: "white",
											textAlign: "center",
											textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										}}>
										Wireless Connectivity
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									transform: "rotate(10deg)",
								}}>
								<Box className={styles.rotatingReverse}>
									<HexGrid
										id='module-grid-44'
										height={getFutureHexagonHeights("xs")}
										width={getFutureHexagonHeights("xs")}
										viewBox='-50 -50 100 100'
										preserveAspectRatio='xMidYMid meet'>
										<Layout
											size={{ x: 50, y: 50 }}
											flat={true}
											spacing={1.05}
											origin={{ x: 0, y: 0 }}>
											<Hexagon
												id={`hexagon-44`}
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
								<Box
									sx={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
									}}>
									<Typography
										fontFamily={"Gilroy-Heavy"}
										fontSize={{ xs: "1.15rem", xsPlus: "1.5rem", md: "1.75rem" }}
										onClick={onClick}
										sx={{
											color: "white",
											textAlign: "center",
											textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										}}>
										Module LED Edges
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.greenBlue}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<PageTenMobile />
				<Box className={`${styles.slopeBottomMobile} ${styles.yellowGreen}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeBottomMobileOffset} ${styles.white}`} sx={{ zIndex: 1 }} />
			</Box>
		</>
	);
};
export default MobileContent;
