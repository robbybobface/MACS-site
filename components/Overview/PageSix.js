import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardActionArea, CardMedia, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import ImageCaption from "../ImageCaption";
import BlurHashedImage from "../Partials/BlurHashedImage";

const PageSix = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md"))
		? 1800 / window.innerHeight >= 2.4
			? 1800 / window.innerHeight
			: 2.4
		: 1;
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));

	const getModuleImageHeights = () => {
		if (isMD) {
			return 100;
		} else if (isMDPlus) {
			return 125;
		} else if (isLG) {
			return 150;
		} else if (isXL) {
			return 150;
		} else {
			return 150;
		}
	};

	const getControllerImageHeights = () => {
		if (isMD) {
			return 175;
		} else if (isMDPlus) {
			return 200;
		} else if (isLG) {
			return 225;
		} else if (isXL) {
			return 225;
		} else {
			return 225;
		}
	};
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div className={isMD ? styles.slopeBeginMobileSix : styles.slopeBegin} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${isMD ? styles.slopeEndMobileSix : styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			<ParallaxLayer
				className={`noselect`}
				onClick={onClick}
				offset={offset}
				speed={0.3}
				style={{ zIndex: 100 }}
				factor={newFactor}>
				<Container
					maxWidth='xl'
					sx={{
						display: { xs: "none", md: "flex" },
						justifyContent: "center",
						alignItems: "center",
						zIndex: 1000000,
					}}>
					<Grid container spacing={2}>
						<Grid
							item
							xs={12}
							md={4}
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
									<Typography
										className={styles.MACSText}
										fontFamily='Gilroy-Heavy'
										fontSize={{ xs: "3rem", md: "2.5rem", mdPlus: "3rem", lg: "4rem" }}
										lineHeight={1.1}
										mb={{ xs: "10px", lg: "20px" }}>
										Modular
									</Typography>
									<Typography
										className={styles.MACSText}
										fontFamily='Gilroy-Heavy'
										fontSize={{ xs: "3rem", md: "2.5rem", mdPlus: "3rem", lg: "4rem" }}
										lineHeight={1.1}
										mb={{ xs: "10px", lg: "20px" }}>
										Accessible
									</Typography>
									<Typography
										className={styles.MACSText}
										fontFamily='Gilroy-Heavy'
										fontSize={{ xs: "3rem", md: "2.5rem", mdPlus: "3rem", lg: "4rem" }}
										lineHeight={1.1}
										mb={{ xs: "10px", lg: "20px" }}>
										Controller
									</Typography>
									<Typography
										className={styles.MACSText}
										fontFamily='Gilroy-Heavy'
										fontSize={{ xs: "3rem", md: "2.5rem", mdPlus: "3rem", lg: "4rem" }}
										lineHeight={1.1}
										mb={{ xs: "10px", lg: "20px" }}>
										System
									</Typography>
									<Typography
										color='white'
										fontFamily={"bitcount-mono-single-line-ci"}
										fontSize={{ xs: "4rem", md: "3.5rem", mdPlus: "4rem", lg: "5rem" }}
										lineHeight={1}
										mb={{ xs: 0, lg: 2 }}>
										MACS
									</Typography>
								</Box>
							</Box>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									mt: 2,
									p: { xs: 2, lg: 3 },
								}}>
								<Typography
									textAlign='justify'
									sx={{
										fontSize: {
											xs: "14px",
											md: "15px",
											mdPlus: "16px",
											lg: "18px",
											xl: "20px",
										},
									}}
									color={"white"}>
									With 5 distinct input modules, and a central hub users can physically build the
									controller that is perfect for them. Then with our software, users can further
									configure each module to emulate whatever action they want.
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							md={8}
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
								<Grid item xs={12} md={12} lg={8}>
									<Box
										className={boxStyles.darkGreyBox}
										onClick={onClick}
										sx={{
											p: 2,
											my: 1,
											width: "93%",
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
													fontSize={{
														xs: "2rem",
														md: "2.25rem",
														mdPlus: "2.5rem",
														lg: "3rem",
													}}
													sx={{
														transform: "rotate(-90deg)",
														textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
													}}>
													Modules
												</Typography>
											</Grid>
											<Grid item xs={11}>
												<Grid container spacing={2}>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																position: "relative",
																flexGrow: 1,
																height: getModuleImageHeights(),
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/central-hub.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAwIEAQAG/8QAGRABAQEBAQEAAAAAAAAAAAAAAAECAxES/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A+pTV+Jri2Oj0XQtFD0mq0ilOOuPEqjqYoJ1NU5Uh6HouhaQDoOj6DogVcVXCH1HjlhPE2ObQdQWjagdkC0Or0O1pOeuyo9dlRXFREq4kpyuvAootGotIA2LR9B00BVxVcLL6vxOoRNjm0DcBto2z7IBsOqXYNVoOevSotdlR0spIHNLkFcdcikU0eiVGkgaDo+g6LIq4quEPq3K65WSHbN0adsvRKs3Ss+6fpWbdaZTa9Ki16VDWjNLms+KfNDcNFIyoF6j0Sj0kLQdG2HRAq47XGg+rc06nVYIejL0rT0rJ1qVZutZd1o61k6VqMVFruaO13NIjTinxWbFPihuNGVizVystO1GlWo1UhbDou6DVaCK49an0h9bajVetHqubQ+lZetP0rL1pFZutZOlaOtZelbjNHarNHarNIacU+KzYrRis1uHzSSizVygu2o1XbUaqI90G6TdDullFrnqbXPSH1d0jVcuh605to6Vm6U29MvSkA61l3T9KzbrUGItVlCslYfDRis2D4oLRmq9Hmq9ZKrR6rto9VIe6DdJug3SE6qfU60n6IfV2o1XrR6rDaN1m6U26z9KQDpWbdP0rPpqLEqyheScNg+aDBsso0qvUR30J20Wqu0W6kLdZ9026zbpCNVPrmqn0p9bUaVUaYIts3Ro2z7KZ9s+j7BpqJK8oXlE2DZDk2QiR1yOhJo9kotoA2z9GjbN0KBpz13SSn//Z'
																alt='final central hub module'
															/>
														</Card>
														<ImageCaption caption={"Central Hub"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																position: "relative",
																flexGrow: 1,
																height: getModuleImageHeights(),
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/button-module.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAgMEAQAG/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECAxESITH/xAAXAQEBAQEAAAAAAAAAAAAAAAACAQAD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A9k5zgrB0R0P0n6CcT7I0dukapQaweS/RZqofg7JGKfmpVNjQwQqGl7MpW0UjafajafasVoLdMZnpHOdSog0n6U/dTdKhJ+lI1TelT6pQa70eaT9DzVFTin5qXFPxRqnyi9LlF6JNtK2O0rdZSt1PunbqfdZi9UPrtVnrM9OytBqqMBupelP6VL1rQqn6VPvRvXSXejgVv0POk/0PGlHVmNKMVHjSjFGrFOaP0nNH6JNtL3RWlaqKXup903dT7qsDVD6zVZ6zPVeh1XWg1WWQvpUnWqOlR9asap+ukm9H9dI+mjjnXfRmNJfr9MxonPV3PSnGkPPSrFCnFWaP0nNHKJDtK1RWl6qEVup903dI3WYvVZ6HVZ6rPW2l7rbS9VDK6VH1qnpUnWlBqTrUfSqe1RdaccugfX6ZjSe39N50nJbzqrnUXOq+dCukVZo5Sc0yUTgrS9VtpeqhF7qfdN3U+6zF6rPQ6ofWZ6+0vVFaXqoZPSpOtU9Kk6lEqPtUXVZ1R9Djl0Tf6ZzL8/TME5Yr5qudSc1WArpFGaOUrJnom20vVFaXqopW6m3Tt1PusxWqH12qH1WewtL1RWg1RdCeiTqq2l6LBqPqk6RZ0S7hwKR5+mYjPB4i6GH81OE+IowNKQ7IwZEJOtK3TKVtlJ3U26f0T7ZCdUPrdAVnsaXodBoXQnaboo2n6KlS9E24p6EaKBSvB5jPB5jCbiH4JwdlCNggxqKylbNpW2Yjaboo2m6MxGgi0FkewoNDoNC6E7T9FG0/RUqbafSjoRohoB5APKidg7JODsopkayNQg0rZtK2jEdE3RT0TdFRPoItBZH/2Q=='
																alt='final button module'
															/>
														</Card>
														<ImageCaption caption={"Button Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																position: "relative",
																flexGrow: 1,
																height: getModuleImageHeights(),
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/switch-module.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAABAMCAQUGAP/EAB4QAQADAAIDAQEAAAAAAAAAAAABAgMREiExQQQy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABcRAQEBAQAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/APs3HXBU/SldSUrudaiN0pUvKNpRdaqny3WUlqrVQrK1ZQUh+ch1JmyF1rI3SH0GuToNdFGzLtmeSn0zjrjVYclHSVbD6Sw1EryhaW72QtYlvs3Ww/ZutjgKpK1ZFpZeshLxLvKcS1yk5aUry3aUryEhpI2kr6SNpJSdpZ5ctLnKL6lx+fparCd5G0lfSRNbMto6WGtZvWw17tYFO7dbCd1KXOA6liKWBzsTSwwFVlrlGtm+QnbSjeW7SjeUUtJF0lfSRdJBTtLPLlpZ5RfXuWl1i0lmI6SHrJOshbSY0NrYPS621gtbtyBvv5UpcLv5Vzu1jFelnYrOzz8rF52ZsBlZb5QrKkSyWplK8tTKV5BR0kXSV9JF0kGJWlnszaWeyafbTKd5amU7yhENZB2n2XrIO8tQg72eftc39E+3mb2dOQ538r5XA7eSsbN2MV6eNjM5efjJ2UudZLpKkSjSVIlktTKN5UmUbyyUNJF0kjSRNZTURvLHL9eWOQ0+6mUry3MpXlIfWQd59mayDt9aief+ifbzN/r0t/rzt4dOUJH9F4DRXyXjDpaxYfibkHjBubjRhNFISopDKfpSupKVwR9JD1krQTUNQa8sctXT5RfdzKV5bmU7gj6hbfTNA9monn7/AEDWHo7QFpVuVCxXyTlViK+V8qm0WFZQZnA2UFZwxazi9W4Zq2ysZlG61kbpDaB6mah6oi3Ybv7YRfcSnduU7AoaB6maCalA6wJeDdRbw0Uor5XzhOIXzhal84KpCGcE0ZZVq05VoJmyF17IXSG1D1M0D1SFv7YbuwU+3lOykp2ZI+gupWgupQmg1idBrNFmFs0oWoETmTQbMmgCtWmatBM2RutZG6AugepmgepQ12G7sJP/2Q=='
																alt='final switch module'
															/>
														</Card>
														<ImageCaption caption={"Switch Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																position: "relative",
																flexGrow: 1,
																height: getModuleImageHeights(),
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/joystick-module.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAwQCAQAGBf/EABwQAQEBAQEBAQEBAAAAAAAAAAACAQMRIRIxQf/EABgBAQEBAQEAAAAAAAAAAAAAAAEAAgME/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERAiH/2gAMAwEAAhEDEQA/APs3nnhUzv8AAdD7/E/TXOtRN0T0fpqetCZakfrc6Qog8J408aSaWmJ1r1F7RUTRUEG09nsFhBpx2mQn0jjrjtWGa/ifpp71L11zaT9NTXpumpbpB31qdD+mpo4FcaojUkUeNLSmdb9DOt+ou7o61rdHWhCvU96a9T3oQ61z17dZ9ZT6Z7Xma10rI+mpOuqOmpOtAp+tJbovWknSjjFrv6bmk37bijg1dFKIpDzpTFHGormm80E0TNDTe6Ote3WK0Ed6C9JegvQmK1z1zdZ9CfVbo613dHekC6aj60o6aj66RU3WkfSj9qRdaakc7Xtv63FpNv6TnbeMSv0edKudPz+VK+dDHSLJomaniiZobJujrXt1itBYvQXpL0F6Ezus+ubrPoT6rdHeu7o71EPTUfbVPTUfbSzUfbUHalnfX5/ff63HHsO9PpuVI936fjrrjhzbr9HlSznqDlqznrFemK40uaCNJmsukb3WK13dYrQR3oL0t6C9CY3WfXK1z0J9VuirW90d6CDpqPtqvoj6oVD2fn936HZB2xuVy6iPf6fiPZ+m5Y6a4c8+rOSzmk5Yr5s69EiiCYOSYG3d1ita1igRXoL0tgvQh1rPr1OepPqtHTesUw0Doj6q+iXqhUPZF1xd1xJ0w6xYm/P0vOXPz9LGNazh+WKueJ+eKow63IWSYxLYL2jomjpEFgs9p7QFTPrtMgPrNHRNHTDoDol6qrTdEEfXEt4r6JrxAPhIxzwkYpRhueKIwMYohokltmWymdHRdFSQLT2otPaAaZaplB9Zo6Jo6YdAWm6KbTdEkvRNanontkDLA/8ASQYDwogEHhpFlpmWyWdFRdFaQLT2otPaZBTLVMoP/9k='
																alt='final joystick module'
															/>
														</Card>
														<ImageCaption caption={"Joystick Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																position: "relative",
																flexGrow: 1,
																height: getModuleImageHeights(),
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/slider-module.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAgMEAQAG/8QAGxABAQEBAQEBAQAAAAAAAAAAAAIBAxEhEjH/xAAXAQEBAQEAAAAAAAAAAAAAAAABAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD2bGsFTN/hPQ7f4T0YaieyKOvSK0lgpB6KdQPg2SJ06dCNxoc1voTKKsyirCItPai01pFUx1MRemY1jrWGUn6afWpumsNQi9IrTOmp60lvop0n9DmiFM6dOpYo+dAPzRel5rfQm7pV6PdKrQib1PenXpF6iVWs9dWh9RepY52t1gu9TdNP6al66Gk/TU10b11NdNJ36HNJ/wBCmljKyKPikcUoiglM6L0mdH6ELdKrRbpdaCVep7069T3qJdaz1laz0p6xla30FahCumpOuqOmpOumFL11L0o/rqPpTUFZtCmiNr6KKaxlbzpRFIudKY1mhXOj9InTM1ki3S61u6XWol3qe9NvSL1EutZ6ytD6i9hugrRbpdaET01H11T01J10xJO2oumqu2ouutwUvd+ijSt36ONaYqvnqrnqPnqrmzUpnTM0mdMzWSLdLrRbpdaCVep7069T3qJdaz1laz0l7DdLrRbpdaySempOuqumpOpSPsi6LOqTo3ARv9FDNz6OMLFh/NVzTc8UwKj5MwuR4ynaXRmlUCVae9PtPaJVBbQUXr90FaLdLpkk9EvRTaboUk6pbxX0TXjSI8HGO8HOHRhkYojCow+MAwyRskQQdLo3SqSItPai09hE0xtBRet0FC0FAlWm6KLT9EU3RPWKLJrCivBzjvBzhRkYdOFRh8pkeNdjQg6VRul2kntPam01hE0EVBCes0FD0FJom0/RRafoUnsmjrJooI5AOUjoNkqTpQHgmY1ANFUbRVBEWmtTaewiKCKghP/Z'
																alt='final slider module'
															/>
														</Card>
														<ImageCaption caption={"Slider Module"} light={true} />
													</Grid>
													<Grid item xs={6} md={4} sx={{ position: "relative" }}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																position: "relative",
																flexGrow: 1,
																height: getModuleImageHeights(),
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/dial-module.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAgMEAQAG/8QAGxABAQEBAQEBAQAAAAAAAAAAAAIBAxEhEjH/xAAXAQEBAQEAAAAAAAAAAAAAAAABAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD2bGsFTN/hPQ7f4T0YaieyKOvSK0lgpB6KdQPg2SJ06dCNxoc1voTKKsyirCItPai01pFUx1MRemY1jrWGUn6afWpumsNQi9IrTOmp60lvop0n9DmiFM6dOpYo+dAPzRel5rfQm7pV6PdKrQib1PenXpF6iVWs9dWh9RepY52t1gu9TdNP6al66Gk/TU10b11NdNJ36HNJ/wBCmljKyKPikcUoiglM6L0mdH6ELdKrRbpdaCVep7069T3qJdaz1laz0p6xla30FahCumpOuqOmpOumFL11L0o/rqPpTUFZtCmiNr6KKaxlbzpRFIudKY1mhXOj9InTM1ki3S61u6XWol3qe9NvSL1EutZ6ytD6i9hugrRbpdaET01H11T01J10xJO2oumqu2ouutwUvd+ijSt36ONaYqvnqrnqPnqrmzUpnTM0mdMzWSLdLrRbpdaCVep7069T3qJdaz1laz0l7DdLrRbpdaySempOuqumpOpSPsi6LOqTo3ARv9FDNz6OMLFh/NVzTc8UwKj5MwuR4ynaXRmlUCVae9PtPaJVBbQUXr90FaLdLpkk9EvRTaboUk6pbxX0TXjSI8HGO8HOHRhkYojCow+MAwyRskQQdLo3SqSItPai09hE0xtBRet0FC0FAlWm6KLT9EU3RPWKLJrCivBzjvBzhRkYdOFRh8pkeNdjQg6VRul2kntPam01hE0EVBCes0FD0FJom0/RRafoUnsmjrJooI5AOUjoNkqTpQHgmY1ANFUbRVBEWmtTaewiKCKghP/Z'
																alt='final dial module'
															/>
														</Card>
														<ImageCaption caption={"Dial Module"} light={true} />
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Box>
								</Grid>
								<Grid
									item
									xs={12}
									md={12}
									lg={4}
									sx={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Box
										className={boxStyles.lightGreyBox}
										onClick={onClick}
										sx={{
											p: 2,
											my: 1,
											width: "90%",
										}}>
										<Grid
											container
											spacing={2}
											sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
											<Grid
												item
												xs={1}
												lg={2}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													alignSelf: "stretch",
												}}>
												<Typography
													color='white'
													fontFamily={"Gilroy-Heavy"}
													fontSize={{
														xs: "2rem",
														md: "2.25rem",
														mdPlus: "2.5rem",
														lg: "3rem",
													}}
													sx={{
														transform: "rotate(-90deg)",
														textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
													}}>
													Controller
												</Typography>
											</Grid>
											<Grid item xs={11} lg={10}>
												<Grid container spacing={2}>
													<Grid item xs={6} lg={12}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																alignSelf: "stretch",
																position: "relative",
																flexGrow: 1,
																height: getControllerImageHeights(),
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/macs-config-3.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQAGB//EABwQAQEBAQEBAQEBAAAAAAAAAAABAgMREjFBIf/EABgBAQEBAQEAAAAAAAAAAAAAAAECAAME/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A9kxrHGkOidnaJ6JVE+yNHbI1TGDWwPrZVMZkzJWaZmsTI0MaCHROzdFbDJ9p9qNptsxOmN0EB7FjWVVQDRHSnaqfpQondT6pvSkbqpAz1spdrpVYD803NT5puaMUdK70ErfQXapO6ZqlbrEnpU26f0qbdAK1Wes1WehntGVoapEL3U3Sn7qbpWkUn6VPum9Km3pcia66dNFXTZpWJ1TnRualzo7OhipVErfSpRepxTdUndHaVuhielT9Kd0qbpQxeqH1mqH1me5Bqt9BqsIVupulP6VL1qo1T9al6aO61J006SIrLp00VdOzpeJ1XjR2dJMaPxU2KimVvpWaL1FUK0rdFaVugldKm6U7pUvSgl6ofQ6ofoM99aXqitL1WYrpUnWqelSdaqJqXrUnSqetR9K6RFK1pudF6rs10QqxT8VJiqMVNXFOaL0rNH651bbSt0VpW6CV0qXpT+lS9KCTrQfoO9B+gcfQrQaorS9UAnpUvWqeiTqYEnVH1V9UfR0lRYRr9dl2nZdNTh2KoxU+D8ItXIfmi9BkSLVY60rdHaVugkdKl61R0qTrQqRPvQPpnTRX22rnL6VaDQqDSXMnol6qdpehlCTqk6K+qXoqUYn1GQVjpFaMMwfgnB2U2qw2CDGp04ylbM0VttVifpUfWquiPtRqpEXbX+k+j6X3QA7yY+nUGh0Gg8pG03RTtN0IS9EvRV0TbOsRYyQVdG04PJ2Ssm5GnDI1kaNIdE7O0TttKbqh71b1Q9xavmIdftCK/rFOz6ZQaHQaDxk7TdFO03RmS9E21XRLtmKrI2sgJmTclZNyxMjWRrEGidnaJ2xTdUHf+ruqHv8A1NXyirG1jo6v/9k='
																alt='macs configuration 1'
															/>
														</Card>
													</Grid>
													<Grid item xs={6} lg={12}>
														<Card
															elevation={4}
															sx={{
																display: "flex",
																alignSelf: "stretch",
																position: "relative",
																flexGrow: 1,
																height: getControllerImageHeights(),
																width: "100%",
															}}>
															<BlurHashedImage
																src='https://ik.imagekit.io/5ywj5edvn/macs-config-4.jpg?tr=w-1000'
																hash='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQAHBv/EABwQAQEBAQEBAQEBAAAAAAAAAAABAgMRMRIhIv/EABgBAQEBAQEAAAAAAAAAAAAAAAIBAwAE/8QAGREBAQEBAQEAAAAAAAAAAAAAAAERAhIx/9oADAMBAAIRAxEAPwD7F1c6sFBonZ2idrCI2To7ZGjgl0IqAka5jRpRoa1lEgaJ2borblT7T7UbT7KCRpjdBNHoDq5lYIDROzdE7pRSdkapu6RunBoLQ+u1Q+liC9aD1vqUoJld6y0CDonZuidopG0+z9p9nEJ1Q+t1Qkj0INaGsHQGqRunbqfdOOpO6Rum7pG60gUGqH1mqH08EfrZS5RSjYUH6y1nrrWdOB1St0zVJ3XKTupulP6VN0pRxWqH12qH03PRA1odV53F7qfdO3SN04lI3U+6d0qbdaxnQaofWaofTEyUUpUopQpQz11ofXWhTjNUndM1St0SJ6VL0qjpUvSnFJ1Q+u3Qem7HpHoNVtodV5nFbpG6dup+lODSOlTbp/Spt1rGdL1Qeu1Q+mI5RylSjlGlDJXWhlb6zrSM1Sd0zRW6KkdKl6VR0qXrShEbpf6d0pf6aw5HptBoVBp5WZW0/Sn7T9CiVP0qbdP6Jt1rKFhWqH12qH0tTByjlLg4NpSGRoY5naUjNE7N0TtNIjpUnWquiPrVlKRJ1v8AShdL/oDX01keo0GhUGnmYFbT9D9p+hRE3RNtR0TdDlTCdBboK67BwcLg4Nq4ZHMjQtLA6J2boraauJuiPtfqvoi73670ciPX9tC2sJq9RoNCoNA8pW03RRtP0Jybol2p6JtrrsJ0AWgutLBQyFweQtXDI5kaOuwOidm6J27VTdUXb5VvVD3+UZdp8pKxtY3OvUKDQ6DQPKTtP0UbT9FVL0TbU9E21cRoA9AGlBQzJcMyNUcayNFwNE7O0TtypeqLv8q3qi7/ACpz9OJK51c9BV//2Q=='
																alt='macs configuration 2'
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
								className={boxStyles.whiteBox}
								onClick={onClick}
								sx={{
									p: 2,
									my: 1,
									display: "flex",
									width: "90%",
								}}>
								<Grid container spacing={2}>
									<Grid
										item
										xs={0.75}
										lg={1}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											alignSelf: "stretch",
										}}>
										<Typography
											color='backgroundBlack.main'
											fontFamily={"Gilroy-Heavy"}
											fontSize={{
												xs: "2rem",
												md: "2.25rem",
												mdPlus: "2.5rem",
												lg: "3rem",
											}}
											sx={{
												transform: "rotate(-90deg)",
												textShadow: "2px 3px 5px rgba(0,0,0,0.37);",
											}}>
											App
										</Typography>
									</Grid>
									<Grid item xs={11.25} lg={11}>
										<Grid container spacing={{ xs: 0.5, md: 0.5, lg: 2 }}>
											<Grid item xs={12} md={4} sx={{ position: "relative" }}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
														flexGrow: 1,
														height: getModuleImageHeights(),
														width: "100%",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/macs-application.png?tr=w-1000'
														hash='data:image/png;base64,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'
														alt='macs application'
													/>
												</Card>
												<ImageCaption caption={"User Interface"} light={false} />
											</Grid>
											<Grid item xs={12} md={4} sx={{ position: "relative" }}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
														flexGrow: 1,
														height: getModuleImageHeights(),
														width: "100%",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/joystick-config.png?tr=w-1000'
														hash='data:image/png;base64,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'
														alt='application joystick configuration'
													/>
												</Card>
												<ImageCaption caption={"Joystick Configuration"} light={false} />
											</Grid>
											<Grid item xs={12} md={4} sx={{ position: "relative" }}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
														flexGrow: 1,
														height: getModuleImageHeights(),
														width: "100%",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/button-config.png?tr=w-1000'
														hash='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAAAXNSR0IArs4c6QAACZNJREFUaEONWQ2PHMUR7Z49/0UbiG3AnI8QRAICQQKSRUQIAjkOSYiT/NedGVTvo6pmb0E5adSze3e779V79dE988nd3b6PMXDt+9jGGNs+xhr3+4713F5v+4b3h6459nHat3Ea+7jZ93ET69jHg1jn4OtY5xinMcZpzrHMMZY5x8S1jDHn2OMaC9ZtLmMbc6xzGSvWOdbB+20O/C5w7mOO+fjuLrDfI2DwQWAVAZLaQDSuILHE114Q6OAfjAC/j1MQmBMkAnwRmP8ngQBNMtcJBJ4RAIMhV4IvAkEqrl0kImZzDwV2KAAVHH3cj/EgwINEEGgKRPQmwfOKUCj6BnlQIFQweCoRkZ+Pn1uBgE/7AOgoAt1SJEDTBXgQgI0uCEwSsIUA/oqFxigSoecGCznaslJEvkV/lX1E4DngBHoQAIlSIuzjyHvlH4tAgg+AlQMAbxIJPuwjC0X0HH2RgP8dZUU/yAA8LvvfOTDG/M3t88qBi0S2EmUd2iwUQPSZdmPZCzxJtORF1GmjTGDlAXAbfHzagYBUEHDbBySQ8LLQW++RAEUoG9FOpQRyNsHzr+FagWcOCLhAk4i8D9C6EP0Cz09zJaooZ9RThV6BksAtUGcpbRXJOUHgorjHF8fXDfl/gAgiLALh9/B+Jq9ILCKB/7WFELoATxKwcFttm1jTQg3vfPPZbSlwIGLQVWL5VYr+HsCP4NMqrjogxRIafxuEIvJxj8+JF6l+J+BctO8LfOSkcxVJ/Ma7RQDQHGkpcfgGRw72MYGyCFVg47IiHXxYKKOfH2z79iIiAqiEvEf0dc8mJgu98c57LQeOn+pfOE788nkPvKNL67hcVtRJgrZz9Cv2lXsRvKyCngiUi/cIKCfno7eLwEVQWCEy4Rg9+rhIsL5PNqmWsOy4fK97P+1DqVk6bN0cZdgw3YvcXNM+0YuswKOnjYDCItgltyoGqogUYFQF/B4JEjQJ240KUolsPCYAUALeeg/HF08Hx6qI4D4UgS5pRJ5ljs2GAGoI8zxziL7mHNT6XnVcPp0/qmLkQNCerWAhDYu9eXqwdFnH36vsz4dPqIALAsBntSARgyc4Rz1WDmdYNWXaTiRBMuV9Rd/20ViSJDYOiwl+430ngIlZBDANJAG2xfoyR16TY0VdwAG6wGcepAJS7qLyRAd39KFAXpxyN4EGERO6IMb/YfLPh09uo4ckeFSZ5vkAFkl7AKuIO/Jcncyymi13WXm8++AGJCdbg49Jt4DHvRRJYo10EHj0lKNEdcfmd9jlPoGbqwSszPH/e9nkBKNmo/1EKgCAApyR92v+btf7+T9oZCDQkraVyQJftungj0RYXp0nrFjaebn6ZOXkNEsg2iBtAbCTaODj/fi9LHYg8Obb72cSWwUAkQW6TS4jf02JGpdtpVI3BIAKbUdnEgAooLCNQff3oELtCJEDb73724OFjuXyvvd/WQFb7ZgDfXSIydV7CW9JQQCgroFex7a295UfVg0BefzsA1qoddwefZfNXwPeVcou7RLaq9BVAvT2PQLrmip0dQ4KRBl9evthU8B1v2o4a33PgVY6ryRzjhqtB1gFzps8/SgbKTkPFlqPdlrLXoh+EPau8J27j4qAy6c6r0tj+Pqmkbhf/1sj84nD5ezvETrLqJJY0bf/ex7gXhbK35uA+sl89sEfjmW0TZs5FuSw1prYoQMzV5j8PjahMdGF0Wi4ezvOQGUfRPVK4u49B5zAWPWZzz/8JMdpj8r+UvhfjahGhMsRwkNdzUqePuP/c6byEHcYI1hRAo19jlp/jQgspr9LC44x3//9ZxcKtLHZQ5wnSxPyDKRo98m0klif05LY43OME/Ywq5D6wUGFSyKuVv57xn3+7pPPk0B2ZG0Xc/4PW2Hz3ndhfWS2dbxp9zjC1x6j+fnVjQ+ltHm7qo6VqZVka48+P/rsT81CsVGntzACoMAOgM8tZLtPv9tm2X3b3rfvgfteQCcJRcKjAiNMErEq8hgjWvS1CZoff/FVEkCEBNpdM8AXEe2FO6GmCseHnccnfQPfVMjNjGeivh9wdA0cuWFCvWqpFMd3fPrli0aAtKgCj00APldaAIrgYKtOJlKhRsLFgImso5huI6tgEiBAcBl93A8S0X1ZaIz5+Yuvub3xj8ZcHVeTjE/ikgyJFQmfUmidIofSWveZC966to0J+1IR2DYT4QFbkOBmxtOIgv3HP38jAk4uj7s6FvCOO/7TRLY6WgQRqLKPORsRn0ToNA7KyUrcOLXvyxHJBHi8w6j7vhP08c8Y86u/fFsKKAps8yIiD/ITRSLJbHlCDRKyB/PAuSDgTY3avjbhHVnHDxHXV26ziKQCsvmLv36XBrL/QCAlRCjgySCAqhH6QoUiwNzAAbn20b9EwocFAiAOMFoerxTgfZ/4OmJr70u1+fX3P6SWjrprrSuA2/y+sqRRCWSWbEUiPM3XiXVXwWqknfrhrrtPhF6nzgBqsLyn6EVAg8SY37x8ycrfEuhQBaKk5TS4j5hNSKIIxH0cy8ajpiSAfIhz0aaEnmUgF/B8LAf5dmjZgMenJZkiQbwkO7999eoqAWysMQ2qqWCoEpmV466JhJVCkSKwMQc6gaUdrxt8rH7UlP16AbigtjXwOH7vyvjU8Lsff9QBxbFscYw1iW2s8dqTYaggErRRqMFHEEGCSUwSVIAPOdDgQITPx7zySKROkEiARHDkvuter1kYdX74/T//4SFXu342kVXgDTzWJKHdEkmsyoXIg3gYGgSKBI7cAVxrAG8k4jErHjUdjoxlxACOyCu7rAASXhb64ad/UYFsJGzfICDQBr+uq0hwNYEgwYrE1STs/5PAn2yjhdGnAkEgnhX3A3sWZSoQaxFJK6l6zZevf9ITGpZI5uYGAgWc0T8HgXOR2KQAVSgSQeAEC8WqZ8RWYNHubbGNikDMt/vkzIuugshfIQBVWL3m3/7z75bELfoicIYK68B6rjXAx/sBPpQYiD6vUkAEmgInRH+M00LrLFJgBnCoEI9I/OyHD6+sBHLByW4Lvfrv67QQDlU1Ca6hgix0PjP6sYLMOY47SGBbz8oDEUAir6kAn9LvI+yDCzkwB4ksY4KIVIgdR1OA4GWng6U8iMwx//6/1xzJo7Zq5oaF1p1Rl3WKBIHTSmcQKQt1BYJEgN/GTSgA8EFC4BuBRdHHtihVoBKVAz0vNNvuIuDR/KBAgN8i8hsiTwV0iUBEv+dBWYg2AnhEvxMgiWVZoECsYR+qYP/7aZss1PMglWAO/AzWoFp7b9HTpgAAAABJRU5ErkJggg=='
														alt='application button configuration'
													/>
												</Card>
												<ImageCaption caption={"Button Configuration"} light={false} />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.2} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						left: "20%",
						bottom: { xs: "0%", md: "25%" },
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-21'
						height={"25vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={0.35} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotating}
					sx={{
						position: "absolute",
						left: { xs: "-5%", md: "2%" },
						bottom: "10%",
						transform: "rotate(154deg)",
					}}>
					<HexGrid
						id='module-grid-14'
						height={"20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={-0.01} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingSlow}
					sx={{ position: "absolute", right: "-5%", bottom: "65%", transform: "rotate(98deg)" }}>
					<HexGrid
						id='module-grid-23'
						height={useMediaQuery(theme.breakpoints.down("md")) ? "32vh" : "40vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						left: { xs: "0%", md: "27%" },
						bottom: { xs: "-80%", md: "6%" },
						transform: "rotate(72deg)",
					}}>
					<HexGrid
						id='module-grid-24'
						height={"15vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isLG ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{ position: "absolute", left: { xs: "0%", md: "3%" }, top: "0%", transform: "rotate(34deg)" }}>
					<HexGrid
						id='module-grid-25'
						height={"20vmin"}
						width={"20vmin"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isLG ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={-0.2} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingFast}
					sx={{
						position: "absolute",
						right: { xs: "0%", md: "5%" },
						bottom: { xs: "-10%", md: "25%" },
						transform: "rotate(216deg)",
					}}>
					<HexGrid
						id='module-grid-26'
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
};

export default PageSix;
