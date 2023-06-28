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

const TrailAlt = ({ open, children, delay }) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 3, tension: 1000, friction: 100 },
		opacity: open ? 1 : 0,
		x: open ? 0 : -40,
		from: { opacity: 0, x: -40 },
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

	const getControllerImageHeight =
		useMediaQuery("(min-width: 0px)") && useMediaQuery("(max-width: 600px)") ? 250 : 300;

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
					sx={{ mb: { xs: 6, md: 0 }, px: { xs: 2, smMinus: 5 }, zIndex: 3 }}>
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
									<TrailAlt open={open} delay={150}>
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
												sx={{
													fontSize: { xs: "14px", smMinus: "15px", sm: "16px", md: "20px" },
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
									sm={6}
									md={6}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<TrailAlt open={open} delay={200}>
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
									sm={6}
									md={6}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										margin: 0,
									}}>
									<TrailAlt open={open} delay={250}>
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
									</TrailAlt>
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
						px: { xs: 2, smMinus: 5 },
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
						px: { xs: 2, smMinus: 5 },
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
									sx={{
										display: "flex",
										alignSelf: "stretch",
										position: "relative",
										flexGrow: 1,
										height: getSolutionImageHeights(),
										width: "100%",
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/xbox-adaptive-controller.png?tr=w-1200'
										hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAA2AEoDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAECAwQG/8QAGBABAQEBAQAAAAAAAAAAAAAAAAERAhL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9gmjU2gLS1N6T6BrKqVh7VOwbaesfZ+waaNZex7A7UWi1HVAuukXodVnaC/Zztjo0G87P2wlPQbex7ZaNB0JpkDOosa2JsBlYWNLyMBEhyKw5ALBi8GA0AAEVABNIAAqAAZ4AD//2Q=='
										alt='xbox adaptive controller'
									/>
								</Card>
							</Grid>
							<Grid item xs={12} md={6}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										alignSelf: "stretch",
										position: "relative",
										flexGrow: 1,
										height: getSolutionImageHeights(),
										width: "100%",
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/project-leonardo.jpg?tr=w-1200'
										hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACaARIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwb/xAAXEAEBAQEAAAAAAAAAAAAAAAAAEQES/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQUZpQaSs0oNUrFKo3SsUoN0rFKDdKzSg2M0qDQlKCgAAAAAAAAAAAAACJQWpU3U3QWpU3U3QWlYqUG6lYqUHSpWOk6UdKVz6OgdKtc6UHSrXOrQdKtc6tBurWKtBurWKtQbGatBQAAAAABAFSiAVN01ndA3U3TdZ3QN1N1N1ndBd1N1N1ndBqpWN1KDdSsUqjdKxSg6Va5VaDpWq5ZrWaDpmrmuea1mg6Zq5rGauaDea1WM1cQbq1hQaVlQVUAUQAQAEEBNTV1nQTWdXU0Gd1nda1jQTdTdNTQTdSmpoFSiKLSoA1VrK4DWa1msY1gNZrWM4uA3jWMY1gN4uM41iCtMqDQigoAACAAoiaqAms61qaDGs63rOgzrOtam4DGs63uM7gMaje4zAZRqEUZGoQEVYsBMawzFzAXGsTMazAMaxMawFxrExcQVUUFVFBQAAEAUURFQEZ1tIDG4m43GdwGNxncdNxNwHPcZ3HTcSA5xI6RIDnCOkSKMQjcIDEWNwgMxcxqLATMXMWLAMxcxcxYBmKRYgKKAKACgIKACgIjSAiRogMRI3EgMRI3CA5xI6QgOcSOkIo5xI6QgOcI6QgOcWNwgMwjcIDMWNQgJFixYCRYRYgiqAAoIKAgoAAAAAACEUBmEaAZiRogMxI3CKMQjcSAzCNQgMwjUIDMWLFgMwjUASEVUEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z'
										alt="sony's project leonardo"
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
																position: "relative",
																flexGrow: 1,
																height: getModuleImageHeight,
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/central-hub.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAwIEAQAG/8QAGRABAQEBAQEAAAAAAAAAAAAAAAECAxES/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A+pTV+Jri2Oj0XQtFD0mq0ilOOuPEqjqYoJ1NU5Uh6HouhaQDoOj6DogVcVXCH1HjlhPE2ObQdQWjagdkC0Or0O1pOeuyo9dlRXFREq4kpyuvAootGotIA2LR9B00BVxVcLL6vxOoRNjm0DcBto2z7IBsOqXYNVoOevSotdlR0spIHNLkFcdcikU0eiVGkgaDo+g6LIq4quEPq3K65WSHbN0adsvRKs3Ss+6fpWbdaZTa9Ki16VDWjNLms+KfNDcNFIyoF6j0Sj0kLQdG2HRAq47XGg+rc06nVYIejL0rT0rJ1qVZutZd1o61k6VqMVFruaO13NIjTinxWbFPihuNGVizVystO1GlWo1UhbDou6DVaCK49an0h9bajVetHqubQ+lZetP0rL1pFZutZOlaOtZelbjNHarNHarNIacU+KzYrRis1uHzSSizVygu2o1XbUaqI90G6TdDullFrnqbXPSH1d0jVcuh605to6Vm6U29MvSkA61l3T9KzbrUGItVlCslYfDRis2D4oLRmq9Hmq9ZKrR6rto9VIe6DdJug3SE6qfU60n6IfV2o1XrR6rDaN1m6U26z9KQDpWbdP0rPpqLEqyheScNg+aDBsso0qvUR30J20Wqu0W6kLdZ9026zbpCNVPrmqn0p9bUaVUaYIts3Ro2z7KZ9s+j7BpqJK8oXlE2DZDk2QiR1yOhJo9kotoA2z9GjbN0KBpz13SSn//Z'
																alt='final central hub module'
															/>
														</Card>
														<ImageCaption caption={"Central Hub"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																position: "relative",
																flexGrow: 1,
																height: getModuleImageHeight,
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/button-module.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAgMEAQAG/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECAxESITH/xAAXAQEBAQEAAAAAAAAAAAAAAAACAQAD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A9k5zgrB0R0P0n6CcT7I0dukapQaweS/RZqofg7JGKfmpVNjQwQqGl7MpW0UjafajafasVoLdMZnpHOdSog0n6U/dTdKhJ+lI1TelT6pQa70eaT9DzVFTin5qXFPxRqnyi9LlF6JNtK2O0rdZSt1PunbqfdZi9UPrtVnrM9OytBqqMBupelP6VL1rQqn6VPvRvXSXejgVv0POk/0PGlHVmNKMVHjSjFGrFOaP0nNH6JNtL3RWlaqKXup903dT7qsDVD6zVZ6zPVeh1XWg1WWQvpUnWqOlR9asap+ukm9H9dI+mjjnXfRmNJfr9MxonPV3PSnGkPPSrFCnFWaP0nNHKJDtK1RWl6qEVup903dI3WYvVZ6HVZ6rPW2l7rbS9VDK6VH1qnpUnWlBqTrUfSqe1RdaccugfX6ZjSe39N50nJbzqrnUXOq+dCukVZo5Sc0yUTgrS9VtpeqhF7qfdN3U+6zF6rPQ6ofWZ6+0vVFaXqoZPSpOtU9Kk6lEqPtUXVZ1R9Djl0Tf6ZzL8/TME5Yr5qudSc1WArpFGaOUrJnom20vVFaXqopW6m3Tt1PusxWqH12qH1WewtL1RWg1RdCeiTqq2l6LBqPqk6RZ0S7hwKR5+mYjPB4i6GH81OE+IowNKQ7IwZEJOtK3TKVtlJ3U26f0T7ZCdUPrdAVnsaXodBoXQnaboo2n6KlS9E24p6EaKBSvB5jPB5jCbiH4JwdlCNggxqKylbNpW2Yjaboo2m6MxGgi0FkewoNDoNC6E7T9FG0/RUqbafSjoRohoB5APKidg7JODsopkayNQg0rZtK2jEdE3RT0TdFRPoItBZH/2Q=='
																alt='final button module'
															/>
														</Card>
														<ImageCaption caption={"Button Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																position: "relative",
																flexGrow: 1,
																height: getModuleImageHeight,
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/switch-module.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAABAMCAQUGAP/EAB4QAQADAAIDAQEAAAAAAAAAAAABAgMREiExQQQy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABcRAQEBAQAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/APs3HXBU/SldSUrudaiN0pUvKNpRdaqny3WUlqrVQrK1ZQUh+ch1JmyF1rI3SH0GuToNdFGzLtmeSn0zjrjVYclHSVbD6Sw1EryhaW72QtYlvs3Ww/ZutjgKpK1ZFpZeshLxLvKcS1yk5aUry3aUryEhpI2kr6SNpJSdpZ5ctLnKL6lx+fparCd5G0lfSRNbMto6WGtZvWw17tYFO7dbCd1KXOA6liKWBzsTSwwFVlrlGtm+QnbSjeW7SjeUUtJF0lfSRdJBTtLPLlpZ5RfXuWl1i0lmI6SHrJOshbSY0NrYPS621gtbtyBvv5UpcLv5Vzu1jFelnYrOzz8rF52ZsBlZb5QrKkSyWplK8tTKV5BR0kXSV9JF0kGJWlnszaWeyafbTKd5amU7yhENZB2n2XrIO8tQg72eftc39E+3mb2dOQ538r5XA7eSsbN2MV6eNjM5efjJ2UudZLpKkSjSVIlktTKN5UmUbyyUNJF0kjSRNZTURvLHL9eWOQ0+6mUry3MpXlIfWQd59mayDt9aief+ifbzN/r0t/rzt4dOUJH9F4DRXyXjDpaxYfibkHjBubjRhNFISopDKfpSupKVwR9JD1krQTUNQa8sctXT5RfdzKV5bmU7gj6hbfTNA9monn7/AEDWHo7QFpVuVCxXyTlViK+V8qm0WFZQZnA2UFZwxazi9W4Zq2ysZlG61kbpDaB6mah6oi3Ybv7YRfcSnduU7AoaB6maCalA6wJeDdRbw0Uor5XzhOIXzhal84KpCGcE0ZZVq05VoJmyF17IXSG1D1M0D1SFv7YbuwU+3lOykp2ZI+gupWgupQmg1idBrNFmFs0oWoETmTQbMmgCtWmatBM2RutZG6AugepmgepQ12G7sJP/2Q=='
																alt='final switch module'
															/>
														</Card>
														<ImageCaption caption={"Switch Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																position: "relative",
																flexGrow: 1,
																height: getModuleImageHeight,
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/joystick-module.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAwQCAQAGBf/EABwQAQEBAQEBAQEBAAAAAAAAAAACAQMRIRIxQf/EABgBAQEBAQEAAAAAAAAAAAAAAAEAAgME/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERAiH/2gAMAwEAAhEDEQA/APs3nnhUzv8AAdD7/E/TXOtRN0T0fpqetCZakfrc6Qog8J408aSaWmJ1r1F7RUTRUEG09nsFhBpx2mQn0jjrjtWGa/ifpp71L11zaT9NTXpumpbpB31qdD+mpo4FcaojUkUeNLSmdb9DOt+ou7o61rdHWhCvU96a9T3oQ61z17dZ9ZT6Z7Xma10rI+mpOuqOmpOtAp+tJbovWknSjjFrv6bmk37bijg1dFKIpDzpTFHGormm80E0TNDTe6Ote3WK0Ed6C9JegvQmK1z1zdZ9CfVbo613dHekC6aj60o6aj66RU3WkfSj9qRdaakc7Xtv63FpNv6TnbeMSv0edKudPz+VK+dDHSLJomaniiZobJujrXt1itBYvQXpL0F6Ezus+ubrPoT6rdHeu7o71EPTUfbVPTUfbSzUfbUHalnfX5/ff63HHsO9PpuVI936fjrrjhzbr9HlSznqDlqznrFemK40uaCNJmsukb3WK13dYrQR3oL0t6C9CY3WfXK1z0J9VuirW90d6CDpqPtqvoj6oVD2fn936HZB2xuVy6iPf6fiPZ+m5Y6a4c8+rOSzmk5Yr5s69EiiCYOSYG3d1ita1igRXoL0tgvQh1rPr1OepPqtHTesUw0Doj6q+iXqhUPZF1xd1xJ0w6xYm/P0vOXPz9LGNazh+WKueJ+eKow63IWSYxLYL2jomjpEFgs9p7QFTPrtMgPrNHRNHTDoDol6qrTdEEfXEt4r6JrxAPhIxzwkYpRhueKIwMYohokltmWymdHRdFSQLT2otPaAaZaplB9Zo6Jo6YdAWm6KbTdEkvRNanontkDLA/8ASQYDwogEHhpFlpmWyWdFRdFaQLT2otPaZBTLVMoP/9k='
																alt='final joystick module'
															/>
														</Card>
														<ImageCaption caption={"Joystick Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																position: "relative",
																flexGrow: 1,
																height: getModuleImageHeight,
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/slider-module.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAgMEAQAG/8QAGxABAQEBAQEBAQAAAAAAAAAAAAIBAxEhEjH/xAAXAQEBAQEAAAAAAAAAAAAAAAABAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD2bGsFTN/hPQ7f4T0YaieyKOvSK0lgpB6KdQPg2SJ06dCNxoc1voTKKsyirCItPai01pFUx1MRemY1jrWGUn6afWpumsNQi9IrTOmp60lvop0n9DmiFM6dOpYo+dAPzRel5rfQm7pV6PdKrQib1PenXpF6iVWs9dWh9RepY52t1gu9TdNP6al66Gk/TU10b11NdNJ36HNJ/wBCmljKyKPikcUoiglM6L0mdH6ELdKrRbpdaCVep7069T3qJdaz1laz0p6xla30FahCumpOuqOmpOumFL11L0o/rqPpTUFZtCmiNr6KKaxlbzpRFIudKY1mhXOj9InTM1ki3S61u6XWol3qe9NvSL1EutZ6ytD6i9hugrRbpdaET01H11T01J10xJO2oumqu2ouutwUvd+ijSt36ONaYqvnqrnqPnqrmzUpnTM0mdMzWSLdLrRbpdaCVep7069T3qJdaz1laz0l7DdLrRbpdaySempOuqumpOpSPsi6LOqTo3ARv9FDNz6OMLFh/NVzTc8UwKj5MwuR4ynaXRmlUCVae9PtPaJVBbQUXr90FaLdLpkk9EvRTaboUk6pbxX0TXjSI8HGO8HOHRhkYojCow+MAwyRskQQdLo3SqSItPai09hE0xtBRet0FC0FAlWm6KLT9EU3RPWKLJrCivBzjvBzhRkYdOFRh8pkeNdjQg6VRul2kntPam01hE0EVBCes0FD0FJom0/RRafoUnsmjrJooI5AOUjoNkqTpQHgmY1ANFUbRVBEWmtTaewiKCKghP/Z'
																alt='final slider module'
															/>
														</Card>
														<ImageCaption caption={"Slider Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																position: "relative",
																flexGrow: 1,
																height: getModuleImageHeight,
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/dial-module.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAgMEAQAG/8QAGxABAQEBAQEBAQAAAAAAAAAAAAIBAxEhEjH/xAAXAQEBAQEAAAAAAAAAAAAAAAABAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD2bGsFTN/hPQ7f4T0YaieyKOvSK0lgpB6KdQPg2SJ06dCNxoc1voTKKsyirCItPai01pFUx1MRemY1jrWGUn6afWpumsNQi9IrTOmp60lvop0n9DmiFM6dOpYo+dAPzRel5rfQm7pV6PdKrQib1PenXpF6iVWs9dWh9RepY52t1gu9TdNP6al66Gk/TU10b11NdNJ36HNJ/wBCmljKyKPikcUoiglM6L0mdH6ELdKrRbpdaCVep7069T3qJdaz1laz0p6xla30FahCumpOuqOmpOumFL11L0o/rqPpTUFZtCmiNr6KKaxlbzpRFIudKY1mhXOj9InTM1ki3S61u6XWol3qe9NvSL1EutZ6ytD6i9hugrRbpdaET01H11T01J10xJO2oumqu2ouutwUvd+ijSt36ONaYqvnqrnqPnqrmzUpnTM0mdMzWSLdLrRbpdaCVep7069T3qJdaz1laz0l7DdLrRbpdaySempOuqumpOpSPsi6LOqTo3ARv9FDNz6OMLFh/NVzTc8UwKj5MwuR4ynaXRmlUCVae9PtPaJVBbQUXr90FaLdLpkk9EvRTaboUk6pbxX0TXjSI8HGO8HOHRhkYojCow+MAwyRskQQdLo3SqSItPai09hE0xtBRet0FC0FAlWm6KLT9EU3RPWKLJrCivBzjvBzhRkYdOFRh8pkeNdjQg6VRul2kntPam01hE0EVBCes0FD0FJom0/RRafoUnsmjrJooI5AOUjoNkqTpQHgmY1ANFUbRVBEWmtTaewiKCKghP/Z'
																alt='final dial module'
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
																flexGrow: 1,
																height: getControllerImageHeight,
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/macs-config-3.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQAGB//EABwQAQEBAQEBAQEBAAAAAAAAAAABAgMREjFBIf/EABgBAQEBAQEAAAAAAAAAAAAAAAECAAME/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A9kxrHGkOidnaJ6JVE+yNHbI1TGDWwPrZVMZkzJWaZmsTI0MaCHROzdFbDJ9p9qNptsxOmN0EB7FjWVVQDRHSnaqfpQondT6pvSkbqpAz1spdrpVYD803NT5puaMUdK70ErfQXapO6ZqlbrEnpU26f0qbdAK1Wes1WehntGVoapEL3U3Sn7qbpWkUn6VPum9Km3pcia66dNFXTZpWJ1TnRualzo7OhipVErfSpRepxTdUndHaVuhielT9Kd0qbpQxeqH1mqH1me5Bqt9BqsIVupulP6VL1qo1T9al6aO61J006SIrLp00VdOzpeJ1XjR2dJMaPxU2KimVvpWaL1FUK0rdFaVugldKm6U7pUvSgl6ofQ6ofoM99aXqitL1WYrpUnWqelSdaqJqXrUnSqetR9K6RFK1pudF6rs10QqxT8VJiqMVNXFOaL0rNH651bbSt0VpW6CV0qXpT+lS9KCTrQfoO9B+gcfQrQaorS9UAnpUvWqeiTqYEnVH1V9UfR0lRYRr9dl2nZdNTh2KoxU+D8ItXIfmi9BkSLVY60rdHaVugkdKl61R0qTrQqRPvQPpnTRX22rnL6VaDQqDSXMnol6qdpehlCTqk6K+qXoqUYn1GQVjpFaMMwfgnB2U2qw2CDGp04ylbM0VttVifpUfWquiPtRqpEXbX+k+j6X3QA7yY+nUGh0Gg8pG03RTtN0IS9EvRV0TbOsRYyQVdG04PJ2Ssm5GnDI1kaNIdE7O0TttKbqh71b1Q9xavmIdftCK/rFOz6ZQaHQaDxk7TdFO03RmS9E21XRLtmKrI2sgJmTclZNyxMjWRrEGidnaJ2xTdUHf+ruqHv8A1NXyirG1jo6v/9k='
																alt='macs configuration 1'
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
																flexGrow: 1,
																height: getControllerImageHeight,
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/macs-config-4.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQAHBv/EABwQAQEBAQEBAQEBAAAAAAAAAAABAgMRMRIhIv/EABgBAQEBAQEAAAAAAAAAAAAAAAIBAwAE/8QAGREBAQEBAQEAAAAAAAAAAAAAAAERAhIx/9oADAMBAAIRAxEAPwD7F1c6sFBonZ2idrCI2To7ZGjgl0IqAka5jRpRoa1lEgaJ2borblT7T7UbT7KCRpjdBNHoDq5lYIDROzdE7pRSdkapu6RunBoLQ+u1Q+liC9aD1vqUoJld6y0CDonZuidopG0+z9p9nEJ1Q+t1Qkj0INaGsHQGqRunbqfdOOpO6Rum7pG60gUGqH1mqH08EfrZS5RSjYUH6y1nrrWdOB1St0zVJ3XKTupulP6VN0pRxWqH12qH03PRA1odV53F7qfdO3SN04lI3U+6d0qbdaxnQaofWaofTEyUUpUopQpQz11ofXWhTjNUndM1St0SJ6VL0qjpUvSnFJ1Q+u3Qem7HpHoNVtodV5nFbpG6dup+lODSOlTbp/Spt1rGdL1Qeu1Q+mI5RylSjlGlDJXWhlb6zrSM1Sd0zRW6KkdKl6VR0qXrShEbpf6d0pf6aw5HptBoVBp5WZW0/Sn7T9CiVP0qbdP6Jt1rKFhWqH12qH0tTByjlLg4NpSGRoY5naUjNE7N0TtNIjpUnWquiPrVlKRJ1v8AShdL/oDX01keo0GhUGnmYFbT9D9p+hRE3RNtR0TdDlTCdBboK67BwcLg4Nq4ZHMjQtLA6J2boraauJuiPtfqvoi73670ciPX9tC2sJq9RoNCoNA8pW03RRtP0Jybol2p6JtrrsJ0AWgutLBQyFweQtXDI5kaOuwOidm6J27VTdUXb5VvVD3+UZdp8pKxtY3OvUKDQ6DQPKTtP0UbT9FVL0TbU9E21cRoA9AGlBQzJcMyNUcayNFwNE7O0TtypeqLv8q3qi7/ACpz9OJK51c9BV//2Q=='
																alt='macs configuration 2'
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
														flexGrow: 1,
														height: getModuleImageHeight + 50,
														width: "100%",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/macs-application.png?tr=w-1000'
														hash='data:image/png;base64,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'
														alt='macs application'
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
														flexGrow: 1,
														height: getModuleImageHeight + 50,
														width: "100%",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/joystick-config.png?tr=w-1000'
														hash='data:image/png;base64,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'
														alt='application joystick configuration'
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
														flexGrow: 1,
														height: getModuleImageHeight + 50,
														width: "100%",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/button-config.png'
														hash='data:image/png;base64,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'
														alt='application button configuration'
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
