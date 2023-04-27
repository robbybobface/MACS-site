import React, { useRef, useEffect } from "react";
import { Parallax } from "@react-spring/parallax";
import { animated } from "@react-spring/web";
import { useRouter } from "next/navigation";
import Head from "next/head";
import styles from "../styles/Overview.module.css";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import PageThree from "../components/PageThree";
import PageFour from "../components/PageFour";
import PageFive from "../components/PageFive";
import PageSix from "../components/PageSix";
import PageSeven from "../components/PageSeven";
import PageEight from "../components/PageEight";
import PageNine from "../components/PageNine";
import PageTen from "../components/PageTen";

export default function Overview() {
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

	useEffect(() => {
		const container = document.querySelector(".parallax-scroll");
		container.addEventListener("scroll", handleScroll);
		return () => {
			container.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<animated.div>
			<Head>
				<style>{"body { background-color: #FFF; !important; }"}</style>
			</Head>
			<Header router={router} />
			<BottomNav router={router} />
			<Parallax className={`${styles.parallaxContainer} parallax-scroll`} ref={parallax} pages={10}>
				<PageOne offset={0} gradient='greenBlue' onClick={() => scroll(1)} router={router} />
				<PageTwo offset={1} gradient='yellowGreen' onClick={() => scroll(2)} router={router} />
				<PageThree offset={2} gradient='yellowGreenAlt' onClick={() => scroll(3)} router={router} />
				<PageFour offset={3} gradient='redYellow' onClick={() => scroll(4)} router={router} />
				<PageFive offset={4} gradient='redYellowAlt' onClick={() => scroll(5)} router={router} />
				<PageSix offset={5} gradient='blueRed' onClick={() => scroll(6)} router={router} />
				<PageSeven offset={6} gradient='purpleBlue' onClick={() => scroll(7)} router={router} />
				<PageEight offset={7} gradient='blue' onClick={() => scroll(8)} router={router} />
				<PageNine offset={8} gradient='greenBlue' onClick={() => scroll(9)} router={router} />
				<PageTen offset={9} gradient='yellowGreen' onClick={() => scroll(0)} router={router} />
			</Parallax>
		</animated.div>
	);
}
