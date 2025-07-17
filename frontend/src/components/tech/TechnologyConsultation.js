import React from "react";
import translations from "../translations";
import "./tech.css";

function TechnologyConsultation({ selectedLanguage }) {
	const t =
		translations[selectedLanguage]?.techConsultationPage ||
		translations.en.techConsultationPage;

	return (
		<div className="tech-consultation-page">
			<header className="hero-section py-5 text-center">
				<div className="container">
					<h1 className="display-4 fw-bold mb-3">{t.title}</h1>
					<p className="lead">{t.subtitle}</p>
				</div>
			</header>

			<main className="container py-5">
				<section className="services-section mb-5">
					<h2 className="h3 text-center mb-4">{t.servicesTitle}</h2>
					<div className="row row-cols-1 row-cols-md-2 g-4">
						{t.servicesList.map((service, index) => (
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
						{t.steps.map((step, index) => (
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

				<section className="py-4 bg-primary text-white text-center">
					<div className="container">
						<h2>{t.readyTitle}</h2>
						<p>{t.readyText}</p>
						<a href="/advisor/4" className="btn btn-primary mt-3">
							Book Now
						</a>
					</div>
				</section>

				<section className="testimonial-section">
					<h2 className="h3 text-center mb-4">{t.testimonialTitle}</h2>
					<blockquote className="blockquote">
						<p className="mb-0">“{t.testimonialQuote}”</p>
						<footer className="blockquote-footer mt-2">
							{t.testimonialAuthor}
						</footer>
					</blockquote>
				</section>
			</main>
		</div>
	);
}

export default TechnologyConsultation;
