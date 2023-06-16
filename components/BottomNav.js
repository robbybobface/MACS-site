import React from "react";
import { Box, Button, Tooltip } from "@mui/material";
import {
	BoltOutlined,
	Terminal,
	VideogameAssetOutlined,
	EmojiEventsOutlined,
	Diversity3Outlined,
} from "@mui/icons-material";

const BottomNav = ({ router, home }) => {
	return (
		<Box
			sx={{
				zIndex: 9999,
				position: "fixed",
				display: "flex",
				justifyContent: { xs: "center", smPlus: "flex-end" },
				alignItems: "center",
				width: "100vw",
				bottom: 30,
				right: { xs: undefined, smPlus: 40, md: 50, lg: 100 },
			}}>
			<Box
				sx={{
					display: "flex",
					position: "relative",
					justifyContent: "space-between",
					width: { xs: 320, md: 400 },
					maxWidth: { xs: 320, md: 400 },
					flexDirection: "column",
				}}>
				<Box
					sx={{
						position: "relative",
						display: "flex",
						flexDirection: "row",
						justifyContent: { xs: "center", smPlus: "flex-end" },
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
							color='drawerBackground'
							onClick={() => console.log("rotate left")}
							sx={{ marginRight: { xs: 1.9, md: 4 }, minHeight: 40, maxWidth: 64 }}>
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
							color='drawerBackground'
							sx={{ minHeight: 40, maxWidth: 64 }}
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
						color={home ? "startButtonGreen" : "stopButtonRed"}
						sx={{ minWidth: "113px" }}
						style={{
							textTransform: "none",
							color: "white",
							fontSize: "1rem",
						}}
						onClick={() => {
							if (home) {
								router.push("/project-overview");
							} else {
								router.push("/");
							}
						}}>
						{home ? "Learn More" : "Go Home"}
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
							onClick={() => {
								router.push("/modules");
							}}
							sx={{ padding: 0, minHeight: 40, maxWidth: 64 }}>
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
							onClick={() => router.push("/controller")}
							size='small'
							sx={{ padding: 0, maxWidth: 64 }}>
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
								console.log("reset");
							}}
							size='small'
							sx={{ maxWidth: 64 }}>
							<Terminal color='primary' />
						</Button>
					</Tooltip>
				</Box>
			</Box>
		</Box>
	);
};
export default BottomNav;
