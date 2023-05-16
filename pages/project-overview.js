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
			console.log("no scroll mobile");
		}
	};

	useEffect(() => {
		const container = document.querySelector(".parallax-scroll");
		container.addEventListener("scroll", handleScroll);
		console.log(window.screen.width <= 900);
		setIsMobile(window.screen.width <= 900);
		let tempOffsets = [];
		let accTempOffsets = [];
		tempOffsets.push(850 / screen.height >= 1 ? 850 / screen.height : 1);
		tempOffsets.push(1272 / screen.height >= 1.5 ? 1272 / screen.height : 1.5);
		tempOffsets.push(850 / screen.height >= 1 ? 850 / screen.height : 1);
		tempOffsets.push(932.8 / screen.height >= 1.1 ? 932.8 / screen.height : 1.1);
		tempOffsets.push(932.8 / screen.height >= 1.1 ? 932.8 / screen.height : 1.1);
		tempOffsets.push(1611.2 / screen.height >= 1.9 ? 1611.2 / screen.height : 1.9);
		tempOffsets.push(593.6 / screen.height >= 0.7 ? 593.6 / screen.height : 0.7);
		tempOffsets.push(593.6 / screen.height >= 0.7 ? 593.6 / screen.height : 0.7);
		tempOffsets.push(850 / screen.height >= 1 ? 850 / screen.height : 1);
		tempOffsets.push(850 / screen.height >= 1 ? 850 / screen.height : 1);

		accTempOffsets.push(tempOffsets.slice(0, 1).reduce((acc, curr) => acc + curr, 0));
		console.log(tempOffsets.slice(0, 1).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 2).reduce((acc, curr) => acc + curr, 0));
		console.log(tempOffsets.slice(0, 2).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 3).reduce((acc, curr) => acc + curr, 0));
		console.log(tempOffsets.slice(0, 3).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 4).reduce((acc, curr) => acc + curr, 0));
		console.log(tempOffsets.slice(0, 4).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 5).reduce((acc, curr) => acc + curr, 0));
		console.log(tempOffsets.slice(0, 5).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 6).reduce((acc, curr) => acc + curr, 0));
		console.log(tempOffsets.slice(0, 6).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 7).reduce((acc, curr) => acc + curr, 0));
		console.log(tempOffsets.slice(0, 7).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 8).reduce((acc, curr) => acc + curr, 0));
		console.log(tempOffsets.slice(0, 8).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 9).reduce((acc, curr) => acc + curr, 0));
		console.log(tempOffsets.slice(0, 9).reduce((acc, curr) => acc + curr, 0));
		accTempOffsets.push(tempOffsets.slice(0, 10).reduce((acc, curr) => acc + curr, 0));
		console.log(tempOffsets.slice(0, 10).reduce((acc, curr) => acc + curr, 0));

		console.log(accTempOffsets);

		setOffsets(accTempOffsets);
		return () => {
			container.removeEventListener("scroll", handleScroll);
			setIsMobile(false);
			setOffsets([]);
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
					<PageTwo
						offset={offsets[0]}
						gradient='yellowGreen'
						onClick={() => allowScroll(2)}
						router={router}
					/>
					<PageThree
						offset={offsets[1]}
						gradient='yellowGreenAlt'
						onClick={() => allowScroll(3)}
						router={router}
					/>
					<PageFour offset={offsets[2]} gradient='redYellow' onClick={() => allowScroll(4)} router={router} />
					<PageFive
						offset={offsets[3]}
						gradient='redYellowAlt'
						onClick={() => allowScroll(5)}
						router={router}
					/>
					<PageSix
						offset={offsets[4] + 0.2}
						gradient='blueRed'
						onClick={() => allowScroll(6)}
						router={router}
					/>
					<PageSeven
						offset={offsets[5]}
						gradient='purpleBlue'
						onClick={() => allowScroll(7)}
						router={router}
					/>
					<PageEight offset={offsets[6]} gradient='blue' onClick={() => allowScroll(8)} router={router} />
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
