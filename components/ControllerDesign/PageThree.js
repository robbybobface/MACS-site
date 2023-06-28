import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardContent, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import BlurHashedImage from "../Partials/BlurHashedImage";
import ImageCaption from "../ImageCaption";
import ControllerFlowChart from "../../assets/controller_flowchart";

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
	const isLGPlus = useMediaQuery(theme.breakpoints.down("lgPlus"));
	const isLGPlusPlus = useMediaQuery(theme.breakpoints.down("lgPlusPlus"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));
	const getFlowChartWidth = () => {
		if (isMD) {
			return "35vmax";
		} else if (isMDPlus) {
			return "36vmax";
		} else if (isLG) {
			return "37vmax";
		} else if (isXL) {
			return "38vmax";
		} else {
			return "32vmax";
		}
	};

	const getControllerImageHeight = () => {
		if (isMD) {
			return 120;
		} else if (isMDPlus) {
			return 120;
		} else if (isLG) {
			return 120;
		} else if (isLGPlus) {
			return 110;
		} else if (isLGPlusPlus) {
			return 120;
		} else if (isXL) {
			return 130;
		} else {
			return 150;
		}
	};
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div
					// className={
					// 	useMediaQuery(theme.breakpoints.down("md")) ? styles.slopeBeginMobileFour : styles.slopeBegin
					// }
					className={styles.slopeBegin}
				/>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
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
					<Grid
						container
						spacing={2}
						sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Grid
							item
							xs={12}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<GradientText
								text='Processing Inputs'
								gradient='background: rgb(160,232,134);
