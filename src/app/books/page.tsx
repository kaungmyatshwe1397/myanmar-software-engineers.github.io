import PageTransitionWrapper from "@/components/Animate/PageTransitionWrapper/PageTransitionWrapper";
import Container from "@/components/Common/Container/Container";
import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import APP_CONFIG from "@/config/config";
import { allBooks } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Books | ${APP_CONFIG.title}`,
  description:
    "Discover recommended tech books and learning resources shared by the MMSWE community.",
  openGraph: {
    title: `Books | ${APP_CONFIG.title}`,
    description:
      "Discover recommended tech books and learning resources shared by the MMSWE community.",
    images: "https://mmswe.com/images/mmswe-seo.png",
  },
};

const BooksPage = async () => {
  const books = [...allBooks].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <PageTransitionWrapper>
      <Container>
        <section className="py-16">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Community Library
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold text-zinc-100 sm:text-5xl">
              Books
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
              Recommended tech books and learning resources shared by Myanmar
              software engineers.
            </p>
          </div>

          {books.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-white/10 bg-surface/50 p-8 text-zinc-300">
              <h2 className="font-display text-2xl font-semibold text-zinc-100">
                No books yet
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                Community recommendations will appear here once contributors add
                book entries to the repository.
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-4">
              {books.map((book) => (
                <article
                  key={book._id}
                  className="rounded-3xl border border-white/10 bg-surface/50 p-6 transition-colors hover:border-white/20"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      {book.image && (
                        <img
                          src={book.image}
                          alt={`${book.title} cover`}
                          className="h-32 w-24 rounded-xl border border-white/10 object-cover"
                        />
                      )}

                      <div>
                        <h2 className="font-display text-2xl font-semibold text-zinc-100">
                          {book.title}
                        </h2>
                        <p className="mt-2 text-sm text-zinc-400">
                          by {book.authorName}
                        </p>
                        {(book.authorEmail || book.authorLink) && (
                          <div className="mt-3 flex flex-col gap-2 text-sm">
                            {book.authorEmail && (
                              <a
                                href={`mailto:${book.authorEmail}`}
                                className="text-zinc-400 transition-colors hover:text-prism-cyan"
                              >
                                {book.authorEmail}
                              </a>
                            )}
                            {book.authorLink && (
                              <a
                                href={book.authorLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 transition-colors hover:text-prism-cyan"
                              >
                                {book.authorLink}
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-prism-cyan/40 px-4 py-2 text-sm font-medium text-prism-cyan transition-colors hover:border-prism-cyan hover:bg-prism-cyan/10"
                    >
                      Open Resource
                    </a>
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

export default BooksPage;
