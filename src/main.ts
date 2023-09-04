import '@/styles/globals.scss';
import axios from 'axios';

import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';

import { setupLayouts } from 'virtual:generated-layouts';
import generatedLayouts from 'virtual:generated-pages';
import { VueMarkdownItPlugin } from '@f3ve/vue-markdown-it';
import { getPostsSlugs } from './services/api/posts';

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
  ({ app }) => {
    app.use(createPinia());
    app.use(VueMarkdownItPlugin);
  },
);

export async function includedRoutes(paths, routes) {
  const posts = await getPostsSlugs();

  const staticPaths = paths.filter((path) => !path.includes(':'));

  const dynamicPosts = posts.data.data.map(
    (item: any) => `/blog/${item.attributes.slug}`,
  );

  return [...dynamicPosts, ...staticPaths];
}
