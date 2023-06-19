import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardContent, useMediaQuery, CardMedia } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import ImageCaption from "../ImageCaption";
import BlurHashedImage from "../Partials/BlurHashedImage";

const PageTwo = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md")) ? 1.1 : 1;
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const getImageHeights = () => {
		if (isMD) {
			return 150;
		} else if (isMDPlus) {
			return 150;
		} else if (isLG) {
			return 190;
		} else if (isXL) {
			return 225;
		} else {
			return 225;
		}
	};
	return (
		<>
			<ParallaxLayer offset={offset} onClick={onClick} speed={0.1} factor={newFactor}>
				<div
					className={
						useMediaQuery(theme.breakpoints.down("md"))
							? styles.slopeBeginModuleMobileTwo
							: styles.slopeBegin
					}
				/>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} onClick={onClick} speed={0.15} factor={newFactor}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			<ParallaxLayer
				className={`${styles.text} ${styles.number} noselect`}
				offset={offset}
				speed={0.3}
				onClick={onClick}
				style={{ zIndex: 9999 }}
				factor={newFactor}>
				<Container
					maxWidth='xl'
					sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000000 }}>
					<Box
						className={boxStyles.whiteBox}
						sx={{
							width: { xs: "100%", md: "85%" },
							// minHeight: 700,
							zIndex: 10000000,
							px: { xs: 2, md: 0 },
						}}>
						<GradientText
							text='Module Design'
							gradient='linear-gradient(170deg, rgba(112,130,143,1) 0%, rgba(50,50,50,1) 100%)'
							onClick={onClick}
							lineHeight='1.2'
							textAlign='center'
							fontSize={{
								xs: "2.5rem",
								md: "4.25rem",
								mdPlus: "4.5rem",
								lg: "5.5rem",
								xl: "6.5rem",
							}}
							width='100%'
							pt={1}
						/>
						<Grid
							container
							spacing={2}
							rowSpacing={3}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								px: { xs: 0, md: 3, lg: 6 },
								pb: { xs: 4, md: 4, xl: 6 },
							}}>
							<Grid item xs={12}>
								<Typography
									color='backgroundBlack.main'
									sx={{
										fontSize: {
											xs: "14px",
											md: "15px",
											mdPlus: "16px",
											lg: "18px",
											xl: "20px",
										},
										px: { xs: 0, md: 2, lg: 3, xl: 4 },
										mt: { xs: 1, md: 0 },
									}}
									textAlign='justify'>
									Five input modules were fully developed, alongside the central hub. These inputs are
									a button, a switch, a slider, a dial, and a joystick. Housings were designed on
									SolidWorks for each module type. In order to make housing easy to print and
									assemble, each design was split in half and printed as a top and bottom. Mating
									posts were added at the intersection so that the housing would stay together nicely
									without any extra adhesive.
								</Typography>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
								}}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										position: "relative",
										minHeight: getImageHeights(),
										minWidth: getImageHeights(),
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/central-hub-top.png?tr=w-1000'
										hash='CiMaV5s.~qWBbI%2j]Rj'
										alt='central hub render top'
										height={getImageHeights()}
									/>
								</Card>
								<ImageCaption caption={"Central Hub Top"} light={false} />
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
								}}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										position: "relative",
										minHeight: getImageHeights(),
										minWidth: getImageHeights(),
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/button-top.png?tr=w-1000'
										hash='CTNAxOxu~qt79Gxut8WB'
										alt='button module render top'
										height={getImageHeights()}
									/>
								</Card>
								<ImageCaption caption={"Button Top"} light={false} />
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									display: { xs: "flex", md: "none" },
									alignItems: "center",
									justifyContent: "center",
								}}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										position: "relative",
										minHeight: getImageHeights(),
										minWidth: getImageHeights(),
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/central-hub-bottom.png?tr=w-1000'
										hash='CCNwZs8^~p-=E2%LM|Ri'
										alt='central hub module render bottom'
										height={getImageHeights()}
									/>
								</Card>
								<ImageCaption caption={"Central Hub Bottom"} light={false} />
							</Grid>
							<Grid
								item
								xs={6}
								md={4}
								sx={{
									display: { xs: "flex", md: "none" },
									alignItems: "center",
									justifyContent: "center",
								}}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										position: "relative",
										minHeight: getImageHeights(),
										minWidth: getImageHeights(),
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/general-bottom.png?tr=w-1000'
										hash='CEODteIT~p-;4:%LRjRj'
										alt='general module render bottom'
										height={getImageHeights()}
									/>
								</Card>
								<ImageCaption caption={"General Bottom"} light={false} />
							</Grid>

							<Grid
								item
								xs={6}
								md={3}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
								}}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										position: "relative",
										minHeight: getImageHeights(),
										minWidth: getImageHeights(),
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/switch-top.png?tr=w-1000'
										hash='CSMj{:t6~qt79Gxut7V@'
										alt='switch module render top'
										height={getImageHeights()}
									/>
								</Card>
								<ImageCaption caption={"Switch Top"} light={false} />
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
								}}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										position: "relative",
										minHeight: getImageHeights(),
										minWidth: getImageHeights(),
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/slider-top.png?tr=w-1000'
										hash='CVNAuF%2~qt7M{xtWCj@'
										alt='slider module render top'
										height={getImageHeights()}
									/>
								</Card>
								<ImageCaption caption={"Slider Top"} light={false} />
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									display: { xs: "none", md: "flex" },
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
								}}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										position: "relative",
										minHeight: getImageHeights(),
										minWidth: getImageHeights(),
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/central-hub-bottom.png?tr=w-1000'
										hash='CCNwZs8^~p-=E2%LM|Ri'
										alt='central hub module render bottom'
										height={getImageHeights()}
									/>
								</Card>
								<ImageCaption caption={"Central Hub Bottom"} light={false} />
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									display: { xs: "none", md: "flex" },
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
								}}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										position: "relative",
										minHeight: getImageHeights(),
										minWidth: getImageHeights(),
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/general-bottom.png?tr=w-1000'
										hash='CEODteIT~p-;4:%LRjRj'
										alt='general module render bottom'
										height={getImageHeights()}
									/>
								</Card>
								<ImageCaption caption={"General Bottom"} light={false} />
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
								}}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										position: "relative",
										minHeight: getImageHeights(),
										minWidth: getImageHeights(),
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/dial-top.png?tr=w-1000'
										hash='CRN^h~xt~qxu9Fxut8WB'
										alt='dial module render top'
										height={getImageHeights()}
									/>
								</Card>
								<ImageCaption caption={"Dial Top"} light={false} />
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
								}}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										position: "relative",
										minHeight: getImageHeights(),
										minWidth: getImageHeights(),
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/joystick-top.png?tr=w-1000'
										hash='CQONF4xt~qxu9G%2ogWB'
										alt='joystick module render top'
										height={getImageHeights()}
									/>
								</Card>
								<ImageCaption caption={"Joystick Top"} light={false} />
							</Grid>
						</Grid>
					</Box>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} onClick={onClick} speed={-0.05} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{
						position: "absolute",
						left: { xs: "-20%", md: "0%" },
						top: "-10%",
						transform: "rotate(15deg)",
					}}>
					<HexGrid
						id='module-grid-5'
						height={"40vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-5`}
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
			<ParallaxLayer offset={offset} onClick={onClick} speed={0.2} factor={newFactor}>
				<Box
					className={styles.rotatingReverse}
					sx={{
						position: "absolute",
						right: { xs: "-10%", md: "5%" },
						top: "30%",
						transform: "rotate(15deg)",
					}}>
					<HexGrid
						id='module-grid-6'
						height={"20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-6`}
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
			<ParallaxLayer offset={offset} onClick={onClick} speed={0.2} factor={newFactor}>
				<Box
					className={styles.rotatingSlow}
					sx={{
						position: "absolute",
						left: { xs: "-15%" },
						right: { md: "45%" },
						bottom: "0%",
						transform: "rotate(15deg)",
					}}>
					<HexGrid
						id='module-grid-7'
						height={"30vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 55, y: 55 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-7`}
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
