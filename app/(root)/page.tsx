import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCard_TP } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

type SearchParams_TP = {
  searchParams: Promise<{ query?: string }>;
};

export default async function Home({ searchParams }: SearchParams_TP) {
  const { query } = await searchParams;
  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  const session = await auth();
  console.log("🚀 ~ Home ~ session:", session);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches,and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCard_TP) => {
              return <StartupCard key={post?._id} post={post} />;
            })
          ) : (
            <p className="no-result">No results found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
