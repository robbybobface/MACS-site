import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { Box, Typography, Button, Container, Grid, LinearProgress, Divider } from "@mui/material";
import styles from "../styles/Overview.module.css";
import { MACSLogoWhite } from "../assets/macs_logo_white";
import {
	BoltOutlined,
	Terminal,
	VideogameAssetOutlined,
	EmojiEventsOutlined,
	Diversity3Outlined,
} from "@mui/icons-material";
import theme from "../styles/theme";

const PageTwo = ({ offset, gradient, onClick }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBegin} />
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>
		<ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
			<span>0{offset + 1}</span>
		</ParallaxLayer>
	</>
);
const PageOne = ({ offset, gradient, onClick }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBeginStart} />
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.3}>
			<Container maxWidth='xl'>
				<Grid
					container
					spacing={2}
					sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: 5 }}>
					<Grid item xs={5}>
						<Typography sx={{ fontSize: "6.5rem", fontFamily: "Gilroy-Heavy" }}>Project</Typography>
						<Typography sx={{ fontSize: "6.5rem", fontFamily: "Gilroy-Heavy", mt: -1 }}>
							Overview
						</Typography>
					</Grid>
					<Grid
						item
						xs={7}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Box
							sx={{
								// backgroundColor: theme.palette.drawerBackground.main,
								// minHeight: 400,
								// minWidth: 200,
								borderRadius: 4,
								py: 4,
								px: 6,
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 72, 88, 99, 0.7 )",
								// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
								backdropFilter: "blur( 7px );",
								webkitBackdropFilter: "blur( 7px );",
							}}>
							<Typography textAlign='justify' fontSize={"20px"}>
								In recent years, video gaming has become a cornerstone of digital entertainment. Despite
								this, the rigid form factor of controllers and their proprietary interfaces make for an
								inflexible and inaccessible gaming experience that alienates a vast percentage of the
								population. Although companies like Microsoft and Sony have developed their own modular
								controllers, their attempts have left something to be desired. The MACS (Modular
								Accessible Controller System) seeks to address these problems using specially designed
								input modules that allow users to customize their controller according to their needs
								and preferences, enabling a more personalized and immersive experience.
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								width: "100%",
								flexDirection: "row",
								justifyContent: "space-evenly",
								alignItems: "center",
								my: 2,
							}}>
							<Box
								sx={{
									maxWidth: 285,
									minHeight: 285,
									borderRadius: 4,
									py: 2,
									px: 4,
									boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
									backgroundColor: "#F2F2F2CE",
									backdropFilter: "blur( 7px );",
									webkitBackdropFilter: "blur( 7px );",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-evenly",
									alignItems: "flex-start",
									height: "100%",
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
										fontSize='2.5rem'>
										Accessibility
									</Typography>
									<Divider sx={{ borderColor: "hexagonBlueFull.main", borderWidth: 2 }} />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
									}}>
									<Typography fontFamily='Gilroy-Heavy' color='hexagonRedFull.main' fontSize='2.5rem'>
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
										fontSize='2.5rem'>
										Customizability
									</Typography>
									<Divider sx={{ borderColor: "hexagonGreenFull.main", borderWidth: 2 }} />
								</Box>
							</Box>
							<Box
								sx={{
									// backgroundColor: theme.palette.drawerBackground.main,
									// minHeight: 400,
									// minWidth: 200,
									maxWidth: 275,
									borderRadius: 4,
									py: 4,
									px: 6,
									boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
									// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
									backgroundColor: "#70828FAA",
									// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
									backdropFilter: "blur( 7px );",
									webkitBackdropFilter: "blur( 7px );",
								}}>
								<Typography textAlign='justify' fontSize={"20px"}>
									Most controllers sold today give little to no regard for accessibility,
									reparability, and cross-platform compatibility.
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</ParallaxLayer>
	</>
);

const PageThree = ({ offset, gradient, onClick }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBegin} />
		</ParallaxLayer>

		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>

		<ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
			<span>0{offset + 1}</span>
		</ParallaxLayer>
	</>
);

export default function Overview() {
	const parallax = useRef(null);
	const router = useRouter();

	const scroll = (to) => {
		if (parallax.current) {
			parallax.current.scrollTo(to);
		}
	};
	return (
		<Box>
			<Head>
				<style>{"body { background-color: #FFF; !important; }"}</style>
			</Head>
			<Box sx={{ position: "absolute", top: "3%", left: "6%", zIndex: 9999 }}>
				<MACSLogoWhite />
			</Box>
			<Box
				sx={{
					// display: "flex",
					position: "absolute",
					// right: -460,
					zIndex: 1000,
					right: 100,
					bottom: 30,
					justifyContent: "space-between",
					width: 400,
					flexDirection: "column",
				}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-end",
						alignItems: "center",
						pb: 1.5,
					}}>
					<Button
						variant='contained'
						// disabled={gridRotate === "-30deg"}
						color='drawerBackground'
						onClick={() => console.log("rotate left")}
						sx={{ marginRight: 4.9, minHeight: 40 }}
						// style={{ padding: 0 }}
					>
						<Diversity3Outlined color='primary' />
					</Button>
					<Button
						variant='contained'
						// disabled={gridRotate === "30deg"}
						color='drawerBackground'
						sx={{ minHeight: 40 }}
						onClick={() => console.log("rotate right")}>
						<EmojiEventsOutlined color='primary' />
					</Button>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					<Button
						variant='contained'
						color={"stopButtonRed"}
						style={{
							textTransform: "none",
							color: "white",
							fontSize: "1rem",
						}}
						onClick={() => router.push("/")}>
						{"Go Home"}
					</Button>
					<Button
						variant='contained'
						color='drawerBackground'
						onClick={() => console.log("zoom in")}
						sx={{ padding: 0, minHeight: 40 }}
						style={{ padding: 0 }}>
						<BoltOutlined color='primary' />
					</Button>
					<Button
						variant='contained'
						color='drawerBackground'
						onClick={() => console.log("zoom out")}
						size='small'
						sx={{ padding: 0 }}>
						<VideogameAssetOutlined color='primary' />
					</Button>
					<Button
						variant='contained'
						color='drawerBackground'
						onClick={() => {
							// centerView();
							// resetTransform();
							console.log("reset");
							// setTransform(160, 0, 1, 300, "easeInQuad");
						}}
						size='small'>
						<Terminal color='primary' />
					</Button>
				</Box>
			</Box>
			<Parallax className={styles.parallaxContainer} ref={parallax} pages={3}>
				<PageOne offset={0} gradient='pink' onClick={() => scroll(1)} />
				<PageTwo offset={1} gradient='teal' onClick={() => scroll(2)} />
				<PageThree offset={2} gradient='tomato' onClick={() => scroll(0)} />
			</Parallax>
		</Box>
	);
}
