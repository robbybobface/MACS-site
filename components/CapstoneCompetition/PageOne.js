import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import {
	Box,
	Typography,
	Container,
	Grid,
	Divider,
	useMediaQuery,
	CardContent,
	Card,
	IconButton,
	Paper,
} from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon, Pattern } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import { animated, useTrail, to } from "@react-spring/web";
import { Grid as MauerGrid, Slug, Fade } from "mauerwerk";
import { Blurhash } from "react-blurhash";
import BlurHashedImage from "../Partials/BlurHashedImage";
import { GalleryPhotos } from "../../utils/GalleryData";
import lodash from "lodash";

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

const PageOne = ({ offset, gradient, onClick }) => {
	const [open, setOpen] = useState(false);
	const [openHexagon, setOpenHexagon] = useState(false);

	const newFactor = useMediaQuery(theme.breakpoints.down("md")) ? 1.1 : 1;
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isLGPlus = useMediaQuery(theme.breakpoints.down("lgPlus"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const getImageSize = () => {
		if (isXS) return "140px";
		if (isXSPlus) return "140px";
		if (isSM) return "140px";
		if (isMD) return "150px";
		if (isMDPlus) return "140px";
		if (isLG) return "145px";
		if (isXL) return "150px";
		return "175px";
	};

	const getMaximizedSize = () => {
		if (isXS) return "50%";
		if (isXSPlus) return "60%";
		if (isSM) return "62%";
		if (isMD) return "50%";
		if (isMDPlus) return "50%";
		if (isLG) return "60%";
		if (isLGPlus) return "70%";
		if (isXL) return "75%";
		return "80%";
	};

	const getMaximizedImageHeight = () => {
		if (isXS) return "50%";
		if (isXSPlus) return "60%";
		if (isSM) return "62%";
		if (isMD) return "320px";
		if (isMDPlus) return "320px";
		if (isLG) return "385px";
		if (isLGPlus) return "460px";
		if (isXL) return "500px";
		return "520px";
	};

	useEffect(() => {
		setInterval(() => {
			setOpen(true);
		}, 250);
		setInterval(() => {
			setOpenHexagon(true);
		}, 400);
	}, []);
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${styles.slopeEndTop} ${styles.orange}`} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div className={styles.slopeBeginStart} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick} factor={newFactor}>
				<Box
					component='div'
					className={styles.rotating}
					sx={{
						position: "absolute",
						right: "5%",
						top: "10%",
						transform: `rotate(347deg)`,
					}}>
					<HexGrid
						id='module-grid-1'
						height={"25vh"}
						width={"25vh"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isMD ? { x: 49, y: 49 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-1`}
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
			<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick} factor={newFactor}>
				<Box
					component='div'
					className={styles.rotating}
					sx={{
						position: "absolute",
						right: "4%",
						bottom: "24%",
						transform: `rotate(347deg)`,
					}}>
					<HexGrid
						id='module-grid-5'
						height={"15vh"}
						width={"15vh"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isMD ? { x: 49, y: 49 } : { x: 49, y: 49 }}
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
			<ParallaxLayer offset={offset} speed={0.35} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingReverse}
					sx={{
						position: "absolute",
						left: { xs: "-2%", md: "33%" },
						top: "30%",
						transform: "rotate(15deg)",
					}}>
					<HexGrid
						id='module-grid-2'
						height={"20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 45, y: 45 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-2`}
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
			<ParallaxLayer offset={offset} speed={0.7} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						left: { xs: "65%", md: "53%" },
						top: "55%",
						transform: "rotate(10deg)",
					}}>
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
								cellStyle={{ fill: theme.palette.hexagonRed.main }}
								stroke='white'
								strokeWidth={1}
							/>
						</Layout>
					</HexGrid>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.7} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						left: "27%",
						bottom: "-8%",
						transform: "rotate(10deg)",
					}}>
					<HexGrid
						id='module-grid-6'
						height={"35vh"}
						width={"35vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout size={{ x: 50, y: 50 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-6`}
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
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingFast}
					sx={{
						position: "absolute",
						left: { xs: "70%", md: "45%" },
						top: { xs: "40%", md: "15%" },
						transform: "rotate(0deg)",
					}}>
					<HexGrid
						id='module-grid-4'
						height={"30vh"}
						width={"30vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 35, y: 35 } : { x: 30, y: 30 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-4`}
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
			<ParallaxLayer
				offset={offset}
				speed={0.3}
				onClick={onClick}
				style={{ zIndex: 9999, overflow: "visible" }}
				factor={newFactor}>
				<Container
					className='noselect'
					maxWidth='xl'
					sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 3 }}>
					{/* <Trail open={open}> */}
					<Grid
						container
						spacing={2}
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
										xs: "2.5rem",
										md: "3.5rem",
										mdPlus: "4.25rem",
										lg: "5.25rem",
										xl: "6rem",
									}}
									onClick={onClick}
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
							<MauerGrid
								className='grid'
								// Arbitrary data, should contain keys, possibly heights, etc.
								data={GalleryPhotos}
								// Key accessor, instructs grid on how to fet individual keys from the data set
								keys={(d) => d.name}
								// Can be a fixed value or an individual data accessor
								heights={(d) => d.height}
								margin={15}
								occupySpace={true}
								columns={3}>
								{(data, maximized, toggle) => (
									<Paper
										elevation={2}
										sx={{
											position: "absolute",
											top: "50%",
											left: "50%",
											transform: "translate(-50%, -50%)",
											borderRadius: "8px",
											width: "100%",
											height: maximized ? getMaximizedSize() : "100%",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											overflow: "clip",
											backgroundColor: "transparent",
											backgroundSize: "cover",
											backgroundPosition: "center",
											backgroundRepeat: "no-repeat",
											"&:hover": {
												cursor: "pointer",
											},
										}}
										onClick={toggle}>
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
														maxWidth: "90%",
														maxHeight: "90%",
														width: "90%",
														height: "90%",
														zIndex: 100,
														backgroundColor: "transparent",
													}}>
													<BlurHashedImage
														src={data.src}
														hash={data.hash}
														alt={`${data.name}`}
														height={getMaximizedImageHeight()}
														width={"100%"}
														sx={{ objectFit: "cover" }}
														gallery={true}
														// maxWidth='800px'
													/>
												</Card>
												{/* <Typography className='h-details'>{data.name}</Typography>
													<Typography className='p-details'>{data.description}</Typography> */}
											</Box>
										)}
										{!maximized && (
											<Box className='default'>
												<BlurHashedImage
													src={`${data.src}?tr=w-1200`}
													hash={data.hash}
													alt={`${data.name}`}
													height={"100%"}
													width={300}
													sx={{ objectFit: "cover" }}
													nonCard={true}
													// maxWidth='800px'
												/>
											</Box>
										)}
									</Paper>
								)}
							</MauerGrid>
						</Grid>
					</Grid>
					{/* </Trail> */}
				</Container>
			</ParallaxLayer>
		</>
	);
};
export default PageOne;
