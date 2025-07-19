import React, { useState, useEffect } from "react";
import translations from "./translations";

function countWords(str) {
	return str.trim().split(/\s+/).filter(Boolean).length;
}

function ContactForm({ selectedLanguage }) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState({ message: "", type: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);

	const t = (translations[selectedLanguage] || translations.en).contact;

	const apiUrl = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
		setStatus({ message: "", type: "" });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus({ message: "", type: "" });

		// Only validate message box for min 10 words
		if (countWords(formData.message) < 10) {
			setStatus({ message: t.form.messageMinWordsError, type: "error" });
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch(`${apiUrl}/api/contact`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setStatus({ message: t.form.successMessage, type: "success" });
				setFormData({ name: "", email: "", message: "" });
			} else {
				setStatus({
					message: data.error || t.form.errorMessage,
					type: "error",
				});
			}
		} catch (error) {
			setStatus({
				message: `${t.form.connectionError} ${error.message}`,
				type: "error",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		if (status.message) {
			const timer = setTimeout(
				() => setStatus({ message: "", type: "" }),
				5000
			);
			return () => clearTimeout(timer);
		}
	}, [status.message]);

	return (
		<section
			className="contact-section d-flex justify-content-center align-items-center"
			style={{ minHeight: "100vh" }}
			id="contact"
		>
			<div className="container text-center">
				<h2 className="mb-4" style={{ color: "var(--pounamu-green)" }}>
					{t.title}
				</h2>
				<div
					className="card shadow mx-auto"
					style={{
						maxWidth: "500px",
						backgroundColor: "var(--card-bg-color)",
						padding: "2rem",
					}}
				>
					<form onSubmit={handleSubmit}>
						<div className="mb-3 text-start">
							<label htmlFor="name" className="form-label">
								{t.form.nameLabel}
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								value={formData.name}
								onChange={handleChange}
								placeholder={t.form.namePlaceholder}
								required
							/>
						</div>
						<div className="mb-3 text-start">
							<label htmlFor="email" className="form-label">
								{t.form.emailLabel}
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								value={formData.email}
								onChange={handleChange}
								placeholder={t.form.emailPlaceholder}
								required
							/>
						</div>
						<div className="mb-4 text-start">
							<label htmlFor="message" className="form-label">
								{t.form.messageLabel}
							</label>
							<textarea
								className="form-control"
								id="message"
								value={formData.message}
								onChange={handleChange}
								placeholder={t.form.messagePlaceholder}
								rows="5"
								required
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary w-100"
							disabled={isSubmitting}
						>
							{isSubmitting ? t.form.sendingButton : t.form.sendButton}
						</button>
						{status.message && (
							<p
								className={`mt-3 text-${
									status.type === "error" ? "danger" : "success"
								}`}
							>
								{status.message}
							</p>
						)}
					</form>
				</div>
			</div>
		</section>
	);
}

export default ContactForm;
