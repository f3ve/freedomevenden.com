---
title: Redesigning my Website
datePublished: 2023-09-22T00:00:00
description: I decided to redesign my website. I talk about the reasons why and the process of doing it.
meta:
  - name: type
    content: article
---

## Table of Contents

[[toc]]

## What's Changed

If you're a returning user, you probably notice I redesigned my website. If you're a new visitor, welcome!

It's been a long time since I did much with my website. In the time that's passed, a lot has happened.

1. I moved out of my home state, then I moved back.
1. I got a new job as a Frontend Web Developer at [OBSKUR](https://obskur.com).
1. I became a homeowner.
1. I became a father.

Needless to say, it's been a very eventful couple of years. There's been some ups and downs, but mostly ups. I've learned alot about myself and what I want out of life.

When life is busy, you eventually end up neglecting some things. For me, one of those things was my website. My last post was almost three years ago. My skill as a programmer and a web designer has grown significantly since then. I felt that my website no longer represented me, not that it ever did.

Originally, I built it with the goal of getting a job. I spent a lot of time worrying about making it look more "professional" so it really just stressed me out and wasn't fun to build. My blog posts felt stale and uninspired because I only wanted to write about things that sounded "professional".

Since then I've become much more confident in myself and my abilities. I no longer feel the need to make the "perfect" professional website. Instead, this will just be a place for me to share my thoughts, tidbits about my life, and things I like with anyone who cares to see.

## The Tools I Used

I decided to build this website using [Vue](https://vuejs.org/) and [Vite](https://vitejs.dev/). My original site was built using [next.js](https://nextjs.org/) which is a great framework, but I've been working professionally with Vue for some time and I've come to love it. Additionally, Vite has a great developer experience and tons of community made plugins for anything you can think of. Of course, if you can't find a plugin for your specific needs, you can always [make one](https://vitejs.dev/guide/api-plugin.html).

This time around I went with a text focused, minimalist design. I'm using a [Vite plugin](https://github.com/hmsk/vite-plugin-markdown) that allows me to write all my pages in Markdown. I'm going text focused because it performs well on all hardware and they're responsive by default. I want anyone to be able to access this site and have an enjoyable browsing experience without waiting for a bunch of assets to load. I didn't go full [text-only](https://sjmulder.nl/en/textonly.html) because I still want to have some fun with the design.

For styling, I decided to use tool called [UnoCSS](https://github.com/unocss/unocss). It's an on-demand atomic CSS engine, similar to [TailwindCSS](https://tailwindcss.com/). I chose UnoCSS over Tailwind because it's more lightweight and was super easy to configure. It also has a handy [VSCode plugin](https://unocss.dev/integrations/vscode). Additionally, I'm not using any component libraries or CSS extensions. I wanted to avoid bloating the project with unnecessary tools. At the end of the day this is a simple site, with simple goals and I want it to stay that way.

Finally, I'm not implementing any sort of tracking or analytics because I value privacy and I want to respect my guests' privacy. For this reason I'm also not using any google fonts in this website. Instead, I'm using a web font platform called [bunny.net](https://fonts.bunny.net/). It's open-source, GDPR compliant, and has most of the fonts you can find in Google Fonts.

## The Goals

So what are my goals for this website anyway? Well, I want to have my own little slice of the internet where I could share my thoughts, tidbits about my life, and a way for people to connect with me. But, I want to do that outside the control of major corporations like Twitter, Google, or Facebook. I wanted a place where I don't need to worry about censorship or algorithms. By building my own site, I own it and everything on it. I don't need to worry about it being deleted or lost by something outside my control.

I've been inspired by the [indieweb movement](https://indieweb.org/) and the idea of the [small web](https://benhoyt.com/writings/the-small-web-is-beautiful/). I decided to act on it and make a website of my own that can represent my ideals and be an outlet for creativity and personal expression.

I encourage you to try building your own website. It's easier than you think. Feel free to look through [this website's GitHub repo](https://github.com/f3ve/freedomevenden.com) for some inspiration.
