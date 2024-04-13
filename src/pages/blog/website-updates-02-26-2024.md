---
title: Website Updates February 26th, 2024
datePublished: February 26. 2024 12:00 PM
description: Recent updates to Freedom Evenden's website.
meta:
  - name: type
    content: article
---

## Changes
1. Changed the website theme. Dark theme is based on the [Dracula Theme](https://draculatheme.com/). Light theme is my own design, but based on the colors of Dracula.
2. Changed from [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) to [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages). While I think unplugin-vue-router is a great library, it's still marked as experimental. I ran into some issues with `typed-router.d.ts` in their latest update, so I decided to switch back to vite-plugin-pages since it seems more stable right now.
3. Fixed some css file preloading issues. I think I finally fixed the light theme flash when site is first loaded in dark mode.
4. Dropped the experimental features I was working on.
5. Got the <RouterLink to="/contact">contact form</RouterLink> working.

## Summary

This update focused on cleaning things up and getting my site into a finalized state. I think from here I'm going to focus on just blogging and maybe cleaning up a couple things here or there. Overall I'm happy with the state the site. It feels good to use, I like how it looks, and it finally feels a little more like my internet home.