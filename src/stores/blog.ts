import type { BlogPost } from '@/services/api/apiTypes';

export const useBlogStore = defineStore('blog', () => {
  const posts = ref<BlogPost[]>([]);

  const postPaths = computed(() =>
    posts.value.map((post) => `/blog/${post.attributes.slug}`),
  );

  function getPost(slug: string): BlogPost | undefined {
    return posts.value.find((post) => post.attributes.slug === slug);
  }

  return {
    posts,
    postPaths,
    getPost,
  };
});
