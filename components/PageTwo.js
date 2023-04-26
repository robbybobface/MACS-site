import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import styles from "../styles/Overview.module.css";
import boxStyles from "../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../styles/theme";
import GradientText from "./GradientText";

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
					className={boxStyles.whiteBox}
					sx={{
						width: "85%",
						minHeight: 700,
						zIndex: 10000000,
					}}>
					<GradientText
						text='Problem Formulation'
						gradient='linear-gradient(170deg, rgba(112,130,143,1) 0%, rgba(50,50,50,1) 100%)'
						fontSize='6rem'
						onClick={onClick}
						lineHeight='1.2'
						textAlign='center'
						width='100%'
						pt={1}
					/>
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

export default PageTwo;
