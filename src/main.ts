import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';

import './styles/main.css';
import './styles/main.css';
import './styles/markdown.css';
import './styles/highlight-js.css';

import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';
import routes from '~pages';

export const createApp = ViteSSG(App, {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
  routes,
});
