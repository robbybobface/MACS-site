import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useScroll, animated } from "@react-spring/web";
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
	CardMedia,
} from "@mui/material";
import styles from "../styles/Overview.module.css";
import { MACSLogoWhite } from "../assets/macs_logo_white";
import { MACSLogoRed } from "../assets/macs_logo_red";
import { MACSLogoBlue } from "../assets/macs_logo_light_blue";
import { MACSFlowchart } from "../assets/macs_flowchart";
import {
	BoltOutlined,
	Terminal,
	VideogameAssetOutlined,
	EmojiEventsOutlined,
	Diversity3Outlined,
} from "@mui/icons-material";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../styles/theme";
import { useEffect } from "react";

const PageOne = ({ offset, gradient, onClick }) => (
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
						{/* <Typography
							fontFamily='bitcount-mono-single-line-ci'
							fontSize='10rem'
							color='white'
							mb={-4.5}
							fontWeight={300}>
							MACS
						</Typography> */}
						<Box sx={{ position: "relative" }}>
							<Typography
								// color='white'
								fontFamily={"Gilroy-Heavy"}
								fontSize='7rem'
								onClick={onClick}
								sx={{
									position: "relative",
									backgroundImage:
										"linear-gradient(161deg, rgba(255,255,255,1) 0%, rgba(0,135,177,1) 100%);",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									// textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
								}}>
								Project Overview
							</Typography>
							<Typography
								// color='white'
								fontFamily={"Gilroy-Heavy"}
								fontSize='7rem'
								onClick={onClick}
								sx={{
									position: "absolute",
									top: 0,
									left: 0,
									// backgroundImage:
									// 	"linear-gradient(135deg, rgba(0,135,177,1) 0%, rgba(199,14,81,1) 100%)",
									// WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
									zIndex: -1,
								}}>
								Project Overview
							</Typography>
						</Box>
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
								borderRadius: 2,
								py: 4,
								px: 6,
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 72, 88, 99, 0.7 )",
								// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
								backdropFilter: "blur( 7px );",
								WebkitBackdropFilter: "blur( 7px );",
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
									borderRadius: 2,
									py: 2,
									px: 4,
									boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
									backgroundColor: "#F2F2F2CE",
									backdropFilter: "blur( 7px );",
									WebkitBackdropFilter: "blur( 7px );",
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
										borderRadius: 2,
										py: 2,
										px: 6,
										boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
										// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
										// backgroundColor: "#111111AA",
										backgroundColor: "#70828FCE",
										// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
										backdropFilter: "blur( 7px );",
										WebkitBackdropFilter: "blur( 7px );",
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
		<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick}>
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
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
		<ParallaxLayer offset={offset} speed={0.35} onClick={onClick}>
			<Box
				className={styles.rotatingReverse}
				sx={{ position: "absolute", left: "33%", top: "30%", transform: "rotate(15deg)" }}>
				<HexGrid
					id='module-grid-2'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
		<ParallaxLayer offset={offset} speed={0.7} onClick={onClick}>
			<Box
				className={styles.rotatingReverseEaseInOut}
				sx={{ position: "absolute", left: "53%", top: "55%", transform: "rotate(10deg)" }}>
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
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<Box
				className={styles.rotatingFast}
				sx={{ position: "absolute", left: "45%", top: "15%", transform: "rotate(0deg)" }}>
				<HexGrid
					id='module-grid-4'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 30, y: 30 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
			speed={0.3}
			style={{ zIndex: 9999 }}>
			<Container
				maxWidth='xl'
				sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000000 }}>
				<Box
					sx={{
						width: "85%",
						minHeight: 700,
						// maxWidth: 1350,
						boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
						borderRadius: 2,
						// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
						backgroundColor: "rgba( 255, 255, 255, 0.85 )",
						// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
						backdropFilter: "blur( 7px );",
						WebkitBackdropFilter: "blur( 7px );",
						zIndex: 10000000,
					}}>
					<Box sx={{ position: "relative" }}>
						<Typography
							// color='white'
							fontFamily={"Gilroy-Heavy"}
							fontSize='6rem'
							onClick={onClick}
							textAlign={"center"}
							sx={{
								position: "relative",
								backgroundImage:
									"linear-gradient(161deg, rgba(112,130,143,1) 0%, rgba(50,50,50,1) 100%);",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								// textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							}}>
							Problem Formulation
						</Typography>
						<Typography
							// color='white'
							fontFamily={"Gilroy-Heavy"}
							fontSize='6rem'
							onClick={onClick}
							textAlign={"center"}
							sx={{
								position: "absolute",
								top: 0,
								right: 0,
								left: 0,

								WebkitTextFillColor: "transparent",
								textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
								zIndex: -1,
							}}>
							Problem Formulation
						</Typography>
					</Box>
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
								configurability.
							</Typography>
						</Grid>
						<Grid item xs={4} sx={{ display: "flex", alignSelf: "stretch" }}>
							<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
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
						<Grid item xs={4} sx={{ display: "flex", alignSelf: "stretch" }}>
							<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
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
						<Grid item xs={4} sx={{ display: "flex", alignSelf: "stretch" }}>
							<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
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
		<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick}>
			<Box
				className={styles.rotatingSlowEaseInOut}
				sx={{ position: "absolute", left: "0%", top: "-10%", transform: "rotate(15deg)" }}>
				<HexGrid
					id='module-grid-5'
					height={"40vh"}
					width={"40vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
		<ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
			<Box
				className={styles.rotatingReverse}
				sx={{ position: "absolute", right: "5%", top: "30%", transform: "rotate(15deg)" }}>
				<HexGrid
					id='module-grid-6'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
		<ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
			<Box
				className={styles.rotatingSlow}
				sx={{ position: "absolute", right: "45%", bottom: "0%", transform: "rotate(15deg)" }}>
				<HexGrid
					id='module-grid-7'
					height={"30vh"}
					width={"30vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
			speed={0.3}
			style={{ zIndex: 9999 }}>
			<Container
				maxWidth='xl'
				sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000000 }}>
				<Box sx={{ position: "relative" }}>
					<Typography
						// color='white'
						fontFamily={"Gilroy-Heavy"}
						fontSize='6rem'
						onClick={onClick}
						sx={{
							position: "relative",
							backgroundImage: "linear-gradient(161deg, rgba(94,196,176,1) 0%, rgba(255,190,0,1) 100%);",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							// textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
						}}>
						Existing Solutions
					</Typography>
					<Typography
						// color='white'
						fontFamily={"Gilroy-Heavy"}
						fontSize='6rem'
						onClick={onClick}
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							// backgroundImage:
							// 	"linear-gradient(135deg, rgba(0,135,177,1) 0%, rgba(199,14,81,1) 100%)",
							// WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
							zIndex: -1,
						}}>
						Existing Solutions
					</Typography>
				</Box>
				<Box
					sx={{
						width: "100%",

						// maxWidth: 1350,
						boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
						borderRadius: 2,
						// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
						backgroundColor: "rgba( 72, 88, 99, 0.7 )",
						// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
						backdropFilter: "blur( 7px );",
						WebkitBackdropFilter: "blur( 7px );",
						zIndex: 10000,
					}}>
					<Grid
						container
						spacing={4}
						sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", px: 6, py: 4 }}>
						<Grid item xs={12}>
							<Typography color='white' fontSize={"20px"} textAlign='justify' sx={{ px: 4 }}>
								With the release of the Xbox Adaptive Controller in 2018 Microsoft has been almost the
								sole provider of accessible controllers for disabled gamers. Sony is also working on
								their accessible controller, codenamed Project Leonardo, which is scheduled to be
								released in 2024. Despite these positive developments, more can still be done to enable
								accessibility in these controllers. Whereas both of these controllers still suffer from
								the same rigid form factors that most modern controllers conform to. And the number of
								inputs are still limited and the supported input types are restricted by traditional
								controllers.
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
								<CardMedia
									component='img'
									alt='microsoft adaptive controller'
									height='250'
									sx={{ objectPosition: "50% 60%" }}
									image='/xbox-adaptive-controller.png'
								/>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
								<CardMedia
									component='img'
									alt='project leonardo'
									height='250'
									image='/project-leonardo.jpg'
								/>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.75} onClick={onClick}>
			<Box
				className={styles.rotatingSlowEaseInOut}
				sx={{ position: "absolute", left: "-0%", top: "0%", transform: "rotate(15deg)" }}>
				<HexGrid
					id='module-grid-8'
					height={"30vh"}
					width={"30vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-8`}
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
		<ParallaxLayer offset={offset} speed={0.4} onClick={onClick}>
			<Box
				className={styles.rotatingReverse}
				sx={{ position: "absolute", left: "27%", top: "27%", transform: "rotate(312deg)" }}>
				<HexGrid
					id='module-grid-9'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-9`}
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
		<ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
			<Box
				className={styles.rotatingFast}
				sx={{ position: "absolute", left: "7%", bottom: "0%", transform: "rotate(165deg)" }}>
				<HexGrid
					id='module-grid-10'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-10`}
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
		<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick}>
			<Box
				className={styles.rotatingSlow}
				sx={{ position: "absolute", right: "5%", top: "-10%", transform: "rotate(7deg)" }}>
				<HexGrid
					id='module-grid-11'
					height={"35vh"}
					width={"35vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-11`}
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
		<ParallaxLayer offset={offset} speed={-0.27} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseEaseInOut}
				sx={{ position: "absolute", right: "45%", bottom: "10%", transform: "rotate(216deg)" }}>
				<HexGrid
					id='module-grid-12'
					height={"15vh"}
					width={"15vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-12`}
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
		<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingSlowEaseInOut}
				sx={{ position: "absolute", right: "0%", bottom: "10%", transform: "rotate(216deg)" }}>
				<HexGrid
					id='module-grid-12'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-12`}
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

const PageFour = ({ offset, gradient, onClick, router }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBegin} />
		</ParallaxLayer>

		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>
		<ParallaxLayer className={`noselect`} onClick={onClick} offset={offset} speed={0.3} style={{ zIndex: 100 }}>
			<Container
				maxWidth='xl'
				sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000000 }}>
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
						<Box sx={{ position: "relative", mb: 3 }}>
							<Typography
								// color='white'
								fontFamily={"Gilroy-Heavy"}
								fontSize='6rem'
								onClick={onClick}
								textAlign={"center"}
								lineHeight={1}
								sx={{
									position: "relative",
									backgroundImage:
										"linear-gradient(161deg, rgba(159,242,130,1) 0%, rgba(255,105,48,1) 100%);",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									// textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
								}}>
								Solution Proposition
							</Typography>
							<Typography
								// color='white'
								fontFamily={"Gilroy-Heavy"}
								fontSize='6rem'
								onClick={onClick}
								textAlign={"center"}
								lineHeight={1}
								sx={{
									position: "absolute",
									top: 0,
									left: 0,
									// backgroundImage:
									// 	"linear-gradient(135deg, rgba(0,135,177,1) 0%, rgba(199,14,81,1) 100%)",
									// WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
									zIndex: -1,
								}}>
								Solution Proposition
							</Typography>
						</Box>
						<Box
							sx={{
								// minHeight: 700,
								// maxWidth: 1350,
								borderRadius: 2,
								p: 4,
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 72, 88, 99, 0.7 )",
								// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
								backdropFilter: "blur( 7px );",
								WebkitBackdropFilter: "blur( 7px );",
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
								WebkitBackdropFilter: "blur( 7px );",
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
								WebkitBackdropFilter: "blur( 7px );",
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
								WebkitBackdropFilter: "blur( 7px );",
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
								WebkitBackdropFilter: "blur( 7px );",
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
		<ParallaxLayer offset={offset} speed={0.05} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseEaseInOut}
				sx={{ position: "absolute", right: "0%", bottom: "10%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-13'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
		<ParallaxLayer offset={offset} speed={0.25} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotating}
				sx={{ position: "absolute", right: "40%", bottom: "30%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-14'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
		<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotating}
				sx={{ position: "absolute", right: "0%", bottom: "45%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-15'
					height={"35vh"}
					width={"35vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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

const PageFive = ({ offset, gradient, onClick, router }) => (
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
			speed={0.3}
			style={{ zIndex: 9999 }}>
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
								WebkitBackdropFilter: "blur( 7px );",
								backgroundColor: "rgba(255,255,255,0.9)",
								borderRadius: 2,
								overflow: "clip",
								// maxHeight: "600px",
								// width: "100%",
								display: "flex",
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
						<Box sx={{ position: "relative", mb: 3 }}>
							<Typography
								// color='white'
								fontFamily={"Gilroy-Heavy"}
								fontSize='5rem'
								onClick={onClick}
								textAlign={"center"}
								lineHeight={1.2}
								sx={{
									position: "relative",
									backgroundImage:
										"linear-gradient(161deg, rgba(245,186,60,1) 0%, rgba(177,40,70,1) 100%);",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									// textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
								}}>
								Design & Implementation
							</Typography>
							<Typography
								// color='white'
								fontFamily={"Gilroy-Heavy"}
								fontSize='5rem'
								onClick={onClick}
								textAlign={"center"}
								lineHeight={1.2}
								sx={{
									position: "absolute",
									top: 0,
									right: 0,
									left: 0,

									WebkitTextFillColor: "transparent",
									textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
									zIndex: -1,
								}}>
								Design & Implementation
							</Typography>
						</Box>
						<Box
							onClick={onClick}
							sx={{
								// minHeight: 700,
								// maxWidth: 1350,
								borderRadius: 2,
								px: 4,
								py: 2,
								mb: 2,
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								// backgroundColor: "#111111AA",
								backgroundColor: "#70828FCE",
								// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
								backdropFilter: "blur( 7px );",
								WebkitBackdropFilter: "blur( 7px );",
							}}>
							<Typography color={"white"} fontSize={"20px"} textAlign='center'>
								The design ascpets of the project were broken down into three main categories. Click to
								learn more about each section of the project.
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
									position: "relative",
									display: "flex",
									alignSelf: "stretch",
									maxWidth: "200px",
									minHeight: "190px",
									boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
									backgroundColor: "rgba( 255, 255, 255, 0.9 )",
									backdropFilter: "blur( 7px );",
									WebkitBackdropFilter: "blur( 7px );",
								}}>
								{/* <CardActionArea> */}
								<CardContent
									sx={{
										display: "flex",
										flexDirection: "column",
										position: "relative",
										// justifyContent: "flex-start",
										// flexGrow: 1,
										height: "100%",
										alignItems: "center",
										alignSelf: "stretch",
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
									<Button variant='contained' sx={{ my: 1, position: "absolute", bottom: 38 }}>
										Learn More
									</Button>
								</CardContent>
								{/* </CardActionArea> */}
							</Card>
							<Card
								elevation={4}
								sx={{
									position: "relative",
									display: "flex",
									alignSelf: "stretch",
									maxWidth: "200px",
									minHeight: "190px",
									boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
									backgroundColor: "rgba( 255, 255, 255, 0.9 )",
									backdropFilter: "blur( 7px );",
									WebkitBackdropFilter: "blur( 7px );",
								}}>
								{/* <CardActionArea> */}
								<CardContent
									sx={{
										display: "flex",
										flexDirection: "column",
										position: "relative",
										// justifyContent: "flex-start",
										// flexGrow: 1,
										height: "100%",
										alignItems: "center",
										alignSelf: "stretch",
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
										onClick={() => router.push("/")}
										sx={{ my: 1, position: "absolute", bottom: 38 }}>
										Learn More
									</Button>
								</CardContent>
								{/* </CardActionArea> */}
							</Card>
							<Card
								elevation={4}
								sx={{
									display: "flex",
									alignSelf: "stretch",
									maxWidth: "200px",
									minHeight: "190px",
									boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
									backgroundColor: "rgba( 255, 255, 255, 0.9 )",
									backdropFilter: "blur( 7px );",
									WebkitBackdropFilter: "blur( 7px );",
								}}>
								{/* <CardActionArea> */}
								<CardContent
									sx={{
										display: "flex",
										flexDirection: "column",
										position: "relative",
										// justifyContent: "flex-start",
										// flexGrow: 1,
										height: "100%",
										alignItems: "center",
										alignSelf: "stretch",
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
									<Typography color='text.secondary' textAlign='center'>
										The interpretation and emulation of inputs
									</Typography>
									<Button variant='contained' sx={{ my: 1, position: "absolute", bottom: 38 }}>
										Learn More
									</Button>
								</CardContent>
								{/* </CardActionArea> */}
							</Card>
						</Box>
						<Box
							onClick={onClick}
							sx={{
								// minHeight: 700,
								// maxWidth: 1350,
								borderRadius: 2,
								p: 4,
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 72, 88, 99, 0.7 )",
								// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
								backdropFilter: "blur( 7px );",
								WebkitBackdropFilter: "blur( 7px );",
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
		<ParallaxLayer offset={offset} speed={0.2} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotating}
				sx={{ position: "absolute", right: "30%", bottom: "5%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-16'
					height={"30vh"}
					width={"30vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-16`}
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
		<ParallaxLayer offset={offset} speed={0.5} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseSlowEaseInOut}
				sx={{ position: "absolute", left: "0%", bottom: "35%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-17'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-17`}
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
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingSlowEaseInOut}
				sx={{ position: "absolute", right: "0%", top: "0%", transform: "rotate(212deg)" }}>
				<HexGrid
					id='module-grid-18'
					height={"15vh"}
					width={"15vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-18`}
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
		<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseSlow}
				sx={{ position: "absolute", right: "50%", top: "0%", transform: "rotate(212deg)" }}>
				<HexGrid
					id='module-grid-19'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-19`}
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
		<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseNormal}
				sx={{ position: "absolute", right: "0%", bottom: "15%", transform: "rotate(212deg)" }}>
				<HexGrid
					id='module-grid-20'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-20`}
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
	</>
);

