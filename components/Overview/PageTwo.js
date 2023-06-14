import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardContent, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";

const PageTwo = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md"))
		? 1000 / window.innerHeight >= 1
			? 1000 / window.innerHeight
			: 1
		: 1;
	console.log(newFactor);
	return (
		<>
			<ParallaxLayer offset={offset} onClick={onClick} speed={0.1} factor={newFactor}>
				<div
					// className={
					// 	useMediaQuery(theme.breakpoints.down("md")) ? styles.slopeBeginMobileTwo : styles.slopeBegin
					// }
					className={styles.slopeBegin}
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
					sx={{
						display: { xs: "none", md: "flex" },
						justifyContent: "center",
						alignItems: "center",
						zIndex: 1000000,
					}}>
					<Box
						className={boxStyles.whiteBox}
						sx={{
							width: { xs: "100%", md: "85%" },
							minHeight: 700,
							zIndex: 10000000,
							px: { xs: 2, md: 0 },
						}}>
						<GradientText
							text='Problem Formulation'
							gradient='linear-gradient(170deg, rgba(112,130,143,1) 0%, rgba(50,50,50,1) 100%)'
							onClick={onClick}
							lineHeight='1.2'
							textAlign='center'
							fontSize={{ xs: "2.5rem", md: "4rem", mdPlus: "4.75rem", lg: "5.25rem", xl: "6rem" }}
							width='100%'
							pt={1}
						/>
						<Grid
							container
							spacing={{ xs: 0, md: 2, lg: 4 }}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "flex-start",
								px: { xs: 0, md: 6 },
								pb: { xs: 4, lg: 6 },
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
										px: { xs: 0, md: 4 },
										mt: { xs: 1, md: 0 },
									}}
									textAlign='justify'>
									Despite gaming being one of the biggest emerging markets of the past few decades,
									there still remain holes in the market, specifically concerning controller options.
									Most controllers sold today give little to no regard for accessibility,
									reparability, and configurability.
								</Typography>
							</Grid>
							<Grid item xs={12} lg={4} sx={{ display: "flex", alignSelf: "stretch" }}>
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
											fontSize={{
												xs: "2.5rem",
												md: "20px",
												mdPlus: "22px",
												lg: "24px",
											}}
											fontWeight='bold'
											fontFamily='Gilroy-Bold'>
											Accessibility
										</Typography>
										<Typography
											color='text.secondary'
											textAlign='justify'
											sx={{
												fontSize: {
													xs: "14px",
													md: "15px",
													mdPlus: "16px",
													lg: "1rem",
												},
											}}>
											For would-be gamers with motor disabilities, controller usability poses a
											significant barrier to entry. Most gamers can relate to the frustration of
											feeling limited by their controller; unfortunately, this is a struggle that
											disabled gamers face on a daily basis. Due to a lack of accessible
											controller alternatives, these gamers are inclined to give up on gaming
											entirely. For example, a gamer with a Spinal Cord Injury (SCI) may find it
											challenging to depress a trigger and press a button simultaneously using
											Sony PlayStation's DualSense controller. This severely limits what can be
											done in a game, since most modern games require multiple concurrent inputs
											at most times.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} lg={4} sx={{ display: "flex", alignSelf: "stretch" }}>
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
											fontSize={{
												xs: "2.5rem",
												md: "20px",
												mdPlus: "22px",
												lg: "24px",
											}}
											fontWeight='bold'
											fontFamily='Gilroy-Bold'>
											Repairability
										</Typography>
										<Typography
											color='text.secondary'
											textAlign='justify'
											sx={{
												fontSize: {
													xs: "14px",
													md: "15px",
													mdPlus: "16px",
													lg: "1rem",
												},
											}}>
											Video game controllers comprise several components and inputs. In many
											instances of failure, proprietary controllers were mostly functional save
											for one critical piece. For instance, the Nintendo Switch is notorious for
											having faulty joy-cons, causing repair facilities to need to repair
											thousands of Joy-Cons… in a single week. Like the Nintendo Switch, most
											controllers are not designed to be durable or easily reparable. In most
											cases, non-functioning controllers have to be sent to designated repair
											facilities and only if the user purchased a warranty. As a result, broken
											controllers are either sent in for expensive third-party repairs or thrown
											out, even though most components are completely fine.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} lg={4} sx={{ display: "flex", alignSelf: "stretch" }}>
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
											fontSize={{
												xs: "2.5rem",
												md: "20px",
												mdPlus: "22px",
												lg: "24px",
											}}
											fontWeight='bold'
											fontFamily='Gilroy-Bold'>
											Configuability
										</Typography>
										<Typography
											color='text.secondary'
											textAlign='justify'
											sx={{
												fontSize: {
													xs: "14px",
													md: "15px",
													mdPlus: "16px",
													lg: "1rem",
												},
											}}>
											The problem is not necessarily that video games demand too much of the user,
											but also that the user is limited by their physical interaction with the
											game. Ultimately, this is because traditional controllers have no means of
											adapting to the needs of their users. Because controllers are designed with
											a static arrangement of inputs and a fixed set of input types, they can’t be
											customized to cater to each user individually. While many video games allow
											users to remap inputs in software, it is certainly not universal, and the
											inputs are usually restricted to specific mappings. This can sometimes be a
											hinderance in games where the layout of the controller is ill-suited to the
											game or the user.
										</Typography>
									</CardContent>
								</Card>
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
