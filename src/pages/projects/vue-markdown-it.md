---
title: Vue Markdown-it
subtitle: Vue component for integrating Markdown-it.
description: Vue component for integrating Markdown-it. Project description in Freedom Evenden's portfolio.
role: Creator & Maintainer
type: open-source
dates: September 2023 - Present
meta:
  - name: type
    content: website
---

Check out the [Repo on Github](https://github.com/f3ve/vue-markdown-it) to learn more!

## Table of Content
[[toc]]

## About The Project

This is a component for easily integrating [markdown-it](https://github.com/markdown-it/markdown-it) in [Vue 3](https://vuejs.org/). This project was inspired by [markdown-it-vue](https://github.com/ravenq/markdown-it-vue). which hasn't been updated in a while and only supports Vue 2.

## Getting Started

### Prerequisites

- Vue 3

```bash
npm i vue
```

### Installation

```
npm i @f3ve/vue-markdown-it
```


<!-- USAGE EXAMPLES -->

## Usage

### Importing the Component

You can directly import the component in your SFC file.

```vue
<script setup>
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

const post = ref();

onMounted(async () => {
  const res = await api.get('/post');
  post.value = res.data;
});
</script>

<template>
  <vue-markdown-it :source="post" />
</template>
```

### Using the Plugin

You can also use the plugin to register the component globally.

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { VueMarkdownItPlugin } from '@f3ve/vue-markdown-it';

const app = createApp(App);

app.use(VueMarkdownItPlugin);

app.mount('#app');
```

### Using markdown-it Plugins

You can add markdown-it plugins using the `plugin` prop. `plugin` expects an array of markdown-it plugins. If you want to configure the options of a plugin you can nest the plugin and its options in an array.

```vue
<script setup>
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';
import myPlugin from 'myPlugin';
import myPluginWithOption from 'myPluginWithOptions';

const post = ref();

onMounted(async () => {
  const res = await api.get('/post');
  post.value = res.data;
});
</script>

<template>
  <vue-markdown-it
    :source="post"
    :plugins="[myPlugin, [myPluginWithOptions, { option1: true }]]"
  />
</template>
```

### Using Markdown-it Options & Presets

See [Markdown-it docs](https://markdown-it.github.io/markdown-it/#MarkdownIt.new) for more information

#### Options

```vue
<script setup>
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

const post = ref();
const options = {
  html: true,
  linkify: true,
};

onMounted(async () => {
  const res = await api.get('/post');
  post.value = res.data;
});
</script>

<template>
  <vue-markdown-it :source="post" :options="options" />
</template>
```

#### Presets

```vue
<script setup>
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

const post = ref();

onMounted(async () => {
  const res = await api.get('/post');
  post.value = res.data;
});
</script>

<template>
  <vue-markdown-it :source="post" preset="commonmark" />
</template>
```

#### Using Presets and Options together

```vue
<script setup>
import { VueMarkdownIt } from '@f3ve/vue-markdown-it';

const post = ref();
const options = {
  html: true,
  linkify: true,
};

onMounted(async () => {
  const res = await api.get('/post');
  post.value = res.data;
});
</script>

<template>
  <vue-markdown-it :source="post" :options="options" preset="commonmark" />
</template>
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/f3ve/vue-markdown-it/issues) for a full list of proposed features (and known issues).


<!-- CONTRIBUTING -->

## Contributing

[See contributing guide](https://github.com/f3ve/.github/blob/main/CONTRIBUTING.md)


<!-- LICENSE -->

## License

Distributed under the [MIT License](https://github.com/f3ve/vue-markdown-it/blob/main/LICENSE).


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/f3ve/vue-markdown-it.svg?style=for-the-badge
[contributors-url]: https://github.com/f3ve/vue-markdown-it/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/f3ve/vue-markdown-it.svg?style=for-the-badge
[forks-url]: https://github.com/f3ve/vue-markdown-it/network/members
[stars-shield]: https://img.shields.io/github/stars/f3ve/vue-markdown-it.svg?style=for-the-badge
[stars-url]: https://github.com/f3ve/vue-markdown-it/stargazers
[issues-shield]: https://img.shields.io/github/issues/f3ve/vue-markdown-it.svg?style=for-the-badge
[issues-url]: https://github.com/f3ve/vue-markdown-it/issues
[license-shield]: https://img.shields.io/github/license/f3ve/vue-markdown-it.svg?style=for-the-badge
[license-url]: https://github.com/f3ve/vue-markdown-it/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Vite.js]: https://img.shields.io/badge/VITE-35495E?style=for-the-badge&logo=vite
[Vite-url]: https://vitejs.dev