const PageSix = ({ offset, gradient, onClick, router }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<div className={styles.slopeBegin} />
		</ParallaxLayer>

		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>
		<ParallaxLayer className={`noselect`} onClick={onClick} offset={offset} speed={0.3} style={{ zIndex: 100 }}>
			<Container
				maxWidth='xl'
				sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000000 }}>
				<Grid container spacing={2}>
					<Grid
						item
						xs={4}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly",
							alignItems: "center",
						}}>
						<Box
							sx={{
								borderRadius: 2,
								p: 3,
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								background:
									"linear-gradient(315deg, rgba(192,0,69,0.65) 0%, rgba(255,184,0,0.65) 33%, rgba(160,232,134,0.65) 67%, rgba(0,135,177,0.65) 100%);",
								backdropFilter: "blur( 7px );",
								WebkitBackdropFilter: "blur( 7px );",
							}}>
							<Box
								sx={{
									borderRadius: 2,
									p: 3,
									boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
									backgroundColor: "rgba( 72, 88, 99, 0.8 )",
									backdropFilter: "blur( 7px );",
									WebkitBackdropFilter: "blur( 7px );",
								}}>
								<Typography className={styles.MACSText}>Modular</Typography>
								<Typography className={styles.MACSText}>Accessible</Typography>
								<Typography className={styles.MACSText}>Controller</Typography>
								<Typography className={styles.MACSText}>System</Typography>
								<Typography
									color='white'
									fontFamily={"bitcount-mono-single-line-ci"}
									fontSize='5rem'
									lineHeight={1}
									mb={2}>
									MACS
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								mt: 2,
								borderRadius: 2,
								p: 3,
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 72, 88, 99, 0.8 )",
								backdropFilter: "blur( 7px );",
								WebkitBackdropFilter: "blur( 7px );",
							}}>
							<Typography textAlign='justify' fontSize={"18px"} color={"white"}>
								With 5 distinct input modules, and a central hub users can physically build the
								controller that is perfect for them. Then with our software, users can further configure
								each module to emulate whatever action they want.
							</Typography>
						</Box>
					</Grid>
					<Grid
						item
						xs={8}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly",
							alignItems: "center",
							minHeight: "725px",
						}}>
						<Grid
							container
							spacing={2}
							sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
							<Grid item xs={8}>
								<Box
									onClick={onClick}
									sx={{
										borderRadius: 2,
										p: 2,
										my: 1,
										boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
										backgroundColor: "rgba( 72, 88, 99, 0.7 )",
										backdropFilter: "blur( 7px );",
										WebkitBackdropFilter: "blur( 7px );",
									}}>
									<Grid container spacing={2}>
										<Grid
											item
											xs={1}
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												alignSelf: "stretch",
											}}>
											<Typography
												color='white'
												fontFamily={"Gilroy-Heavy"}
												fontSize='3rem'
												sx={{
													transform: "rotate(-90deg)",
													textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
												}}>
												Modules
											</Typography>
										</Grid>
										<Grid item xs={11}>
											<Grid container spacing={2}>
												<Grid item xs={4} sx={{ position: "relative" }}>
													<Card elevation={4} sx={{ display: "flex" }}>
														<CardMedia
															component='img'
															alt='final central hub module'
															height='150'
															sx={{ objectFit: "cover" }}
															image='/central-hub.jpg'
														/>
													</Card>
													<Box
														sx={{
															borderRadius: 2,
															px: 1,
															py: 0.75,
															backgroundColor: "rgba( 255, 255, 255, 1 )",
															display: "flex",
															position: "absolute",
															bottom: -10,
															left: 10,
														}}>
														<Typography
															color='backgroundBlack.main'
															fontWeight='bold'
															fontSize={"12px"}>
															Central Hub
														</Typography>
													</Box>
												</Grid>
												<Grid item xs={4} sx={{ position: "relative" }}>
													<Card elevation={4} sx={{ display: "flex" }}>
														<CardMedia
															component='img'
															alt='final button module'
															height='150'
															sx={{ objectFit: "cover" }}
															image='/button-module.jpg'
														/>
													</Card>
													<Box
														sx={{
															borderRadius: 2,
															px: 1,
															py: 0.75,
															backgroundColor: "rgba( 255, 255, 255, 1 )",
															display: "flex",
															position: "absolute",
															bottom: -10,
															left: 10,
														}}>
														<Typography
															color='backgroundBlack.main'
															fontWeight='bold'
															fontSize={"12px"}>
															Button Module
														</Typography>
													</Box>
												</Grid>
												<Grid item xs={4} sx={{ position: "relative" }}>
													<Card elevation={4} sx={{ display: "flex" }}>
														<CardActionArea>
															<CardMedia
																component='img'
																alt='final switch module'
																height='150'
																sx={{ objectFit: "cover" }}
																image='/switch-module.jpg'
															/>
														</CardActionArea>
													</Card>
													<Box
														sx={{
															borderRadius: 2,
															px: 1,
															py: 0.75,
															backgroundColor: "rgba( 255, 255, 255, 1 )",
															display: "flex",
															position: "absolute",
															bottom: -10,
															left: 10,
														}}>
														<Typography
															color='backgroundBlack.main'
															fontWeight='bold'
															fontSize={"12px"}>
															Switch Module
														</Typography>
													</Box>
												</Grid>
												<Grid item xs={4} sx={{ position: "relative" }}>
													<Card elevation={4} sx={{ display: "flex" }}>
														<CardMedia
															component='img'
															alt='final joystick module'
															height='150'
															sx={{ objectFit: "cover" }}
															image='/joystick-module.jpg'
														/>
													</Card>
													<Box
														sx={{
															borderRadius: 2,
															px: 1,
															py: 0.75,
															backgroundColor: "rgba( 255, 255, 255, 1 )",
															display: "flex",
															position: "absolute",
															bottom: -10,
															left: 10,
														}}>
														<Typography
															color='backgroundBlack.main'
															fontWeight='bold'
															fontSize={"12px"}>
															Joystick Module
														</Typography>
													</Box>
												</Grid>
												<Grid item xs={4} sx={{ position: "relative" }}>
													<Card elevation={4} sx={{ display: "flex" }}>
														<CardMedia
															component='img'
															alt='final slider module'
															height='150'
															sx={{ objectFit: "cover" }}
															image='/slider-module.jpg'
														/>
													</Card>
													<Box
														sx={{
															borderRadius: 2,
															px: 1,
															py: 0.75,
															backgroundColor: "rgba( 255, 255, 255, 1 )",
															display: "flex",
															position: "absolute",
															bottom: -10,
															left: 10,
														}}>
														<Typography
															color='backgroundBlack.main'
															fontWeight='bold'
															fontSize={"12px"}>
															Slider Module
														</Typography>
													</Box>
												</Grid>
												<Grid item xs={4} sx={{ position: "relative" }}>
													<Card elevation={4} sx={{ display: "flex" }}>
														<CardMedia
															component='img'
															alt='final dial module'
															height='150'
															sx={{ objectFit: "cover" }}
															image='/dial-module.jpg'
														/>
													</Card>
													<Box
														sx={{
															borderRadius: 2,
															px: 1,
															py: 0.75,
															backgroundColor: "rgba( 255, 255, 255, 1 )",
															display: "flex",
															position: "absolute",
															bottom: -10,
															left: 10,
														}}>
														<Typography
															color='backgroundBlack.main'
															fontWeight='bold'
															fontSize={"12px"}>
															Dial Module
														</Typography>
													</Box>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Box>
							</Grid>
							<Grid
								item
								xs={4}
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Box
									onClick={onClick}
									sx={{
										borderRadius: 2,
										p: 2,
										my: 1,
										boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
										backgroundColor: "#70828FCE",
										backdropFilter: "blur( 7px );",
										WebkitBackdropFilter: "blur( 7px );",
									}}>
									<Grid
										container
										spacing={2}
										sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
										<Grid
											item
											xs={2}
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												alignSelf: "stretch",
											}}>
											<Typography
												color='white'
												fontFamily={"Gilroy-Heavy"}
												fontSize='3rem'
												// textAlign='left'
												sx={{
													transform: "rotate(-90deg)",
													textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
												}}>
												Controller
											</Typography>
										</Grid>
										<Grid item xs={10}>
											<Grid container spacing={2}>
												<Grid item xs={12}>
													<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
														<CardMedia
															component='img'
															alt='microsoft adaptive controller'
															height='200'
															// sx={{ objectPosition: "50% 60%" }}
															image='/macs-config-3.jpg'
														/>
													</Card>
												</Grid>
												<Grid item xs={12}>
													<Card elevation={4} sx={{ display: "flex", alignSelf: "stretch" }}>
														<CardMedia
															component='img'
															alt='macs configuration 2'
															height='200'
															// sx={{ objectPosition: "50% 60%" }}
															image='/macs-config-4.jpg'
														/>
													</Card>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Box>
							</Grid>
						</Grid>

						<Box
							onClick={onClick}
							sx={{
								borderRadius: 2,
								p: 2,
								my: 1,
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 255, 255, 255, 0.85 )",
								backdropFilter: "blur( 7px );",
								WebkitBackdropFilter: "blur( 7px );",
							}}>
							<Grid container spacing={2}>
								<Grid
									item
									xs={0.75}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										alignSelf: "stretch",
									}}>
									<Typography
										color='backgroundBlack.main'
										fontFamily={"Gilroy-Heavy"}
										fontSize='3rem'
										// textAlign='left'
										sx={{
											transform: "rotate(-90deg)",
											textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
										}}>
										App
									</Typography>
								</Grid>
								<Grid item xs={11.25}>
									<Grid container spacing={2}>
										<Grid item xs={4} sx={{ position: "relative" }}>
											<Card elevation={4} sx={{ display: "flex" }}>
												<CardMedia
													component='img'
													alt='macs-application'
													height='auto'
													sx={{ objectFit: "contain" }}
													image='/macs-application.png'
												/>
											</Card>
											<Box
												sx={{
													borderRadius: 2,
													px: 1,
													py: 0.75,
													// my: 1,
													boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
													// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
													backgroundColor: "#70828F",
													// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
													display: "flex",
													position: "absolute",
													bottom: -10,
													left: 10,
												}}>
												<Typography color='white' fontWeight='bold' fontSize={"12px"}>
													Interface
												</Typography>
											</Box>
										</Grid>
										<Grid item xs={4} sx={{ position: "relative" }}>
											<Card elevation={4} sx={{ display: "flex" }}>
												<CardMedia
													component='img'
													alt='application joystick configuration'
													height='auto'
													sx={{ objectFit: "contain" }}
													image='/joystick-config.png'
												/>
											</Card>
											<Box
												sx={{
													borderRadius: 2,
													px: 1,
													py: 0.75,
													// my: 1,
													boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
													// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
													backgroundColor: "#70828F",
													// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
													display: "flex",
													position: "absolute",
													bottom: -10,
													left: 10,
												}}>
												<Typography color='white' fontWeight='bold' fontSize={"12px"}>
													Joystick Configuration
												</Typography>
											</Box>
										</Grid>
										<Grid item xs={4} sx={{ position: "relative" }}>
											<Card elevation={4} sx={{ display: "flex" }}>
												<CardMedia
													component='img'
													alt='application button configuration'
													height='auto'
													sx={{ objectFit: "contain" }}
													image='/button-config.png'
												/>
											</Card>
											<Box
												sx={{
													borderRadius: 2,
													px: 1,
													py: 0.75,
													// my: 1,
													boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
													// WebkitBoxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
													backgroundColor: "#70828F",
													// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
													display: "flex",
													position: "absolute",
													bottom: -10,
													left: 10,
												}}>
												<Typography color='white' fontWeight='bold' fontSize={"12px"}>
													Button Configuration
												</Typography>
											</Box>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.2} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseEaseInOut}
				sx={{ position: "absolute", left: "20%", bottom: "25%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-21'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-21`}
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
		<ParallaxLayer offset={offset} speed={0.35} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotating}
				sx={{ position: "absolute", left: "2%", bottom: "10%", transform: "rotate(154deg)" }}>
				<HexGrid
					id='module-grid-14'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-22`}
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
		<ParallaxLayer offset={offset} speed={-0.01} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingSlow}
				sx={{ position: "absolute", right: "-5%", bottom: "65%", transform: "rotate(98deg)" }}>
				<HexGrid
					id='module-grid-23'
					height={"40vh"}
					width={"40vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-23`}
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
		<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseEaseInOut}
				sx={{ position: "absolute", right: "30%", bottom: "6%", transform: "rotate(72deg)" }}>
				<HexGrid
					id='module-grid-24'
					height={"15vh"}
					width={"15vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-24`}
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
		<ParallaxLayer offset={offset} speed={0.5} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingSlowEaseInOut}
				sx={{ position: "absolute", left: "3%", top: "0%", transform: "rotate(34deg)" }}>
				<HexGrid
					id='module-grid-25'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-25`}
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
		<ParallaxLayer offset={offset} speed={-0.2} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingFast}
				sx={{ position: "absolute", right: "3%", bottom: "25%", transform: "rotate(216deg)" }}>
				<HexGrid
					id='module-grid-26'
					height={"15vh"}
					width={"15vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-26`}
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
	</>
);

