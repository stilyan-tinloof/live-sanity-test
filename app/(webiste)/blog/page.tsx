import { Posts } from "@/components/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { BLOG_INDEX_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const { data } = await sanityFetch({ query: BLOG_INDEX_QUERY, stega: false });

  return <Posts data={data} />;
}
