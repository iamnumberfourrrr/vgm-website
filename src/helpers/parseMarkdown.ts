import dayjs from 'dayjs';
import { promises } from 'fs';
import matter from 'gray-matter';
import path from 'path';

export const CONTENT_PATH = path.join(process.cwd(), 'src/content');

export const parseMarkdown = async (fileName: string) =>  {
  const file = await promises.readFile(path.join(CONTENT_PATH, `${fileName}.md`), 'utf8')
  const matterResult = matter(file);

  return {
    title: matterResult.data.title,
    date: dayjs(matterResult.data.date).format('DD/MM/YYYY'),
    excerpt: matterResult.data.excerpt,
    cover_image: matterResult.data.cover_image,
  }
}