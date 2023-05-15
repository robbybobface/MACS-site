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
import { useMediaQuery } from "@mui/material";
import theme from "../styles/theme";

export default function Overview() {
	const [isMobile, setIsMobile] = useState(false);
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
			console.log("no scroll mobile");
		}
	};

	useEffect(() => {
		const container = document.querySelector(".parallax-scroll");
		container.addEventListener("scroll", handleScroll);
		console.log(window.screen.width <= 900);
		setIsMobile(window.screen.width <= 900);
		return () => {
			container.removeEventListener("scroll", handleScroll);
			setIsMobile(false);
		};
	}, []);

	return (
		<animated.div>
			<Head>
				<title>Project Overview</title>
				<style>{"body { background-color: #FFF; !important; }"}</style>
			</Head>
			<Header router={router} />
			<BottomNav router={router} />
			{isMobile && (
				<Parallax className={`${styles.parallaxContainer} parallax-scroll`} ref={parallax} pages={11}>
					<PageOne offset={0} gradient='greenBlue' onClick={() => allowScroll(1)} router={router} />
					<PageTwo offset={1} gradient='yellowGreen' onClick={() => allowScroll(2)} router={router} />
					<PageThree offset={2.5} gradient='yellowGreenAlt' onClick={() => allowScroll(3)} router={router} />
					<PageFour offset={3.5} gradient='redYellow' onClick={() => allowScroll(4)} router={router} />
					<PageFive offset={4.6} gradient='redYellowAlt' onClick={() => allowScroll(5)} router={router} />
					<PageSix offset={5.9} gradient='blueRed' onClick={() => allowScroll(6)} router={router} />
					<PageSeven offset={7.6} gradient='purpleBlue' onClick={() => allowScroll(7)} router={router} />
					<PageEight offset={8.3} gradient='blue' onClick={() => allowScroll(8)} router={router} />
					<PageNine offset={9} gradient='greenBlue' onClick={() => allowScroll(9)} router={router} />
					<PageTen offset={10} gradient='yellowGreen' onClick={() => allowScroll(0)} router={router} />
				</Parallax>
			)}
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
