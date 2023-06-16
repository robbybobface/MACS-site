import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Divider, useMediaQuery, CardContent, Card } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon, Pattern } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import { animated, useTrail, to } from "@react-spring/web";
import ImageCaption from "../ImageCaption";
import ImageCaptionAlt from "../ImageCaptionAlt";
import BlurHashedImage from "../Partials/BlurHashedImage";
import PWMIcon from "../../assets/pwm";
import HexagonIcon from "../../assets/hexgon";
import USBIcon from "../../assets/usb";

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

	const newFactor = useMediaQuery(theme.breakpoints.down("md")) ? 1.1 : 1;
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const getImageSize = () => {
		if (isXS) return "xs";
		if (isXSPlus) return "xs";
		if (isSM) return "xsPlus";
		if (isMD) return "sm";
		if (isMDPlus) return "md";
		if (isLG) return "mdPlus";
		if (isXL) return "lg";
		return "xl";
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
				<div className={`${styles.slopeEndTop} ${styles.green}`} />
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
							size={isMD ? { x: 49, y: 49 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-1`}
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
								cellStyle={{ fill: theme.palette.hexagonBlack.main }}
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
								cellStyle={{ fill: theme.palette.hexagonBlue.main }}
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
				offset={offset}
				speed={0.3}
				onClick={onClick}
				style={{ zIndex: 9999, overflow: "visible" }}
				factor={newFactor}>
				<Container className='noselect' maxWidth='xl'>
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
							mt: { xs: 30, md: 0 },
						}}>
						<Grid
							item
							xs={12}
							md={4.5}
							lg={5.5}
							sx={{
								mt: { xs: 0, md: -4 },
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Trail open={open}>
								<GradientText
									text='A Controller of Modules'
									gradient='background: rgb(255,255,255);
background: linear-gradient(125deg, rgba(255,255,255,1) 0%, rgba(160,232,134,1) 25%, rgba(25,177,0,1) 100%);'
									fontSize={{
										xs: "2.5rem",
										md: "3.5rem",
										mdPlus: "4rem",
										lg: "5.75rem",
										xl: "7.5rem",
									}}
									onClick={onClick}
									lineHeight='1.3'
									textAlign={{ xs: "center", md: "left" }}
								/>
							</Trail>
						</Grid>
						<Grid
							item
							xs={12}
							md={7.5}
							lg={6.5}
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
											py: { xs: 1, md: 3, lg: 3.5, xl: 4 },
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
											The MACS was designed around allowing the user full control in customizing
											the controller for their unique needs. To achieve this, the MACS uses
											systems of identification and communication between each module and the
											central hub. Module positions are identified by unique PWM signals sent on
											the I2C bus. And because of their hexagonal shapes, module positions are
											represented using a hexagonal coordinate system. The input states of each
											module are communicated to the central hub using the I2C bus, and then are
											subsequently packaged into individual USB data packets and sent to the
											application.
										</Typography>
									</Box>
								</Grid>
								<Grid
									item
									xs={12}
									md={4}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Box
										sx={{
											position: "relative",
											mb: { xs: 3, md: 0 },
											maxHeight: "234px",
										}}>
										<Card
											elevation={4}
											sx={{
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												position: "relative",
												px: { xs: 2, md: 2, lg: 2.5, xl: 4 },
												pt: { xs: 2, md: 2, lg: 2.5, xl: 4 },
												pb: { xs: 0.6, mdPlus: 1.15 },
												backgroundColor: theme.palette.moduleBackground.main,
												backdropFilter: "blur(7px)",
												WebKitBackdropFilter: "blur(7px)",
												maxHeight: "234px",
											}}>
											<PWMIcon size={getImageSize()} />
											<Typography
												mt={1.5}
												fontSize={{
													xs: "16px",
													md: "17px",
													mdPlus: "18px",
													lg: "20px",
													xl: "24px",
												}}
												fontWeight='bold'
												textAlign='center'
												color='white'
												fontFamily='Gilroy-Bold'>
												PWM
											</Typography>
										</Card>
									</Box>
								</Grid>
								<Grid
									item
									xs={12}
									md={4}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Box sx={{ position: "relative", maxHeight: "234px" }}>
										<Card
											elevation={4}
											sx={{
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												position: "relative",
												px: { xs: 2, md: 2, lg: 2.5, xl: 4 },
												pt: { xs: 2, md: 2, lg: 2.5, xl: 4 },
												pb: 1,
												backgroundColor: theme.palette.moduleBackground.main,
												backdropFilter: "blur(7px)",
												WebKitBackdropFilter: "blur(7px)",
												maxHeight: "234px",
											}}>
											<HexagonIcon size={getImageSize()} />
											<Typography
												fontSize={{
													xs: "16px",
													md: "17px",
													mdPlus: "18px",
													lg: "20px",
													xl: "24px",
												}}
												fontWeight='bold'
												textAlign='center'
												color='white'
												fontFamily='Gilroy-Bold'>
												I2C
											</Typography>
										</Card>
									</Box>
								</Grid>
								<Grid
									item
									xs={12}
									md={4}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Box sx={{ position: "relative", maxHeight: "234px" }}>
										<Card
											elevation={4}
											sx={{
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												position: "relative",
												px: { xs: 2, md: 2, lg: 2.5, xl: 4 },
												pt: { xs: 2, md: 2, lg: 2.5, xl: 4 },
												pb: 1,
												backgroundColor: theme.palette.moduleBackground.main,
												backdropFilter: "blur(7px)",
												WebKitBackdropFilter: "blur(7px)",
												maxHeight: "234px",
											}}>
											<USBIcon size={getImageSize()} />
											<Typography
												mt={-2}
												fontSize={{
													xs: "16px",
													md: "17px",
													mdPlus: "18px",
													lg: "20px",
													xl: "24px",
												}}
												fontWeight='bold'
												textAlign='center'
												color='white'
												fontFamily='Gilroy-Bold'>
												USB
											</Typography>
										</Card>
									</Box>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{/* </Trail> */}
				</Container>
			</ParallaxLayer>
		</>
	);
};
export default PageOne;
