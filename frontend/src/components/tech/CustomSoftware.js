import React from "react";
import { Link } from "react-router-dom";
import translations from "../translations";
import "./tech.css";

const CustomSoftware = ({ selectedLanguage }) => {
	const t =
		translations[selectedLanguage]?.customSoftware ||
		translations.en.customSoftware;

	return (
		<div className="tech-consultation-page min-vh-100 ">
			<header className="hero-section py-5 text-white text-center">
				<div className="container">
					<h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn">
						{t.title}
					</h1>
					<p className="lead mb-4">{t.subtitle}</p>
					<Link
						to="/advisor/6"
						className="btn btn-primary btn-lg"
						aria-label={t.ctaButton}
					>
						{t.ctaButton}
					</Link>
				</div>
			</header>

			<main className="container py-5">
				<section className="services-section mb-5">
					<h2 className="h3 text-center mb-4">{t.whatWeBuildTitle}</h2>
					<div className="row row-cols-1 row-cols-md-2 g-4">
						{t.whatWeBuild.map((service, index) => (
							<div key={index} className="col">
								<div
									className="card h-100 shadow-sm animate__animated animate__fadeInUp"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<div className="card-body d-flex align-items-start">
										<span className="fs-3 me-3">{service.icon}</span>
										<p className="card-text">{service.text}</p>
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
						to="/advisor/6"
						className="btn btn-primary btn-lg"
						aria-label={t.ctaButton}
					>
						{t.ctaButton}
					</Link>
				</section>

				<section className="testimonial-section">
					<h2 className="h3 text-center mb-4">{t.testimonialsTitle}</h2>
					<div
						id="customSoftwareCarousel"
						className="carousel slide"
						data-bs-ride="carousel"
					>
						<div className="carousel-inner">
							{t.testimonials.map((testimonial, index) => (
								<div
									key={index}
									className={`carousel-item ${index === 0 ? "active" : ""}`}
								>
									<blockquote className="blockquote">
										<p className="mb-0">“{testimonial.quote}”</p>
										<footer className="blockquote-footer mt-2">
											{testimonial.author}
										</footer>
									</blockquote>
								</div>
							))}
						</div>
						<div className="carousel-indicators">
							{t.testimonials.map((_, index) => (
								<button
									key={index}
									type="button"
									data-bs-target="#customSoftwareCarousel"
									data-bs-slide-to={index}
									className={index === 0 ? "active" : ""}
									aria-current={index === 0 ? "true" : "false"}
									aria-label={`Slide ${index + 1}`}
								></button>
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default CustomSoftware;
