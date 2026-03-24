import PageTransitionWrapper from "@/components/Animate/PageTransitionWrapper/PageTransitionWrapper";
import Container from "@/components/Common/Container/Container";
import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import APP_CONFIG from "@/config/config";
import { allClasses } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: `Classes | ${APP_CONFIG.title}`,
	description:
		"Explore verified tech classes in Myanmar curated by the MMSWE community.",
	openGraph: {
		title: `Classes | ${APP_CONFIG.title}`,
		description:
			"Explore verified tech classes in Myanmar curated by the MMSWE community.",
		images: "https://mmswe.com/images/mmswe-seo.png",
	},
};

const ClassesPage = async () => {
	const classes = [...allClasses].sort((a, b) => a.title.localeCompare(b.title));

	return (
		<PageTransitionWrapper>
			<Container>
				<section className="py-16">
					<div className="max-w-3xl">
						<p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
							Verified Registry
						</p>
						<h1 className="mt-4 font-display text-4xl font-bold text-zinc-100 sm:text-5xl">
							Classes
						</h1>
						<p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
							A trust-first, community-curated directory of tech classes in
							Myanmar. Listings are reviewed before publication.
						</p>
					</div>

					{classes.length === 0 ? (
						<div className="mt-12 rounded-3xl border border-white/10 bg-surface/50 p-8 text-zinc-300">
							<h2 className="font-display text-2xl font-semibold text-zinc-100">
								No classes yet
							</h2>
							<p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
								Verified class listings will appear here after maintainers review
								and approve class submissions.
							</p>
						</div>
					) : (
						<div className="mt-12 grid gap-4">
							{classes.map((classItem) => (
								<article
									key={classItem._id}
									className="rounded-3xl border border-white/10 bg-surface/50 p-6 transition-colors hover:border-white/20"
								>
									<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
										<div className="flex-1">
											<div className="flex flex-wrap items-center gap-2">
												<h2 className="font-display text-2xl font-semibold text-zinc-100">
													{classItem.title}
												</h2>
												<span className="rounded-full border border-prism-cyan/30 bg-prism-cyan/10 px-3 py-1 text-xs font-medium text-prism-cyan">
													{classItem.status}
												</span>
												<span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-zinc-300">
													{classItem.classType}
												</span>
											</div>

											<p className="mt-3 text-sm leading-6 text-zinc-400">
												{classItem.description}
											</p>

											<p className="mt-3 text-sm text-zinc-300">
												Instructor: {classItem.instructorName}
											</p>

											<div className="mt-4 flex flex-wrap gap-2">
												{classItem.tags.map((tag) => (
													<span
														key={`${classItem._id}-${tag}`}
														className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-300"
													>
														{tag}
													</span>
												))}
											</div>
										</div>

										<div className="flex flex-col gap-2 sm:items-end">
											<a
												href={classItem.classLink}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center justify-center rounded-full border border-prism-cyan/40 px-4 py-2 text-sm font-medium text-prism-cyan transition-colors hover:border-prism-cyan hover:bg-prism-cyan/10"
											>
												Official Link
											</a>
										</div>
									</div>
								</article>
							))}
						</div>
					)}
				</section>

				<SpacingDivider size="lg" />
			</Container>
		</PageTransitionWrapper>
	);
};

export default ClassesPage;
