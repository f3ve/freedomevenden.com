import type { BlogPostFrontmatter } from '@/types';

export function usePosts(path: string) {
  const router = useRouter();
  const search = ref('');

  const posts = computed<BlogPostFrontmatter[]>(() => {
    return router
      .getRoutes()
      .filter((route) => route.path.startsWith(path))
      .map((route) => ({
        path: route.path,
        ...route.meta.frontmatter,
      }))
      .filter(
        (frontmatter: BlogPostFrontmatter) =>
          frontmatter.title?.toLowerCase().includes(search.value.toLowerCase()),
      )
      .sort((a: BlogPostFrontmatter, b: BlogPostFrontmatter) => {
        if (a.datePublished && b.datePublished)
          return (
            new Date(b.datePublished).getTime() -
            new Date(a.datePublished).getTime()
          );

        return 1;
      });
  });

  return {
    posts,
    search,
  };
}
