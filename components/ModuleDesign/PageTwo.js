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
	const isLGPlus = useMediaQuery(theme.breakpoints.down("lgPlus"));
	const isLGPlusPlus = useMediaQuery(theme.breakpoints.down("lgPlusPlus"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const getImageHeights = () => {
		if (isMD) {
			return 150;
		} else if (isMDPlus) {
			return 150;
		} else if (isLG) {
			return 160;
		} else if (isLGPlus) {
			return 165;
		} else if (isLGPlusPlus) {
			return 170;
		} else if (isXL) {
			return 180;
		} else {
			return 215;
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
								lg: "5rem",
								xl: "6rem",
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
								px: { xs: 0, md: 3, lg: 4 },
								pb: { xs: 4, md: 4, xl: 6 },
							}}>
							<Grid item xs={12} sx={{ mb: 2 }}>
								<Typography
									color='backgroundBlack.main'
									sx={{
										fontSize: {
											xs: "14px",
											md: "15px",
											mdPlus: "16px",
											lg: "17px",
											lgPlus: "18px",
											isLGPlusPlus: "19px",
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
								container
								maxWidth={{
									xs: "mdPlus",
									lg: "lg",
									lgPlus: "lgPlus",
									lgPlusPlus: "lgPlusPlus",
									xl: "xl",
								}}
								spacing={1}
								rowSpacing={2}
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									mx: { xs: 0, md: 3, lg: 6, lgPlus: 4, lgPlusPlus: 2, xl: 0 },
									pb: { xs: 4, md: 3, xl: 6 },
								}}>
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
											hash='data:image/png;base64,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'
											alt='central hub render top'
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
											hash='data:image/png;base64,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'
											alt='button module render top'
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
											hash='data:image/png;base64,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'
											alt='central hub module render bottom'
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
											hash='data:image/png;base64,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'
											alt='general module render bottom'
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
											hash='data:image/png;base64,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'
											alt='switch module render top'
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
											hash='data:image/png;base64,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'
											alt='slider module render top'
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
											hash='data:image/png;base64,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'
											alt='central hub module render bottom'
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
											hash='data:image/png;base64,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'
											alt='general module render bottom'
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
											hash='data:image/png;base64,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'
											alt='dial module render top'
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
											hash='data:image/png;base64,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'
											alt='joystick module render top'
										/>
									</Card>
									<ImageCaption caption={"Joystick Top"} light={false} />
								</Grid>
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
