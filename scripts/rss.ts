import { Feed, type Item } from 'feed';
import fastGlob from 'fast-glob';
import fs from 'fs-extra';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import dayjs from 'dayjs';
import type { BlogPostFrontmatter } from '@/pages/blog/components/types';
import { dirname } from 'path';

const DOMAIN = 'https://freedomevenden.com';
const AUTHOR = {
  name: 'Freedom Evenden',
  link: DOMAIN,
};

const md = MarkdownIt({
  html: true,
  linkify: true,
  breaks: true,
});

async function buildRSSFeed() {
  const filePaths = await fastGlob('src/pages/blog/*.md');

  const blogPosts: any[] = await getPostDataFromFiles(filePaths);

  await writeFeed(blogPosts);
}

async function getPostDataFromFiles(filePaths: string[]) {
  const promises = filePaths
    .filter((path) => !path.includes('index'))
    .map(async (path) => {
      const rawFile = await fs.readFile(path, 'utf-8');
      const { data, content } = matter(rawFile);

      const html = md.render(content).replace('src="/', `source=${DOMAIN}/`);

      return {
        ...(data as BlogPostFrontmatter),
        date: new Date(data.datePublished),
        content: html,
        author: [AUTHOR],
        link: `${DOMAIN}${path.replace(/^pages(.+)\.md$/, '$1')}`,
      };
    });

  const posts = (await Promise.all(promises)).filter(Boolean).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return posts;
}

async function writeFeed(posts: Item[]) {
  const feed = new Feed({
    title: 'Freedom Evenden',
    author: AUTHOR,
    description: "Freedom Evenden's blog",
    id: 'https://freedomevenden.com/',
    link: 'https://freedomevenden.com/',
    copyright: `CC BY-NC-SA 4.0 ${dayjs().format('YYYY')} © Freedom Evenden`,
    favicon: 'https://freedomevenden.com/favicon.ico',
    feedLinks: {
      json: 'https://freedomevenden.com/feed.json',
      atom: 'https://freedomevenden.com/feed.atom',
      rss: 'https://freedomevenden.com/feed.xml',
    },
  });

  posts.forEach((post) => feed.addItem(post));

  await fs.ensureDir(dirname(`./dist/feed`));
  await fs.writeFile(`./dist/feed.xml`, feed.rss2(), 'utf-8');
  await fs.writeFile(`./dist/feed.atom`, feed.atom1(), 'utf-8');
  await fs.writeFile(`./dist/feed.json`, feed.json1(), 'utf-8');
}

buildRSSFeed();
