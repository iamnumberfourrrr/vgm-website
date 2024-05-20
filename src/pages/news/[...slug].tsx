import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { GetStaticPathsResult } from 'next';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { BoxLink } from '@/components/BoxLink';
import { ArrowLeft } from 'lucide-react';

const CONTENT_PATH = path.join(process.cwd(), 'src/content');

export const getStaticPaths = async () => {
  const posts = (await fs.readdir(CONTENT_PATH, { recursive: true }))
  .filter(p => p.endsWith('.md'))
  .map((p) => (p as string).replace(/\.md$/, ''))

  const paths = posts.map(p => ({
    params: {
      slug: p.split('/')
    }
  }));


  return {
    paths,
    fallback: false
  } satisfies GetStaticPathsResult
}

export async function getStaticProps({ params }: any) {
  const file = await fs.readFile(path.join(CONTENT_PATH, `${params.slug.join('/')}.md`), 'utf8')
  const matterResult = matter(file);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const data = {
    title: matterResult.data.title,
    date: dayjs(matterResult.data.date).format('DD/MM/YYYY'),
    excerpt: matterResult.data.excerpt
  }
  return { props: { contentHtml, data } }
}

export default function NewPages({ contentHtml, data: { title, date } }: any) {
  const { t } = useTranslation();
  return <div className='container mx-auto px-20 py-10 flex flex-col markdown'>
    <h1 className='border-b-4 border-orange-400 text-5xl font-bold'>{t`News`}</h1>
    <div className='px-20 mx-auto mt-10'>
      <h1 className='text-4xl font-bold capitalize'>{title}</h1>
      <p className='mt-3 text-[#807B74]'>{date}</p>
      <div className='mt-10 prose xl:prose-xl' dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <div className='mt-10 flex justify-center'><BoxLink href='/news' title={<div className='flex gap-2'>
        <ArrowLeft strokeWidth={1} /> {t`Back to news`}
      </div>} /></div>
    </div>
  </div>
}