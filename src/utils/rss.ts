import { Feed } from 'feed';
import fastGlob from 'fast-glob';
import fs from 'fs-extra';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

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

      const html = md.render(content);
    });
}
