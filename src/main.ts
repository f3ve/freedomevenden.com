import '@/styles/globals.scss';

import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';

import { setupLayouts } from 'virtual:generated-layouts';
import generatedLayouts from 'virtual:generated-pages';
import { VueMarkdownItPlugin } from '@f3ve/vue-markdown-it';
import { getAllPosts, getPostsSlugs } from './services/api/posts';
import { useBlogStore } from './stores/blog';

const routes = setupLayouts(generatedLayouts);

export const createApp = ViteSSG(
  App,
  {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition;
      return { top: 0 };
    },
    routes,
  },
  async ({ app, initialState }) => {
    const pinia = createPinia();
    app.use(pinia);
    app.use(VueMarkdownItPlugin);

    if (import.meta.env.SSR) {
      const res = await getAllPosts();
      if (res.data) {
        const data = res.data.data;
        initialState.data = data;
      }
    } else {
      const store = useBlogStore();
      store.posts = initialState.data || {};
    }
  },
);

export async function includedRoutes(paths: string[]) {
  const posts = await getPostsSlugs();

  const staticPaths = paths.filter((path) => !path.includes(':'));

  const dynamicPosts = posts.data.data.map(
    (item: any) => `/blog/${item.attributes.slug}`,
  );

  return [...dynamicPosts, ...staticPaths];
}
