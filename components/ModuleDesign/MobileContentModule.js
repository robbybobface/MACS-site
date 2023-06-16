import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Divider, useMediaQuery, Card, CardContent, CardMedia } from "@mui/material";
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

function MobileContentModule() {
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));

	const getModuleImageHeight = () => {
		if (isXS) {
			return 140;
		} else if (isXSPlus) {
			return 140;
		} else if (isSM) {
			return 200;
		} else if (isMD) {
			return 225;
		} else {
			return 250;
		}
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					backgroundColor: "#323232",
					overflow: "hidden",
				}}>
				<Box className={`${styles.slopeTopMobile} ${styles.yellow}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffset} ${styles.white}`} sx={{ zIndex: 1 }} />
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
							zIndex: 10,
							mt: { xs: 0, md: 0 },
						}}>
						<Grid
							item
							xs={12}
							md={5}
							sx={{
								mt: { xs: 0, md: -4 },
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Trail open={open}>
								<GradientText
									text='A Modular Approach'
									gradient='background: rgb(255,255,255); background: linear-gradient(145deg, rgba(255,236,203,1) 0%, rgba(255,184,0,1) 35%, rgba(255,136,0,1) 100%);'
									fontSize={{
										xs: "2.5rem",
										xsPlus: "2.6rem",
										smMinus: "2.7rem",
										sm: "3rem",
										md: "7.5rem",
									}}
									lineHeight='1.3'
									textAlign={{ xs: "center", md: "left" }}
								/>
							</Trail>
						</Grid>
						<Grid
							item
							xs={12}
							md={7}
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
											py: { xs: 1, md: 4 },
											px: { xs: 2, md: 6 },
										}}>
										<Typography
											textAlign='justify'
											fontSize={"20px"}
											color={"white"}
											sx={{ fontSize: { xs: "14px", smMinus: "15px", sm: "16px", md: "20px" } }}>
											To facilitate I2C communication, 2 custom PCBs were developed, one for the
											central hub, and one for any given input module. These PCBs are mostly
											identical, with a few minor changes to account for the fact that the central
											hub has a different role than any other module. The central hub PCB only has
											5 connectors, while the general PCB has 6 connectors, one for each side. The
											central hub uses one side for interfacing with the application on a
											computer, so the Raspberry Pi Pico is shifted towards that side to allow for
											easy USB connection. This also means that the central hub is powered over
											USB, while the other modules are powered via a battery pack in the central
											hub that feeds a power bus though the 6-pin header connectors. The general
											PCB is equipped with through hole cutouts for each supported input type.
										</Typography>
									</Box>
								</Grid>
								<Grid
									item
									xs={12}
									sm={6}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										zIndex: 100,
										mb: { xs: 5, sm: 0 },
									}}>
									<Box
										sx={{
											position: "relative",
										}}>
										<Box className={isMD ? "hex-mobile" : "hex"}>
											<Box className={isMD ? "hex-background-mobile" : "hex-background"}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/general-pcb.png'
													hash='L07TnUk:00D,UEcCQmMg00-SM0E4'
													alt='general pcb design'
													height={"auto"}
													hexagon={true}
												/>
											</Box>
										</Box>
										<ImageCaptionAlt caption={"General PCB"} light={false} center={true} />
									</Box>
								</Grid>
								<Grid
									item
									xs={12}
									sm={6}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										margin: 0,
										zIndex: 100,
									}}>
									<Box sx={{ position: "relative" }}>
										<Box className={isMD ? "hex-mobile" : "hex"}>
											<Box className={isMD ? "hex-background-mobile" : "hex-background"}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/central-hub-pcb.png'
													hash='L07K3vI:00$*~p%K4n9b04~A@q02'
													alt='central hub pcb design'
													height={"auto"}
													hexagon={true}
												/>
											</Box>
										</Box>
										<ImageCaptionAlt caption={"Central Hub"} light={false} center={true} />
									</Box>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.yellowAlt}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 10,
						mb: { xs: 15, smPlus: 10 },
					}}>
					<Box
						className={boxStyles.whiteBox}
						sx={{
							width: { xs: "100%", sm: "85%" },
							zIndex: 10,
							mt: -7,
							px: { xs: 2, md: 0 },
						}}>
						<GradientText
							text='Module Design'
							gradient='linear-gradient(170deg, rgba(112,130,143,1) 0%, rgba(50,50,50,1) 100%)'
							lineHeight='1.2'
							textAlign='center'
							fontSize={{
								xs: "2.5rem",
								xsPlus: "2.6rem",
								smMinus: "2.7rem",
								sm: "3rem",
								md: "7.5rem",
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
								px: { xs: 0, md: 6 },
								pb: { xs: 4, md: 6 },
							}}>
							<Grid item xs={12}>
								<Typography
									color='backgroundBlack.main'
									sx={{
										fontSize: {
											xs: "14px",
											xsPlus: "15px",
											smMinus: "16px",
											sm: "16px",
											md: "20px",
										},
										px: { xs: 0, md: 4 },
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
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Box sx={{ position: "relative" }}>
									<Card
										elevation={4}
										sx={{
											display: "flex",
											minHeight: getModuleImageHeight(),
											width: getModuleImageHeight(),
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/central-hub-top.png?tr=h-1500'
											hash='CiMaV5s.~qWBbI%2j]Rj'
											alt='central hub render top'
											height={getModuleImageHeight()}
											hexagon={false}
										/>
									</Card>
									<ImageCaption caption={"Central Hub Top"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Box sx={{ position: "relative" }}>
									<Card
										elevation={4}
										sx={{
											display: "flex",
											minHeight: getModuleImageHeight(),
											width: getModuleImageHeight(),
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/button-top.png?tr=h-1500'
											hash='CTNAxOxu~qt79Gxut8WB'
											alt='button module render top'
											height={getModuleImageHeight()}
											hexagon={false}
										/>
									</Card>
									<ImageCaption caption={"Button Top"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Box sx={{ position: "relative" }}>
									<Card
										elevation={4}
										sx={{
											display: "flex",
											minHeight: getModuleImageHeight(),
											width: getModuleImageHeight(),
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/central-hub-bottom.png?tr=h-1500'
											hash='CCNwZs8^~p-=E2%LM|Ri'
											alt='central hub module render bottom'
											height={getModuleImageHeight()}
											hexagon={false}
										/>
									</Card>
									<ImageCaption caption={"Central Hub Bottom"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={4}
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Box sx={{ position: "relative" }}>
									<Card
										elevation={4}
										sx={{
											display: "flex",
											minHeight: getModuleImageHeight(),
											width: getModuleImageHeight(),
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/general-bottom.png?tr=h-1500'
											hash='CEODteIT~p-;4:%LRjRj'
											alt='general module render bottom'
											height={getModuleImageHeight()}
											hexagon={false}
										/>
									</Card>
									<ImageCaption caption={"General Bottom"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Box sx={{ position: "relative" }}>
									<Card
										elevation={4}
										sx={{
											display: "flex",
											minHeight: getModuleImageHeight(),
											width: getModuleImageHeight(),
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/switch-top.png?tr=h-1500'
											hash='CSMj{:t6~qt79Gxut7V@'
											alt='switch module render top'
											height={getModuleImageHeight()}
											hexagon={false}
										/>
									</Card>
									<ImageCaption caption={"Switch Top"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Box sx={{ position: "relative" }}>
									<Card
										elevation={4}
										sx={{
											display: "flex",
											minHeight: getModuleImageHeight(),
											width: getModuleImageHeight(),
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/slider-top.png?tr=h-1500'
											hash='CVNAuF%2~qt7M{xtWCj@'
											alt='slider module render top'
											height={getModuleImageHeight()}
											hexagon={false}
										/>
									</Card>
									<ImageCaption caption={"Slider Top"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Box sx={{ position: "relative" }}>
									<Card
										elevation={4}
										sx={{
											display: "flex",
											minHeight: getModuleImageHeight(),
											width: getModuleImageHeight(),
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/dial-top.png?tr=h-1500'
											hash='CRN^h~xt~qxu9Fxut8WB'
											alt='dial module render top'
											height={getModuleImageHeight()}
											hexagon={false}
										/>
									</Card>
									<ImageCaption caption={"Dial Top"} light={false} />
								</Box>
							</Grid>
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Box sx={{ position: "relative" }}>
									<Card
										elevation={4}
										sx={{
											display: "flex",
											minHeight: getModuleImageHeight(),
											width: getModuleImageHeight(),
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/joystick-top.png?tr=h-1500'
											hash='CQONF4xt~qxu9G%2ogWB'
											alt='joystick module render top'
											height={getModuleImageHeight()}
											hexagon={false}
										/>
									</Card>
									<ImageCaption caption={"Joystick Top"} light={false} />
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Container>
				<Box className={`${styles.slopeBottomMobile} ${styles.yellowAltTwo}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeBottomMobileOffset} ${styles.white}`} sx={{ zIndex: 1 }} />
			</Box>
		</>
	);
}

export default MobileContentModule;