background: linear-gradient(125deg, rgba(160,232,134,1) 0%, rgba(6,168,44,1) 100%);'
								onClick={onClick}
								fontSize={{ xs: "2.5rem", md: "4rem", mdPlus: "4.75rem", lg: "5.25rem", xl: "6rem" }}
								textAlign={"center"}
								lineHeight={1.1}
								pb={{ xs: 0, md: 1, lg: 1.5, xl: 2 }}
							/>
						</Grid>
						<Grid item xs={2.5} />
						<Grid
							item
							xs={7}
							mt={1}
							sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
							<Box
								className={boxStyles.whiteBox}
								sx={{
									py: { xs: 2, md: 2, lg: 2 },
									px: { xs: 2, md: 3, lg: 4 },
									mt: { xs: 0, md: -1, lg: -2, xl: -3 },
								}}>
								<Typography
									color={"black"}
									sx={{
										fontSize: {
											xs: "14px",
											md: "15px",
											mdPlus: "16px",
											lg: "18px",
											xl: "20px",
										},
									}}
									textAlign='justify'>
									For information about the input states to be reflected in the application, these
									states must first be read on the controller itself. To do this, the I2C protocol was
									used.
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={2.5} />
						<Grid item xs={3.5}>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									px: { xs: 2, md: 3, lg: 4 },
									py: { xs: 2, md: 2, lg: 2.5 },
								}}>
								<Typography
									color={"white"}
									sx={{
										fontSize: {
											xs: "14px",
											md: "15px",
											mdPlus: "16px",
											lg: "18px",
											xl: "20px",
										},
									}}
									textAlign='justify'>
									When modules connect and register themselves on the central hub, they add themselves
									to a list that the central hub uses to poll input states. The central hub’s main
									task is to loop through this list, query each registered module, and push that input
									state through USB to the application. The central hub is aware of each module’s type
									and will request the according number of bytes. For example, 3 bytes will be
									requested for a joystick module, while only 1 byte will be requested for a button
									module.
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							md={5}
							sx={{
								display: "flex",
								justifyContent: "space-evenly",
								alignItems: "center",
								flexDirection: "column",
							}}>
							<Grid
								container
								sx={{
									display: "flex",
									justifyContent: "space-evenly",
									alignItems: "center",
									flexDirection: "column",
								}}>
								<Grid
									item
									xs={12}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Box sx={{ position: "relative", display: "flex" }}>
										<Box
											className={boxStyles.whiteBox}
											sx={{
												overflow: "clip",
												p: 2,
											}}>
											<ControllerFlowChart width={getFlowChartWidth()} />
										</Box>
										<ImageCaption caption={"Controller Breakdown"} light={false} />
									</Box>
								</Grid>
								<Grid
									item
									mt={2}
									md={10}
									mdPlus={9}
									lg={12}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Box
										className={boxStyles.whiteBox}
										sx={{
											py: { xs: 2, md: 2, lg: 2 },
											px: { xs: 2, md: 2, lg: 2.5 },
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}>
										<Grid
											container
											spacing={2}
											sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
											<Grid
												item
												xs={6}
												lg={3}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
														height: getControllerImageHeight(),
														minWidth: getControllerImageHeight(),
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/macs-config-1.jpg?tr=w-1000'
														hash='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAAAXNSR0IArs4c6QAAB9JJREFUaEPFWouSFEUQ7IH//xMVUUFeB4govhD8Hm6mjarMrEfvLESghkacM8txe5WVj6qeZfvrxRdz8L/pd3Mc0/4/xpy4xxfvjzl2vt4P/vkxxm7f12v7/mF/f/p72PvietgNv3g/jrHZn9uV9349/bKq7HsqeY7t/wBgYLxo79jnAgCICwDq/L/LwBzzABvGrV+nFf6fAyjSKRKRhEwykk6TkMsHP+vSYfEofBqEcwAG6qp8JB1dP8WAFdB8kBp3ACwShdMXKvwjAATC311Suqb/BZD0Dw8sAGDgNK+9vg7gCpgGgGFQug8jo/up/5RRdP8KE5cA3MRfeuZ0AEygKwyYNJRAkURzjJ3JE2nkxSuBlEgdgFiw4mXolNFeJDV5j+6Lhe29AYju48a7r/hjrCoWpe2M0C4fgODPR5Titet/jVJPoZWFWjhSCqAAIgGMsb1/bgws8mHnKxDMgSwuCm36T2aMBcwRdN4aECZmwc0DVTYfNXNloACI0eApIdqTiQaAnU0z98IhMcjHf25NofCA0uh8kN05SaQmH2Pk3cKAJxw9kR1UnOY09iJrtBqomMzJlNJKBv7YNG4ROhcZFQm1FHr3/CsuEBA/XuBaV4FkoBd6AaKsEbla9FkQSRTzQLo2vaPws+7LB42FPwlAGRrd58RMH9ADSppSaPcDAcbfw+tk4JqRyxBrHtgJRim0mFgAFKOKVP+FlFIYkXoONkru1wjVcPM0KkvduZHPUsgY2Ev61AmNCI0Yffv8nnTTBtmljGDGmipZKLocU7l5IRlISZZZoE2U1ztLAp1LSUk0xvb25l56AA5uJgYL0PAZE9l5JI+6Ht4oUqo70ZkP1knsLDCJEsgyyP64+ZrbP2cBtdQ1yyyPTD84E8hK6z6A1kEnUHUu2DqRWyl17d2nicnENQZ0Jth+dwDtRIOOOxU5/vOXHyGlmM6aC4zSlFKP3ToPLnciczq0rqKDgXmMO9vZNB4jAQQPufLWyQkAR0jJ5eRTWCzkvUupsIJh1odaZcBjUdqvLIR8FK2X+9D22839ZuI8cCiFkokKYB6UUet+DjcDcbbcVSPnUKv7Du7BgiJ0nQtKoTG2X5/dTwnRxB0EtAoj636REcGY7tH9DkSrBVgzJqR/zIR1mbuzDDNJCaAqCw7gm3ISwMBBFOXuXtcAHc6hfwJZWfDuQzLJRJkJsRvpkN9XaS/UWbhkQCA0jbdfAgD3aBXPq1Zg65SKRxxWFo7WeS+eEnIAGmgnkeqU0AN2H9IJQ5/IaCuD7I0AlGmg01Jn4QxAl1J0mxLC6yorAFOirVGaez+7v4LY7M8XCb15+m2TkOSDSZwUy3AwL8Acdl+kFPqP7qN4Syqxsq7Xet81hYwJ/5p7RGgdZhhwY2w/BwCeiIsHRC865aL2K+TTQexh5Oy6GAkWdE5YjIwzcj7YqgkEIJBRB8Cd6Ken3yUDlJEf2+oTtGH5j1+SPgATzgCZyILTvF58mDmNnIsd3tdPZ4t5e+ECscyC1wRgdED7fPRX5KMOiQnEKYq3K6RTjHzMcVv037wQp7XysKssdD6JSwJVEH2tMCBjbK+fPshHEnzeglzWxqgOiQGw4VIqHqggJBkHsVNSJyyIzXhKpxQy3TfppIRyFlBCPz550EysoSJKa/edARUfAFJGq4QqC7fLkNN2q5h2Eyt1uE7cXfSfA22ObeNW+ooAXEKUj296dU+nyQQA1/3EA5CRvlT07X6eRprs8FsBYKZdZGRgXF5tqZtje/XkYTFxGRAlGYIFdn/MHfIpMvIUqsW7dOAFAZG0tCPFA9+TFPL4HMe4GwmEOO3rxBjbDwLgKQAW4nl9dGZnUpgP9tC/QCCFSvd3mRjFwwu8ajONAxLiWU/lcCK7LB5yqus2PfDyycPpclLxelJQxrs9KUgvoPsw8Z7DLAAASMqn3NMHKwNY6LoHlD6NAQ23+JBjju3l4+9DQnFQZiZLl9Z1fCABIABAINH9rn9LH8knZERZ1d3obKVe5bOCMAPHJH5BAL14mkqfnlwAABCfxgUAPHCMW0YnCp/DTKxEsqu8EjsRnrvApIpQmljF392uTGMB8I9rFvloMjYG2H07YhkL0r+Kd/lUA7P48EKJ0zxinktIMXopo8LA88ePZnxo5l3IkZ5mLhLybpl8YOYEQAnt6QEDEjLye8Ypp7QWwohRTmHz3Fp8gGhJNMdmAMLAC4BcsCoA+SCjNFKIxYuFtfh1vegM8FxcpnAFoRTCMJueSK6aAMDi84Btb6inYwRwWPEdgGRkpjUgKBIyqvp3CRUWtFb75wZcFHUWrkPMOh8+sHhdB9mNMTCpfz6ys3UC+i8AKJ0OgCx4hGKQ3dr9iXRUfGUBZ+Q8cyhKc4BBSgBwZR+6eQQJxRDjJybxobODqDEKFjxKzQdMIQwy6v+i+0oipRGfWLTPDXgO1goxUfjafQApJhYApRAKr0Y+AUADfxoAJ/E+xwdN5DrMBMD/aUA+TulzACDaYucyYuDcPHocj7QygVYAkBPks4/xTwAwVutTvTjQaI1g9yWlCwDWZB7st2ePHkeMapjFE2LvCn2wAIiFziVk8wBDLPXfjewMlAF3FcCyxElGOQvqQjeHA8AzlmLkOFh8LgBLI6UO9P+BE1l7kh5+2UYaZ+IiIy9YPvApLBl1AH8DI50usBKrEnoAAAAASUVORK5CYII='
														alt='macs configuration 1'
													/>
												</Card>
											</Grid>
											<Grid
												item
												xs={6}
												lg={3}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
														height: getControllerImageHeight(),
														minWidth: getControllerImageHeight(),
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/macs-config-2.jpg?tr=w-1000'
														hash='data:image/png;base64,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'
														alt='macs configuration 2'
													/>
												</Card>
											</Grid>
											<Grid
												item
												xs={6}
												lg={3}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
														height: getControllerImageHeight(),
														minWidth: getControllerImageHeight(),
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/macs-config-3.jpg?tr=w-1000'
														hash='data:image/png;base64,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'
														alt='macs configuration 3'
													/>
												</Card>
											</Grid>
											<Grid
												item
												xs={6}
												lg={3}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
														height: getControllerImageHeight(),
														minWidth: getControllerImageHeight(),
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/macs-config-4.jpg?tr=w-1000'
														hash='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAAAXNSR0IArs4c6QAAB1lJREFUaEPtWVuSFEcMrPb9r4Axxg+M8Qm8LM9/WFi4DNPdDikzJVV1zazXwJ8JOmqIXWaUUmZKpVne/f1gb621vS1t31vb/FniXLelrVtr6760k536d5z2s9a2bff/s/u5t93ezM/Nz+bn8dn31f6z/94e54r3sH9vW9v8Z/m+eG/7u7flfwBene9RAWT97gpcPdjbvlhFQKFmwdyXQruxwB8r79dRaA0qGS0rgP69RaGrH41KBcDiVDXOG6fPa0A/210jrh37QNeQNGDcFv9nOlihkU4DlwHY++kx7S7vDACzjypk4HcDMBB4BADBQ8yWiQDgWRpFjGDxe0YZAJKYNxcxjADJ6Z/vB4AfBhcqgXcgVgR+AYDThwCOLuTEGStQrNRscqCQZfpU7ZPZ9wrQRmF/pcwzGzWlFeqgAmmnnnlVwt83K4EqgP/2d3l39ZB9gHatPkB3qRpwACv7goJ3kBSxCZhCxgepB1zqA6JQ3w8QtPoA3qsmRkEHAOOT07Y0smxaKea+mVEDDBxVGHh6UcQl+K6RoQJZiaMOoNu9Le+vHtpH+J8afCfg0oEB4PhY4G6l5ygk2nRdmTqoTjQFMqsAKfT++U+9jZZxIgLdl7auCLoCsNcWdGrgX1AogKQjdVY6AYBewMpaZk0BTPviAIqNwg5lpQjwdCeAqoEjhaSFRTY6gEgA6UwSccxE1FSIeA4gXQhZxZhgWjidqYAErNO7ZWejFDKDXs4Mdu5C0Q/qcFe6cTckcgR9//zRxIWyOUnIBwDrHnSygDUPHafR0onb1qIKQ1NDlcapVP+mBmoXttfWB26uH4lOxYVAI2Sf3O8qsLsmoAfQx88YJ8hRq4RnPkE4gIkOavAHIKOFevAU8c31z6mBEDAstXMbBnyybA9gAoBstGtkDL50YafRfcQ8NDLv8BTu0gFgL4AdzgBgcEs6CQx4P1bgOMgh8BSzKgP+a7QIOnlHloXqtbIP819urh8fNUBOHytQAewEwmnUqcRGdrECdvcrQ93oSN1sRA2oqzsly23PAbx4zHrUTpzeHt7vFBL3yxk6IIBLowRpBB0g+6qGa6UEf9RBP6LDRfe2fHjxi17HLA8qiEJ0m3MA1mMFehsVbVILVcjVVkWdCL6bVtOJYsq1ChgAYNEogeDdGpld8R4VAKCTBe5itt9D9u2c2yizraxL0BNbrXYKTShwuFleZuhCH17+WkYJCVEiziBNuAGgvBYAA4N5aDJOe8A76GJl787ZpiJ7Am5rNfu8JGF6a4sD0CgR02jJPrMM5zHh8pGdOoWyCuPNKXqAB17oFNm/YKmlsWlFg6bFlY1R6OPL31ID1nbCQgmCATplSB2B8MBnAEYXUgXY1OBCxY0KmFEHvbWmhcYwZwB6DZTO6tMneT8DoOB5uo0Od9daAQUdlehcqadSr4UJheRCH1/9XiiUzUjdVbRx8bqAk0ae/UkFdCdA8FlyNDFm/r5aKDe8pJFRqAOAW47me3EbjlP4TyACYKA2AslpNF0DmaeQDUR1o3toIZcEvBNYEm5fPYkbGTIHN6n8ngIQqG1zcLLRoFAZqTvnqWKOKoA+2aG1kiluNKxoopHdvn7S38g4DngPKBw/rVs6kFcDgUPcBLDy5nQYJVgBBsw9oAeczjSfUutyWK8RMGeh29d/UAO5Vav8D5p0AAAGAABEIA4ViA8T/wVmpof5BrsuyCJ4amtJANprcsdDb6+BRg8gmDVOAeAi6qyNSgvQAR7OQ6GLuRsFCFpwjNOfXj8FFi2MyH9x+giAVDqRQm6zqYM6kaYDqQMXKin4ooM65I1rSKePgg9na2359OZpuZFhDEgXSp6nBgYAFjx7he1xai8YbVRZx9cprIKLt9wTprc1/LxblGGwBoA6SiiDKWCJt5wnaSBP14C5UVzqZaONQk3K8Pug6AmiUu9Ew9olbnTc+GkW+vTmz4mIi42GeM8BoIjdSlmBstzS3BLZZ08I/pdqnAOg62e/6aYLJYD8ckL8hwOdqwDpZVqQDjRKTESMDowG1AcvOqWldvw/UGq4Uh4B6C6QmQX/+Zxgnf5QyC7imEj7Jax00PNfIEYtlHF7WILlkFdHk70tn988o6bZB3S39ZkHgSFQBP1FAFwHAplVONcH+uwDwA+kjzq1OvHxzpzbbTiO6YP3gc9vn01cKDurD28dgHQhAOhB5IVG387El7iFPgKQ/UD8P+yNxqVw9AHeyBwA52lNkXlFLG7DjH/heWIlAKB24wmF3OsTiNNpsQqklYa1jouvTgPKvmjU2mIAcrWuPqDh7BKAaqUbp9HsxJaM6AMHAYs+vaBjZxR71H4+Svp0AP7CFzb+ebnbUR8QTYxGEu4XCjgHOgKwYa7shvq7QBXu3QDmK8iyqpSjfX5rADRK6EqZlLgTgKhkPYBjdXehiWHuWwCAS8WFxqjYA8jNgqzxvwGADjTyqhI5wM0qUDcWGvAm02lc6NlTvh4AtdBVoADIG3eZQC8DCBudzUWlokaofwCaaxv+h9iPMgAAAABJRU5ErkJggg=='
														alt='macs configuration 4'
													/>
												</Card>
											</Grid>
										</Grid>
									</Box>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={3.5}>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									px: { xs: 2, md: 3, lg: 4 },
									py: { xs: 2, md: 2, lg: 2.5 },
								}}>
								<Typography
									color={"white"}
									sx={{
										fontSize: {
											xs: "14px",
											md: "15px",
											mdPlus: "16px",
											lg: "18px",
											xl: "20px",
										},
									}}
									textAlign='justify'>
									When a modules coordinates are assigned, the central hub adds a module’s address to
									a list representing all known modules on the controller. The hub then perpetually
									iterates through that list, querying each module for its input and packaging that
									information to be sent over USB. If a module is disconnected from the controller,
									this iterating loop will not receive data from the module, marking it for deletion.
									At the end of the loop, the hub removes the module from all of its coordinate data
									structures and the list, and then sends a message describing the disconnection over
									USB.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.2} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotating}
					sx={{
						position: "absolute",
						right: "30%",
						bottom: { xs: "-10%", md: "5%" },
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-16'
						height={"30vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseSlowEaseInOut}
					sx={{
						position: "absolute",
						left: { xs: "-10%", md: "0%" },
						bottom: "35%",
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-17'
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
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{ position: "absolute", right: "0%", top: "0%", transform: "rotate(212deg)" }}>
					<HexGrid
						id='module-grid-18'
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
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseSlow}
					sx={{
						position: "absolute",
						left: "35%",
						top: { xs: "15%", md: "40%" },
						transform: "rotate(212deg)",
					}}>
					<HexGrid
						id='module-grid-19'
						height={"20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseNormal}
					sx={{
						position: "absolute",
						right: { xs: "-10%", md: "3%" },
						bottom: "15%",
						transform: "rotate(212deg)",
					}}>
					<HexGrid
						id='module-grid-20'
						height={useMediaQuery(theme.breakpoints.down("md")) ? "25vh" : "20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
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
};

export default PageThree;
