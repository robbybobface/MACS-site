import React from "react";
import { Box, Container, Grid, useMediaQuery, Card, Paper, Button } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import { animated, useTrail, to } from "@react-spring/web";
import BlurHashedImage from "../Partials/BlurHashedImage";
import { Grid as MauerGrid, Slug, Fade } from "mauerwerk";
import { Blurhash } from "react-blurhash";
import { GalleryPhotos } from "../../utils/GalleryData";
import CloseIcon from "@mui/icons-material/Close";

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

function MobileContentCapstoneCompetition() {
	const isXS = useMediaQuery(theme.breakpoints.only("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSMMinus = useMediaQuery(theme.breakpoints.down("smMinus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isSMPlus = useMediaQuery(theme.breakpoints.down("smPlus"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isLGPlus = useMediaQuery(theme.breakpoints.down("lgPlus"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const getMaximizedSize = () => {
		if (isXS) return "min-content";
		if (isXSPlus) return "auto";
		if (isSM) return "auto";
		if (isSMPlus) return "auto";
		if (isMD) return "70%";
		if (isMDPlus) return "50%";
		if (isLG) return "60%";
		if (isLGPlus) return "70%";
		if (isXL) return "75%";
		return "80%";
	};

	const getMaximizedImageHeight = (vertical) => {
		if (isXS) return "100%";
		if (isXSPlus) return "100%";
		if (isSM) return "100%";
		if (isSMPlus) return "100%";
		if (isMD) return "100%";
		if (isMDPlus) return "320px";
		if (isLG) return "385px";
		if (isLGPlus) return "460px";
		if (isXL) return "500px";
		return "520px";
	};

	const getMinimumMaximizedImageHeight = (isVertical) => {
		if (isXS) return isVertical ? "27rem" : "15rem";
		if (isXSPlus) return "400px";
		if (isSM) return "400px";
		if (isSMPlus) return "400px";
		if (isMD) return "450px";
		if (isMDPlus) return "320px";
		if (isLG) return "385px";
		if (isLGPlus) return "460px";
		if (isXL) return "500px";
		return "520px";
	};

	const getMaximizedPosition = (index) => {
		if (isXSPlus) {
			switch (index) {
				case 1: {
					return "-18rem";
				}
				case 2: {
					return "-18rem";
				}
				case 3: {
					return "-5rem";
				}
				case 4: {
					return "-5rem";
				}
				case 5: {
					return "0rem";
				}
				case 6: {
					return "8rem";
				}
				case 7: {
					return "10rem";
				}
				case 8: {
					return "15rem";
				}
				case 9: {
					return "15rem";
				}
				default: {
					return "0rem";
				}
			}
		}
		if (isSM) return "-50%";
		if (isSMPlus) return "-50%";
		if (isMD) return "-50%";
		return "0%";
	};

	return (
		<>
			<Box
				className='noselect'
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					backgroundColor: "#323232",
					overflow: "hidden",
				}}>
				<Box className={`${styles.slopeTopMobile} ${styles.orange}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffset} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					className='noselect'
					maxWidth='xl'
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 3,
						mb: 15,
						position: "relative",
						px: { xs: 1, md: 5 },
					}}>
					{/* <Trail open={open}> */}
					<Grid
						container
						spacing={1}
						rowGap={0}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							px: { xs: 0, md: 5 },
							zIndex: 10000,
						}}>
						<Grid
							item
							xs={12}
							sm={11}
							md={5}
							sx={{
								mt: { xs: 0, md: -4 },
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Trail open={open}>
								<GradientText
									text='Capstone Competition Gallery'
									gradient='background: rgb(255,255,255);
background: linear-gradient(125deg, rgba(255,255,255,1) 0%, rgba(255,137,100,1) 21%, rgba(255,61,0,1) 80%);'
									fontSize={{
										xs: "2.1rem",
										smPlus: "3rem",
										md: "3.5rem",
										mdPlus: "4.25rem",
										lg: "5.25rem",
										xl: "6rem",
									}}
									lineHeight='1.3'
									textAlign={{ xs: "center", md: "left" }}
								/>
							</Trail>
						</Grid>
						<Grid
							item
							xs={12}
							sm={11}
							md={7}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<MauerGrid
								className='grid'
								// Arbitrary data, should contain keys, possibly heights, etc.
								data={GalleryPhotos}
								// Key accessor, instructs grid on how to fet individual keys from the data set
								keys={(d) => d.name}
								// Can be a fixed value or an individual data accessor
								heights={(d) => d.height}
								margin={10}
								lockScroll={true}
								columns={isXSPlus ? 2 : 3}>
								{(data, maximized, toggle) => (
									<Box
										sx={{
											// py: { xs: 2, md: 0 },
											position: "absolute",
											top: "50%",
											left: "50%",
											transform: `translate(-50%, -50%)`,
											borderRadius: "8px",
											width: "100%",
											height: "100%",
											// backgroundImage: !maximized ? `url(${data.src}?tr=w-1200)` : "",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",

											"&:hover": {
												cursor: "pointer",
											},
										}}
										onClick={() => {
											if (!maximized) {
												toggle();
											}
										}}>
										{maximized && (
											<>
												<Box
													sx={{
														p: { xs: 2, md: 0 },
														position: "relative",
														width: "100%",
														height: "auto",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														borderRadius: "8px",
														transform: isXS
															? `translateY(${getMaximizedPosition(data.id)})`
															: "",
													}}>
													<Box
														sx={{
															position: "absolute",
															display: "flex",
															flex: 1,
															width: "100%",
															height: "100%",
															overflow: "clip",
															borderRadius: "8px",
														}}>
														<Blurhash
															hash={data.hash}
															width={1000}
															height={"100%"}
															resolutionX={32}
															resolutionY={32}
															punch={1}
														/>
													</Box>
													<Box
														sx={{
															position: "absolute",
															display: "flex",
															flex: 1,
															width: "100%",
															height: "100%",
															overflow: "clip",
															borderRadius: "8px",
															backgroundColor: "#ffffff96",
														}}
													/>
													<Card
														elevation={4}
														sx={{
															position: "relative",
															display: "flex",
															flex: 1,
															backgroundColor: "transparent",
															maxHeight: "500px",
															justifyContent: "center",
															alignItems: "center",
															width: "90%",
															height: getMinimumMaximizedImageHeight(data.vertical),
															zIndex: 100,
														}}>
														<BlurHashedImage
															src={data.src}
															hash={data.hash}
															alt={`${data.name}`}
															gallery={true}
														/>
													</Card>
													<Button
														size='small'
														sx={{ position: "absolute", top: -40, right: 0 }}
														variant='contained'
														color='stopButtonRed'
														style={{ textTransform: "none" }}
														endIcon={<CloseIcon color='white' />}
														onClick={() => toggle()}>
														Close
													</Button>
												</Box>
											</>
										)}
										{!maximized && (
											<Paper
												elevation={4}
												className='default'
												sx={{ overflow: "clip", flex: 1, backgroundColor: "transparent" }}>
												<BlurHashedImage
													src={`${data.src}?tr=w-1200`}
													hash={data.hash}
													alt={`${data.name}`}
													nonCard={true}
													// maxWidth='800px'
												/>
											</Paper>
										)}
									</Box>
								)}
							</MauerGrid>
						</Grid>
					</Grid>
					{/* </Trail> */}
				</Container>
				<Box className={`${styles.slopeBottomMobile} ${styles.orangeAlt}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeBottomMobileOffset} ${styles.white}`} sx={{ zIndex: 1 }} />
			</Box>
		</>
	);
}

export default MobileContentCapstoneCompetition;