const PageSeven = ({ offset, gradient, onClick, router }) => (
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
			speed={0.3}
			style={{ zIndex: 9999 }}>
			<Container maxWidth='xl' sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Grid container spacing={2}>
					<Grid
						item
						onClick={onClick}
						xs={4}
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
						}}>
						<Typography
							color='white'
							fontFamily={"bitcount-mono-single-line-ci"}
							fontSize='9rem'
							my={-1}
							onClick={onClick}>
							MACS
						</Typography>
						<Box sx={{ position: "relative" }}>
							<Typography
								// color='white'
								fontFamily={"Gilroy-Heavy"}
								fontSize='8rem'
								my={-5}
								onClick={onClick}
								sx={{
									position: "relative",
									backgroundImage:
										"linear-gradient(125deg, rgba(255,255,255,1) 30%, rgba(25,177,0,1) 100%);",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									// textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
								}}>
								in
							</Typography>
							<Typography
								// color='white'
								fontFamily={"Gilroy-Heavy"}
								fontSize='8rem'
								my={-5}
								onClick={onClick}
								sx={{
									position: "absolute",
									top: 0,
									left: 0,
									// backgroundImage:
									// 	"linear-gradient(135deg, rgba(0,135,177,1) 0%, rgba(199,14,81,1) 100%)",
									// WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
									zIndex: -1,
								}}>
								in
							</Typography>
						</Box>
						<Box sx={{ position: "relative" }}>
							<Typography
								// color='white'
								fontFamily={"Gilroy-Heavy"}
								fontSize='8rem'
								// my={-5}
								onClick={onClick}
								sx={{
									position: "relative",
									backgroundImage:
										"linear-gradient(125deg, rgba(255,255,255,1) 0%, rgba(255,184,0,1) 100%);",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									// textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
								}}>
								action
							</Typography>
							<Typography
								// color='white'
								fontFamily={"Gilroy-Heavy"}
								fontSize='8rem'
								// my={-5}
								onClick={onClick}
								sx={{
									position: "absolute",
									top: 0,
									left: 0,
									// backgroundImage:
									// 	"linear-gradient(135deg, rgba(0,135,177,1) 0%, rgba(199,14,81,1) 100%)",
									// WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
									zIndex: -1,
								}}>
								action
							</Typography>
						</Box>
					</Grid>
					<Grid
						item
						xs={8}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Box
							onClick={onClick}
							sx={{
								display: "flex",
								borderRadius: 2,
								// p: 4,
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								backgroundColor: "rgba( 72, 88, 99, 0.7 )",
								// backdropFilter: "blur( 7px );",
								// webkitBackdropFilter: "blur( 7px );",
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
								contextMenu={false}></iframe>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.7} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotating}
				sx={{ position: "absolute", left: "25%", bottom: "5%", transform: "rotate(112deg)" }}>
				<HexGrid
					id='module-grid-27'
					height={"30vh"}
					width={"30vw"}
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
		<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseSlowEaseInOut}
				sx={{ position: "absolute", left: "40%", top: "10%", transform: "rotate(180deg)" }}>
				<HexGrid
					id='module-grid-28'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingSlowEaseInOut}
				sx={{ position: "absolute", right: "3%", top: "15%", transform: "rotate(212deg)" }}>
				<HexGrid
					id='module-grid-29'
					height={"15vh"}
					width={"15vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
		<ParallaxLayer offset={offset} speed={0.45} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseSlow}
				sx={{ position: "absolute", left: "0%", top: "0%", transform: "rotate(212deg)" }}>
				<HexGrid
					id='module-grid-30'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} style={{ zIndex: 10 }}>
			<Box
				className={styles.rotatingReverseNormal}
				sx={{ position: "absolute", right: "5%", bottom: "5%", transform: "rotate(212deg)" }}>
				<HexGrid
					id='module-grid-31'
					height={"40vh"}
					width={"40vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
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

const PageEight = ({ offset, gradient, onClick, router }) => (
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
			speed={0.3}
			style={{ zIndex: 9999 }}>
			<Container
				maxWidth='xl'
				sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000000 }}>
				<Grid container spacing={2}>
					<Grid item xs={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<Box
							sx={{
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								borderRadius: 2,
								backgroundColor: "rgba( 255, 255, 255, 0.85 )",
								backdropFilter: "blur( 7px );",
								WebkitBackdropFilter: "blur( 7px );",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "flex-start",
								px: 8,
								py: 2,
							}}>
							<Typography
								color='backgroundBlack.main'
								fontFamily={"bitcount-mono-single-line-ci"}
								fontSize='9rem'
								mb={-3}
								mt={-4}
								onClick={onClick}>
								MACS
							</Typography>
							<Box sx={{ position: "relative" }}>
								<Typography
									// color='white'
									fontFamily={"Gilroy-Heavy"}
									fontSize='8rem'
									my={-5}
									onClick={onClick}
									sx={{
										position: "relative",
										backgroundImage:
											"linear-gradient(345deg, rgba(192,0,69,1) 20%,rgba(255,184,0,1) 70%);",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										// textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
									}}>
									Break
								</Typography>
								<Typography
									// color='white'
									fontFamily={"Gilroy-Heavy"}
									fontSize='8rem'
									my={-5}
									onClick={onClick}
									sx={{
										position: "absolute",
										top: 0,
										left: 0,
										// backgroundImage:
										// 	"linear-gradient(135deg, rgba(0,135,177,1) 0%, rgba(199,14,81,1) 100%)",
										// WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										zIndex: -1,
									}}>
									Break
								</Typography>
							</Box>
							<Box sx={{ position: "relative" }}>
								<Typography
									// color='white'
									fontFamily={"Gilroy-Heavy"}
									fontSize='8rem'
									my={-2}
									onClick={onClick}
									sx={{
										position: "relative",
										backgroundImage:
											"linear-gradient(161deg, rgba(255,61,0,1) 0%, rgba(192,0,69,1) 80%);",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
									}}>
									Down
								</Typography>
								<Typography
									// color='white'
									fontFamily={"Gilroy-Heavy"}
									fontSize='8rem'
									my={-2}
									onClick={onClick}
									sx={{
										position: "absolute",
										top: 0,
										left: 0,
										WebkitTextFillColor: "transparent",
										textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
										zIndex: -1,
									}}>
									Down
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.4} onClick={onClick}>
			<Box sx={{ position: "absolute", left: "70%", top: "35%", transform: "rotate(-17deg)" }}>
				<Box className={styles.rotating}>
					<HexGrid
						id='module-grid-35'
						height={"50vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-35`}
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
				<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
					<Typography
						// color='white'
						fontFamily={"Gilroy-Heavy"}
						fontSize='2.5rem'
						mb={-2}
						onClick={onClick}
						sx={{
							color: "white",
							textAlign: "center",
							textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
						}}>
						Per Module
					</Typography>
					<Typography
						// color='white'
						fontFamily={"Gilroy-Heavy"}
						fontSize='4rem'
						onClick={onClick}
						sx={{
							color: "white",
							textAlign: "center",
							textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
						}}>
						$15.50
					</Typography>
				</Box>
			</Box>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={-0.15} onClick={onClick}>
			<Box sx={{ position: "absolute", left: "61%", top: "17%", transform: "rotate(-3deg)" }}>
				<Box className={styles.rotatingReverseSlowEaseInOut}>
					<HexGrid
						id='module-grid-34'
						height={"40vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-34`}
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
				<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
					<Typography
						// color='white'
						fontFamily={"Gilroy-Heavy"}
						fontSize='2.5rem'
						mb={-2}
						onClick={onClick}
						sx={{
							color: "white",
							textAlign: "center",
							textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
						}}>
						Actual
					</Typography>
					<Typography
						// color='white'
						fontFamily={"Gilroy-Heavy"}
						fontSize='4rem'
						onClick={onClick}
						sx={{
							color: "white",
							textAlign: "center",
							textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
						}}>
						$466.87
					</Typography>
				</Box>
			</Box>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
			<Box sx={{ position: "absolute", left: "55%", top: "45%", transform: "rotate(15deg)" }}>
				<Box className={styles.rotatingSlow}>
					<HexGrid
						id='module-grid-33'
						height={"40vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-33`}
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
				<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
					<Typography
						// color='white'
						fontFamily={"Gilroy-Heavy"}
						fontSize='2.5rem'
						mb={-2}
						onClick={onClick}
						sx={{
							color: "white",
							textAlign: "center",
							textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
						}}>
						Anticipated
					</Typography>
					<Typography
						// color='white'
						fontFamily={"Gilroy-Heavy"}
						fontSize='4rem'
						onClick={onClick}
						sx={{
							color: "white",
							textAlign: "center",
							textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
						}}>
						$650
					</Typography>
				</Box>
			</Box>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
					borderRadius: "50%",
					backgroundColor: "rgba( 255, 255, 255, 0.85 )",
					backdropFilter: "blur( 7px );",
					WebkitBackdropFilter: "blur( 7px );",
					height: "30vh",
					width: "30vh",
					zIndex: 10,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<MACSLogoRed height='27vh' />
			</Box>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.8} onClick={onClick}>
			<Box
				className={styles.rotatingSlowEaseInOut}
				sx={{ position: "absolute", left: "-5%", top: "5%", transform: "rotate(15deg)" }}>
				<HexGrid
					id='module-grid-36'
					height={"40vh"}
					width={"40vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-36`}
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
		<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
			<Box
				className={styles.rotatingReverse}
				sx={{ position: "absolute", right: "3%", top: "12%", transform: "rotate(82deg)" }}>
				<HexGrid
					id='module-grid-37'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-37`}
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
		<ParallaxLayer offset={offset} speed={0.5} onClick={onClick}>
			<Box
				className={styles.rotatingSlow}
				sx={{ position: "absolute", right: "45%", bottom: "5%", transform: "rotate(2deg)" }}>
				<HexGrid
					id='module-grid-38'
					height={"30vh"}
					width={"30vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-38`}
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
	</>
);

const PageNine = ({ offset, gradient, onClick, router }) => (
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
			speed={0.3}
			style={{ zIndex: 9999 }}>
			<Container
				maxWidth='xl'
				sx={{
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "flex-start",
					zIndex: 1000000,
					minHeight: "80vh",
				}}>
				<Grid container spacing={2}>
					<Grid item xs={12} sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
						<Box
							sx={{
								boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
								borderRadius: 2,
								backgroundColor: "rgba( 72, 88, 99, 0.7 )",
								backdropFilter: "blur( 7px );",
								WebkitBackdropFilter: "blur( 7px );",
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								px: 8,
								py: 2,
							}}>
							<Box sx={{ position: "relative" }}>
								<Typography
									// color='white'
									fontFamily={"Gilroy-Heavy"}
									fontSize='6rem'
									my={-5}
									onClick={onClick}
									sx={{
										position: "relative",
										background: "rgb(199,14,81)",
										backgroundImage:
											"linear-gradient(325deg, rgba(0,135,177,1) 0%, rgba(255,255,255,1) 100%);",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										// textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
									}}>
									Beyond
								</Typography>
								<Typography
									// color='white'
									fontFamily={"Gilroy-Heavy"}
									fontSize='6rem'
									my={-5}
									onClick={onClick}
									sx={{
										position: "absolute",
										top: 0,
										left: 0,
										// backgroundImage:
										// 	"linear-gradient(135deg, rgba(0,135,177,1) 0%, rgba(199,14,81,1) 100%)",
										// WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
										zIndex: -1,
									}}>
									Beyond
								</Typography>
							</Box>
							<Typography
								color='white'
								fontFamily={"bitcount-mono-single-line-ci"}
								fontSize='7rem'
								mb={-3}
								mt={-4}
								ml={4}
								onClick={onClick}>
								MACS
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
			<Box sx={{ position: "absolute", left: "20%", top: "25%", transform: "rotate(0deg)" }}>
				<Box className={styles.rotating}>
					<HexGrid
						id='module-grid-39'
						height={"35vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-39`}
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
				<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
					<Typography
						// color='white'
						fontFamily={"Gilroy-Heavy"}
						fontSize='2.5rem'
						// mb={-2}
						onClick={onClick}
						sx={{
							color: "white",
							textAlign: "center",
							textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
						}}>
						Magnetic Connectors
					</Typography>
				</Box>
			</Box>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.8} onClick={onClick}>
			<Box sx={{ position: "absolute", left: "27%", top: "60%", transform: "rotate(0deg)" }}>
				<Box className={styles.rotatingReverseNormal}>
					<HexGrid
						id='module-grid-40'
						height={"35vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-40`}
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
				<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
					<Typography
						// color='white'
						fontFamily={"Gilroy-Heavy"}
						fontSize='2.5rem'
						// mb={-2}
						onClick={onClick}
						sx={{
							color: "white",
							textAlign: "center",
							textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
						}}>
						Module Extension Cord
					</Typography>
				</Box>
			</Box>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.9} onClick={onClick}>
			<Box sx={{ position: "absolute", right: "20%", top: "25%", transform: "rotate(0deg)" }}>
				<Box className={styles.rotatingReverseSlowEaseInOut}>
					<HexGrid
						id='module-grid-41'
						height={"35vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-41`}
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
				<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
					<Typography
						// color='white'
						fontFamily={"Gilroy-Heavy"}
						fontSize='2.5rem'
						onClick={onClick}
						sx={{
							color: "white",
							textAlign: "center",
							textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
						}}>
						More Non-Traditional Inputs
					</Typography>
				</Box>
			</Box>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
			<Box sx={{ position: "absolute", right: "27%", top: "60%", transform: "rotate(0deg)" }}>
				<Box className={styles.rotatingSlow}>
					<HexGrid
						id='module-grid-42'
						height={"35vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-42`}
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
				<Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
					<Typography
						// color='white'
						fontFamily={"Gilroy-Heavy"}
						fontSize='2.25rem'
						// mb={-2}
						onClick={onClick}
						sx={{
							color: "white",
							textAlign: "center",
							textShadow: "2px 3px 5px rgba(0,0,0,0.5);",
						}}>
						Increased Configuration Options
					</Typography>
				</Box>
			</Box>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={0.5} onClick={onClick}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					boxShadow: "9px 10px 13px -8px rgba(0,0,0,0.55)",
					borderRadius: "50%",
					backgroundColor: "rgba( 255, 255, 255, 0.85 )",
					backdropFilter: "blur( 7px );",
					WebkitBackdropFilter: "blur( 7px );",
					height: "40vh",
					width: "40vh",
					zIndex: 10,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<MACSLogoBlue height='37vh' />
			</Box>
		</ParallaxLayer>
		<ParallaxLayer offset={offset} speed={-0.3} onClick={onClick}>
			<Box
				className={styles.rotatingSlowEaseInOut}
				sx={{ position: "absolute", left: "0%", top: "60%", transform: "rotate(15deg)" }}>
				<HexGrid
					id='module-grid-43'
					height={"25vh"}
					width={"25vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-43`}
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
		<ParallaxLayer offset={offset} speed={-0.4} onClick={onClick}>
			<Box
				className={styles.rotatingReverse}
				sx={{ position: "absolute", right: "3%", top: "55%", transform: "rotate(82deg)" }}>
				<HexGrid
					id='module-grid-44'
					height={"20vh"}
					width={"20vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-44`}
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
		<ParallaxLayer offset={offset} speed={-0.1} onClick={onClick}>
			<Box
				className={styles.rotatingSlow}
				sx={{ position: "absolute", left: "-5%", top: "15%", transform: "rotate(2deg)" }}>
				<HexGrid
					id='module-grid-45'
					height={"30vh"}
					width={"30vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-45`}
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
		<ParallaxLayer offset={offset} speed={-0.1} onClick={onClick}>
			<Box
				className={styles.rotatingSlow}
				sx={{ position: "absolute", right: "-2%", top: "15%", transform: "rotate(2deg)" }}>
				<HexGrid
					id='module-grid-46'
					height={"27vh"}
					width={"27vw"}
					viewBox='-50 -50 100 100'
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						<Hexagon
							id={`hexagon-46`}
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
	</>
);

export default function Overview() {
	const parallax = useRef(null);
	const router = useRouter();
	let scrollYProgress = 0;

	const scroll = (to) => {
		if (parallax.current) {
			parallax.current.scrollTo(to);
			// console.log(parallax.current);
		}
	};

	const handleScroll = () => {
		if (parallax.current) {
			// console.log(parallax.current.current);
			scrollYProgress = parallax.current.current / 500;
		}
	};

	useEffect(() => {
		const container = document.querySelector(".parallax-scroll");
		container.addEventListener("scroll", handleScroll);
		return () => {
			container.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<animated.div>
			<Head>
				<style>{"body { background-color: #FFF; !important; }"}</style>
			</Head>
			<Box
				sx={{
					position: "absolute",
					// top: "2.5%",
					// left: "6%",
					background: "linear-gradient(to bottom, rgba( 255, 255, 255, 0.2 ), rgba( 255, 255, 255, 0 ))",
					boxShadow: "0 2px 8px 0 rgba( 0, 0, 0, 0.35 )",
					backdropFilter: "blur( 7px )",
					WebkitBackdropFilter: "blur( 7px )",
					zIndex: 1,
					// pl: 10,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start",
					width: "100vw",
					"&:hover": {
						cursor: "pointer",
					},
				}}>
				<Box
					sx={{
						position: "relative",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						left: "5%",
					}}
					onClick={() => router.push("/")}>
					<MACSLogoWhite height={60} />
					<Typography
						fontFamily='bitcount-mono-single-line-ci'
						fontSize='3.5rem'
						lineHeight={1.4}
						color='white'
						ml={2}
						fontWeight={300}>
						MACS
					</Typography>
				</Box>
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
			<Parallax className={`${styles.parallaxContainer} parallax-scroll`} ref={parallax} pages={9}>
				<PageOne offset={0} gradient='greenBlue' onClick={() => scroll(1)} router={router} />
				<PageTwo offset={1} gradient='yellowGreen' onClick={() => scroll(2)} router={router} />
				<PageThree offset={2} gradient='yellowGreenAlt' onClick={() => scroll(3)} router={router} />
				<PageFour offset={3} gradient='redYellow' onClick={() => scroll(4)} router={router} />
				<PageFive offset={4} gradient='redYellowAlt' onClick={() => scroll(5)} router={router} />
				<PageSix offset={5} gradient='blueRed' onClick={() => scroll(6)} router={router} />
				<PageSeven offset={6} gradient='purpleBlue' onClick={() => scroll(7)} router={router} />
				<PageEight offset={7} gradient='blue' onClick={() => scroll(8)} router={router} />
				<PageNine offset={8} gradient='greenBlue' onClick={() => scroll(0)} router={router} />
			</Parallax>
		</animated.div>
	);
}
