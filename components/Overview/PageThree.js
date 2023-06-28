import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardMedia, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import BlurHashedImage from "../Partials/BlurHashedImage";

const PageThree = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md"))
		? 1000 / window.innerHeight >= 1
			? 1000 / window.innerHeight
			: 1
		: 1;
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const getImageHeights = () => {
		if (isMD) {
			return 225;
		} else if (isMDPlus) {
			return 225;
		} else if (isLG) {
			return 275;
		} else if (isXL) {
			return 300;
		} else {
			return 300;
		}
	};
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div
					// className={
					// 	useMediaQuery(theme.breakpoints.down("md")) ? styles.slopeBeginMobileThree : styles.slopeBegin
					// }
					className={styles.slopeBegin}
				/>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			<ParallaxLayer
				className={`${styles.text} ${styles.number} noselect`}
				onClick={onClick}
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
						zIndex: 1000000,
						flexDirection: { xs: "column", md: "row" },
					}}>
					<GradientText
						text='Existing Solutions'
						gradient='linear-gradient(161deg, rgba(94,196,176,1) 0%, rgba(255,190,0,1) 100%)'
						onClick={onClick}
						fontSize={{ xs: "2.5rem", md: "4rem", mdPlus: "4.75rem", lg: "5.25rem", xl: "6rem" }}
						lineHeight={1.3}
						ml={{ xs: 0, md: 4, lg: 4 }}
						mb={{ xs: 3, md: 0 }}
					/>
					<Box
						className={boxStyles.darkGreyBox}
						sx={{
							width: "100%",
						}}>
						<Grid
							container
							spacing={{ xs: 2, md: 4 }}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "flex-start",
								px: { xs: 2, md: 3, lg: 6 },
								py: { xs: 2, md: 3, lg: 4 },
							}}>
							<Grid item xs={12}>
								<Typography
									color='white'
									textAlign='justify'
									sx={{
										px: { xs: 0, md: 2, lg: 4 },
										fontSize: {
											xs: "14px",
											md: "15px",
											mdPlus: "16px",
											lg: "18px",
											xl: "20px",
										},
									}}>
									With the release of the Xbox Adaptive Controller in 2018 Microsoft has been almost
									the sole provider of accessible controllers for disabled gamers. Sony is also
									working on their accessible controller, codenamed Project Leonardo, which is
									scheduled to be released in 2024. Despite these positive developments, more can
									still be done to enable accessibility in these controllers. Whereas both of these
									controllers still suffer from the same rigid form factors that most modern
									controllers conform to. And the number of inputs are still limited and the supported
									input types are restricted by traditional controllers.
								</Typography>
							</Grid>
							<Grid item xs={12} md={6}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										alignSelf: "stretch",
										position: "relative",
										flexGrow: 1,
										height: getImageHeights(),
										width: "100%",
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/xbox-adaptive-controller.png?tr=w-1200'
										hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAA2AEoDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAECAwQG/8QAGBABAQEBAQAAAAAAAAAAAAAAAAERAhL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9gmjU2gLS1N6T6BrKqVh7VOwbaesfZ+waaNZex7A7UWi1HVAuukXodVnaC/Zztjo0G87P2wlPQbex7ZaNB0JpkDOosa2JsBlYWNLyMBEhyKw5ALBi8GA0AAEVABNIAAqAAZ4AD//2Q=='
										alt='xbox adaptive controller'
									/>
								</Card>
							</Grid>
							<Grid item xs={12} md={6}>
								<Card
									elevation={4}
									sx={{
										display: "flex",
										alignSelf: "stretch",
										position: "relative",
										flexGrow: 1,
										height: getImageHeights(),
										width: "100%",
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/project-leonardo.jpg?tr=w-1200'
										hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACaARIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwb/xAAXEAEBAQEAAAAAAAAAAAAAAAAAEQES/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQUZpQaSs0oNUrFKo3SsUoN0rFKDdKzSg2M0qDQlKCgAAAAAAAAAAAAACJQWpU3U3QWpU3U3QWlYqUG6lYqUHSpWOk6UdKVz6OgdKtc6UHSrXOrQdKtc6tBurWKtBurWKtQbGatBQAAAAABAFSiAVN01ndA3U3TdZ3QN1N1N1ndBd1N1N1ndBqpWN1KDdSsUqjdKxSg6Va5VaDpWq5ZrWaDpmrmuea1mg6Zq5rGauaDea1WM1cQbq1hQaVlQVUAUQAQAEEBNTV1nQTWdXU0Gd1nda1jQTdTdNTQTdSmpoFSiKLSoA1VrK4DWa1msY1gNZrWM4uA3jWMY1gN4uM41iCtMqDQigoAACAAoiaqAms61qaDGs63rOgzrOtam4DGs63uM7gMaje4zAZRqEUZGoQEVYsBMawzFzAXGsTMazAMaxMawFxrExcQVUUFVFBQAAEAUURFQEZ1tIDG4m43GdwGNxncdNxNwHPcZ3HTcSA5xI6RIDnCOkSKMQjcIDEWNwgMxcxqLATMXMWLAMxcxcxYBmKRYgKKAKACgIKACgIjSAiRogMRI3EgMRI3CA5xI6QgOcSOkIo5xI6QgOcI6QgOcWNwgMwjcIDMWNQgJFixYCRYRYgiqAAoIKAgoAAAAAACEUBmEaAZiRogMxI3CKMQjcSAzCNQgMwjUIDMWLFgMwjUASEVUEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z'
										alt="sony's project leonardo"
									/>
								</Card>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.75} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{ position: "absolute", left: "-0%", top: "0%", transform: "rotate(15deg)" }}>
					<HexGrid
						id='module-grid-8'
						height={"30vh"}
						width={"30vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isLG ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingReverse}
					sx={{ position: "absolute", left: "27%", top: "27%", transform: "rotate(312deg)" }}>
					<HexGrid
						id='module-grid-9'
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
			<ParallaxLayer offset={offset} speed={0.2} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingFast}
					sx={{
						position: "absolute",
						left: { xs: "-10%", md: "7%" },
						bottom: "0%",
						transform: "rotate(165deg)",
					}}>
					<HexGrid
						id='module-grid-10'
						height={"25vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick} factor={newFactor}>
				<Box
					className={styles.rotatingSlow}
					sx={{ position: "absolute", right: "5%", top: "-10%", transform: "rotate(7deg)" }}>
					<HexGrid
						id='module-grid-11'
						height={"35vh"}
						width={"35vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isLG ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={-0.27} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{ position: "absolute", right: "45%", bottom: "10%", transform: "rotate(216deg)" }}>
					<HexGrid
						id='module-grid-12'
						height={"15vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{
						position: "absolute",
						right: { xs: "-15%", md: "0%" },
						bottom: { xs: "30%", md: "10%" },
						transform: "rotate(216deg)",
					}}>
					<HexGrid
						id='module-grid-12'
						height={"25vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
};

export default PageThree;
