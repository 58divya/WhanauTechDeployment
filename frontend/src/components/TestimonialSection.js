import React, { useState, useEffect } from "react";
import myPhoto from "../assets/images/reshu.jpg";

const testimonials = [
	{
		photo: "https://randomuser.me/api/portraits/women/44.jpg",
		quote:
			"WhānauTech guided our marae through digital transformation with compassion and clarity.",
		name: "Aroha Ngatai",
		role: "Community Leader",
	},
	{
		photo: "https://randomuser.me/api/portraits/men/32.jpg",
		quote:
			"The workshops boosted our team’s confidence in using new tech tools effectively.",
		name: "Wiremu Rangi",
		role: "Tech Coordinator",
	},
	{
		photo: "https://randomuser.me/api/portraits/women/21.jpg",
		quote:
			"I never thought tech could feel this culturally grounded and empowering.",
		name: "Hine Te Whaiti",
		role: "Business Owner",
	},
	{
		photo: myPhoto,
		quote:
			"The workshops boosted our team’s confidence in using new tech tools effectively.",
		name: "Reshma Lamichhane",
		role: "Tech Coordinator",
	},
	{
		photo: "https://randomuser.me/api/portraits/women/21.jpg",
		quote:
			"I never thought tech could feel this culturally grounded and empowering.",
		name: "Hine Te Whaiti",
		role: "Business Owner",
	},
];

function TestimonialSection() {
	const [phases, setPhases] = useState(Array(testimonials.length).fill(0));

	useEffect(() => {
		const timers = testimonials.map((_, index) => [
			setTimeout(() => {
				setPhases((prev) => {
					const next = [...prev];
					next[index] = 1;
					return next;
				});
			}, 1000 + index * 300),

			setTimeout(() => {
				setPhases((prev) => {
					const next = [...prev];
					next[index] = 2;
					return next;
				});
			}, 2500 + index * 300),
		]);

		return () => timers.flat().forEach(clearTimeout);
	}, []);

	return (
		<section className="testimonial-section py-5" id="homeTest">
			<div className="container">
				<h2 className="mb-4 text-start section-title">
					What Our Community Says
				</h2>

				<div className="row justify-content-center">
					{testimonials.map((testimonial, index) => (
						<div
							className="col-md-4 mb-4 d-flex align-items-stretch"
							key={index}
						>
							<div
								className="card h-80 shadow-sm testimonial-card"
								id="homeCard"
							>
								<div className="card-body d-flex flex-column align-items-center text-center">
									<img
										src={testimonial.photo}
										alt={`Photo of ${testimonial.name}`}
										className={`testimonial-photo ${
											phases[index] >= 0 ? "fade-in" : ""
										}`}
									/>

									{phases[index] >= 1 && (
										<>
											<blockquote
												className="blockquote fade-in"
												style={{
													backgroundColor: "var(--inside-card-bg-color)",
												}}
											>
												<p className="mb-0">“{testimonial.quote}”</p>
											</blockquote>
											<footer className="blockquote-footer testimonial-footer">
												{testimonial.name}
												<br />
												<small className="text-muted" id="textRole">
													{testimonial.role}
												</small>
											</footer>
										</>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default TestimonialSection;
