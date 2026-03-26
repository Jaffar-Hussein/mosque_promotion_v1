import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseBySlug, getAdjacentCourses } from "../data/courseData";

/* ─── Video Player ─────────────────────────────────────── */
function VideoPlayer({ videoId, note, color }) {
	const [playing, setPlaying] = useState(false);
	const THUMB = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
	const EMBED = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

	if (!videoId) {
		return (
			<div className="w-full aspect-video rounded-2xl overflow-hidden relative border border-accentBorder dark:border-accentBorder-dark">
				{/* Course-colour tint layer */}
				<div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`} />
				<div aria-hidden="true" className="absolute inset-0 pattern-islamic opacity-20" />
				<div className="relative w-full h-full flex flex-col items-center justify-center gap-5 bg-accentBg/95 dark:bg-accentBg-dark/95">
					{/* Play ring */}
					<div className="relative">
						<div className="w-20 h-20 rounded-full bg-accentBgHover dark:bg-accentBgHover-dark flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-accentSolid dark:text-accentText-dark">
								<path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
							</svg>
						</div>
					</div>
					<div className="text-center px-6">
						<p className="font-heading font-bold text-accentTextContrast dark:text-accentTextContrast-dark text-lg">
							Video Coming Soon
						</p>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xs mx-auto leading-relaxed">
							{note}
						</p>
					</div>
					<div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
						<span className="w-2 h-2 rounded-full bg-accentSolid animate-pulse" aria-hidden="true" />
						Recording in progress — check back soon
					</div>
				</div>
			</div>
		);
	}

	if (playing) {
		return (
			<iframe
				title="Course introduction video"
				className="w-full aspect-video rounded-2xl shadow-xl"
				src={EMBED}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		);
	}

	return (
		<button
			aria-label="Play course introduction video"
			onClick={() => setPlaying(true)}
			className="group relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl focus:outline-none focus:ring-4 focus:ring-accentBorder"
		>
			<img src={THUMB} alt="Course video thumbnail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
			<div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-300" />
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="bg-white/95 dark:bg-gray-900/90 rounded-full w-20 h-20 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
					<svg className="w-8 h-8 text-accentSolid ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M8 5v14l11-7z" />
					</svg>
				</div>
			</div>
		</button>
	);
}

/* ─── Animated Accordion ───────────────────────────────── */
function AccordionItem({ module, lessons, defaultOpen }) {
	const [open, setOpen] = useState(defaultOpen || false);
	return (
		<div className="border border-accentLine dark:border-accentLine-dark rounded-xl overflow-hidden">
			<button
				className="w-full flex items-center gap-3 px-5 py-4 bg-accentBg/50 dark:bg-accentBg-dark/50 hover:bg-accentBgHover dark:hover:bg-accentBgHover-dark transition-colors text-left"
				onClick={() => setOpen(!open)}
				aria-expanded={open}
			>
				<span className="font-semibold text-accentTextContrast dark:text-accentTextContrast-dark text-sm flex-1 leading-snug">
					{module}
				</span>
				<span className="shrink-0 text-xs text-gray-400 dark:text-gray-500 tabular-nums whitespace-nowrap">
					{lessons.length} lesson{lessons.length !== 1 ? "s" : ""}
				</span>
				<svg
					className={`w-5 h-5 text-accentSolid dark:text-accentText-dark transition-transform duration-300 shrink-0 ${open ? "rotate-180" : ""}`}
					fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			{/* Smooth slide animation via max-height */}
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-screen" : "max-h-0"}`}
			>
				<ul className="px-5 py-3 flex flex-col gap-3 bg-white dark:bg-accentBase-dark border-t border-accentLine/50 dark:border-accentLine-dark/50">
					{lessons.map((lesson, i) => (
						<li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 py-0.5">
							<span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-accentBg dark:bg-accentBg-dark flex items-center justify-center text-[10px] font-bold text-accentSolid dark:text-accentText-dark">
								{i + 1}
							</span>
							{lesson}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

/* ─── Share button ─────────────────────────────────────── */
function ShareButton() {
	const [copied, setCopied] = useState(false);

	function handleCopy() {
		navigator.clipboard.writeText(window.location.href).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	}

	return (
		<button
			onClick={handleCopy}
			aria-label="Copy page link"
			className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white/90 border border-white/30 hover:border-white/70 hover:bg-white/10 transition-all duration-200"
		>
			{copied ? (
				<>
					<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					Copied!
				</>
			) : (
				<>
					<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
					</svg>
					Share
				</>
			)}
		</button>
	);
}

/* ─── Main CoursePage ──────────────────────────────────── */
export default function CoursePage() {
	const { slug } = useParams();
	const course = getCourseBySlug(slug);
	const { prev, next } = getAdjacentCourses(slug);

	if (!course) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 bg-white dark:bg-accentBase-dark">
				<p className="font-heading text-2xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark">
					Course not found.
				</p>
				<Link to="/" className="text-accentSolid dark:text-accentText-dark underline underline-offset-2 text-sm">
					← Back to home
				</Link>
			</div>
		);
	}

	const totalLessons = course.curriculum.reduce((sum, m) => sum + m.lessons.length, 0);

	return (
		<div className="bg-white dark:bg-accentBase-dark min-h-screen">

			{/* ── Breadcrumb ── */}
			<div className="bg-accentBgSubtle dark:bg-accentBgSubtle-dark border-b border-accentLine dark:border-accentLine-dark px-4 py-3">
				<div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
					<Link to="/" className="hover:text-accentSolid dark:hover:text-accentText-dark transition-colors flex items-center gap-1">
						<svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
						</svg>
						Home
					</Link>
					<span aria-hidden="true">/</span>
					<a href="/#courses" className="hover:text-accentSolid dark:hover:text-accentText-dark transition-colors">
						Courses
					</a>
					<span aria-hidden="true">/</span>
					<span className="text-accentTextContrast dark:text-accentTextContrast-dark font-medium" aria-current="page">
						{course.name}
					</span>
				</div>
			</div>

			{/* ── Hero ── */}
			<div className={`relative bg-gradient-to-br ${course.color} overflow-hidden`}>
				<div aria-hidden="true" className="absolute inset-0 pattern-islamic opacity-20" />
				<div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
					<div className="flex flex-col gap-5">
						<span className={`self-start text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${course.badgeColor}`}>
							{course.badge}
						</span>
						<h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
							{course.name}
						</h1>
						<p className="text-xl font-medium text-white/80">{course.tagline}</p>
						<p className="text-white/70 leading-relaxed max-w-lg">{course.description}</p>
						<div className="flex flex-wrap gap-3 pt-2">
							<a
								href="#enroll"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-accentSolid hover:bg-gray-100 shadow-lg transition-all duration-200 text-sm"
							>
								Enrol for Free
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</a>
							<ShareButton />
						</div>
					</div>

					{/* Stats card */}
					<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 grid grid-cols-2 gap-5">
						{[
							{ icon: "📚", label: "Lessons",     value: course.lessons },
							{ icon: "⏱️", label: "Duration",    value: course.duration },
							{ icon: "🎯", label: "Level",       value: course.level },
							{ icon: "🌐", label: "Language",    value: course.language },
							{ icon: "🏅", label: "Certificate", value: course.certificate ? "Included" : "No" },
							{ icon: "💰", label: "Cost",        value: "100% Free" },
						].map(({ icon, label, value }) => (
							<div key={label} className="flex flex-col gap-0.5">
								<span className="text-white/60 text-xs uppercase tracking-wider">{icon} {label}</span>
								<span className="text-white font-semibold text-sm">{value}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* ── Body ── */}
			<div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">

				{/* ── Left: main content ── */}
				<div className="lg:col-span-2 flex flex-col gap-14">

					{/* Intro Video */}
					<section>
						<SectionHeading>Course Introduction</SectionHeading>
						<div className="mt-5">
							<VideoPlayer videoId={course.videoId} note={course.videoNote} color={course.color} />
						</div>
					</section>

					{/* What you'll learn */}
					<section>
						<SectionHeading>What You'll Learn</SectionHeading>
						<div className="mt-5 grid sm:grid-cols-2 gap-3">
							{course.whatYouLearn.map((item, i) => (
								<div
									key={i}
									className="flex items-start gap-3 bg-accentBg/50 dark:bg-accentBg-dark/40 rounded-xl p-4 border border-accentLine/50 dark:border-accentLine-dark/50"
								>
									<svg className="w-5 h-5 text-accentSolid dark:text-accentText-dark mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
								</div>
							))}
						</div>
					</section>

					{/* Curriculum */}
					<section>
						<SectionHeading>Course Curriculum</SectionHeading>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-5">
							{totalLessons} lessons across {course.curriculum.length} modules
						</p>
						<div className="flex flex-col gap-3">
							{course.curriculum.map((item, i) => (
								<AccordionItem
									key={i}
									module={item.module}
									lessons={item.lessons}
									defaultOpen={i === 0}
								/>
							))}
						</div>
					</section>

					{/* Prerequisites */}
					<section>
						<SectionHeading>Prerequisites</SectionHeading>
						<ul className="mt-5 flex flex-col gap-3">
							{course.prerequisites.map((p, i) => (
								<li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
									<svg className="w-5 h-5 text-gold dark:text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
										<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
									</svg>
									{p}
								</li>
							))}
						</ul>
					</section>

					{/* FAQ */}
					<section>
						<SectionHeading>Frequently Asked Questions</SectionHeading>
						<div className="mt-5 flex flex-col gap-4">
							{course.faq.map((item, i) => (
								<details
									key={i}
									className="group rounded-xl border border-accentLine dark:border-accentLine-dark overflow-hidden"
								>
									<summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer select-none bg-accentBg/30 dark:bg-accentBg-dark/30 hover:bg-accentBgHover dark:hover:bg-accentBgHover-dark transition-colors list-none">
										<span className="font-semibold text-accentTextContrast dark:text-accentTextContrast-dark text-sm leading-snug">
											{item.q}
										</span>
										<svg
											className="w-5 h-5 text-accentSolid dark:text-accentText-dark shrink-0 transition-transform duration-200 group-open:rotate-180"
											fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
										>
											<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
										</svg>
									</summary>
									<div className="px-5 py-4 bg-white dark:bg-accentBase-dark border-t border-accentLine/50 dark:border-accentLine-dark/50">
										<p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.a}</p>
									</div>
								</details>
							))}
						</div>
					</section>
				</div>

				{/* ── Right: sidebar ── */}
				<div className="flex flex-col gap-6">

					{/* Enrol card */}
					<div
						id="enroll"
						className="sticky top-24 flex flex-col gap-4 bg-white dark:bg-accentBg-dark rounded-2xl border border-accentLine dark:border-accentLine-dark shadow-md p-6"
					>
						<div className="flex items-center justify-between">
							<p className="font-heading text-xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark">
								Free Enrolment
							</p>
							<span className="text-xs font-bold text-accentSolid dark:text-accentText-dark bg-accentBg dark:bg-accentBg-dark px-2.5 py-1 rounded-full">
								FREE
							</span>
						</div>
						<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
							Subscribe to get notified when this course opens and receive all lesson updates directly to your inbox.
						</p>
						<a
							href="/#newsletter"
							className="w-full text-center py-3.5 rounded-xl font-semibold text-white bg-accentSolid hover:bg-accentSolidHover shadow-lg shadow-accentSolid/30 transition-all duration-200 text-sm"
						>
							Get Notified — It's Free
						</a>
						<ul className="flex flex-col gap-2 pt-1">
							{["100% free — no credit card", "Cancel anytime", "New lessons every week"].map((item) => (
								<li key={item} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
									<svg className="w-4 h-4 text-accentSolid dark:text-accentText-dark shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									{item}
								</li>
							))}
						</ul>
					</div>

					{/* Instructor */}
					<div className="bg-accentBgSubtle dark:bg-accentBgSubtle-dark rounded-2xl border border-accentLine dark:border-accentLine-dark p-6 flex flex-col gap-4">
						<p className="text-xs font-semibold uppercase tracking-widest text-accentSolid dark:text-accentText-dark">
							Your Instructor
						</p>
						<div className="flex items-center gap-3">
							<div className={`w-12 h-12 rounded-full bg-gradient-to-br ${course.color} flex items-center justify-center text-white font-bold font-heading text-lg shrink-0`}>
								{course.instructor.initials}
							</div>
							<div>
								<p className="font-semibold text-sm text-accentTextContrast dark:text-accentTextContrast-dark">
									{course.instructor.name}
								</p>
								<p className="text-xs text-gray-500 dark:text-gray-400">{course.instructor.title}</p>
							</div>
						</div>
						<p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{course.instructor.bio}</p>
					</div>

					{/* Course details */}
					<div className="bg-white dark:bg-accentBg-dark rounded-2xl border border-accentLine dark:border-accentLine-dark p-6">
						<p className="text-xs font-semibold uppercase tracking-widest text-accentSolid dark:text-accentText-dark mb-4">
							Course Details
						</p>
						<div className="flex flex-col divide-y divide-accentLine dark:divide-accentLine-dark">
							{[
								["Lessons",     course.lessons],
								["Duration",    course.duration],
								["Level",       course.level],
								["Language",    course.language],
								["Certificate", course.certificate ? "Yes, on completion" : "No"],
								["Price",       "Free"],
							].map(([k, v]) => (
								<div key={k} className="flex justify-between py-2.5 text-sm">
									<span className="text-gray-500 dark:text-gray-400">{k}</span>
									<span className="font-medium text-accentTextContrast dark:text-accentTextContrast-dark">{v}</span>
								</div>
							))}
						</div>
					</div>

					{/* Other courses */}
					<div className="bg-accentBgSubtle dark:bg-accentBgSubtle-dark rounded-2xl border border-accentLine dark:border-accentLine-dark p-6">
						<p className="text-xs font-semibold uppercase tracking-widest text-accentSolid dark:text-accentText-dark mb-4">
							More Courses
						</p>
						<div className="flex flex-col gap-2">
							{[prev, next].filter(Boolean).map((c) => (
								<Link
									key={c.slug}
									to={`/course/${c.slug}`}
									className="group flex items-center gap-3 p-3 rounded-xl hover:bg-accentBgHover dark:hover:bg-accentBgHover-dark transition-colors"
								>
									<div className={`w-2 h-2 rounded-full bg-gradient-to-br ${c.color} shrink-0`} />
									<span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-accentTextContrast dark:group-hover:text-accentTextContrast-dark transition-colors flex-1">
										{c.name}
									</span>
									<svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-accentSolid group-hover:translate-x-0.5 transition-all shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
										<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* ── Prev / Next navigation ── */}
			{(prev || next) && (
				<div className="border-t border-accentLine dark:border-accentLine-dark bg-accentBgSubtle dark:bg-accentBgSubtle-dark">
					<div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between gap-4">
						{prev ? (
							<Link
								to={`/course/${prev.slug}`}
								className="group flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-accentSolid dark:hover:text-accentText-dark transition-colors"
							>
								<svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
									<path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
								</svg>
								<span>Previous: <strong className="text-accentTextContrast dark:text-accentTextContrast-dark">{prev.name}</strong></span>
							</Link>
						) : <div />}
						{next && (
							<Link
								to={`/course/${next.slug}`}
								className="group flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-accentSolid dark:hover:text-accentText-dark transition-colors sm:ml-auto"
							>
								<span>Next: <strong className="text-accentTextContrast dark:text-accentTextContrast-dark">{next.name}</strong></span>
								<svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</Link>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

/* ─── Section heading helper ───────────────────────────── */
function SectionHeading({ children }) {
	return (
		<div className="flex items-center gap-3">
			<h2 className="font-heading text-2xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark whitespace-nowrap">
				{children}
			</h2>
			<div className="flex-1 h-px bg-accentLine dark:bg-accentLine-dark" />
		</div>
	);
}
