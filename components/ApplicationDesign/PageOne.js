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
		if (isXS) return "140px";
		if (isXSPlus) return "140px";
		if (isSM) return "140px";
		if (isMD) return "150px";
		if (isMDPlus) return "140px";
		if (isLG) return "145px";
		if (isXL) return "150px";
		return "175px";
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
				<div className={`${styles.slopeEndTop} ${styles.red}`} />
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
								cellStyle={{ fill: theme.palette.hexagonGreen.main }}
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
								cellStyle={{ fill: theme.palette.hexagonYellow.main }}
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
								cellStyle={{ fill: theme.palette.hexagonBlue.main }}
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
							lg={5}
							sx={{
								mt: { xs: 0, md: -4 },
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Trail open={open}>
								<GradientText
									text='Inputs Designed By You'
									gradient='background: rgb(255,255,255);
background: linear-gradient(125deg, rgba(255,255,255,1) 0%, rgba(190,77,106,1) 30%, rgba(162,0,42,1) 70%);'
									fontSize={{
										xs: "2.5rem",
										md: "4rem",
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
							lg={7}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Grid
								container
								spacing={1}
								rowGap={1}
								sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
													md: "14px",
													mdPlus: "15px",
													lg: "17px",
													xl: "19px",
												},
											}}>
											The application built for the MACS was designed to give users the ability to
											configure their controller to their unique needs. The application was built
											using Electron and React, and is available on Windows. The application is
											designed to be accessible, intuitive and easy to use, with a simple and
											clean interface that shows the real-time topology of the controller. Wherein
											users can easily configure the inputs of their controller by simply clicking
											on the module they want to configure, and then selecting the input they want
											to assign to that module. Finally, the application also handles the virtual
											controller emulation, where the inputs from the MACS are translated into
											virtual controller inputs, based on the user's configurations, that can be
											used in any game.
										</Typography>
									</Box>
								</Grid>
								<Grid
									item
									xs={12}
									md={5.5}
									lg={4}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										position: "relative",
									}}>
									<Card
										elevation={4}
										sx={{
											display: "flex",
											alignSelf: "stretch",
											position: "relative",
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/macs-toplogy.png?tr=h-1500'
											hash='L49QdO4:02;[M.Rh%eM#2srW}uFw'
											alt='macs application'
											height={getImageSize()}
										/>
									</Card>
									<ImageCaption caption={"Topology"} light={false} />
								</Grid>
								<Grid
									item
									xs={12}
									md={5.5}
									lg={4}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										position: "relative",
									}}>
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
											height={getImageSize()}
										/>
									</Card>
									<ImageCaption caption={"Configuration"} light={false} />
								</Grid>
								<Grid
									item
									xs={12}
									md={5.5}
									lg={4}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										position: "relative",
									}}>
									<Card
										elevation={4}
										sx={{
											display: "flex",
											alignSelf: "stretch",
											position: "relative",
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/minecraft-emulation.png?tr=h-1500'
											hash='L~D,{5bJofa#%%WFoca}o#WAjra#'
											alt='macs emulation in Minecraft'
											height={getImageSize()}
										/>
									</Card>
									<ImageCaption caption={"Emulation"} light={false} />
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
