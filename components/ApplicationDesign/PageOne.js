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
		config: { mass: 20, tension: 2000, friction: 200 },
		opacity: open ? 1 : 0,
		x: open ? 0 : -20,
		from: { opacity: 0, x: -20 },
		delay: delay ?? 0,
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
		return "165px";
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
									<TrailAlt open={open}>
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
												The application built for the MACS was designed to give users the
												ability to configure their controller to their unique needs. The
												application was built using Electron and React, and is available on
												Windows. The application is designed to be accessible, intuitive and
												easy to use, with a simple and clean interface that shows the real-time
												topology of the controller. Wherein users can easily configure the
												inputs of their controller by simply clicking on the module they want to
												configure, and then selecting the input they want to assign to that
												module. Finally, the application also handles the virtual controller
												emulation, where the inputs from the MACS are translated into virtual
												controller inputs, based on the user's configurations, that can be used
												in any game.
											</Typography>
										</Box>
									</TrailAlt>
								</Grid>
								<Grid
									item
									xs={12}
									md={5.5}
									lg={4}
									sx={{
										position: "relative",
									}}>
									<TrailAlt open={open} delay={100}>
										<Box sx={{ position: "relative", width: "100%", height: "100%" }}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													height: getImageSize(),
													width: "100%",
													backgroundColor: "transparent",
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/macs-toplogy.png?tr=w-1000'
													hash='data:image/png;base64,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'
													alt='macs application'
												/>
											</Card>
											<ImageCaption caption={"Topology"} light={false} />
										</Box>
									</TrailAlt>
								</Grid>
								<Grid
									item
									xs={12}
									md={5.5}
									lg={4}
									sx={{
										position: "relative",
									}}>
									<TrailAlt open={open} delay={150}>
										<Box sx={{ position: "relative", width: "100%", height: "100%" }}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													height: getImageSize(),
													width: "100%",
													backgroundColor: "transparent",
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/joystick-config.png?tr=w-1000'
													hash='data:image/png;base64,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'
													alt='application joystick configuration'
												/>
											</Card>
											<ImageCaption caption={"Configuration"} light={false} />
										</Box>
									</TrailAlt>
								</Grid>
								<Grid
									item
									xs={12}
									md={5.5}
									lg={4}
									sx={{
										position: "relative",
									}}>
									<TrailAlt open={open} delay={200}>
										<Box sx={{ position: "relative", width: "100%", height: "100%" }}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													height: getImageSize(),
													width: "100%",
													backgroundColor: "transparent",
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/minecraft-emulation.png?tr=w-1000'
													hash='data:image/png;base64,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'
													alt='macs emulation in Minecraft'
												/>
											</Card>
											<ImageCaption caption={"Emulation"} light={false} />
										</Box>
									</TrailAlt>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
		</>
	);
};
export default PageOne;
