import { promises as fs } from 'fs';
import { GetStaticPathsResult } from 'next';
import path from 'path';
import Markdown from 'react-markdown';

const CONTENT_PATH = path.join(process.cwd(), 'src/content');

export const getStaticPaths = async () => {
  const posts = await fs.readdir(CONTENT_PATH);
  const paths = posts.map(p => ({
    params: {
      slug: p.replace(/\.md$/, '')
    }
  }));

  return {
    paths,
    fallback: false
  } satisfies GetStaticPathsResult
}

export async function getStaticProps({ params }: any) {
  const file = await fs.readFile(path.join(CONTENT_PATH, `${params.slug}.md`), 'utf8')
  return { props: { file } }
}

export default function NewPages({ file }: any) {
  return <Markdown>{file}</Markdown>
}