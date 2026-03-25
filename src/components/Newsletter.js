import { useState } from "react";

function Newsletter() {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		if (email.trim()) {
			setSubmitted(true);
		}
	}

	return (
		<section className="relative bg-accentBg dark:bg-accentBgSubtle-dark overflow-hidden py-20 px-4 border-t border-accentLine dark:border-accentLine-dark">
			{/* Subtle background pattern */}
			<div aria-hidden="true" className="absolute inset-0 pattern-islamic opacity-40 dark:hidden" />
			<div aria-hidden="true" className="absolute inset-0 pattern-islamic-dark opacity-100 hidden dark:block" />

			<div className="relative max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
				<span className="text-xs font-semibold tracking-[0.25em] uppercase text-accentSolid dark:text-accentText-dark">
					Stay Connected
				</span>

				<h2 className="font-heading text-3xl md:text-4xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark leading-tight">
					Join Our Learning Community
				</h2>

				<p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
					Receive updates on new courses, lessons, and Islamic learning resources
					delivered straight to your inbox. No spam, ever.
				</p>

				{submitted ? (
					<div className="mt-2 flex flex-col items-center gap-3">
						<div className="w-14 h-14 rounded-full bg-accentSolid/10 dark:bg-accentSolid/20 flex items-center justify-center">
							<svg className="w-7 h-7 text-accentSolid dark:text-accentText-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
								<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
							</svg>
						</div>
						<p className="font-heading text-xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark">
							JazakAllahu Khayran!
						</p>
						<p className="text-gray-500 dark:text-gray-400 text-sm">
							You're subscribed. We'll be in touch soon.
						</p>
					</div>
				) : (
					<form
						onSubmit={handleSubmit}
						className="w-full flex flex-col sm:flex-row gap-3 mt-2"
					>
						<label htmlFor="newsletter-email" className="sr-only">
							Email address
						</label>
						<input
							id="newsletter-email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email address"
							required
							className="flex-1 px-5 py-3.5 rounded-xl border border-accentBorder dark:border-accentBorder-dark
							bg-white dark:bg-accentBg-dark
							text-accentTextContrast dark:text-accentTextContrast-dark
							placeholder-gray-400
							focus:outline-none focus:ring-2 focus:ring-accentBorder dark:focus:ring-accentBorder-dark
							transition-colors text-sm"
						/>
						<button
							type="submit"
							className="px-6 py-3.5 rounded-xl font-semibold text-white
							bg-accentSolid hover:bg-accentSolidHover
							shadow-lg shadow-accentSolid/30 hover:shadow-accentSolid/50
							focus:outline-none focus:ring-2 focus:ring-accentBorder
							transition-all duration-200 whitespace-nowrap text-sm"
						>
							Subscribe
						</button>
					</form>
				)}

				<p className="text-gray-400 dark:text-gray-500 text-xs">
					We respect your privacy. Unsubscribe at any time.
				</p>
			</div>
		</section>
	);
}

export default Newsletter;
