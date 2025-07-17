import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import translations from "./translations"; // Adjust as needed

const ServicesSection = ({ selectedLanguage }) => {
	const scrollRef = useRef(null);
	const [isHovered, setIsHovered] = useState(false);

	// Pause scrolling when hovered or touched
	const handlePause = () => setIsHovered(true);
	const handleResume = () => setIsHovered(false);

	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (scrollRef.current && !isHovered) {
				const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

				if (scrollLeft + clientWidth >= scrollWidth - 5) {
					// Loop back to start smoothly
					scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
				} else {
					scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
				}
			}
		}, 2000);

		return () => clearInterval(interval);
	}, [isHovered]);

	const serviceLinks = [
		"/technology-consultation",
		"/digital-education",
		"/it-support",
		"/cybersecurity-guidance",
		"/cloud-solutions",
		"/custom-software",
	];

	const services = translations[selectedLanguage]?.services?.items || [];
	const sectionTitle =
		translations[selectedLanguage]?.services?.title || "Our Services";

	return (
		<section
			id="services"
			className="py-5 services-section"
			role="region"
			aria-labelledby="services-title"
		>
			<div className="container my-5">
				<h2 id="services-title" className="text-center mb-4">
					{sectionTitle}
				</h2>

				<div className="position-relative">
					{/* Left Scroll Button */}
					<button
						className="scroll-button scroll-button-left"
						onClick={scrollLeft}
						aria-label="Scroll services left"
						type="button"
					>
						<i className="fas fa-chevron-left" aria-hidden="true"></i>
					</button>

					{/* Scrollable container */}
					<div
						ref={scrollRef}
						className="scroll-container d-flex overflow-auto px-2"
						style={{ scrollBehavior: "smooth", gap: "1rem" }}
						tabIndex={0}
						onMouseEnter={handlePause}
						onMouseLeave={handleResume}
						onTouchStart={handlePause}
						onTouchEnd={handleResume}
						onTouchCancel={handleResume}
					>
						{services.map((service, index) => (
							<Link
								to={serviceLinks[index] || "#"}
								key={index}
								className="card flex-shrink-0 text-decoration-none text-dark service-card animated-gradient-bg"
								aria-label={`${service.title} service`}
							>
								<div className="card-body d-flex flex-column justify-content-center align-items-center">
									<i
										className={`fas ${getServiceIcon(index)} fa-2x mb-3`}
										style={{ color: "#ffffff" }}
										aria-hidden="true"
									></i>
									<h5 className="card-title mb-2">{service.title}</h5>
									<p className="card-text" style={{ fontSize: "0.9rem" }}>
										{service.description}
									</p>
								</div>
							</Link>
						))}
					</div>

					{/* Right Scroll Button */}
					<button
						className="scroll-button scroll-button-right"
						onClick={scrollRight}
						aria-label="Scroll services right"
						type="button"
					>
						<i className="fas fa-chevron-right" aria-hidden="true"></i>
					</button>

					{/* Wave divider at bottom */}
					<div className="shape-divider-bottom" aria-hidden="true">
						<svg
							viewBox="0 0 1440 100"
							preserveAspectRatio="none"
							style={{ width: "100%", height: "100px", display: "block" }}
						>
							<path
								fill="var(--shape-divider-fill)"
								d="M0,100 Q720,0 1440,100 L1440,0 L0,0 Z"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

const getServiceIcon = (index) => {
	const icons = [
		"fa-lightbulb", // Technology Consultation
		"fa-book-open", // Digital Education
		"fa-laptop-code", // IT Support
		"fa-shield-alt", // Cybersecurity Guidance
		"fa-cloud", // Cloud Solutions
		"fa-code", // Custom Software
	];
	return icons[index % icons.length] || "fa-cogs";
};

export default ServicesSection;
