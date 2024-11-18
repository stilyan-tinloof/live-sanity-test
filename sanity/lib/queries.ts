import { groq } from "next-sanity";

export const BLOG_POST_CARD_FRAGMENT = groq`{
    _id,
    publishedAt,
    title,
    author-> {
        name,
    },
    "excerpt": pt::text(body[_type == "block"][0..2]),
}`;

export const BLOG_INDEX_QUERY = groq`{
    "entries": *[_type == "blog.post"] | order(publishedAt desc) ${BLOG_POST_CARD_FRAGMENT},
}`;
