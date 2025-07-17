const translations = {
	en: {
		siteName: "WhānauTech",
		nav: {
			home: "Home",
			services: "Services",
			about: "About",
			contact: "Contact",
		},
		languageToggle: {
			en: "En",
			mi: "Māori",
			separator: "/",
		},
		hero: {
			title: "Connect to the World of Technology",
			messages: [
				"Empowering Māori communities through technology consultation and education.",
				"Connecting whānau with modern tech solutions.",
				"Supporting indigenous innovation through digital tools.",
			],
			button: "Contact Us",
		},
		services: {
			title: "Our Services",
			items: [
				{
					title: "Technology Consultation",
					description:
						"Tailored advice to help Māori businesses leverage technology for growth.",
				},
				{
					title: "Digital Education",
					description:
						"Workshops and training to build tech skills in our communities.",
				},
				{
					title: "IT Support",
					description:
						"Reliable support to keep your systems running smoothly.",
				},
				{
					title: "Cybersecurity Guidance",
					description:
						"Protecting Māori data with modern cyber protection strategies.",
				},
				{
					title: "Cloud Solutions",
					description: "Enabling flexible work environments with cloud tools.",
				},
				{
					title: "Custom Software",
					description: "Build bespoke tools that align with your kaupapa.",
				},
			],
		},
		advisors: {
			labelsById: {
				1: {
					name: "Bijeta Niraula",
					role: "Cybersecurity Guidance",
				},
				2: {
					name: "Diksha Sharma",
					role: "IT Supoort",
				},
				3: {
					name: "Bhawana Joshi",
					role: "Digital Education",
				},
				4: {
					name: "Prajwol Lamichhane",
					role: "Technology Consultant",
				},
				5: {
					name: "Utsav Mudbhari",
					role: "Cloud Solutions",
				},
				6: {
					name: "Urja Mudbhari",
					role: "Custom Software",
				},
			},
			title: "Our Tech Advisors",
			bookingPrompt: "Book Our Tech Advisor",
			selectButton: "Book Now",
			bookingWith: "Book with",
			yourName: "Your name",
			yourEmail: "Your email",
			time: "Time",
			confirmBooking: "Confirm Booking",
			cancel: "Cancel",
			pleaseFill: "Please provide both name and email.",
			bookingSuccess: "Booking successful!",
			bookingFail: "Booking failed:",
			error: "Error:",
			noAdvisors: "No advisors found.",
			loading: "Loading advisors...",
			selectedAdvisor: "Selected advisor: ",
		},
		advisorProfile: {
			loading: "Loading advisor info...",
			about: "About",
			bookAppointment: "Book an Appointment",
			namePlaceholder: "Your Name",
			emailPlaceholder: "Your Email",
			selectTime: "Select Time",
			confirm: "Confirm Booking",
			success: "Appointment booked successfully!",
			error: " Failed to book appointment. Please try again.",
			fillAll: " Please fill all fields.",
			noBio: "No biography available at the moment.",
		},
		about: {
			title: "About Us",
			description:
				"We are committed to empowering Māori individuals and businesses through technology, guided by the values of manaakitanga, whanaungatanga, and kaitiakitanga. Our mission is to bridge the digital divide and foster innovation in Aotearoa.",
		},
		testimonialHeading: "What Our Community Says",
		testimonials: [
			{
				quote:
					"WhānauTech guided our marae through digital transformation with compassion and clarity.",
				name: "Aroha Ngatai",
				role: "Community Leader",
			},
			{
				quote:
					"The workshops boosted our team’s confidence in using new tech tools effectively.",
				name: "Wiremu Rangi",
				role: "Tech Coordinator",
			},
			{
				quote:
					"I never thought tech could feel this culturally grounded and empowering.",
				name: "Hine Te Whaiti",
				role: "Business Owner",
			},
			{
				quote:
					"The workshops boosted our team’s confidence in using new tech tools effectively.",
				name: "Reshma Lamichhane",
				role: "Tech Coordinator",
			},
			{
				quote:
					"I never thought tech could feel this culturally grounded and empowering.",
				name: "Hine Te Whaiti",
				role: "Business Owner",
			},
		],
		contact: {
			title: "Our Contact Form",
			form: {
				nameLabel: "Name",
				namePlaceholder: "Your Name",
				emailLabel: "Email",
				emailPlaceholder: "Your Email",
				messageLabel: "Message",
				messagePlaceholder: "Your Message",
			},
		},
		chatbot: {
			title: "WhānauTech Chatbot",
			greeting: "Kia ora! How can I help you with WhānauTech today?",
			placeholder: "Type a message...",
			send: "Send",
			typing: "Typing...",
			error: "Sorry, I had trouble responding.",
			networkError: "Network error, please try again.",
		},
		techConsultationPage: {
			title: "Technology Consultation",
			subtitle:
				"Tailored tech advice to help your whānau or Māori business thrive in the digital world.",
			servicesTitle: "Our Services",
			whyTitle: "Why This Matters",
			whyText:
				"At WhānauTech, we believe technology should uplift and empower tangata whenua. Our consultation services are grounded in tikanga Māori and ensure that digital solutions support your kaupapa, enhance community connection, and protect your data sovereignty.",
			howTitle: "How It Works",
			steps: [
				{ icon: "📞", text: "Book a free initial kōrero" },
				{ icon: "📞", text: " Share your goals or digital challenges" },
				{ icon: "📞", text: "Receive a tailored plan" },
			],
			readyTitle: "Ready to Get Started?",
			readyText:
				"Book a consultation with one of our tech advisors and take the next step in your digital journey.",
			testimonialTitle: "What Our Whānau Say",
			testimonialQuote:
				"“WhānauTech helped us get our small kai business online. Now we’re reaching more people than ever!”",
			testimonialAuthor: "– Aroha, Kirikiriroa",
			servicesList: [
				{ icon: "💡", text: "Custom tech strategy sessions" },
				{ icon: "🌐", text: "Website & digital presence guidance" },
				{ icon: "📱", text: "App & software recommendations" },
				{ icon: "🔧", text: "Systems setup and digital toolkits" },
				{ icon: "🧠", text: "Upskilling & capability-building support" },
			],
		},
		itSupport: {
			title: "IT Support",
			subtitle:
				"Reliable and friendly IT support tailored to help Māori businesses and whānau keep their systems running smoothly.",
			subtitleMaori:
				"He tautoko hangarau pono, whakahoahoa hoki, kua whakaritea hei āwhina i ngā pakihi Māori me te whānau kia rere mārika ō rātou pūnaha.",
			supportServicesTitle: "Our Support Services",
			supportServices: [
				{ icon: "💻", text: "Troubleshooting hardware and software issues" },
				{ icon: "🔧", text: "Installation and setup of devices and networks" },
				{ icon: "🛡️", text: "Antivirus and malware protection" },
				{ icon: "⚙️", text: "System maintenance and updates" },
				{ icon: "📞", text: "Remote and onsite support options" },
			],
			whyTitle: "Why This Matters",
			whyText:
				"At WhānauTech, we believe technology should uplift and empower tangata whenua. Our IT support is personalized, responsive, and grounded in tikanga Māori, ensuring your systems are reliable so you can focus on your kaupapa.",
			howTitle: "How It Works",
			howSteps: [
				{ icon: "📞", text: "Book a free initial kōrero" },
				{ icon: "📝", text: "Share your technical issues or goals" },
				{ icon: "🎯", text: "Receive tailored IT support solutions" },
			],
			readyTitle: "Ready to Get Started?",
			readyText:
				"Contact our IT support team to keep your systems running smoothly and take the next step in your digital journey.",
			readyTextMi:
				"Whakapā mai ki tō mātou rōpū tautoko hangarau kia rere mārika ō pūnaha, kia anga whakamua i tō haerenga matihiko.",
			testimonialsTitle: "What Our Whānau Say",
			testimonials: [
				{
					quote: "WhānauTech’s IT support transformed...",
					author: "Tane, Whangārei",
				},
				{
					quote: "Their team set up our network seamlessly...",
					author: "Hine, Tauranga",
				},
				{
					quote: "Thanks to WhānauTech, our systems are secure...",
					author: "Rangi, Dunedin",
				},
			],
			contactButton: "Contact an Advisor",
		},
		digitalEducationPage: {
			title: "Digital Education",
			subtitle:
				"Empowering whānau and Māori communities with essential digital skills for today’s world.",
			bookButton: "Book a Workshop",
			workshopsTitle: "Our Workshops",
			workshops: [
				{ icon: "💻", text: "Basic computer skills" },
				{ icon: "📱", text: "Mobile device mastery" },
				{ icon: "🌐", text: "Internet safety & security" },
				{ icon: "📊", text: "Using digital tools for business" },
				{ icon: "🎥", text: "Online communication & collaboration" },
			],
			whyTitle: "Why This Matters",
			whyText:
				"Digital literacy unlocks new opportunities for our people. Our workshops are shaped by tikanga Māori and help whānau thrive in a connected, digital world.",
			howTitle: "How It Works",
			howSteps: [
				{ icon: "📞", text: "Book your free digital education session" },
				{ icon: "📝", text: "Let us know your goals or current knowledge" },
				{ icon: "🎯", text: "Attend the workshop and gain practical skills" },
			],
			readyTitle: "Ready to Learn?",
			readyText:
				"Join one of our community-based digital education workshops today.",
			testimonialsTitle: "What Our Whānau Say",
			testimonial: {
				quote:
					"Learning internet safety gave our tamariki confidence online. It’s made a huge difference for our whānau!",
				author: "Hana, Ōtautahi",
			},
		},
		cybersecurityPage: {
			title: "Cybersecurity Guidance",
			subtitle:
				"Protecting Māori businesses and whānau with expert cybersecurity advice to safeguard your digital assets.",
			contactButton: "Contact Our Cyber Team",
			servicesTitle: "Our Cybersecurity Services",
			services: [
				{ icon: "🛡️", text: "Threat assessments and audits" },
				{ icon: "🔒", text: "Secure system configurations" },
				{ icon: "📡", text: "Network security and monitoring" },
				{ icon: "🧑‍🏫", text: "Cybersecurity training for whānau" },
				{ icon: "🔍", text: "Incident response and recovery plans" },
			],
			whyTitle: "Why This Matters",
			whyText:
				"At WhānauTech, we prioritize the digital safety of tangata whenua, offering cybersecurity guidance rooted in tikanga Māori to protect your data and taonga while fostering trust and resilience.",
			howTitle: "How It Works",
			howSteps: [
				{ icon: "📞", text: "Book a free initial kōrero" },
				{ icon: "📝", text: "Share your cybersecurity concerns or goals" },
				{ icon: "🎯", text: "Receive a tailored cybersecurity plan" },
			],
			readyTitle: "Ready to Get Started?",
			readyText:
				"Contact our cybersecurity team to secure your digital assets and start your journey to a safer online presence.",
			testimonialsTitle: "What Our Whānau Say",
			testimonials: [
				{
					quote:
						"WhānauTech’s cybersecurity audit protected our business from threats. Ka rawe!",
					author: "Tia, Gisborne",
				},
				{
					quote:
						"Their training empowered our team to stay safe online. Highly recommend!",
					author: "Rawiri, Nelson",
				},
				{
					quote:
						"Thanks to WhānauTech, we have a robust plan to recover from cyber incidents!",
					author: "Kahu, Rotorua",
				},
			],
		},

		customSoftware: {
			title: "Custom Software",
			subtitle:
				"We build software that fits your kaupapa — from websites to mobile apps — tailored to Māori values, business needs, and community impact.",
			whatWeBuildTitle: "What We Can Build",
			whatWeBuild: [
				{ icon: "🌐", text: "Websites and e-commerce platforms" },
				{ icon: "📱", text: "Mobile apps (iOS & Android)" },
				{ icon: "📅", text: "Booking and scheduling systems" },
				{ icon: "🤝", text: "Community and education platforms" },
				{ icon: "📊", text: "Data dashboards and admin tools" },
			],
			whyTitle: "Why This Matters",
			whyText:
				"At WhānauTech, we create software that empowers tangata whenua, respects tikanga Māori, and supports your vision. Our solutions enhance community connection and drive meaningful impact for Māori businesses and whānau.",
			howTitle: "How It Works",
			howSteps: [
				{ icon: "📞", text: "Book a free initial kōrero" },
				{ icon: "📝", text: "Share your software needs or ideas" },
				{ icon: "🎯", text: "Receive a tailored software solution" },
			],
			readyTitle: "Ready to Get Started?",
			readyText:
				"Contact our team to start building custom software that supports your kaupapa and drives impact.",
			testimonialsTitle: "What Our Whānau Say",
			testimonials: [
				{
					quote:
						"WhānauTech turned our marae’s idea into a beautiful, easy-to-use app.",
					author: "Mereana, Ngāti Porou",
				},
				{
					quote:
						"Their custom website helped our business reach new customers. Highly recommend!",
					author: "Tama, Auckland",
				},
				{
					quote:
						"The software WhānauTech built for our community platform is a game-changer!",
					author: "Rewi, Hamilton",
				},
			],
			ctaButton: "Contact an Advisor",
		},
		cloudSolutions: {
			title: "Cloud Solutions",
			subtitle:
				"Enabling Māori businesses and whānau to work flexibly and securely from anywhere using modern cloud technology.",
			subtitleMi:
				"He whakaahei i ngā pakihi Māori me te whānau kia mahi ngāwari, haumaru hoki mai i ngā wāhi katoa mā te hangarau kapua hou.",
			whatWeOfferTitle: "What We Offer",
			whatWeOffer: [
				{ icon: "☁️", text: "Whakanekehanga kapua me te whakarite" },
				{
					icon: "📧",
					text: "Otinga īmēra me te rokiroki (Google Workspace, Microsoft 365)",
				},
				{ icon: "🤝", text: "Taputapu mahi tahi mamao" },
				{ icon: "💾", text: "Pūrua raraunga me te whakaora" },
				{ icon: "🧑‍🏫", text: "Whakangungu me te tautoko haere tonu" },
			],
			whyTitle: "Why This Matters",
			whyText:
				"At WhānauTech, our cloud solutions provide agility, scalability, and security, empowering Māori enterprises and whānau to thrive in a connected world while respecting tikanga Māori and data sovereignty.",
			whyTextMi:
				"I WhānauTech, ka whakarato ā mātou otinga kapua i te ngāwari, te tauine, me te haumarutanga, e whakakaha ana i ngā hinonga Māori me te whānau kia angitū i te ao hono, me te whakaute i te tikanga Māori me te mana motuhake raraunga.",
			howTitle: "How It Works",
			howSteps: [
				{ icon: "📞", text: "Book a free initial kōrero" },
				{ icon: "📝", text: "Share your cloud needs or goals" },
				{ icon: "🎯", text: "Receive a tailored cloud solution" },
			],
			readyTitle: "Ready to Get Started?",
			readyText:
				"Contact our cloud team to unlock flexible, secure solutions for your Māori business or whānau.",
			readyTextMi:
				"Whakapā mai ki tō mātou rōpū kapua ki te whakawātea i ngā otinga ngāwari, haumaru mō tō pakihi Māori, whānau rānei.",
			testimonialsTitle: "What Our Whānau Say",
			testimonials: [
				{
					quote:
						"Moving to the cloud with WhānauTech made our invoicing and video calls so much easier!",
					author: "Wiremu, Ōtaki",
				},
				{
					quote:
						"Their cloud solutions gave our business the flexibility to work from anywhere. Ka rawe!",
					author: "Ana, Christchurch",
				},
				{
					quote:
						"WhānauTech’s support for our cloud setup was seamless and empowering!",
					author: "Hemi, Palmerston North",
				},
			],
			ctaButton: "Contact an Advisor",
		},

		footer: "© 2025 WhānauTech. Aroha mai, aroha atu.",
	},

	mi: {
		siteName: "WhānauTech",
		nav: {
			home: "Kāinga",
			services: "Ngā Ratonga",
			about: "Mō Mātou",
			contact: "Whakapā",
		},
		languageToggle: {
			en: "Pākehā",
			mi: "Māori",
			separator: "/",
		},
		hero: {
			title: "Whakawhiti ki te Ao Hangarau",
			messages: [
				"Te whakamana i ngā hapori Māori mā te tohutohu hangarau me te mātauranga.",
				"Te hono i te whānau ki ngā rongoā hangarau o ēnei rā.",
				"Te tautoko i te auahatanga taketake mā ngā taputapu matihiko.",
			],
			button: "Whakapā Mai",
		},
		services: {
			title: "Ā Mātou Ratonga",
			items: [
				{
					title: "Tohutohu Hangarau",
					description:
						"Ngā tohutohu āta whakarite hei āwhina i ngā pakihi Māori ki te whakamahi hangarau mō te tipu.",
				},
				{
					title: "Mātauranga Matihiko",
					description:
						"Ngā awheawhe me ngā whakangungu hei whakawhanake i ngā pūkenga hangarau i roto i ō mātou hapori.",
				},
				{
					title: "Tautoko IT",
					description: "Te tautoko pono kia mau tonu te rere o ō pūnaha.",
				},
				{
					title: "Tohutohu Haumarutanga Matihiko",
					description:
						"Te tiaki i ngā raraunga Māori mā ngā rautaki haumarutanga hou.",
				},
				{
					title: "Rongoā Kapua",
					description:
						"Te whakarite i ngā taiao mahi māmā mā ngā taputapu kapua.",
				},
				{
					title: "Papatono Ritenga",
					description:
						"Hangaia ngā taputapu ritenga e hāngai ana ki tō kaupapa.",
				},
			],
		},
		advisors: {
			labelsById: {
				1: {
					name: "Bijeta Niraula",
					role: "Tohutohu Haumarutanga Matihiko", // Cybersecurity Guidance
				},
				2: {
					name: "Diksha Sharma",
					role: "Tautoko IT", // IT Support
				},
				3: {
					name: "Bhawana Joshi",
					role: "Mātauranga Matihiko", // Digital Education
				},
				4: {
					name: "Prajwol Lamichhane",
					role: "Kaitohutohu Hangarau", // Technology Consultant
				},
				5: {
					name: "Utsav Mudbhari",
					role: "Rongoā Kapua", // Cloud Solutions
				},
				6: {
					name: "Urja Mudbhari",
					role: "Papatono Ritenga", // Custom Software
				},
			},
			title: "Ā Mātou Kaitohutohu Hangarau",
			bookingPrompt: "Tūtohu i tō Kaitohutohu Hangarau",
			selectButton: "Pukapuka",
			bookingWith: "Pukapuka me",
			yourName: "Tō ingoa",
			yourEmail: "Tō īmēra",
			time: "Wā",
			confirmBooking: "Whakaū Pukapuka",
			cancel: "Whakakore",
			pleaseFill: "Tēnā koa, whakakī i tō ingoa me tō īmēra.",
			bookingSuccess: "Kua angitū te pukapuka!",
			bookingFail: "I rahua te tūtohu:",
			error: "Hapa:",
			noAdvisors: "Kāore he kaitohutohu i kitea.",
			loading: "E tiki ana i ngā kaitohutohu...",
			selectedAdvisor: "Kaitohutohu kua tīpakohia: ",
		},
		advisorProfile: {
			loading: "E tiki ana i ngā pārongo kaitohutohu...",
			about: "Mōna",
			bookAppointment: "Pukapuka Hui",
			namePlaceholder: "Tō Ingoa",
			emailPlaceholder: "Tō Īmēra",
			selectTime: "Kōwhiria te Wā",
			confirm: "Whakaū Pukapuka",
			success: " Kua angitū te pukapuka!",
			error: "I rahua te pukapuka. Ngana anō.",
			fillAll: "Tēnā koa, whakakī i ngā kōrero katoa.",
			noBio: "Kāore he kōrero koiora i tēnei wā.",
		},
		about: {
			title: "Mō Mātou",
			description:
				"E ū ana mātou ki te whakamana i ngā tāngata me ngā pakihi Māori mā te hangarau, ārahi ana i ngā uara o manaakitanga, whanaungatanga, me kaitiakitanga. Ko tā mātou whāinga he whakaatu i te āputa matihiko me te whakatairanga auahatanga i Aotearoa.",
		},
		testimonialHeading: "Ngā Kōrero a tō Tātou Hapori",
		testimonials: [
			{
				quote:
					"I ārahi a WhānauTech i tō mātou marae ki te hurihanga matihiko me te ngākau aroha me te mārama.",
				name: "Aroha Ngatai",
				role: "Kaiārahi Hapori",
			},
			{
				quote:
					"Nā ngā awheawhe i whakapiki te māia o tō mātou kapa ki te whakamahi i ngā taputapu hangarau hou.",
				name: "Wiremu Rangi",
				role: "Kairuruku Hangarau",
			},
			{
				quote:
					"Kāore au i whakaaro ka taea te hono o te hangarau ki te ahurea i tēnei āhua whakamana.",
				name: "Hine Te Whaiti",
				role: "Rangatōpū Pakihi",
			},
			{
				quote:
					"Nā ngā awheawhe i whakapiki te māia o tō mātou kapa ki te whakamahi i ngā taputapu hangarau hou.",
				name: "Reshma Lamichhane",
				role: "Kairuruku Hangarau",
			},
			{
				quote:
					"Kāore au i whakaaro ka taea te hono o te hangarau ki te ahurea i tēnei āhua whakamana.",
				name: "Hine Te Whaiti",
				role: "Rangatōpū Pakihi",
			},
		],
		contact: {
			title: "Tā Mātou Puka Whakapā",
			form: {
				nameLabel: "Ingoa",
				namePlaceholder: "Tō Ingoa",
				emailLabel: "Īmēra",
				emailPlaceholder: "Tō Īmēra",
				messageLabel: "Karere",
				messagePlaceholder: "Tō Karere",
			},
		},
		chatbot: {
			title: "Kōrerorero WhānauTech",
			greeting:
				"Kia ora! Me pēhea ahau e āwhina ai i a koe ki WhānauTech i tēnei rā?",
			placeholder: "Tuhia he karere...",
			send: "Tukua",
			typing: "Kei te tuhi...",
			error: "Aroha mai, i raru te urupare.",
			networkError: "Hapa whatunga, ngana anō.",
		},
		techConsultationPage: {
			title: "Tohutohu Hangarau",
			subtitle:
				"He tohutohu hangarau kua whakaritea hei āwhina i tō whānau, pakihi Māori hoki, kia angitū i te ao matihiko.",
			servicesTitle: "Ā Mātou Ratonga",
			whyTitle: "He Aha Tēnei e Hirahira Ai",
			whyText:
				"I WhānauTech, e whakapono ana mātou me whai hua te hangarau ki te whakakaha i te tangata whenua. E ū ana ā mātou ratonga ki te tikanga Māori, kia ū hoki ngā otinga matihiko ki tō kaupapa, āwhina i te hononga ā-hapori, me te tiaki i ō raraunga.",
			howTitle: "Me Pēhea te Mahi",
			steps: [
				{ icon: "📞", text: " Tono he kōrero tuatahi kore utu" },
				{ icon: "📝", text: " Tohaina ō whāinga, wero rānei" },
				{ icon: "🎯", text: " Ka whiwhi koe i tētahi mahere kua whakaritea" },
			],
			readyTitle: "Kua Reri Koe?",
			readyText:
				"Tono i tētahi hui me tētahi kaitohutohu hangarau kia anga whakamua i tō haerenga matihiko.",
			testimonialTitle: "Ngā Kōrero a te Iwi",
			testimonialQuote:
				"“I āwhina a WhānauTech i a mātou ki te kawe i tā mātou pakihi kai iti ki te ipurangi. Inaianei, he tokomaha kē atu ngā tāngata ka tae mai!”",
			testimonialAuthor: "– Aroha, Kirikiriroa",
			servicesList: [
				{ icon: "💡", text: "Ngā wānanga rautaki hangarau ritenga" },
				{ icon: "🌐", text: "Ārahi mō te paetukutuku me te noho ā-ipurangi" },
				{ icon: "📱", text: "Ngā tūtohunga taupānga me ngā pūmanawa" },
				{ icon: "🔧", text: "Te whakarite pūnaha me ngā taputapu matihiko" },
				{
					icon: "🧠",
					text: "Tautoko mō te whakawhanake pūkenga me te whakapakari āheinga",
				},
			],
		},
		itSupport: {
			title: "Tautoko Hangarau",
			subtitle:
				"He tautoko hangarau pono, whakahoahoa hoki, kua whakaritea hei āwhina i ngā pakihi Māori me te whānau kia rere mārika ō rātou pūnaha.",
			subtitleMaori:
				"He tautoko hangarau pono, whakahoahoa hoki, kua whakaritea hei āwhina i ngā pakihi Māori me te whānau kia rere mārika ō rātou pūnaha.",
			supportServicesTitle: "Ā Mātou Ratonga Tautoko",
			supportServices: [
				{
					icon: "💻",
					text: "Whakatika i ngā raruraru taputapu me te pūmanawa",
				},
				{
					icon: "🔧",
					text: "Whakaurunga me te whakarite taputapu me ngā whatunga",
				},
				{ icon: "🛡️", text: "Parenga wheori me te kino pūmanawa" },
				{ icon: "⚙️", text: "Tiaki pūnaha me ngā whakahou" },
				{ icon: "📞", text: "Kōwhiringa tautoko mamao me te pae" },
			],
			whyTitle: "He Aha Tēnei e Hirahira Ai",
			whyText:
				"I WhānauTech, e whakapono ana mātou me whai hua te hangarau ki te whakakaha i te tangata whenua. E ū ana ā mātou tautoko ki te tikanga Māori, kia pono ō pūnaha kia tūhono ai koe ki tō kaupapa.",
			howTitle: "Me Pēhea te Mahi",
			howSteps: [
				{ icon: "📞", text: "Book a free initial kōrero" },
				{ icon: "📝", text: "Share your technical issues or goals" },
				{ icon: "🎯", text: "Receive tailored IT support solutions" },
			],
			readyTitle: "Kua Reri Koe?",
			readyText:
				"Whakapā mai ki tō mātou rōpū tautoko hangarau kia rere mārika ō pūnaha, kia anga whakamua i tō haerenga matihiko.",
			testimonialsTitle: "Ngā Kōrero a te Iwi",
			testimonials: [
				{
					quote: "I āwhina te tautoko a WhānauTech...",
					author: "Tane, Whangārei",
				},
				{
					quote: "I whakatakotohia tō mātou whatunga...",
					author: "Hine, Tauranga",
				},
				{ quote: "Kua haumaru ō mātou pūnaha...", author: "Rangi, Dunedin" },
			],
			contactButton: "Whakapā atu ki tētahi Kaitohutohu",
		},

		digitalEducationPage: {
			title: "Mātauranga Matihiko",
			subtitle:
				"Hei whakakaha i te whānau me te iwi Māori mā te mātauranga matihiko.",
			bookButton: "Tono i tētahi Awheawhe",
			workshopsTitle: "Ā Mātou Awheawhe",
			workshops: [
				{ icon: "💻", text: "Ngā pūkenga rorohiko tuatahi" },
				{ icon: "📱", text: "Te whakamahi i ngā pūrere pūkoro" },
				{ icon: "🌐", text: "Haumarutanga ipurangi" },
				{ icon: "📊", text: "Taputapu matihiko mō te pakihi" },
				{ icon: "🎥", text: "Te kōrero me te mahi tahi ā-ipurangi" },
			],
			whyTitle: "He Aha Tēnei e Hirahira Ai",
			whyText:
				"Mā te mātauranga matihiko e whakatuwhera ngā ara hou mō te iwi. E ārahi ana ā mātou awheawhe e te tikanga Māori, ā, hei painga mō te whānau i te ao matihiko.",
			howTitle: "Me Pēhea te Mahi",
			howSteps: [
				{ icon: "📞", text: "Tono he awheawhe kore utu" },
				{ icon: "📝", text: "Kōrero mai mō ō whāinga me ō mōhiotanga" },
				{ icon: "🎯", text: "Haere ki te awheawhe, ka ako i ngā pūkenga" },
			],
			readyTitle: "Kua Reri koe ki te Ako?",
			readyText:
				"Whakauru mai ki tētahi o ā mātou awheawhe mātauranga matihiko ā-hapori.",
			testimonialsTitle: "Ngā Kōrero a te Iwi",
			testimonial: {
				quote:
					"I whakawhiwhia aku tamariki ki te māia ipurangi mā te ako i te haumarutanga ipurangi. He nui te painga ki tō mātou whānau!",
				author: "Hana, Ōtautahi",
			},
		},
		cybersecurityPage: {
			title: "Arataki Haumarutanga Ipurangi",
			subtitle:
				"He tiaki i ngā pakihi Māori me te whānau me ngā tohutohu haumarutanga ipurangi hei tiaki i ō rawa matihiko.",
			contactButton: "Whakapā Mai ki Tō Mātou Rōpū Haumarutanga",
			servicesTitle: "Ā Mātou Ratonga Haumarutanga",
			services: [
				{ icon: "🛡️", text: "Aromatawai whakatumatuma me ngā arotake" },
				{ icon: "🔒", text: "Whirihoranga pūnaha haumaru" },
				{ icon: "📡", text: "Haumarutanga whatunga me te aroturuki" },
				{ icon: "🧑‍🏫", text: "Whakangungu haumarutanga ipurangi mō te whānau" },
				{ icon: "🔍", text: "Whakautu āhuatanga me ngā mahere whakaora" },
			],
			whyTitle: "He Aha Tēnei e Hirahira Ai",
			whyText:
				"I WhānauTech, ka whakanui mātou i te haumarutanga matihiko o te tangata whenua, me ngā arataki haumarutanga e pūtake ana ki te tikanga Māori hei tiaki i ō raraunga me ō taonga, me te whakapakari i te whakawhirinaki me te pakari.",
			howTitle: "Me Pēhea te Mahi",
			howSteps: [
				{ icon: "📞", text: "Tono he kōrero tuatahi kore utu" },
				{
					icon: "📝",
					text: "Tohaina ō māharahara haumarutanga, whāinga rānei",
				},
				{
					icon: "🎯",
					text: "Ka whiwhi koe i tētahi mahere haumarutanga kua whakaritea",
				},
			],
			readyTitle: "Kua Reri Koe?",
			readyText:
				"Whakapā mai ki tō mātou rōpū haumarutanga ki te tiaki i ō rawa matihiko me te tīmata i tō haerenga ki te ao ipurangi haumaru.",
			testimonialsTitle: "Ngā Kōrero a te Iwi",
			testimonials: [
				{
					quote:
						"I ārai te arotake haumarutanga a WhānauTech i tō mātou pakihi i ngā mōrearea. Ka rawe!",
					author: "Tia, Tūranga-nui-a-Kiwa",
				},
				{
					quote:
						"Nā tā rātou whakangungu i āhei ai mātou ki te noho haumaru ā-ipurangi. Ka tūtohu mātou!",
					author: "Rawiri, Whakatū",
				},
				{
					quote:
						"Nā WhānauTech, kei a mātou he mahere kaha mō ngā tukinga ipurangi!",
					author: "Kahu, Rotorua",
				},
			],
		},

		customSoftware: {
			title: "Pūmanawa Whakarite",
			subtitle:
				"Ka hanga mātou i ngā pūmanawa e hāngai ana ki tō kaupapa — mai i ngā paetukutuku ki ngā taupānga pūkoro — kua whakaritea ki ngā uara Māori, ngā hiahia pakihi, me te pānga hapori.",
			whatWeBuildTitle: "He Aha tā Mātou e Hanga Ai",
			whatWeBuild: [
				{ icon: "🌐", text: "Paetukutuku me ngā papa hokohoko" },
				{ icon: "📱", text: "Taupānga pūkoro (iOS me Android)" },
				{ icon: "📅", text: "Pūnaha tono me te whakarite wā" },
				{ icon: "🤝", text: "Papa hapori me te mātauranga" },
				{ icon: "📊", text: "Papatohu raraunga me ngā taputapu whakahaere" },
			],
			whyTitle: "He Aha Tēnei e Hirahira Ai",
			whyText:
				"I WhānauTech, ka hanga mātou i ngā pūmanawa e whakakaha ana i te tangata whenua, e whakaute ana i te tikanga Māori, e tautoko ana i tō tirohanga. Ka whakapakari ā mātou otinga i te hononga hapori me te whai pānga nui ki ngā pakihi Māori me te whānau.",
			howTitle: "Me Pēhea te Mahi",
			howSteps: [
				{ icon: "📞", text: "Tono he kōrero tuatahi kore utu" },
				{ icon: "📝", text: "Tohaina ō hiahia pūmanawa, whakaaro rānei" },
				{
					icon: "🎯",
					text: "Ka whiwhi koe i tētahi otinga pūmanawa kua whakaritea",
				},
			],
			readyTitle: "Kua Reri Koe?",
			readyText:
				"Whakapā mai ki tō mātou rōpū ki te tīmata i te hanga pūmanawa whakarite e tautoko ana i tō kaupapa me te whai pānga.",
			testimonialsTitle: "Ngā Kōrero a te Iwi",
			testimonials: [
				{
					quote:
						"I hurahia e WhānauTech te whakaaro o tō mātou marae hei taupānga ātaahua, ngāwari ki te whakamahi.",
					author: "Mereana, Ngāti Porou",
				},
				{
					quote:
						"Nā tā rātou paetukutuku whakarite i tae atu ā mātou pakihi ki ngā kiritaki hōu. Ka tūtohu nui!",
					author: "Tama, Tāmaki Makaurau",
				},
				{
					quote:
						"Ko te pūmanawa i hangaia e WhānauTech mō tō mātou papa hapori he mea whakarerekē kē!",
					author: "Rewi, Kirikiriroa",
				},
			],
			ctaButton: "Whakapā atu ki tētahi Kaitohutohu",
		},
		cloudSolutions: {
			title: "Otinga Kapua",
			subtitle:
				"He whakaahei i ngā pakihi Māori me te whānau kia mahi ngāwari, haumaru hoki mai i ngā wāhi katoa mā te hangarau kapua hou.",
			subtitleMi:
				"He whakaahei i ngā pakihi Māori me te whānau kia mahi ngāwari, haumaru hoki mai i ngā wāhi katoa mā te hangarau kapua hou.",
			whatWeOfferTitle: "He Aha tā Mātou e Whakarato Ai",
			whatWeOffer: [
				{ icon: "☁️", text: "Whakanekehanga kapua me te whakarite" },
				{
					icon: "📧",
					text: "Otinga īmēra me te rokiroki (Google Workspace, Microsoft 365)",
				},
				{ icon: "🤝", text: "Taputapu mahi tahi mamao" },
				{ icon: "💾", text: "Pūrua raraunga me te whakaora" },
				{ icon: "🧑‍🏫", text: "Whakangungu me te tautoko haere tonu" },
			],
			whyTitle: "He Aha Tēnei e Hirahira Ai",
			whyText:
				"I WhānauTech, ka whakarato ā mātou otinga kapua i te ngāwari, te tauine, me te haumarutanga, e whakakaha ana i ngā hinonga Māori me te whānau kia angitū i te ao hono, me te whakaute i te tikanga Māori me te mana motuhake raraunga.",
			whyTextMi:
				"I WhānauTech, ka whakarato ā mātou otinga kapua i te ngāwari, te tauine, me te haumarutanga, e whakakaha ana i ngā hinonga Māori me te whānau kia angitū i te ao hono, me te whakaute i te tikanga Māori me te mana motuhake raraunga.",
			howTitle: "Me Pēhea te Mahi",
			howSteps: [
				{ icon: "📞", text: "Tono he kōrero tuatahi kore utu" },
				{ icon: "📝", text: "Tohaina ō hiahia kapua, whāinga rānei" },
				{
					icon: "🎯",
					text: "Ka whiwhi koe i tētahi otinga kapua kua whakaritea",
				},
			],
			readyTitle: "Kua Reri Koe?",
			readyText:
				"Whakapā mai ki tō mātou rōpū kapua ki te whakawātea i ngā otinga ngāwari, haumaru mō tō pakihi Māori, whānau rānei.",
			readyTextMi:
				"Whakapā mai ki tō mātou rōpū kapua ki te whakawātea i ngā otinga ngāwari, haumaru mō tō pakihi Māori, whānau rānei.",
			testimonialsTitle: "Ngā Kōrero a te Iwi",
			testimonials: [
				{
					quote:
						"Ko te whakawhitinga ki te kapua me WhānauTech nāna i māmā ake te whakahaere nama me ngā karanga ataata!",
					author: "Wiremu, Ōtaki",
				},
				{
					quote:
						"Nā ā rātou otinga kapua i āhei ai tō mātou pakihi ki te mahi i ngā wāhi katoa. Ka rawe!",
					author: "Ana, Christchurch",
				},
				{
					quote:
						"He tino tautoko, he māmā hoki te whakarite kapua a WhānauTech mō mātou!",
					author: "Hemi, Palmerston North",
				},
			],
			ctaButton: "Whakapā atu ki tētahi Kaitohutohu",
		},

		footer: "© 2025 WhānauTech. Aroha mai, aroha atu.",
	},
};

export default translations;
