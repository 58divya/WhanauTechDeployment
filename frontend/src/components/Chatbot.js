import React, { useState, useEffect, useRef } from "react";
import translations from "./translations";

function Chatbot({ selectedLanguage = "en" }) {
	const t = translations[selectedLanguage]?.chatbot || translations.en.chatbot;

	const [messages, setMessages] = useState([{ from: "bot", text: t.greeting }]);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false); // chatbot starts closed

	const messagesEndRef = useRef(null);
	const inputRef = useRef(null);

	const backendURL =
		process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const sendMessage = async () => {
		if (!input.trim()) return;
		const userMessage = { from: "user", text: input };
		setMessages((prev) => [...prev, userMessage]);
		setInput("");
		setLoading(true);

		try {
			const res = await fetch(`${backendURL}/api/chat-stream`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: input, lang: selectedLanguage }),
				mode: "cors",
			});

			if (!res.body) throw new Error("ReadableStream not supported");

			const reader = res.body.getReader();
			const decoder = new TextDecoder();

			setMessages((prev) => [...prev, { from: "bot", text: "" }]);

			let done = false;
			let accumulatedText = "";

			while (!done) {
				const { value, done: doneReading } = await reader.read();
				done = doneReading;
				if (value) {
					const chunk = decoder.decode(value);
					accumulatedText += chunk;
					setMessages((prev) => {
						const updated = [...prev];
						updated[updated.length - 1] = {
							from: "bot",
							text: accumulatedText,
						};
						return updated;
					});
				}
			}
		} catch (error) {
			// console.error("❌ Error during fetch:", error);
			setMessages((prev) => [...prev, { from: "bot", text: t.networkError }]);
		} finally {
			setLoading(false);
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !loading) sendMessage();
	};

	return (
		<>
			{/* Toggle Button - always visible */}
			<button
				className="chatbot-toggle-button"
				aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
				onClick={() => {
					setIsOpen(!isOpen);
					if (!isOpen) {
						// When opening, focus input after short delay
						setTimeout(() => inputRef.current?.focus(), 100);
					}
				}}
			>
				💬
			</button>

			{/* Chatbot panel - only render if open */}
			{isOpen && (
				<div className="chatbot-window open">
					<div className="chatbot-header">{t.title}</div>

					<div className="chatbot-messages">
						{messages.map((msg, i) => (
							<div
								key={i}
								className={`chatbot-message ${
									msg.from === "user" ? "user" : "bot"
								}`}
							>
								<span>{msg.text}</span>
							</div>
						))}
						<div ref={messagesEndRef} />
						{loading && (
							<p>
								<em>{t.typing}</em>
							</p>
						)}
					</div>

					<div className="chatbot-input-area">
						<input
							ref={inputRef}
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleKeyDown}
							placeholder={t.placeholder}
							disabled={loading}
							autoComplete="off"
						/>
						<button onClick={sendMessage} disabled={loading}>
							{t.send}
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default Chatbot;
