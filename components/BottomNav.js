import React from "react";
import { Box, Button, Tooltip } from "@mui/material";
import {
	BoltOutlined,
	Terminal,
	VideogameAssetOutlined,
	EmojiEventsOutlined,
	Diversity3Outlined,
} from "@mui/icons-material";

const BottomNav = ({ router }) => {
	return (
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
	);
};
export default BottomNav;
