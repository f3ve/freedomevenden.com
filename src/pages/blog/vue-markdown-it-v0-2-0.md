---
title: Vue Markdown-it v0.2.0
datePublished: 2023-10-04T13:30:00
description: Announcing the release of @f3ve/vue-markdown-it v0.2.0
meta:
  - name: type
    content: article
  - name: keywords
    content: markdown-it,markdown,vue,vue-markdown-it,@f3ve/vue-markdown-it
---

## Table of Contents

[[toc]]

## Overview

I'm excited to announce the release of [Vue Markdown-it v0.2.0](https://github.com/f3ve/vue-markdown-it). This release comes with some new features and some developer facing improvements. If you want to use this package you can install it from npm:

```bash
npm i @f3ve/vue-markdown-it
```

## New features

List of new features and how to use them.

### Support for Markdown-it options

You can now configure [markdown-it options](https://markdown-it.github.io/markdown-it/#MarkdownIt.new). Here's how:

```html
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

### Support for Markdown-it presets

You can also specify a [markdown-it preset](https://markdown-it.github.io/markdown-it/#MarkdownIt.new). Here's how:

```html
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

## Developer Facing improvements

1. Added [@f3ve/eslint-config](https://github.com/f3ve/eslint-config) for improved linting.
1. Added a [bump-version workflow](https://github.com/f3ve/vue-markdown-it/blob/main/.github/workflows/bump-version.yml) to easily trigger new releases.
1. Added a [release workflow](https://github.com/f3ve/vue-markdown-it/blob/main/.github/workflows/release.yml) that handles publishing to NPM and generating GitHub releases.

## Conclusion

Thanks for reading! If you're interested in using this package feel free to install it from [npm](https://www.npmjs.com/package/@f3ve/vue-markdown-it). If you'd like to propose some new features or report a bug feel free to [open an issue on GitHub](https://github.com/f3ve/vue-markdown-it/issues).
