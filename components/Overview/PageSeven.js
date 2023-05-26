import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";

const PageSeven = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md"))
		? 1000 / window.innerHeight >= 1
			? 1000 / window.innerHeight
			: 1
		: 1;
	console.log(newFactor);
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div className={styles.slopeBegin} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div
					// className={`${
					// 	useMediaQuery(theme.breakpoints.down("md")) ? styles.slopeEndMobileSeven : styles.slopeEnd
					// } ${styles[gradient]}`}
					className={`${styles.slopeEnd} ${styles[gradient]}`}
				/>
			</ParallaxLayer>
			<ParallaxLayer
				className={`${styles.text} ${styles.number} noselect`}
				offset={offset}
				speed={0.3}
				style={{ zIndex: 9999 }}
				factor={newFactor}>
				<Container
					maxWidth='xl'
					sx={{
						display: { xs: "none", md: "flex" },
						justifyContent: "center",
						alignItems: "center",
						mt: { xs: 0, md: 10 },
					}}>
					<Grid container spacing={2}>
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
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.7} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotating}
					sx={{
						position: "absolute",
						left: { xs: "0%", md: "25%" },
						bottom: "5%",
						transform: "rotate(112deg)",
					}}>
					<HexGrid
						id='module-grid-27'
						height={"30vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-27`}
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
					className={styles.rotatingReverseSlowEaseInOut}
					sx={{
						position: "absolute",
						left: { xs: "15%", md: "40%" },
						top: { xs: "-5%", md: "10%" },
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-28'
						height={"25vh"}
						width={"25vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 55, y: 55 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-28`}
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
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{
						position: "absolute",
						right: "3%",
						top: { xs: "17%", md: "15%" },
						transform: "rotate(212deg)",
					}}>
					<HexGrid
						id='module-grid-29'
						height={useMediaQuery(theme.breakpoints.down("md")) ? "13vh" : "15vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-29`}
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
			<ParallaxLayer offset={offset} speed={0.45} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseSlow}
					sx={{
						position: "absolute",
						left: "0%",
						top: { xs: "35%", md: "0%" },
						transform: "rotate(212deg)",
					}}>
					<HexGrid
						id='module-grid-30'
						height={useMediaQuery(theme.breakpoints.down("md")) ? "17vh" : "20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-30`}
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
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseNormal}
					sx={{
						position: "absolute",
						right: "5%",
						bottom: { xs: "30%", md: "5%" },
						transform: "rotate(212deg)",
					}}>
					<HexGrid
						id='module-grid-31'
						height={useMediaQuery(theme.breakpoints.down("md")) ? "20vh" : "40vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-31`}
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
		</>
	);
};

export default PageSeven;
