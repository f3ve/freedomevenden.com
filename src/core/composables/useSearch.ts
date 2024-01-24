import type { PageFrontmatter } from '@/types';
import { formatDate } from '@/utils/dateHelpers';

export function useSearch(path = '') {
  const router = useRouter();
  const search = ref('');

  const pages = computed(() => {
    return router
      .getRoutes()
      .filter((route) => route.path.startsWith(path))
      .map((route) => ({
        path: route.path,
        ...route.meta.frontmatter,
      }))
      .filter((frontmatter: PageFrontmatter) => {
        const s = search.value.toLowerCase();
        return (
          frontmatter.title?.toLowerCase().includes(s) ||
          frontmatter.subtitle?.toLowerCase().includes(s) ||
          frontmatter.description?.toLowerCase().includes(s) ||
          frontmatter.path?.toLowerCase().includes(s) ||
          frontmatter.datePublished?.toLowerCase().includes(s) ||
          frontmatter.dateUpdated?.toLowerCase().includes(s) ||
          (frontmatter.datePublished &&
            formatDate(frontmatter.datePublished).toLowerCase().includes(s)) ||
          (frontmatter.dateUpdated &&
            formatDate(frontmatter.dateUpdated).toLowerCase().includes(s))
        );
      })
      .sort((a: PageFrontmatter, b: PageFrontmatter) => {
        if (a.datePublished && b.datePublished)
          return (
            new Date(b.datePublished).getTime() -
            new Date(a.datePublished).getTime()
          );

        return 1;
      });
  });

  return {
    pages,
    search,
  };
}
