import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Divider, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon, Pattern } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import { animated, useTrail, to } from "@react-spring/web";
import ImageCaption from "../ImageCaption";
import ImageCaptionAlt from "../ImageCaptionAlt";
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
		config: { mass: 20, tension: 1500, friction: 150 },
		opacity: open ? 1 : 0,
		y: open ? 0 : 40,
		from: { opacity: 0, y: 40 },
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
				<div className={`${styles.slopeEndTop} ${styles.yellow}`} />
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
							md={4}
							lg={5}
							sx={{
								mt: { xs: 0, md: -4 },
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Trail open={open}>
								<GradientText
									text='A Modular Approach'
									gradient='background: rgb(255,255,255);
background: linear-gradient(145deg, rgba(255,236,203,1) 0%, rgba(255,184,0,1) 35%, rgba(255,136,0,1) 100%);'
									fontSize={{
										xs: "2.5rem",
										md: "4.25rem",
										mdPlus: "4.5rem",
										lg: "6.5rem",
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
							md={8}
							lg={7}
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
												py: { xs: 1, md: 4 },
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
												To facilitate I2C communication, 2 custom PCBs were developed, one for
												the central hub, and one for any given input module. These PCBs are
												mostly identical, with a few minor changes to account for the fact that
												the central hub has a different role than any other module. The central
												hub PCB only has 5 connectors, while the general PCB has 6 connectors,
												one for each side. The central hub uses one side for interfacing with
												the application on a computer, so the Raspberry Pi Pico is shifted
												towards that side to allow for easy USB connection. This also means that
												the central hub is powered over USB, while the other modules are powered
												via a battery pack in the central hub that feeds a power bus though the
												6-pin header connectors. The general PCB is equipped with through hole
												cutouts for each supported input type.
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
											sx={{
												position: "relative",
												mb: { xs: 3, md: 0 },
											}}>
											<Box className={isLG ? (isMDPlus ? "hex-xsmall" : "hex-small") : "hex"}>
												<Box
													className={
														isLG
															? isMDPlus
																? "hex-background-xsmall"
																: "hex-background-small"
															: "hex-background"
													}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/general-pcb.png?tr=w-1000'
														hash='L07TnUk:00D,UEcCQmMg00-SM0E4'
														alt='general pcb design'
														height={"auto"}
														hexagon={true}
														size={isLG ? (isMDPlus ? "-20px" : "-25px") : "0"}
													/>
												</Box>
											</Box>
											<ImageCaptionAlt caption={"General PCB"} light={false} center={true} />
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
										<Box sx={{ position: "relative" }}>
											<Box className={isLG ? (isMDPlus ? "hex-xsmall" : "hex-small") : "hex"}>
												<Box
													className={
														isLG
															? isMDPlus
																? "hex-background-xsmall"
																: "hex-background-small"
															: "hex-background"
													}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/central-hub-pcb.png?tr=w-1000'
														hash='L07K3vI:00$*~p%K4n9b04~A@q02'
														alt='central hub pcb design'
														height={"auto"}
														hexagon={true}
														size={isLG ? (isMDPlus ? "-20px" : "-25px") : "0"}
													/>
												</Box>
											</Box>
											<ImageCaptionAlt caption={"Central Hub"} light={false} center={true} />
										</Box>
									</TrailAlt>
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
