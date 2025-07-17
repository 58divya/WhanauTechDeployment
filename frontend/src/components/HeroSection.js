import React, { useState, useEffect } from "react";
import translations from "./translations";

import image1 from "../assets/images/herosection.png";
import image2 from "../assets/images/herosection1.png";
import image3 from "../assets/images/herosection2.jpg";

const images = [image1, image2, image3];

function HeroSection({ selectedLanguage = "en" }) {
	const t = translations[selectedLanguage]?.hero || translations.en.hero;

	const [currentIndex, setCurrentIndex] = useState(0);
	const [typedText, setTypedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [charIndex, setCharIndex] = useState(0);
	const [fade, setFade] = useState(true);

	// Background + message change every 8s
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % images.length);
			setTypedText("");
			setCharIndex(0);
			setIsDeleting(false);
			setFade(false);
			setTimeout(() => setFade(true), 1000);
		}, 15000);

		return () => clearInterval(interval);
	}, []);

	// Typing animation
	useEffect(() => {
		const currentMessage = t.messages[currentIndex];
		const speed = isDeleting ? 40 : 130;

		if (!isDeleting && charIndex <= currentMessage.length) {
			const timeout = setTimeout(() => {
				setTypedText(currentMessage.slice(0, charIndex));
				setCharIndex((prev) => prev + 1);

				if (charIndex === currentMessage.length) {
					setIsDeleting(true);
				}
			}, speed);
			return () => clearTimeout(timeout);
		} else if (isDeleting && charIndex >= 0) {
			const timeout = setTimeout(() => {
				setTypedText(currentMessage.slice(0, charIndex));
				setCharIndex((prev) => prev - 1);

				if (charIndex === 0) {
					setIsDeleting(false);
					setCurrentIndex((prev) => (prev + 1) % t.messages.length);
					setCharIndex(0);
				}
			}, speed / 2);
			return () => clearTimeout(timeout);
		}
	}, [charIndex, isDeleting, currentIndex, t.messages]);

	return (
		<section id="home" className="hero-section d-flex align-items-center">
			{/* Background images */}
			<div className="hero-bg-container">
				{images.map((img, i) => (
					<img
						key={i}
						src={img}
						alt={`Background ${i + 1}`}
						className={`hero-bg-image ${
							i === currentIndex && fade ? "active" : ""
						}`}
					/>
				))}
				<div className="hero-bg-overlay" />
			</div>

			{/* Foreground Text */}
			<div className="hero-content container">
				<h1
					className="hero-title"
					style={{ color: "rgb(59, 144, 143)", textAlign: "center" }}
				>
					{t.title}
				</h1>
				<p
					className="hero-typed-text"
					style={{ color: "#F0E68C", textAlign: "center" }}
				>
					{typedText}
					<span className="blinking-cursor">|</span>
				</p>
				<button
					className="btn btn-primary btn-lg"
					onClick={() =>
						document
							.getElementById("contact")
							?.scrollIntoView({ behavior: "smooth" })
					}
				>
					{t.button}
				</button>
			</div>
		</section>
	);
}

export default HeroSection;
