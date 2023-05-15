import React, { useEffect, useRef, useState } from "react";
import { Container } from "@mui/material";
import Head from "next/head";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { useRouter } from "next/router";
import { Parallax } from "@react-spring/parallax";
import styles from "../styles/Overview.module.css";
import PageOne from "../components/ModuleDesign/PageOne";
import PageTwo from "../components/ModuleDesign/PageTwo";

export default function ModuleDesign() {
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
		<>
			<Head>
				<title>Module Design</title>
				<style>{"body { background-color: #FFF; !important; }"}</style>
			</Head>
			<Header router={router} />
			<BottomNav router={router} home={true} />
			{isMobile && (
				<Parallax className={`${styles.parallaxContainer} parallax-scroll`} ref={parallax} pages={2.28}>
					<PageOne offset={0} gradient='yellowAlt' onClick={() => allowScroll(1)} router={router} />
					<PageTwo offset={1.1} gradient='yellowAltTwo' onClick={() => allowScroll(2)} router={router} />
				</Parallax>
			)}
			{!isMobile && (
				<Parallax className={`${styles.parallaxContainer} parallax-scroll`} ref={parallax} pages={2}>
					<PageOne offset={0} gradient='yellowAlt' onClick={() => allowScroll(1)} router={router} />
					<PageTwo offset={1} gradient='yellowAltTwo' onClick={() => allowScroll(2)} router={router} />
				</Parallax>
			)}
		</>
	);
}
