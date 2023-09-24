import { Feed } from 'feed';
import fastGlob from 'fast-glob';
import fs from 'fs-extra';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

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
  const filePaths = await fastGlob('pages/blog/*.md');

  const blogPosts = await getPostDataFromFiles(filePaths);
}

async function getPostDataFromFiles(filePaths: string[]) {
  const promises = filePaths
    .filter((path) => !path.includes('index'))
    .map(async (path) => {
      const rawFile = await fs.readFile(path, 'utf-8');
      const { data, content } = matter(rawFile);

      const html = md.render(content).replace('src="/', `source=${DOMAIN}/`);

      return {
        ...data,
        date: new Date(data.datePublished),
        content: html,
        author: [AUTHOR],
        link: `${DOMAIN}${path.replace(/^pages(.+)\.md$/, '$1')}`,
      };
    });

  const posts = (await Promise.all(promises)).filter(Boolean).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

function writeFeed() {
  const feed = new Feed({
    author: AUTHOR,
  });
}
