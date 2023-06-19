import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardContent, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import BlurHashedImage from "../Partials/BlurHashedImage";
import ImageCaption from "../ImageCaption";
import ControllerFlowChart from "../../assets/controller_flowchart";
import VirtualControllerFlowChart from "../../assets/virtual_controller_flowchart";

const PageFour = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md"))
		? 1000 / window.innerHeight >= 1
			? 1000 / window.innerHeight
			: 1
		: 1;
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isLGPlus = useMediaQuery(theme.breakpoints.down("lgPlus"));
	const isLGPlusPlus = useMediaQuery(theme.breakpoints.down("lgPlusPlus"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));
	const getFlowChartWidth = () => {
		if (isMD) {
			return "35vmax";
		} else if (isMDPlus) {
			return "36vmax";
		} else if (isLG) {
			return "37vmax";
		} else if (isXL) {
			return "36vmax";
		} else {
			return "28vmax";
		}
	};

	const getControllerImageHeight = () => {
		if (isMD) {
			return 120;
		} else if (isMDPlus) {
			return 120;
		} else if (isLG) {
			return 120;
		} else if (isLGPlus) {
			return 110;
		} else if (isLGPlusPlus) {
			return 120;
		} else if (isXL) {
			return 130;
		} else {
			return 150;
		}
	};
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div
					// className={
					// 	useMediaQuery(theme.breakpoints.down("md")) ? styles.slopeBeginMobileFour : styles.slopeBegin
					// }
					className={styles.slopeBegin}
				/>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
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
					<Grid
						container
						spacing={2}
						sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Grid
							item
							xs={12}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<GradientText
								text='Emulation & Application Visualized'
								gradient='background: rgb(176,38,84);
