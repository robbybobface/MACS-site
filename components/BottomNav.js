import React from "react";
import { Box, Button, Tooltip } from "@mui/material";
import {
	BoltOutlined,
	Terminal,
	VideogameAssetOutlined,
	EmojiEventsOutlined,
	Diversity3Outlined,
} from "@mui/icons-material";
import { animated, useTrail, to } from "@react-spring/web";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TrailAlt = ({ open, home, children, delay }) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 40, tension: 3000, friction: 300 },
		opacity: !home ? 1 : open ? 1 : 0,
		y: !home ? 0 : open ? 0 : 20,
		from: { opacity: !home ? 1 : 0, y: !home ? 0 : 20 },
		delay: delay ?? 0,
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

const BottomNav = ({ router, home }) => {
	const [open, setOpen] = React.useState(false);

	const pathname = usePathname().split("/")[1];

	useEffect(() => {
		setOpen(true);
	}, []);

	return (
		<Box
			component='nav'
			role='navigation'
			aria-label='bottom navigation'
			sx={{
				zIndex: 9999,
				position: "fixed",
				display: "flex",
				justifyContent: { xs: "center", smPlus: "flex-end" },
				alignItems: "center",
				width: "100vw",
				bottom: 30,
				pointerEvents: "none",
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
					<TrailAlt home={home} open={open} delay={150}>
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
								role='navigation'
								aria-label='Go to team members page'
								variant='contained'
								color='drawerBackground'
								onClick={() => router.push("/team-members")}
								sx={{
									marginRight: { xs: 1.9, md: 4 },
									minHeight: 40,
									maxWidth: 64,
									pointerEvents: "visible",
								}}>
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
								role='navigation'
								aria-label='Go to capstone competition page'
								variant='contained'
								color='drawerBackground'
								sx={{ minHeight: 40, maxWidth: 64, pointerEvents: "visible" }}
								onClick={() => router.push("/capstone-competition")}>
								<EmojiEventsOutlined color='primary' />
							</Button>
						</Tooltip>
					</TrailAlt>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					<TrailAlt home={home} open={open} delay={150}>
						<Button
							role='navigation'
							aria-label={`Go ${pathname !== "project-overview" ? "to project overview" : "home"}`}
							variant='contained'
							color={pathname !== "project-overview" ? "startButtonGreen" : "stopButtonRed"}
							sx={{ minWidth: "113px", pointerEvents: "visible" }}
							style={{
								textTransform: "none",
								color: "white",
								fontSize: "1rem",
							}}
							onClick={() => {
								if (pathname !== "project-overview") {
									router.push("/project-overview");
								} else {
									router.push("/");
								}
							}}>
							{pathname !== "project-overview" ? "Learn More" : "Go Home"}
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
								role='navigation'
								aria-label='Go to module design page'
								variant='contained'
								color='drawerBackground'
								onClick={() => {
									router.push("/modules");
								}}
								sx={{ padding: 0, minHeight: 40, maxWidth: 64, pointerEvents: "visible" }}>
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
								role='navigation'
								aria-label='Go to controller design page'
								variant='contained'
								color='drawerBackground'
								onClick={() => router.push("/controller")}
								size='small'
								sx={{ padding: 0, minHeight: 40, maxWidth: 64, pointerEvents: "visible" }}>
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
								role='navigation'
								aria-label='Go to application design page'
								variant='contained'
								color='drawerBackground'
								onClick={() => {
									router.push("/application");
								}}
								size='small'
								sx={{ minHeight: 40, maxWidth: 64, pointerEvents: "visible" }}>
								<Terminal color='primary' />
							</Button>
						</Tooltip>
					</TrailAlt>
				</Box>
			</Box>
		</Box>
	);
};
export default BottomNav;
