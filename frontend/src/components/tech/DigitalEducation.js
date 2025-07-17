import React from "react";
import { Link } from "react-router-dom";
import "./tech.css";
import translations from "../translations";

const DigitalEducation = ({ selectedLanguage }) => {
	// Get the translations for the Digital Education page, fallback to English
	const t =
		translations[selectedLanguage]?.digitalEducationPage ||
		translations.en.digitalEducationPage;

	return (
		<div className="digital-education-page min-vh-100">
			<header className="hero-section py-5 text-white text-center">
				<div className="container">
					<h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn">
						{t.title}
					</h1>
					<p className="lead mb-4" style={{ whiteSpace: "pre-line" }}>
						{t.subtitle}
					</p>
					<Link
						to="/advisor/3"
						className="btn btn-primary btn-lg"
						aria-label="Book a digital education workshop"
					>
						{t.bookButton}
					</Link>
				</div>
			</header>

			<main className="container py-5">
				<section className="services-section mb-5">
					<h2 className="h3 text-center mb-4">{t.workshopsTitle}</h2>
					<div className="row row-cols-1 row-cols-md-2 g-4">
						{t.workshops.map((workshop, index) => (
							<div key={index} className="col">
								<div
									className="card h-100 shadow-sm animate__animated animate__fadeInUp"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<div className="card-body d-flex align-items-start">
										<span className="fs-3 me-3">{workshop.icon}</span>
										<p className="card-text">{workshop.text}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="why-section mb-5 p-4 rounded shadow">
					<h2 className="h3 text-center mb-4">{t.whyTitle}</h2>
					<p className="fs-5 section-text">{t.whyText}</p>
				</section>

				<section className="how-section mb-5">
					<h2 className="h3 text-center mb-4">{t.howTitle}</h2>
					<ol className="list-group list-group-numbered">
						{t.howSteps.map((step, index) => (
							<li
								key={index}
								className="list-group-item d-flex align-items-start"
							>
								<span className="fs-3 me-3">{step.icon}</span>
								<span>{step.text}</span>
							</li>
						))}
					</ol>
				</section>

				<section className="cta-section mb-5 text-center bg-primary text-white p-4 rounded">
					<h2 className="h3 mb-4">{t.readyTitle}</h2>
					<p className="fs-5 mb-4">{t.readyText}</p>
					<Link
						to="/advisor/3"
						className="btn btn-primary btn-lg"
						aria-label={t.bookButton}
					>
						{t.bookButton}
					</Link>
				</section>

				<section className="testimonial-section">
					<h2 className="h3 text-center mb-4">{t.testimonialsTitle}</h2>
					<blockquote className="blockquote">
						<p className="mb-0">“{t.testimonial.quote}”</p>
						<footer className="blockquote-footer mt-2">
							{t.testimonial.author}
						</footer>
					</blockquote>
				</section>
			</main>
		</div>
	);
};

export default DigitalEducation;
