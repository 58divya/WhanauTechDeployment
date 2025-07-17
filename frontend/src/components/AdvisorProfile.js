import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import translations from "./translations";

function AdvisorProfile({ selectedLanguage }) {
	const { id } = useParams();
	const [advisor, setAdvisor] = useState(null);
	const [date, setDate] = useState(null);
	const [time, setTime] = useState("");
	const [bookedTimes, setBookedTimes] = useState([]);
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const t =
		translations[selectedLanguage]?.advisorProfile ||
		translations.en.advisorProfile;

	const backendURL =
		process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

	// Fetch advisor details
	useEffect(() => {
		setLoading(true);
		axios
			.get(`${backendURL}/api/advisors/${id}`)
			.then((res) => setAdvisor(res.data))
			.catch((err) => {
				// console.error("Error fetching advisor details:", err);
				setMessage(t.errorFetch || "Error loading advisor details.");
			})
			.finally(() => setLoading(false));
	}, [id, backendURL, t.errorFetch]);

	// Fetch booked times when date or advisor changes
	useEffect(() => {
		if (!date) {
			setBookedTimes([]);
			return;
		}
		const formattedDate = date.toISOString().split("T")[0];
		axios
			.get(`${backendURL}/api/booked_slots`, {
				params: { date: formattedDate, advisor_id: id },
			})
			.then((res) => setBookedTimes(res.data.booked_times || []))
			.catch((err) => {
				// console.error("Error fetching booked slots:", err);
				setMessage(t.errorFetchSlots || "Error loading booked times.");
			});
	}, [date, id, backendURL, t.errorFetchSlots]);

	// Handle booking submission
	const handleBooking = async () => {
		setMessage("");
		if (!userName || !userEmail || !time) {
			setMessage(t.fillAll || "Please fill all required fields.");
			return;
		}

		if (!date) {
			setMessage(t.selectDate || "Please select a date.");
			return;
		}

		const datePart = date.toISOString().split("T")[0];
		const dateTimeStr = `${datePart}T${time}:00`; // full ISO format with seconds

		setLoading(true);

		try {
			const res = await axios.post(`${backendURL}/api/book`, {
				advisor_id: advisor.id,
				advisor_name: advisor.name,
				user_name: userName,
				user_email: userEmail,
				datetime: dateTimeStr,
			});

			setMessage(t.success || "Booking successful!");
			// Optionally reset form:
			setUserName("");
			setUserEmail("");
			setDate(null);
			setTime("");
			setBookedTimes([]);
		} catch (err) {
			// console.error("Booking error:", err);
			setMessage(t.error || "Error booking appointment. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	if (loading && !advisor)
		return (
			<div className="container my-5 text-center">
				{t.loading || "Loading..."}
			</div>
		);

	if (!advisor)
		return (
			<div className="container my-5 text-center">
				{t.notFound || "Advisor not found."}
			</div>
		);

	return (
		<div className="advisor-detail-full container py-4">
			<div className="advisor-grid row g-4">
				<div className="advisor-image-section col-md-4 text-center">
					<img
						src={
							advisor.photo_url.startsWith("http")
								? advisor.photo_url
								: `${backendURL}${advisor.photo_url}`
						}
						alt={advisor.name}
						className="advisor-image img-fluid rounded-circle mb-3"
						style={{ maxWidth: "200px", objectFit: "cover" }}
					/>
					<h3>{advisor.name}</h3>
					<p className="expertise">{advisor.expertise}</p>
				</div>

				<div className="advisor-content-section col-md-8">
					<h4>{t.about || "About"}</h4>
					<p>{advisor.bio || t.noBio || "No biography available."}</p>

					<h4 className="mt-4">{t.bookAppointment || "Book Appointment"}</h4>
					<div className="booking-form d-flex flex-column gap-3 max-w-400px">
						<input
							type="text"
							placeholder={t.namePlaceholder || "Your name"}
							className="form-input form-control"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
							aria-label={t.namePlaceholder || "Your name"}
						/>
						<input
							type="email"
							placeholder={t.emailPlaceholder || "Your email"}
							className="form-input form-control"
							value={userEmail}
							onChange={(e) => setUserEmail(e.target.value)}
							aria-label={t.emailPlaceholder || "Your email"}
						/>
						<DatePicker
							selected={date}
							onChange={setDate}
							placeholderText={t.datePlaceholder || "Select your date"}
							dateFormat="yyyy-MM-dd"
							className="form-input form-control"
							minDate={new Date()}
							aria-label={t.datePlaceholder || "Select your date"}
						/>
						<select
							className="form-input form-select"
							value={time}
							onChange={(e) => setTime(e.target.value)}
							aria-label={t.selectTime || "Select time slot"}
						>
							<option value="">{t.selectTime || "Select a time"}</option>
							{["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"].map(
								(slot) => (
									<option
										key={slot}
										value={slot}
										disabled={bookedTimes.includes(slot)}
									>
										{slot}{" "}
										{bookedTimes.includes(slot)
											? `(${t.booked || "Booked"})`
											: ""}
									</option>
								)
							)}
						</select>

						<button
							className="btn btn-primary"
							onClick={handleBooking}
							disabled={loading}
							aria-disabled={loading}
						>
							{loading
								? t.loading || "Loading..."
								: t.confirm || "Confirm Booking"}
						</button>

						{message && <p className="booking-message mt-2">{message}</p>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdvisorProfile;
