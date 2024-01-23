import '@unocss/reset/tailwind.css';
import './styles/main.css';
import './styles/markdown.css';
import './styles/highlight-js.css';
import 'uno.css';
import VueMatomo from 'vue-matomo';

import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';
import routes from '~pages';

export const createApp = ViteSSG(
  App,
  {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition && !to.hash) {
        savedPosition.behavior = 'instant';
        return savedPosition;
      }

      if (!to.hash) {
        return { top: 0, behavior: 'smooth' };
      }
    },
    routes,
  },
  ({ app, router }) => {
    const pinia = createPinia();
    app.use(pinia);
    app.use(VueMatomo, {
      router,
      host: 'https://freedomevenden.matomo.cloud/',
      siteId: 1,
      disableCookies: true,
    });
  },
);
