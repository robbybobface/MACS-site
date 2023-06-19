import React from "react";
import { Box, Container, Grid, useMediaQuery, Card, Paper } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import { animated, useTrail, to } from "@react-spring/web";
import BlurHashedImage from "../Partials/BlurHashedImage";
import { Grid as MauerGrid, Slug, Fade } from "mauerwerk";
import { Blurhash } from "react-blurhash";
import { GalleryPhotos } from "../../utils/GalleryData";

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
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
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
		if (isXS) return "100%";
		if (isXSPlus) return "100%";
		if (isSM) return "100%";
		if (isSMPlus) return "100%";
		if (isMD) return "100%";
		if (isMDPlus) return "50%";
		if (isLG) return "60%";
		if (isLGPlus) return "70%";
		if (isXL) return "75%";
		return "80%";
	};

	const getMaximizedImageHeight = () => {
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
									<Paper
										id={data.id}
										elevation={4}
										sx={{
											position: "absolute",
											top: "50%",
											left: "50%",
											transform: "translate(-50%, -50%)",
											borderRadius: "8px",
											width: "100%",
											height: maximized ? getMaximizedSize() : "100%",
											backgroundImage: !maximized ? `url(${data.src}?tr=w-1200)` : "",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											overflow: "scroll",
											backgroundSize: "cover",
											backgroundPosition: "center",
											backgroundRepeat: "no-repeat",
											"&:hover": {
												cursor: "pointer",
											},
										}}
										onClick={() => {
											toggle();
										}}>
										{maximized && (
											<Box
												sx={{
													position: "relative",
													width: "100%",
													height: "100%",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													borderRadius: "8px",
												}}>
												{/* <Box
													sx={{
														position: "absolute",
														top: 0,
														left: 0,
														width: "100%",
														height: "100%",
														display: "flex",
														overflow: "clip",
														flexDirection: "column",
														justifyContent: "center",
														alignItems: "center",
														borderRadius: "8px",
													}}> */}
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
												{/* <Paper
														elevation={4}
														// className='circle'
														sx={{
															position: "absolute",
															width: "90%",
															height: "90%",
															top: "50%",
															left: "50%",
															transform: "translate(-50%, -50%)",
															backgroundImage: `url(${data.src})`,
															backgroundSize: "cover",
															backgroundPosition: "center",
															backgroundRepeat: "no-repeat",
														}}
													/> */}
												<Card
													elevation={4}
													sx={{
														maxWidth: "95%",
														maxHeight: "95%",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														// maxHeight: "60%",
														width: "auto",
														height: "auto",
														zIndex: 100,
													}}>
													<BlurHashedImage
														src={data.src}
														hash={data.hash}
														alt={`${data.name}`}
														height={getMaximizedImageHeight()}
														width={"100%"}
														sx={{
															objectFit: "cover",
														}}
														gallery={true}
														vertical={data.vertical}
														// maxWidth='800px'
													/>
												</Card>
												{/* <Typography className='h-details'>{data.name}</Typography>
													<Typography className='p-details'>{data.description}</Typography> */}
											</Box>
										)}
										<Box
											className='default'
											sx={{
												borderRadius: 10,
											}}
										/>
									</Paper>
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