background: linear-gradient(125deg, rgba(176,38,84,1) 0%, rgba(162,0,42,1) 88%);'
								onClick={onClick}
								fontSize={{
									xs: "2.5rem",
									md: "3.5rem",
									mdPlus: "4rem",
									lg: "5rem",
									lgPlus: "5rem",
									xl: "5.25rem",
								}}
								textAlign={"center"}
								lineHeight={1.1}
								pb={{ xs: 0, md: 0, lg: 1, xl: 2 }}
							/>
						</Grid>
						<Grid item xs={1.5} md={1} mdPlus={1.5} sx={{ display: { xs: "flex", lgPlusPlus: "none" } }} />
						<Grid
							item
							xs={9}
							md={10}
							mdPlus={9}
							mt={1}
							sx={{
								display: { xs: "flex", lgPlusPlus: "none" },
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Box
								className={boxStyles.lightGreyBox}
								sx={{
									py: { xs: 2, md: 2, lg: 2 },
									px: { xs: 2, md: 3, lg: 4 },
									mt: { xs: 0, md: -1, lg: -2, xl: -3 },
									mb: { xs: -7, md: -6, mdPlus: -7, lg: 0 },
									zIndex: 100,
								}}>
								<Typography
									color={"white"}
									sx={{
										fontSize: {
											xs: "13px",
											md: "15px",
											mdPlus: "15px",
											lg: "16px",
											xl: "17px",
										},
									}}
									textAlign='justify'>
									Emulating the inputs in-game happens via the VigemClient Library, which is a node
									accessible wrapper for the XInput API. Using this library, a virtual controller can
									be created and then updated as necessary. In this case, the state of the virtual
									controller is updated as module input reports are processed, with the user's
									configuration being used as the template to dictate the action to emulate.
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={1.5} md={1} mdPlus={1.5} sx={{ display: { xs: "flex", lgPlusPlus: "none" } }} />
						<Grid item xs={3.5}>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									px: { xs: 2, md: 2, lg: 4 },
									py: { xs: 2, md: 2, lg: 2.5 },
								}}>
								<Box
									sx={{
										position: "relative",
										mb: 2,
									}}>
									<Card
										elevation={4}
										sx={{
											position: "relative",
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/macs-searching.png?tr=h-1500'
											hash='L06H$Ht700Rj*0j[ofay0mWB~qt8'
											alt='macs detection/searching'
											height={"auto"}
										/>
									</Card>
									<ImageCaption caption={"MACS Detection"} light={false} />
								</Box>
								<Box
									sx={{
										position: "relative",
									}}>
									<Card
										elevation={4}
										sx={{
											position: "relative",
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/macs-topology-2.png?tr=h-1500'
											hash='L29G]o0L00{t0Z$v~n0M3THr}vuN'
											alt='macs topology two'
											height={"auto"}
										/>
									</Card>
									<ImageCaption caption={"Topology"} light={false} />
								</Box>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							md={5}
							sx={{
								display: "flex",
								justifyContent: "space-evenly",
								alignItems: "center",
								flexDirection: "column",
							}}>
							<Grid
								container
								sx={{
									display: "flex",
									justifyContent: "space-evenly",
									alignItems: "center",
									flexDirection: "column",
								}}>
								<Grid
									item
									xs={12}
									sx={{
										display: { xs: "none", lgPlusPlus: "flex" },
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Box
										className={boxStyles.lightGreyBox}
										sx={{
											py: { xs: 2, md: 2, lg: 2 },
											px: { xs: 2, md: 3, lg: 4 },
											mt: { xs: 0, md: -1, lg: -2, xl: -3 },
											mb: 2,
										}}>
										<Typography
											color={"white"}
											sx={{
												fontSize: {
													xs: "13px",
													md: "14px",
													mdPlus: "15px",
													lg: "16px",
													xl: "17px",
												},
											}}
											textAlign='justify'>
											Emulating the inputs in-game happens via the VigemClient Library, which is a
											node accessible wrapper for the XInput API. Using this library, a virtual
											controller can be created and then updated as necessary. In this case, the
											state of the virtual controller is updated as module input reports are
											processed, with the user's configuration being used as the template to
											dictate the action to emulate.
										</Typography>
									</Box>
								</Grid>
								<Grid
									item
									xs={12}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Box sx={{ position: "relative", display: "flex" }}>
										<Box
											className={boxStyles.whiteBox}
											sx={{
												overflow: "clip",
												p: 2,
											}}>
											<VirtualControllerFlowChart width={getFlowChartWidth()} />
										</Box>
										<ImageCaption
											caption={"Application Breakdown - Virtual Controller"}
											light={false}
										/>
									</Box>
								</Grid>
								<Grid
									item
									mt={2}
									md={11}
									mdPlus={12}
									lg={12}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Box
										className={boxStyles.lightGreyBox}
										sx={{
											py: { xs: 2, md: 2, lg: 2 },
											px: { xs: 2, md: 2, lg: 2.5 },
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}>
										<Grid
											container
											spacing={2}
											sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
											<Grid
												item
												xs={6}
												lg={6}
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
														position: "relative",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/minecraft-emulation.png?tr=h-1500'
														hash='L~D,{5bJofa#%%WFoca}o#WAjra#'
														alt='macs emulation in Minecraft'
														height={"auto"}
													/>
												</Card>
												<ImageCaption caption={"Emulation Ex. 1"} light={true} />
											</Grid>
											<Grid
												item
												xs={6}
												lg={6}
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
														position: "relative",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/minecraft-emulation-2.png?tr=h-1500'
														hash='L0429*-PIqaJ#3$P-ixuEI$+a6V['
														alt='macs emulation in Minecraft 2'
														height={"auto"}
													/>
												</Card>
												<ImageCaption caption={"Emulation Ex. 2"} light={true} />
											</Grid>
										</Grid>
									</Box>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={3.5}>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									px: { xs: 2, md: 2, lg: 4 },
									py: { xs: 2, md: 2, lg: 2.5 },
								}}>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										position: "relative",
										mb: 2,
									}}>
									<Card
										elevation={4}
										sx={{
											display: "flex",
											alignSelf: "stretch",
											position: "relative",
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/slider-config.png?tr=h-1500'
											hash='L7AU1]csu|-n^ntk-:rawk$jP1xo'
											alt='macs slider configuration'
											height={"auto"}
										/>
									</Card>
									<ImageCaption caption={"Slider Configuration"} light={false} />
								</Box>
								<Box
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
											src='https://ik.imagekit.io/5ywj5edvn/button-config.png?tr=h-1500'
											hash='L6E2qc3WBo=^00IA9YVb34,G~X-5'
											alt='macs button configuration'
											height={"auto"}
										/>
									</Card>
									<ImageCaption caption={"Button Configuration"} light={false} />
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.2} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotating}
					sx={{
						position: "absolute",
						right: "30%",
						bottom: { xs: "-10%", md: "5%" },
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-16'
						height={"30vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-16`}
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
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseSlowEaseInOut}
					sx={{
						position: "absolute",
						left: { xs: "-10%", md: "0%" },
						bottom: "35%",
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-17'
						height={"25vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-17`}
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
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{ position: "absolute", right: "0%", top: "0%", transform: "rotate(212deg)" }}>
					<HexGrid
						id='module-grid-18'
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
								id={`hexagon-18`}
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
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseSlow}
					sx={{
						position: "absolute",
						left: "35%",
						top: { xs: "15%", md: "40%" },
						transform: "rotate(212deg)",
					}}>
					<HexGrid
						id='module-grid-19'
						height={"20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-19`}
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
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseNormal}
					sx={{
						position: "absolute",
						right: { xs: "-10%", md: "3%" },
						bottom: "15%",
						transform: "rotate(212deg)",
					}}>
					<HexGrid
						id='module-grid-20'
						height={useMediaQuery(theme.breakpoints.down("md")) ? "25vh" : "20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-20`}
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
		</>
	);
};

export default PageFour;
