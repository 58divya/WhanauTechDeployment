import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import translations from "./translations";

function AdvisorList({ selectedLanguage }) {
	const [advisors, setAdvisors] = useState([]);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const t =
		translations[selectedLanguage]?.advisors || translations.en.advisors;

	// ✅ Set backend base URL (from .env or fallback)
	const backendURL =
		process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

	// console.log("Fetching advisors from:", backendURL + "/api/advisors");
	useEffect(() => {
		// console.log("Fetching advisors from:", `${backendURL}/api/advisors`);
		axios
			.get(`${backendURL}/api/advisors`)
			.then((res) => {
				// console.log("Advisors fetched:", res.data);
				setAdvisors(res.data);
			})
			.catch((err) => {
				// console.error("Error fetching advisors:", err);
				setError("Failed to load advisors.");
			});
	}, [backendURL]);

	if (error) {
		return (
			<div className="text-center mt-5 text-danger">
				<h4>{error}</h4>
			</div>
		);
	}

	return (
		<section className="advisors-section position-relative py-5">
			<div className="container">
				<h2
					className="mb-5"
					style={{ color: "rgb(59, 144, 143)", textAlign: "center" }}
				>
					{t.title || "Our Advisors"}
				</h2>

				<div className="row justify-content-center g-4">
					{advisors.map((advisor) => (
						<div
							key={advisor.id}
							className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
						>
							<div className="advisor-card text-center">
								<div className="blob-wrapper mb-3">
									<img
										src={
											advisor.photo_url.startsWith("http")
												? advisor.photo_url
												: `${backendURL}${advisor.photo_url}`
										}
										alt={advisor.name}
										className="blob-image"
										style={{
											width: "150px",
											height: "150px",
											objectFit: "cover",
											borderRadius: "50%",
										}}
									/>
								</div>
								<h3
									className="advisor-name"
									style={{ color: "rgb(82, 127, 63)" }}
								>
									{advisor.name}
								</h3>
								<p
									className="advisor-expertise"
									style={{ fontSize: "0.9rem", color: "rgb(90, 96, 88)" }}
								>
									{advisor.expertise}
								</p>
								<button
									className="btn btn-primary mt-2"
									onClick={() => navigate(`/advisor/${advisor.id}`)}
								>
									More Info
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default AdvisorList;
