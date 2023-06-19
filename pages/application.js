import React, { useEffect, useRef, useState } from "react";
import { Container } from "@mui/material";
import Head from "next/head";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { useRouter } from "next/router";
import { Parallax } from "@react-spring/parallax";
import styles from "../styles/Overview.module.css";
import PageOne from "../components/ApplicationDesign/PageOne";
import PageTwo from "../components/ApplicationDesign/PageTwo";
import PageThree from "../components/ApplicationDesign/PageThree";
import PageFour from "../components/ApplicationDesign/PageFour";
import MobileContentApplication from "../components/ApplicationDesign/MobileContentApplication";

export default function Application() {
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
		return () => {
			container.removeEventListener("scroll", handleScroll);
			setIsMobile(false);
		};
	}, []);
	return (
		<>
			<Head>
				<title>Application Design</title>
				<style>{"body { background-color: #FFF; !important; }"}</style>
			</Head>
			<Header router={router} />
			<BottomNav router={router} home={true} />
			{isMobile && <MobileContentApplication />}
			{!isMobile && (
				<Parallax className={`${styles.parallaxContainer} parallax-scroll`} ref={parallax} pages={4}>
					<PageOne offset={0} gradient='redAlt' onClick={() => allowScroll(1)} router={router} />
					<PageTwo offset={1} gradient='red' onClick={() => allowScroll(2)} router={router} />
					<PageThree offset={2} gradient='redAlt' onClick={() => allowScroll(3)} router={router} />
					<PageFour offset={3} gradient='red' onClick={() => allowScroll(0)} router={router} />
				</Parallax>
			)}
		</>
	);
}
