export type ServerResponse<T = any> = {
  data: T;
  meta: {};
};

export type ServerResponsePaginated<T = any> = ServerResponse<T[]> & {
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type BlogPost = {
  id: number;
  attributes: {
    /** Title of the blog post */
    title: string;
    /** Slug of blog post, generated from title. Slugs are always unique. */
    slug: string;
    /** datetime string that specified when the post was originally created */
    createdAt: string;
    /** datetime string that specifies when post was last updated */
    updatedAt: string;
    /** Datetime string that specifies when the post was published */
    publishedAt: string;
    /** Post body, written in Markdown */
    body: string;
  };
};
