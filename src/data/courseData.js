export const courses = [
	{
		id: "tajwid",
		slug: "tajwid",
		name: "Tajwid",
		tagline: "Master the Art of Quranic Recitation",
		color: "from-emerald-700 to-emerald-500",
		badge: "Foundational",
		badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
		description:
			"Tajwid is the set of rules governing the correct pronunciation of the Quran. Rooted in centuries of scholarly tradition, this course will guide you through every rule — from the properties of individual letters to complex recitation patterns — so that you can honour the words of Allah as they were revealed.",
		videoId: null,
		videoNote: "Instructor introduction video — coming soon.",
		level: "Beginner",
		duration: "12 Weeks",
		lessons: 24,
		language: "English",
		certificate: true,
		whatYouLearn: [
			"Understand the Makharij al-Huruf — the precise articulation points of every Arabic letter",
			"Apply the four categories of Noon Saakin and Tanwin: Idgham, Iqlab, Ikhfa and Izhar",
			"Recognise and recite all Madd (elongation) types with correct measure",
			"Master Qalqalah (echoing) letters and their varying degrees",
			"Read with correct Waqf (stopping) and Ibtida (resumption) rules",
			"Distinguish Tafkheem (heavy) and Tarqeeq (light) pronunciation of letters",
			"Apply the rules of Laam in the divine name Allah",
			"Recite the Quran with the standard Hafs 'an 'Asim transmission",
		],
		curriculum: [
			{
				module: "Module 1 — Foundations",
				lessons: [
					"Introduction to Tajwid: History and Importance",
					"The Arabic Alphabet: A Recitation Perspective",
					"Makharij al-Huruf: Throat Letters (Halq)",
					"Makharij al-Huruf: Tongue Letters (Lisan)",
					"Makharij al-Huruf: Lip and Nasal Letters",
				],
			},
			{
				module: "Module 2 — Noon & Meem Rules",
				lessons: [
					"Noon Saakin: Izhar al-Halqi",
					"Noon Saakin: Idgham with and without Ghunnah",
					"Noon Saakin: Iqlab",
					"Noon Saakin: Ikhfa Haqiqi",
					"Meem Saakin: Ikhfa Shafawi, Idgham Shafawi, and Izhar Shafawi",
				],
			},
			{
				module: "Module 3 — Madd (Elongation)",
				lessons: [
					"Madd Asli (Natural Elongation)",
					"Madd Badal, Madd Iwad, Madd Tamkin",
					"Madd Muttasil and Madd Munfasil",
					"Madd Lazim: Harfi and Kalimi",
					"Madd Lin and Madd Arid Lissukun",
				],
			},
			{
				module: "Module 4 — Advanced Rules",
				lessons: [
					"Qalqalah: Letters, Levels and Practice",
					"Tafkheem and Tarqeeq: Heavy and Light Letters",
					"Laam in Allah and the Rules of Ra",
					"Waqf and Ibtida: Stopping Signs Explained",
					"Full Recitation Practice: Juz Amma",
				],
			},
		],
		prerequisites: [
			"Basic familiarity with the Arabic alphabet (letters and vowels)",
			"No prior Tajwid knowledge required",
			"A printed or digital copy of the Quran is recommended",
		],
		instructor: {
			name: "Sheikh Yusuf al-Rashid",
			title: "Certified Quran Recitation Instructor",
			bio: "Sheikh Yusuf holds an Ijaza in the recitation of the Quran via the Hafs 'an 'Asim transmission, granted by scholars in Madinah. He has been teaching Tajwid for over fifteen years to students across Europe and the Arab world.",
			initials: "YR",
		},
		faq: [
			{
				q: "Do I need to know Arabic to take this course?",
				a: "You need only basic familiarity with Arabic letters and short vowels. Full Arabic fluency is not required.",
			},
			{
				q: "How long are the lessons?",
				a: "Each lesson is between 20 and 40 minutes, designed to fit around a busy schedule.",
			},
			{
				q: "Will I receive a certificate?",
				a: "Yes. Students who complete all modules and a final assessment receive a certificate of completion.",
			},
		],
	},
	{
		id: "tafsir",
		slug: "tafsir",
		name: "Tafsir",
		tagline: "Understand the Quran as It Was Meant to Be Understood",
		color: "from-teal-700 to-teal-500",
		badge: "Intermediate",
		badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
		description:
			"Tafsir is the scholarly discipline of Quranic exegesis — the systematic explanation of its verses. This course draws on the classical tradition to unpack the historical context, linguistic depth, and theological meaning of selected Surahs, equipping you to read the Quran with true comprehension.",
		videoId: null,
		videoNote: "Instructor introduction video — coming soon.",
		level: "Intermediate",
		duration: "16 Weeks",
		lessons: 32,
		language: "English",
		certificate: true,
		whatYouLearn: [
			"Understand the Asbab al-Nuzul — the occasions and contexts of revelation",
			"Apply the classical principles of Tafsir: bil-Ma'thur and bil-Ra'y",
			"Analyse the linguistic and rhetorical features of Quranic Arabic",
			"Study the Tafsir of the 30th Juz (Juz Amma) in full",
			"Explore the theological themes of selected Medinan and Makkan Surahs",
			"Reference major classical commentaries including Ibn Kathir and al-Tabari",
			"Identify abrogated and abrogating verses (Nasikh wal-Mansukh)",
			"Develop a methodology for personal reflection (Tadabbur) on Quranic verses",
		],
		curriculum: [
			{
				module: "Module 1 — Introduction to the Sciences of the Quran",
				lessons: [
					"What is Tafsir? History and Schools",
					"Revelation: Makki and Madani Surahs",
					"Asbab al-Nuzul: The Occasions of Revelation",
					"Nasikh wal-Mansukh: Abrogation in the Quran",
					"Overview of Major Classical Commentaries",
				],
			},
			{
				module: "Module 2 — Tafsir of Juz Amma",
				lessons: [
					"Surah al-Fatiha: The Opening — A Deep Dive",
					"Surah al-Ikhlas, al-Falaq and al-Nas",
					"Surah al-Kawthar, al-Nasr and al-Masad",
					"Surah al-Asr, al-Humazah and al-Fil",
					"Surah al-Qiyamah and al-Insan",
				],
			},
			{
				module: "Module 3 — Selected Makkan Surahs",
				lessons: [
					"Surah Yasin: The Heart of the Quran",
					"Surah al-Rahman: The Favours of Allah",
					"Surah al-Waqiah: The Inevitable Event",
					"Surah al-Mulk: The Sovereignty",
					"Surah al-Kahf: Lessons in Faith and Trial",
				],
			},
			{
				module: "Module 4 — Thematic Studies",
				lessons: [
					"Quranic Stories (Qasas): Purpose and Patterns",
					"The Attributes of Allah in the Quran",
					"Justice and Ethics in Quranic Law",
					"The Quran on the Afterlife: Jannah and Jahannam",
					"Tadabbur: A Personal Methodology for Reflection",
				],
			},
		],
		prerequisites: [
			"Completion of a basic Quran reading course, or ability to read Arabic with vowels",
			"Familiarity with the basic pillars of Islam",
			"A copy of a reliable English Quran translation is recommended",
		],
		instructor: {
			name: "Dr. Aisha Karimi",
			title: "Islamic Studies Scholar & Lecturer",
			bio: "Dr. Aisha holds a PhD in Islamic Studies with a specialisation in Quranic Hermeneutics from the University of Jordan. She has taught Tafsir at the undergraduate level for over a decade and is known for making classical scholarship accessible to modern audiences.",
			initials: "AK",
		},
		faq: [
			{
				q: "Is this course suitable for non-Arabic speakers?",
				a: "Absolutely. All lessons are in English. References to Arabic terms are fully explained.",
			},
			{
				q: "Which translation of the Quran do you recommend?",
				a: "We recommend the translation by Dr. Mustafa Khattab (The Clear Quran) for its clarity and accuracy.",
			},
			{
				q: "Can I follow along if I haven't done the Tajwid course?",
				a: "Yes. This course focuses on meaning and context, not recitation rules. Both courses complement each other.",
			},
		],
	},
	{
		id: "memorisation",
		slug: "memorisation",
		name: "Memorisation",
		tagline: "Carry the Words of Allah in Your Heart",
		color: "from-amber-600 to-yellow-500",
		badge: "All Levels",
		badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
		description:
			"Hifz — the memorisation of the Quran — is one of the most noble acts a Muslim can undertake. This structured programme guides you from your very first verse to completing the entire Juz Amma, using proven techniques for retention, revision and consistency, all under the supervision of qualified teachers.",
		videoId: null,
		videoNote: "Instructor introduction video — coming soon.",
		level: "All Levels",
		duration: "Ongoing",
		lessons: 40,
		language: "English & Arabic",
		certificate: true,
		whatYouLearn: [
			"Memorise the full 30th Juz (Juz Amma) with correct pronunciation",
			"Apply the Tikrar (repetition) method used by traditional Hifz schools",
			"Build a daily revision schedule that prevents forgetting",
			"Use the Linking technique to connect verses and surahs in memory",
			"Learn alongside a personal Quran teacher (Muallim) for correction and accountability",
			"Understand the meaning of each surah to reinforce memorisation",
			"Track your progress with weekly milestone assessments",
			"Develop spiritual discipline and consistency through structured practice",
		],
		curriculum: [
			{
				module: "Phase 1 — Orientation (Weeks 1–2)",
				lessons: [
					"Introduction to Hifz: Etiquettes and Intentions",
					"Setting Up Your Daily Memorisation Routine",
					"The Tikrar Method: How Repetition Builds Memory",
					"Understanding the Mushaf: Layout and Divisions",
					"Your First Verses: Surah al-Nas to Surah al-Zalzalah",
				],
			},
			{
				module: "Phase 2 — Juz Amma: First Half (Weeks 3–8)",
				lessons: [
					"Surahs al-Bayyinah to al-Qiyamah",
					"Surah al-Muddaththir and al-Muzzammil",
					"Surah al-Jinn and Surah Nuh",
					"Surah al-Maarij and Surah al-Haqqah",
					"Weekly Revision: Consolidating New Memorisation",
				],
			},
			{
				module: "Phase 3 — Juz Amma: Second Half (Weeks 9–16)",
				lessons: [
					"Surah al-Qalam, al-Mulk (first 15 verses)",
					"Surah al-Tahrim and al-Talaq",
					"Surah al-Taghabun and al-Munafiqun",
					"Surah al-Jumuah and al-Saff",
					"Surah al-Mumtahinah and al-Hashr",
				],
			},
			{
				module: "Phase 4 — Revision & Completion",
				lessons: [
					"Intensive Revision: Full Juz Amma",
					"Common Mutashabihat: Similar Verse Pairs",
					"Recitation Test: Surah by Surah Assessment",
					"Spiritual Reflections on Completing the Juz",
					"Planning Ahead: Extending Your Hifz Journey",
				],
			},
		],
		prerequisites: [
			"Ability to read Arabic with vowels (harakat)",
			"Completion of a basic Tajwid course is strongly recommended",
			"Commitment of at least 30 minutes per day",
		],
		instructor: {
			name: "Ustadh Ibrahim Hassan",
			title: "Hafiz & Quran Teacher",
			bio: "Ustadh Ibrahim completed the memorisation of the Quran at the age of fourteen under the guidance of his father, a scholar in Cairo. He has since taught Hifz to over two hundred students internationally, specialising in techniques for adult learners.",
			initials: "IH",
		},
		faq: [
			{
				q: "Is it too late to start memorising as an adult?",
				a: "Never. While children may memorise faster, adults have focus and motivation. Many of our most successful students began after the age of 30.",
			},
			{
				q: "How much time per day is needed?",
				a: "A minimum of 30 minutes daily is recommended. Those committing 1 hour or more will progress significantly faster.",
			},
			{
				q: "Will I have a one-on-one teacher?",
				a: "Yes. Every student is paired with a qualified Muallim who listens to recitation weekly and provides personal feedback.",
			},
		],
	},
];

export function getCourseBySlug(slug) {
	return courses.find((c) => c.slug === slug) || null;
}

export function getAdjacentCourses(slug) {
	const idx = courses.findIndex((c) => c.slug === slug);
	return {
		prev: idx > 0 ? courses[idx - 1] : null,
		next: idx < courses.length - 1 ? courses[idx + 1] : null,
	};
}
