import '@/styles/globals.scss';

import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';
// import { createHead } from '@unhead/vue';
import routes from '~pages';

export const createApp = ViteSSG(
  App,
  {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition;
      return { top: 0 };
    },
    routes,
  },
  // ({ app }) => {
  //   const head = createHead();
  //   app.use(head);
  // },
);
