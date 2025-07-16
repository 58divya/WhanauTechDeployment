import React, { useEffect, useState } from "react";

function App() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		fetch("https://whanautech.onrender.com/api/hello")
			.then((res) => {
				if (!res.ok) throw new Error("Network response was not ok");
				return res.json();
			})
			.then((data) => setMessage(data.message))
			.catch((err) => setMessage("Error: " + err.message));
	}, []);

	return (
		<div>
			<h1>Message from Backend:</h1>
			<p>{message || "Loading..."}</p>
		</div>
	);
}

export default App;
