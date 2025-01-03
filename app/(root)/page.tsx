import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      title: "Startup 1",
      description: "Description 1",
      category: "Category 1",
      views: 100,
      author: {
        _id: 1,
        name: "John Doe",
        avatar: "https://placehold.co/48x48",
      },
      image: "https://placehold.co/400x400",
    },
  ];

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
    </>
  );
}
