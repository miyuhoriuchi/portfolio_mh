import { createClient } from "@/node_modules/microcms-js-sdk/dist/microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "@/node_modules/microcms-js-sdk/dist/microcms-js-sdk";

export type Work = {
  title: string;
  category: string;
  overviewLong: string;
  overviewShort?: string;
  scope?: string;
  period?: string;
  duration?: string;
  tool?: string;
  content: string;
  eyecatch: MicroCMSImage;
  hero: MicroCMSImage;
  priority: string;
  order: number;
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Work>({
    endpoint: "works",
    queries,
  });
  return listData;
};

export const getWorksDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Work>({
    endpoint: "works",
    contentId,
    queries,
  });
  return detailData;
};
