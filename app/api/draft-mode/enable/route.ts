import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/lib/client";
import config from "@/config";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: config.sanity.token }),
});
