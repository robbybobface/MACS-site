import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRouter } from "next/navigation";
import Head from "next/head";
import {
	Box,
	Typography,
	Button,
	Container,
	Grid,
	LinearProgress,
	Divider,
	Card,
	CardActionArea,
	CardContent,
	Tooltip,
} from "@mui/material";
import styles from "../styles/Overview.module.css";
import { MACSLogoWhite } from "../assets/macs_logo_white";
import { MACSFlowchart } from "../assets/macs_flowchart";
import {
	BoltOutlined,
	Terminal,
	VideogameAssetOutlined,
	EmojiEventsOutlined,
	Diversity3Outlined,
} from "@mui/icons-material";
import theme from "../styles/theme";

const PageOne = ({ offset, gradient, onClick, router }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEndTop} ${styles.blue}`} />
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.3} onClick={onClick} style={{ zIndex: 9999 }}>
			<Container className='noselect' maxWidth='xl'>
				<Grid
					container
					spacing={2}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						px: 5,
						zIndex: 10000,
					}}>
					<Grid item xs={5} sx={{ mt: -4 }}>
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
							<Typography textAlign='justify' fontSize={"20px"} color={"white"}>
								In recent years, video gaming has become a cornerstone of digital entertainment. Despite
								this, the rigid form factor of controllers and their proprietary interfaces make for an
								inflexible and inaccessible gaming experience that alienates a vast percentage of the
								population. Although companies like Microsoft and Sony have developed their own modular
								controllers, their attempts have left something to be desired. The MACS (Modular
								Accessible Controller System) seeks to address these problems using specially designed,
								hot-swappable input modules that allow users to customize their controller according to
								their needs and preferences, enabling a more personalized and immersive experience.
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
									maxWidth: 290,
									minHeight: 200,
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
									<Typography fontFamily='Gilroy-Heavy' color='hexagonBlueFull.main' fontSize='2rem'>
										Accessibility
									</Typography>
									<Divider sx={{ borderColor: "hexagonBlueFull.main", borderWidth: 2 }} />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
									}}>
									<Typography fontFamily='Gilroy-Heavy' color='hexagonRedFull.main' fontSize='2rem'>
										Repairability
									</Typography>
									<Divider sx={{ borderColor: "hexagonRedFull.main", borderWidth: 2 }} />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
									}}>
									<Typography fontFamily='Gilroy-Heavy' color='hexagonGreenFull.main' fontSize='2rem'>
										Customizability
									</Typography>
									<Divider sx={{ borderColor: "hexagonGreenFull.main", borderWidth: 2 }} />
								</Box>
							</Box>
							<Box
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
										maxWidth: 275,
										borderRadius: 4,
										py: 2,
										px: 6,
										boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
										// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
										// backgroundColor: "#111111AA",
										backgroundColor: "#70828FCE",
										// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
										backdropFilter: "blur( 7px );",
										webkitBackdropFilter: "blur( 7px );",
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-evenly",
										alignItems: "center",
									}}>
									<Typography fontFamily={"Gilroy-Bold"} fontSize={"30px"} sx={{ mb: 2 }}>
										2.2 Billion Gamers
									</Typography>
									<Typography fontFamily={"Gilroy-Bold"} fontSize={"30px"}>
										23% are disabled
									</Typography>
								</Box>
								{/* <Box
									sx={{
										// maxWidth: 29,
										borderRadius: 4,
										mt: 2,
										mx: 2,
										py: 2,
										px: 4,
										boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
										backgroundColor: "#70828FAA",
										backdropFilter: "blur( 7px );",
										webkitBackdropFilter: "blur( 7px );",
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-evenly",
										alignItems: "center",
									}}>
									<Typography
										textAlign='justify'
										// fontFamily={"Gilroy-Bold"}
										fontSize={"20px"}
										sx={{ mb: 2 }}>
										MACS allows users to build the controller they want
									</Typography>
								</Box> */}
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBeginStart} />
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>
	</>
);

const PageTwo = ({ offset, gradient, onClick, router }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBegin} />
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>
		<ParallaxLayer
			className={`${styles.text} ${styles.number} noselect`}
			onClick={onClick}
			offset={offset}
			speed={0.3}>
			<Container maxWidth='xl' sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Box
					sx={{
						width: "85%",
						minHeight: 700,
						// maxWidth: 1350,
						boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
						borderRadius: 5,
						// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
						backgroundColor: "rgba( 255, 255, 255, 0.85 )",
						// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
						backdropFilter: "blur( 7px );",
						webkitBackdropFilter: "blur( 7px );",
					}}>
					<Typography
						color='backgroundBlack.main'
						fontFamily={"Gilroy-Heavy"}
						fontSize='5rem'
						textAlign='center'
						sx={{ pt: 3 }}>
						Problem Formulation
					</Typography>
					<Grid
						container
						spacing={4}
						sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", px: 6, pb: 6 }}>
						<Grid item xs={12}>
							<Typography
								color='backgroundBlack.main'
								fontSize={"20px"}
								textAlign='justify'
								sx={{ px: 4 }}>
								Despite gaming being one of the biggest emerging markets of the past few decades, there
								still remain holes in the market, specifically concerning controller options. Most
								controllers sold today give little to no regard for accessibility, reparability, and
								configurability. With the release of the Xbox Adaptive Controller in 2018 and the Xbox
								Elite 2 Wireless Controller in 2019, Microsoft has been almost the sole provider of
								accessible controllers for disabled gamers. Sony is also working on their accessible
								controller, codenamed Project Leonardo, which is scheduled to be released in 2024.
								Despite these positive developments, more can still be done to enable accessibility in
								these controllers.
							</Typography>
						</Grid>
						{/* <Grid item xs={12}>
							<Typography
								color='backgroundBlack.main'
								fontFamily={"Gilroy-Bold"}
								fontSize='2.5rem'
								textAlign='center'
								sx={{ mt: -3 }}>
								Existing Solutions
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography color={"backgroundBlack.main"} fontSize={"20px"} textAlign='center'>
								With the release of the Xbox Adaptive Controller in 2018 and the Xbox Elite 2 Wireless
								Controller in 2019, Microsoft has been almost the sole provider of accessible
								controllers for disabled gamers. Sony is also working on their accessible controller,
								codenamed Project Leonardo, which is scheduled to be released in 2024.
							</Typography>
						</Grid> */}
						<Grid item xs={4} sx={{ display: "flex" }}>
							<Card elevation={4}>
								<CardContent
									sx={{
										backgroundColor: "#70828f77",
										transition: "all ease-in 0.25s",
										"&:hover": {
											backgroundColor: "#70828fAA",
										},
									}}>
									<Typography
										gutterBottom
										component='div'
										fontSize='24px'
										fontWeight='bold'
										fontFamily='Gilroy-Bold'>
										Accessibility
									</Typography>
									<Typography color='text.secondary' textAlign='justify'>
										For would-be gamers with motor disabilities, controller usability poses a
										significant barrier to entry. Most gamers can relate to the frustration of
										feeling limited by their controller; unfortunately, this is a struggle that
										disabled gamers face on a daily basis. Due to a lack of accessible controller
										alternatives, these gamers are inclined to give up on gaming entirely. For
										example, a gamer with a Spinal Cord Injury (SCI) may find it challenging to
										depress a trigger and press a button simultaneously using Sony PlayStation's
										DualSense controller. This severely limits what can be done in a game, since
										most modern games require multiple concurrent inputs at most times.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={4}>
							<Card elevation={4}>
								<CardContent
									sx={{
										backgroundColor: "#70828f77",
										transition: "all ease-in 0.25s",
										"&:hover": {
											backgroundColor: "#70828fAA",
										},
									}}>
									<Typography
										gutterBottom
										component='div'
										fontSize='24px'
										fontWeight='bold'
										fontFamily='Gilroy-Bold'>
										Repairability
									</Typography>
									<Typography color='text.secondary' textAlign='justify'>
										Video game controllers comprise several components and inputs. In many instances
										of failure, proprietary controllers were mostly functional save for one critical
										piece. For instance, the Nintendo Switch is notorious for having faulty
										joy-cons, causing repair facilities to need to repair thousands of Joy-Cons… in
										a single week. Like the Nintendo Switch, most controllers are not designed to be
										durable or easily reparable. In most cases, non-functioning controllers have to
										be sent to designated repair facilities and only if the user purchased a
										warranty. As a result, broken controllers are either sent in for expensive
										third-party repairs or thrown out, even though most components are completely
										fine.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={4}>
							<Card elevation={4}>
								<CardContent
									sx={{
										backgroundColor: "#70828f77",
										transition: "all ease-in 0.25s",
										"&:hover": {
											backgroundColor: "#70828fAA",
										},
									}}>
									<Typography
										gutterBottom
										component='div'
										fontSize='24px'
										fontWeight='bold'
										fontFamily='Gilroy-Bold'>
										Configuability
									</Typography>
									<Typography color='text.secondary' textAlign='justify'>
										The problem is not necessarily that video games demand too much of the user, but
										also that the user is limited by their physical interaction with the game.
										Ultimately, this is because traditional controllers have no means of adapting to
										the needs of their users. Because controllers are designed with a static
										arrangement of inputs and a fixed set of input types, they can’t be customized
										to cater to each user individually. While many video games allow users to remap
										inputs in software, it is certainly not universal, and the inputs are usually
										restricted to specific mappings. This can sometimes be a hinderance in games
										where the layout of the controller is ill-suited to the game or the user.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</ParallaxLayer>
	</>
);

const PageThree = ({ offset, gradient, onClick, router }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBegin} />
		</ParallaxLayer>

		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>

		<ParallaxLayer
			className={`${styles.text} ${styles.number} noselect`}
			onClick={onClick}
			offset={offset}
			speed={0.3}>
			<Container maxWidth='xl' sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Grid container spacing={2}>
					<Grid
						item
						xs={5}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Typography
							color='white'
							fontFamily={"Gilroy-Heavy"}
							fontSize='5rem'
							textAlign='center'
							lineHeight={1.2}
							mb={3}>
							Solution Proposition
						</Typography>
						<Box
							sx={{
								// minHeight: 700,
								// maxWidth: 1350,
								borderRadius: 5,
								p: 4,
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 72, 88, 99, 0.7 )",
								// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
								backdropFilter: "blur( 7px );",
								webkitBackdropFilter: "blur( 7px );",
							}}>
							<Typography color={"white"} fontSize={"20px"} textAlign='justify'>
								To address the problems of accessibility, repairability, and configurability (or lack
								thereof) in modern game controllers, we aimed to design a modular game controller. In
								doing so, we could break free from the previously stated shortcomings that stem from a
								static form factor controller. The controller would be made of a variable number of
								modules, all containing one form of input. This design will allow for several core
								design values to be achieved.
							</Typography>
						</Box>
					</Grid>
					<Grid
						item
						xs={7}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly",
							alignItems: "center",
							minHeight: "725px",
						}}>
						<Card
							elevation={4}
							sx={{
								maxWidth: "700px",
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 255, 255, 255, 0.9 )",
								backdropFilter: "blur( 7px );",
								webkitBackdropFilter: "blur( 7px );",
							}}>
							<CardContent
								sx={{
									backgroundColor: theme.palette.hexagonGreenAlt.main,
									transition: "all ease-in 0.25s",
									"&:hover": {
										backgroundColor: theme.palette.hexagonGreen.main,
									},
								}}>
								<Typography
									gutterBottom
									component='div'
									fontSize='24px'
									fontWeight='bold'
									fontFamily='Gilroy-Bold'>
									Flexibility
								</Typography>
								<Typography color='text.secondary' textAlign='justify'>
									Our design will mean that modules can be arranged in any way you want. With no
									limitations on the number of modules connected, the controller is flexible in its
									size, shape, and complexity. This allows the controller to be catered to the user’s
									needs at will.
								</Typography>
							</CardContent>
						</Card>
						<Card
							elevation={4}
							sx={{
								maxWidth: "700px",
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 255, 255, 255, 0.9 )",
								backdropFilter: "blur( 7px );",
								webkitBackdropFilter: "blur( 7px );",
							}}>
							<CardContent
								sx={{
									backgroundColor: theme.palette.hexagonBlueAlt.main,
									transition: "all ease-in 0.25s",
									"&:hover": {
										backgroundColor: theme.palette.hexagonBlue.main,
									},
								}}>
								<Typography
									gutterBottom
									component='div'
									fontSize='24px'
									fontWeight='bold'
									fontFamily='Gilroy-Bold'>
									Customizability
								</Typography>
								<Typography color='text.secondary' textAlign='justify'>
									Not only is the controller mechanically flexible, but the software associated with
									it will allow the user to fully customize their controller. After constructing the
									controller to their liking, a user can map and remap each module to emulate certain
									types of inputs. Digital to digital, analog to analog and even digital to
									analog/analog to digital translation will be possible.
								</Typography>
							</CardContent>
						</Card>
						<Card
							elevation={4}
							sx={{
								maxWidth: "700px",
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 255, 255, 255, 0.9 )",
								backdropFilter: "blur( 7px );",
								webkitBackdropFilter: "blur( 7px );",
							}}>
							<CardContent
								sx={{
									backgroundColor: theme.palette.hexagonYellowAlt.main,
									transition: "all ease-in 0.25s",
									"&:hover": {
										backgroundColor: theme.palette.hexagonYellow.main,
									},
								}}>
								<Typography
									gutterBottom
									component='div'
									fontSize='24px'
									fontWeight='bold'
									fontFamily='Gilroy-Bold'>
									Accessibility
								</Typography>
								<Typography color='text.secondary' textAlign='justify'>
									A modular controller will allow for easier development for physical modules that can
									address the needs of any gamer according to their disability if they have one. In
									conjunction with our software, both new and existing input types can be repurposed
									to address a physical need.
								</Typography>
							</CardContent>
						</Card>
						<Card
							elevation={4}
							sx={{
								maxWidth: "700px",
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 255, 255, 255, 0.9 )",
								backdropFilter: "blur( 7px );",
								webkitBackdropFilter: "blur( 7px );",
							}}>
							<CardContent
								sx={{
									backgroundColor: theme.palette.hexagonRedAlt.main,
									transition: "all ease-in 0.25s",
									"&:hover": {
										backgroundColor: theme.palette.hexagonRed.main,
									},
								}}>
								<Typography
									gutterBottom
									component='div'
									fontSize='24px'
									fontWeight='bold'
									fontFamily='Gilroy-Bold'>
									Repairability
								</Typography>
								<Typography color='text.secondary' textAlign='justify'>
									Inherently, a modular controller would be easily reparable since the operation of
									the controller would not depend on any one particular module. In the event of a
									module failure, only that specific module requires repair, rather than having to
									repair or replace the entire controller.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</ParallaxLayer>
	</>
);

const PageFour = ({ offset, gradient, onClick, router }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBegin} />
		</ParallaxLayer>

		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>

		<ParallaxLayer
			className={`${styles.text} ${styles.number} noselect`}
			// onClick={onClick}
			offset={offset}
			speed={0.3}>
			<Container maxWidth='xl' sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Grid container spacing={2}>
					<Grid
						item
						onClick={onClick}
						xs={7}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly",
							alignItems: "center",
							minHeight: "725px",
						}}>
						<Box
							sx={{
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backdropFilter: "blur( 7px );",
								webkitBackdropFilter: "blur( 7px );",
								backgroundColor: "rgba(255,255,255,0.9)",
								borderRadius: 4,
								overflow: "clip",
								// maxHeight: "600px",
								// width: "100%",
							}}>
							<MACSFlowchart width={"43vw"} />
						</Box>
					</Grid>
					<Grid
						item
						xs={5}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Typography
							color='white'
							fontFamily={"Gilroy-Heavy"}
							fontSize='5rem'
							textAlign='center'
							lineHeight={1.2}
							mb={3}
							onClick={onClick}>
							Design & Implementation
						</Typography>
						<Box
							onClick={onClick}
							sx={{
								// minHeight: 700,
								// maxWidth: 1350,
								borderRadius: 4,
								px: 4,
								py: 2,
								mb: 2,
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								// backgroundColor: "#111111AA",
								backgroundColor: "#70828FCE",
								// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
								backdropFilter: "blur( 7px );",
								webkitBackdropFilter: "blur( 7px );",
							}}>
							<Typography color={"white"} fontSize={"20px"} textAlign='center'>
								The design ascpets of the project were broken down into three main categories:
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-evenly",
								width: "100%",
								alignItems: "center",
								mb: 2,
							}}>
							<Card
								elevation={4}
								sx={{
									maxWidth: "200px",
									maxHeight: "190px",
									boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
									backgroundColor: "rgba( 255, 255, 255, 0.9 )",
									backdropFilter: "blur( 7px );",
									webkitBackdropFilter: "blur( 7px );",
								}}>
								<CardActionArea>
									<CardContent
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											alignItems: "center",
											backgroundColor: theme.palette.hexagonBlueAlt.main,
											transition: "all ease-in 0.25s",
											"&:hover": {
												backgroundColor: theme.palette.hexagonBlue.main,
											},
										}}>
										<Typography
											gutterBottom
											fontSize='24px'
											fontWeight='bold'
											textAlign='center'
											color='backgroundBlack.main'
											fontFamily='Gilroy-Bold'>
											MODULE
										</Typography>
										<Typography color='text.secondary' textAlign='center'>
											The design of each module and the central hub
										</Typography>
										<Button variant='contained' sx={{ my: 1 }}>
											Learn More
										</Button>
									</CardContent>
								</CardActionArea>
							</Card>
							<Card
								elevation={4}
								sx={{
									maxWidth: "200px",
									maxHeight: "190px",
									boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
									backgroundColor: "rgba( 255, 255, 255, 0.9 )",
									backdropFilter: "blur( 7px );",
									webkitBackdropFilter: "blur( 7px );",
								}}>
								<CardActionArea>
									<CardContent
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											alignItems: "center",
											backgroundColor: theme.palette.hexagonGreenAlt.main,
											transition: "all ease-in 0.25s",
											"&:hover": {
												backgroundColor: theme.palette.hexagonGreen.main,
											},
										}}>
										<Typography
											gutterBottom
											fontSize='24px'
											fontWeight='bold'
											textAlign='center'
											color='backgroundBlack.main'
											fontFamily='Gilroy-Bold'>
											CONTROLLER
										</Typography>
										<Typography color='text.secondary' textAlign='center'>
											The communication between the modules and the application
										</Typography>
										<Button
											variant='contained'
											sx={{ my: 1, maxWidth: "150px", maxHeight: "40px" }}
											onClick={() => router.push("/controller")}>
											Learn More
										</Button>
									</CardContent>
								</CardActionArea>
							</Card>
							<Card
								elevation={4}
								sx={{
									maxWidth: "200px",
									height: "190px",
									boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
									backgroundColor: "rgba( 255, 255, 255, 0.9 )",
									backdropFilter: "blur( 7px );",
									webkitBackdropFilter: "blur( 7px );",
								}}>
								<CardActionArea>
									<CardContent
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											alignItems: "center",
											backgroundColor: theme.palette.hexagonRedAlt.main,
											transition: "all ease-in 0.25s",
											"&:hover": {
												backgroundColor: theme.palette.hexagonRed.main,
											},
										}}>
										<Typography
											gutterBottom
											fontSize='24px'
											fontWeight='bold'
											textAlign='center'
											color='backgroundBlack.main'
											fontFamily='Gilroy-Bold'>
											APPLICATION
										</Typography>
										<Typography color='text.secondary' textAlign='center' minHeight='72px'>
											The interpretation and emulation of inputs
										</Typography>
										<Button variant='contained' sx={{ my: 1 }}>
											Learn More
										</Button>
									</CardContent>
								</CardActionArea>
							</Card>
						</Box>
						<Box
							onClick={onClick}
							sx={{
								// minHeight: 700,
								// maxWidth: 1350,
								borderRadius: 4,
								p: 4,
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 72, 88, 99, 0.7 )",
								// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
								backdropFilter: "blur( 7px );",
								webkitBackdropFilter: "blur( 7px );",
							}}>
							<Typography color={"white"} fontSize={"20px"} textAlign='justify'>
								MACS works using two bridges of communication. The communication between modules and
								central hub, as well as the communication between the central hub and the application.
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
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
			<Box sx={{ position: "absolute", top: "2.5%", left: "6%", zIndex: 9999 }}>
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
					<Tooltip
						title='Team Members'
						placement='top'
						componentsProps={{
							tooltip: {
								sx: {
									bgcolor: "white",
									color: "black",
								},
							},
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
					</Tooltip>
					<Tooltip
						title='Capstone Competition'
						placement='top'
						componentsProps={{
							tooltip: {
								sx: {
									bgcolor: "white",
									color: "black",
								},
							},
						}}>
						<Button
							variant='contained'
							// disabled={gridRotate === "30deg"}
							color='drawerBackground'
							sx={{ minHeight: 40 }}
							onClick={() => console.log("rotate right")}>
							<EmojiEventsOutlined color='primary' />
						</Button>
					</Tooltip>
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
					<Tooltip
						title='Module Design'
						placement='top'
						componentsProps={{
							tooltip: {
								sx: {
									bgcolor: "white",
									color: "black",
								},
							},
						}}>
						<Button
							variant='contained'
							color='drawerBackground'
							onClick={() => console.log("zoom in")}
							sx={{ padding: 0, minHeight: 40 }}
							style={{ padding: 0 }}>
							<BoltOutlined color='primary' />
						</Button>
					</Tooltip>
					<Tooltip
						title='Controller Design'
						placement='top'
						componentsProps={{
							tooltip: {
								sx: {
									bgcolor: "white",
									color: "black",
								},
							},
						}}>
						<Button
							variant='contained'
							color='drawerBackground'
							onClick={() => console.log("zoom out")}
							size='small'
							sx={{ padding: 0 }}>
							<VideogameAssetOutlined color='primary' />
						</Button>
					</Tooltip>
					<Tooltip
						title='Application Design'
						placement='top'
						componentsProps={{
							tooltip: {
								sx: {
									bgcolor: "white",
									color: "black",
								},
							},
						}}>
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
					</Tooltip>
				</Box>
			</Box>
			<Parallax className={styles.parallaxContainer} ref={parallax} pages={4}>
				<PageOne offset={0} gradient='greenBlue' onClick={() => scroll(1)} router={router} />
				<PageTwo offset={1} gradient='yellowGreen' onClick={() => scroll(2)} router={router} />
				<PageThree offset={2} gradient='redYellow' onClick={() => scroll(3)} router={router} />
				<PageFour offset={3} gradient='blueRed' onClick={() => scroll(0)} router={router} />
			</Parallax>
		</Box>
	);
}
