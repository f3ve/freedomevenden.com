---
title: Projects - Freedom Evenden
subtitle: Projects I'm currently working on or have worked on in the past.
description: Projects Freedom Evenden has worked on
meta:
  - name: type
    content: website
projects:
  Current Role:
    - name: OBSKUR
      description: Broadcasting Software built in Unreal Engine 5.
      role: Frontend Web Developer
      link: https://obskur.com
  Open-Source Projects:
    - name: ESLint Config
      description: My personal eslint-config. Comes with support for Vue, TypeScript, UnoCSS, and Prettier. Designed for the new ESLint flat config style.
      role: Creator & Maintainer
      link: https://github.com/f3ve/eslint-config
    - name: Vue Markdown-it
      description: Vue component for integrating Markdown-it.
      role: Creator & Maintainer
      link: https://github.com/f3ve/vue-markdown-it
  Past:
    - name: PatentPal
      description: Patent drafting software using natural language processing.
      role: Full-Stack Web Developer
      link: https://patentpal.com
    - name: Avybe
      description: Video Streaming social media platform
      role: Full-Stack Web Developer
---

<ProjectsList :projects="frontmatter.projects" />
