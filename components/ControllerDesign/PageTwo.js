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

const PageTwo = ({ offset, gradient, onClick, router }) => {
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
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));
	const getImageHeights = () => {
		if (isMD) {
			return 275;
		} else if (isMDPlus) {
			return 295;
		} else if (isLG) {
			return 305;
		} else if (isXL) {
			return 315;
		} else {
			return 325;
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
					<Grid container spacing={2}>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<GradientText
								text='Localizing Modules'
								gradient='background: rgb(160,232,134);
background: linear-gradient(125deg, rgba(160,232,134,1) 0%, rgba(6,168,44,1) 100%);'
								onClick={onClick}
								fontSize={{ xs: "2.5rem", md: "4rem", mdPlus: "4.75rem", lg: "5.25rem", xl: "6rem" }}
								textAlign={"center"}
								lineHeight={1.1}
								mb={3}
							/>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									p: { xs: 2, md: 3, lg: 4 },
								}}>
								<Typography
									color={"white"}
									sx={{
										fontSize: {
											xs: "14px",
											md: "15px",
											mdPlus: "16px",
											lg: "18px",
											xl: "20px",
										},
									}}
									textAlign='justify'>
									When a module is first connected to the controller, it scans each of its sides for
									neighbors by reading input PWM signals on each side. To be recognized by the central
									hub module, which will be responsible for calculating its coordinates and polling it
									for input data, the new module has to “announce” its arrival to the central hub over
									I2C. Although a module only has one set of pins dedicated to I2C, it first
									initializes those pins as an I2C “Queen Bee” so that it can inform the central hub
									of its identity and its neighbors. After it sends that information, it
									re-initializes the same pins as a “Worker Bee” device so that it can respond to
									queries from the central hub. Since the hub has a set of I2C pins always set on
									worker bee mode, it has its own I2C address that new modules can send their
									information to.
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly",
								alignItems: "center",
								minHeight: { xs: "900px", md: "725px" },
							}}>
							<Grid
								container
								spacing={2}
								sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<Grid item xs={12} md={5.5} lgPlus={7}>
									<Box sx={{ position: "relative" }}>
										<Card
											elevation={4}
											sx={{
												display: "flex",
												position: "relative",
												minHeight: getImageHeights(),
												minWidth: getImageHeights(),
											}}>
											<BlurHashedImage
												src='https://ik.imagekit.io/5ywj5edvn/hexagon-map.png?tr=h-1500'
												hash='CiMaV5s.~qWBbI%2j]Rj'
												alt='central hub render top'
												height={getImageHeights()}
											/>
										</Card>
										<ImageCaption caption={"Hexagonal Coordinate Plane"} light={false} />
									</Box>
								</Grid>
								<Grid item xs={12} md={6.5} lgPlus={5}>
									<Box
										className={boxStyles.lightGreyBox}
										sx={{
											px: { xs: 2, md: 3, lg: 4 },
											py: { xs: 2, md: 2.5, lg: 2.5 },
										}}>
										<Typography
											color={"white"}
											sx={{
												fontSize: {
													xs: "14px",
													md: "15px",
													mdPlus: "16px",
													lg: "17px",
													lgPlus: "17px",
													xl: "18px",
												},
											}}
											textAlign='justify'>
											MACS and its subsequent modules are arranged in a grid-like format. So, for
											calculating position and the coordinates of each module, a traditional
											hexagonal coordinate plane is used.
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={12}>
									<Box
										className={boxStyles.whiteBox}
										sx={{
											px: { xs: 2, md: 3, lg: 4 },
											py: { xs: 2, md: 2.5, lg: 2.5 },
										}}>
										<Typography
											color={"black"}
											sx={{
												fontSize: {
													xs: "14px",
													md: "15px",
													mdPlus: "16px",
													lg: "18px",
													xl: "18px",
												},
											}}
											textAlign='justify'>
											With the hub having received new information about a module on its worker
											bee pins, the hub does a lookup to see if any of the new module’s neighbors
											have assigned coordinates. If they do, the coordinates of the new module can
											be determined based on which side the module was connected to. An
											interesting case arises if multiple modules are connected simultaneously, in
											which case it is possible that a module sends its own introduction before
											any of its neighbors are assigned coordinates. In this case, the central hub
											stores the dependencies of that new module in a data structure. These
											dependencies can then be resolved recursively; when a module is assigned
											coordinates, the central hub checks to see which pending modules depend on
											this new information and assigns their coordinates as well. This continues
											until all possible dependencies can be resolved.
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.05} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						right: { xs: "-15%", md: "5%" },
						bottom: { xs: "30%", md: "10%" },
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-13'
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
								id={`hexagon-13`}
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
			<ParallaxLayer offset={offset} speed={0.25} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotating}
					sx={{
						position: "absolute",
						right: { xs: "50%", md: "42%" },
						bottom: { xs: "40%", md: "30%" },
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-14'
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
								id={`hexagon-14`}
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
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotating}
					sx={{
						position: "absolute",
						right: { xs: "-5%", md: "0%" },
						bottom: "45%",
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-15'
						height={"35vh"}
						width={"35vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isLG ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-15`}
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
		</>
	);
};

export default PageTwo;
