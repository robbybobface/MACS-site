import React, { useRef, useEffect, useState } from "react";
import { Parallax } from "@react-spring/parallax";
import { animated } from "@react-spring/web";
import { useRouter } from "next/navigation";
import Head from "next/head";
import styles from "../styles/Overview.module.css";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import PageOne from "../components/Overview/PageOne";
import PageTwo from "../components/Overview/PageTwo";
import PageThree from "../components/Overview/PageThree";
import PageFour from "../components/Overview/PageFour";
import PageFive from "../components/Overview/PageFive";
import PageSix from "../components/Overview/PageSix";
import PageSeven from "../components/Overview/PageSeven";
import PageEight from "../components/Overview/PageEight";
import PageNine from "../components/Overview/PageNine";
import PageTen from "../components/Overview/PageTen";
import { Box, useMediaQuery } from "@mui/material";
import theme from "../styles/theme";
import MobileContent from "../components/Overview/MobileContent";

export default function Overview() {
	const [isMobile, setIsMobile] = useState(false);
	const [offsets, setOffsets] = useState([]);
	const parallax = useRef(null);
	const router = useRouter();
	let scrollYProgress = 0;

	const scroll = (to) => {
		if (parallax.current) {
			parallax.current.scrollTo(to);
			// console.log(parallax.current);
		}
	};

	const handleScroll = () => {
		if (parallax.current) {
			// console.log(parallax.current.current);
			scrollYProgress = parallax.current.current / 500;
		}
	};

	const allowScroll = (to) => {
		if (!isMobile) {
			scroll(to);
		} else {
			// console.log("no scroll mobile");
		}
	};

	useEffect(() => {
		const container = document.querySelector(".parallax-scroll");
		container.addEventListener("scroll", handleScroll);
		function handleResize() {
			if (window.screen.width <= 900) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}
		window.addEventListener("resize", handleResize);
		setIsMobile(window.screen.width <= 900);
		let tempOffsets = [];
		let accTempOffsets = [];
		// console.log("windowHeight: " + window.innerHeight);
		tempOffsets.push(1000 / window.innerHeight >= 1 ? 1000 / window.innerHeight : 1);
		tempOffsets.push(1000 / window.innerHeight >= 1 ? 1000 / window.innerHeight : 1);
		tempOffsets.push(1000 / window.innerHeight >= 1 ? 1000 / window.innerHeight : 1);
		tempOffsets.push(1000 / window.innerHeight >= 1 ? 1000 / window.innerHeight : 1);
		tempOffsets.push(1000 / window.innerHeight >= 1 ? 1000 / window.innerHeight : 1);
		tempOffsets.push(1800 / window.innerHeight >= 2.4 ? 1800 / window.innerHeight : 2.4);
		tempOffsets.push(1000 / window.innerHeight >= 1 ? 1000 / window.innerHeight : 1);
		tempOffsets.push(1000 / window.innerHeight >= 1 ? 1000 / window.innerHeight : 1);
		tempOffsets.push(1000 / window.innerHeight >= 1 ? 1000 / window.innerHeight : 1);
		tempOffsets.push(1000 / window.innerHeight >= 1 ? 1000 / window.innerHeight : 1);

		accTempOffsets.push(tempOffsets.slice(0, 1).reduce((acc, curr) => acc + curr, 0));
		// console.log(tempOffsets.slice(0, 1).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 2).reduce((acc, curr) => acc + curr, 0));
		// console.log(tempOffsets.slice(0, 2).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 3).reduce((acc, curr) => acc + curr, 0));
		// console.log(tempOffsets.slice(0, 3).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 4).reduce((acc, curr) => acc + curr, 0));
		// console.log(tempOffsets.slice(0, 4).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 5).reduce((acc, curr) => acc + curr, 0));
		// console.log(tempOffsets.slice(0, 5).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 6).reduce((acc, curr) => acc + curr, 0));
		// console.log(tempOffsets.slice(0, 6).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 7).reduce((acc, curr) => acc + curr, 0));
		// console.log(tempOffsets.slice(0, 7).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 8).reduce((acc, curr) => acc + curr, 0));
		// console.log(tempOffsets.slice(0, 8).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 9).reduce((acc, curr) => acc + curr, 0));
		// console.log(tempOffsets.slice(0, 9).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 10).reduce((acc, curr) => acc + curr, 0));
		// console.log(tempOffsets.slice(0, 10).reduce((acc, curr) => acc + curr, 0));

		// console.log(accTempOffsets);

		setOffsets(accTempOffsets);
		return () => {
			container.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
			setIsMobile(false);
			setOffsets([]);
		};
	}, []);

	return (
		<animated.div>
			<Head>
				<title>Project Overview</title>
				<style>
					{isMobile
						? "body { background-color: #323232; !important; }"
						: "body { background-color: #FFF; !important; }"}
				</style>
			</Head>
			<Header router={router} />
			<BottomNav router={router} />
			{isMobile && <MobileContent router={router} />}
			{!isMobile && (
				<Parallax className={`${styles.parallaxContainer} parallax-scroll`} ref={parallax} pages={10}>
					<PageOne offset={0} gradient='greenBlue' onClick={() => allowScroll(1)} router={router} />
					<PageTwo offset={1} gradient='yellowGreen' onClick={() => allowScroll(2)} router={router} />
					<PageThree offset={2} gradient='yellowGreenAlt' onClick={() => allowScroll(3)} router={router} />
					<PageFour offset={3} gradient='redYellow' onClick={() => allowScroll(4)} router={router} />
					<PageFive offset={4} gradient='redYellowAlt' onClick={() => allowScroll(5)} router={router} />
					<PageSix offset={5} gradient='blueRed' onClick={() => allowScroll(6)} router={router} />
					<PageSeven offset={6} gradient='purpleBlue' onClick={() => allowScroll(7)} router={router} />
					<PageEight offset={7} gradient='blue' onClick={() => allowScroll(8)} router={router} />
					<PageNine offset={8} gradient='greenBlue' onClick={() => allowScroll(9)} router={router} />
					<PageTen offset={9} gradient='yellowGreen' onClick={() => allowScroll(0)} router={router} />
				</Parallax>
			)}
		</animated.div>
	);
}
