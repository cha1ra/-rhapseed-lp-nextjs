import { Content, createClient } from "newt-client-js";

const client = createClient({
  spaceUid: process.env.NEXT_PUBLIC_NEWT_SPACE_UID || '',
  token: process.env.NEXT_PUBLIC_NEWT_API_TOKEN || '',
  apiType: process.env.NEXT_PUBLIC_NEWT_API_TYPE as "cdn" | "api",
});

export const fetchApp = async () => {
  const app = await client.getApp({
    appUid: process.env.NEXT_PUBLIC_NEWT_APP_UID || '',
  });
  return app;
};

export const fetchArticles = async (options?: {
  query?: Record<string, any>;
  search?: string;
  tag?: string;
  author?: string;
  year?: number;
  page?: number;
  limit?: number;
}) => {
  const { query, search, tag, author, year, page, limit } = options || {};
  const _query = {
    ...(query || {}),
  };
  if (search) {
    _query.or = [
      {
        title: {
          match: search,
        },
      },
      {
        body: {
          match: search,
        },
      },
    ];
  }
  if (tag) {
    _query.tags = tag;
  }
  if (author) {
    _query.author = author;
  }
  if (year) {
    _query["_sys.createdAt"] = {
      gte: new Date(year.toString()).toISOString(),
      lt: new Date((year + 1).toString()).toISOString(),
    };
  }
  const _page = page || 1;
  const _limit = limit || Number(process.env.NEXT_PUBLIC_PAGE_LIMIT) || 10;
  const _skip = (_page - 1) * _limit;

  const { items, total } = await client.getContents<any>({
    // const { items, total } = await client.getContents<Content & Article>({
    appUid: process.env.NEXT_PUBLIC_NEWT_APP_UID || '',
    modelUid: process.env.NEXT_PUBLIC_NEWT_ARTICLE_MODEL_UID || '',
    query: {
      depth: 2,
      limit: _limit,
      skip: _skip,
      ..._query,
    },
  });

  return {
    articles: items,
    total,
  };
};
