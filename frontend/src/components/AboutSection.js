import React from "react";
import translations from "./translations";
import aboutImage from "../assets/images/about-src.jpg";

function AboutSection({ selectedLanguage }) {
	const t = translations[selectedLanguage].about;

	return (
		<section
			id="about"
			className="about-section py-5"
			style={{ padding: "4rem 2rem" }}
		>
			<div className="container">
				<div className="row align-items-center">
					{/* Left Text */}
					<div className="col-md-6">
						<h2
							className="mb-4 text-start"
							style={{ color: "rgb(59, 144, 143)", textAlign: "center" }}
						>
							{t.title}
						</h2>
						<div className="section-divider mb-3"></div>
						<p className="lead text-start">{t.description}</p>
					</div>

					{/* Right Image in Card */}
					<div className="col-md-6 d-flex justify-content-center">
						<div
							className="card shadow-sm"
							style={{ maxWidth: "100%", border: "none" }}
						>
							<img
								src={aboutImage}
								alt="About WhānauTech"
								className="img-fluid rounded"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
