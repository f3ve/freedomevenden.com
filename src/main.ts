import '@/styles/globals.scss';

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
  return Promise.all(
    routes.flatMap(async (route) => {
      return route.name === 'post'
        ? (await getPostsSlugs()).data.data.map(
            (post) => `/blog/${post.attributes.slug}`,
          )
        : route.path;
    }),
  );
}
