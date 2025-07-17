import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

function AppNavbar({
	isDarkMode,
	toggleDarkMode,
	selectedLanguage,
	handleLanguageChange,
	translations,
}) {
	const navLabels = translations.nav;
	const navigate = useNavigate();
	const location = useLocation();

	// Smooth scroll helper
	const scrollToSection = (id) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleNavClick = (e, sectionId) => {
		e.preventDefault();

		if (location.pathname === "/") {
			scrollToSection(sectionId);
		} else {
			// Navigate to homepage, then scroll after a short delay
			navigate("/", { replace: false });
			setTimeout(() => {
				scrollToSection(sectionId);
			}, 100);
		}
	};

	return (
		<Navbar
			expand="md"
			bg={isDarkMode ? "dark" : "light"}
			variant={isDarkMode ? "dark" : "light"}
			sticky="top"
			className="shadow-sm px-3"
		>
			<Navbar.Brand href="/" className="d-flex align-items-center">
				<span
					style={{ color: "#5F9EA0", fontWeight: "700", fontSize: "1.3rem" }}
				>
					WhānauTech
				</span>
			</Navbar.Brand>

			<ul className="nav nav-underline justify-content-center flex-grow-1">
				{["home", "services", "about", "contact"].map((section) => (
					<li key={section} className="nav-item me-4">
						<a
							href={`#${section}`}
							className="nav-link"
							onClick={(e) => handleNavClick(e, section)}
						>
							{navLabels[section]}
						</a>
					</li>
				))}
			</ul>

			<ul className="nav nav-underline justify-content-end align-items-center mb-0">
				<li className="nav-item d-flex align-items-center">
					<LanguageSelector
						selectedLanguage={selectedLanguage}
						onLanguageChange={handleLanguageChange}
						labels={translations.languageToggle}
					/>
				</li>

				<li className="nav-item ms-3">
					<Button
						variant={isDarkMode ? "warning" : "outline-secondary"}
						size="sm"
						onClick={toggleDarkMode}
						aria-label="Toggle dark mode"
						title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
					>
						{isDarkMode ? (
							<i className="fas fa-sun"></i>
						) : (
							<i className="fas fa-moon"></i>
						)}
					</Button>
				</li>
			</ul>
		</Navbar>
	);
}

export default AppNavbar;
