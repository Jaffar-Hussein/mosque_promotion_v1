import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseBySlug, getAdjacentCourses } from "../data/courseData";

/* ─── Video Player ─────────────────────────────────────── */
function VideoPlayer({ videoId, note }) {
	const [playing, setPlaying] = useState(false);
	const THUMB = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
	const EMBED = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

	if (!videoId) {
		return (
			<div className="w-full aspect-video rounded-2xl bg-accentBg dark:bg-accentBg-dark border border-accentBorder dark:border-accentBorder-dark flex flex-col items-center justify-center gap-3 text-center px-6">
				<div className="w-14 h-14 rounded-full bg-accentBgHover dark:bg-accentBgHover-dark flex items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-accentSolid dark:text-accentText-dark">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125" />
					</svg>
				</div>
				<p className="font-heading font-bold text-accentTextContrast dark:text-accentTextContrast-dark">Video Coming Soon</p>
				<p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">{note}</p>
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

/* ─── Accordion item for curriculum ───────────────────── */
function AccordionItem({ module, lessons, defaultOpen }) {
	const [open, setOpen] = useState(defaultOpen || false);
	return (
		<div className="border border-accentLine dark:border-accentLine-dark rounded-xl overflow-hidden">
			<button
				className="w-full flex items-center justify-between px-5 py-4 bg-accentBg/50 dark:bg-accentBg-dark/50 hover:bg-accentBgHover dark:hover:bg-accentBgHover-dark transition-colors text-left"
				onClick={() => setOpen(!open)}
				aria-expanded={open}
			>
				<span className="font-semibold text-accentTextContrast dark:text-accentTextContrast-dark text-sm">{module}</span>
				<svg
					className={`w-5 h-5 text-accentSolid dark:text-accentText-dark transition-transform duration-300 shrink-0 ${open ? "rotate-180" : ""}`}
					fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</button>
			{open && (
				<ul className="px-5 py-3 flex flex-col gap-2.5 bg-white dark:bg-accentBase-dark">
					{lessons.map((lesson, i) => (
						<li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
							<span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-accentBg dark:bg-accentBg-dark flex items-center justify-center text-[10px] font-bold text-accentSolid dark:text-accentText-dark">
								{i + 1}
							</span>
							{lesson}
						</li>
					))}
				</ul>
			)}
		</div>
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
				<p className="font-heading text-2xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark">Course not found.</p>
				<Link to="/" className="text-accentSolid dark:text-accentText-dark underline underline-offset-2 text-sm">← Back to home</Link>
			</div>
		);
	}

	return (
		<div className="bg-white dark:bg-accentBase-dark min-h-screen">

			{/* ── Breadcrumb ── */}
			<div className="bg-accentBgSubtle dark:bg-accentBgSubtle-dark border-b border-accentLine dark:border-accentLine-dark px-4 py-3">
				<div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
					<Link to="/" className="hover:text-accentSolid dark:hover:text-accentText-dark transition-colors">Home</Link>
					<span>/</span>
					<Link to="/#courses" className="hover:text-accentSolid dark:hover:text-accentText-dark transition-colors">Courses</Link>
					<span>/</span>
					<span className="text-accentTextContrast dark:text-accentTextContrast-dark font-medium">{course.name}</span>
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
						<div className="flex flex-wrap gap-4 pt-2">
							<a
								href="#enroll"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-accentSolid hover:bg-gray-100 shadow-lg transition-all duration-200"
							>
								Enrol for Free
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
							</a>
							<Link
								to="/"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border-2 border-white/40 hover:border-white/80 hover:bg-white/10 transition-all duration-200"
							>
								← All Courses
							</Link>
						</div>
					</div>

					{/* Stats card */}
					<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 grid grid-cols-2 gap-5">
						{[
							{ icon: "📚", label: "Lessons", value: course.lessons },
							{ icon: "⏱️", label: "Duration", value: course.duration },
							{ icon: "🎯", label: "Level", value: course.level },
							{ icon: "🌐", label: "Language", value: course.language },
							{ icon: "🏅", label: "Certificate", value: course.certificate ? "Included" : "No" },
							{ icon: "💰", label: "Cost", value: "100% Free" },
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
							<VideoPlayer videoId={course.videoId} note={course.videoNote} />
						</div>
					</section>

					{/* What you'll learn */}
					<section>
						<SectionHeading>What You'll Learn</SectionHeading>
						<div className="mt-5 grid sm:grid-cols-2 gap-3">
							{course.whatYouLearn.map((item, i) => (
								<div key={i} className="flex items-start gap-3 bg-accentBg/50 dark:bg-accentBg-dark/40 rounded-xl p-4 border border-accentLine/50 dark:border-accentLine-dark/50">
									<svg className="w-5 h-5 text-accentSolid dark:text-accentText-dark mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
							{course.lessons} lessons across {course.curriculum.length} modules
						</p>
						<div className="flex flex-col gap-3">
							{course.curriculum.map((item, i) => (
								<AccordionItem key={i} module={item.module} lessons={item.lessons} defaultOpen={i === 0} />
							))}
						</div>
					</section>

					{/* Prerequisites */}
					<section>
						<SectionHeading>Prerequisites</SectionHeading>
						<ul className="mt-5 flex flex-col gap-3">
							{course.prerequisites.map((p, i) => (
								<li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
									<svg className="w-5 h-5 text-gold dark:text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
								<div key={i} className="rounded-xl border border-accentLine dark:border-accentLine-dark p-5">
									<p className="font-semibold text-accentTextContrast dark:text-accentTextContrast-dark text-sm">{item.q}</p>
									<p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.a}</p>
								</div>
							))}
						</div>
					</section>
				</div>

				{/* ── Right: sidebar ── */}
				<div className="flex flex-col gap-6">

					{/* Enrol card */}
					<div id="enroll" className="sticky top-24 flex flex-col gap-4 bg-white dark:bg-accentBg-dark rounded-2xl border border-accentLine dark:border-accentLine-dark shadow-md p-6">
						<p className="font-heading text-2xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark">
							Free Enrolment
						</p>
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
									<svg className="w-4 h-4 text-accentSolid dark:text-accentText-dark shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									{item}
								</li>
							))}
						</ul>
					</div>

					{/* Instructor */}
					<div className="bg-accentBgSubtle dark:bg-accentBgSubtle-dark rounded-2xl border border-accentLine dark:border-accentLine-dark p-6 flex flex-col gap-4">
						<p className="text-xs font-semibold uppercase tracking-widest text-accentSolid dark:text-accentText-dark">Your Instructor</p>
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-full bg-gradient-to-br from-accentSolid to-accentSolidHover flex items-center justify-center text-white font-bold font-heading text-lg shrink-0">
								{course.instructor.initials}
							</div>
							<div>
								<p className="font-semibold text-sm text-accentTextContrast dark:text-accentTextContrast-dark">{course.instructor.name}</p>
								<p className="text-xs text-gray-500 dark:text-gray-400">{course.instructor.title}</p>
							</div>
						</div>
						<p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{course.instructor.bio}</p>
					</div>

					{/* Course stats */}
					<div className="bg-white dark:bg-accentBg-dark rounded-2xl border border-accentLine dark:border-accentLine-dark p-6">
						<p className="text-xs font-semibold uppercase tracking-widest text-accentSolid dark:text-accentText-dark mb-4">Course Details</p>
						<div className="flex flex-col divide-y divide-accentLine dark:divide-accentLine-dark">
							{[
								["Lessons", course.lessons],
								["Duration", course.duration],
								["Level", course.level],
								["Language", course.language],
								["Certificate", course.certificate ? "Yes, on completion" : "No"],
								["Price", "Free"],
							].map(([k, v]) => (
								<div key={k} className="flex justify-between py-2.5 text-sm">
									<span className="text-gray-500 dark:text-gray-400">{k}</span>
									<span className="font-medium text-accentTextContrast dark:text-accentTextContrast-dark">{v}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* ── Next / Prev navigation ── */}
			{(prev || next) && (
				<div className="border-t border-accentLine dark:border-accentLine-dark bg-accentBgSubtle dark:bg-accentBgSubtle-dark">
					<div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between gap-4">
						{prev ? (
							<Link to={`/course/${prev.slug}`} className="group flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-accentSolid dark:hover:text-accentText-dark transition-colors">
								<svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
								<span>Previous: <strong className="text-accentTextContrast dark:text-accentTextContrast-dark">{prev.name}</strong></span>
							</Link>
						) : <div />}
						{next && (
							<Link to={`/course/${next.slug}`} className="group flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-accentSolid dark:hover:text-accentText-dark transition-colors">
								<span>Next: <strong className="text-accentTextContrast dark:text-accentTextContrast-dark">{next.name}</strong></span>
								<svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
							</Link>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

/* ─── Small helper ─────────────────────────────────────── */
function SectionHeading({ children }) {
	return (
		<div className="flex items-center gap-3">
			<h2 className="font-heading text-2xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark">{children}</h2>
			<div className="flex-1 h-px bg-accentLine dark:bg-accentLine-dark" />
		</div>
	);
}
