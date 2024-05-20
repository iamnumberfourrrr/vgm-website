import { ContactForm } from '@/components/ContactForm';
import { useTranslation } from 'react-i18next'
import fs, { promises } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button';

const CONTENT_PATH = path.join(process.cwd(), 'src/content');

const parseMarkdown = async (fileName: string) =>  {
  const file = await promises.readFile(path.join(CONTENT_PATH, `${fileName}.md`), 'utf8')
  const matterResult = matter(file);

  return {
    title: matterResult.data.title,
    date: dayjs(matterResult.data.date).format('DD/MM/YYYY'),
    excerpt: matterResult.data.excerpt,
    cover_image: matterResult.data.cover_image,
  }
}

export async function getStaticProps() {
  const postPaths = fs.readdirSync(CONTENT_PATH).map(p => p.replace(/\.md$/, ''));
  const posts = await Promise.all(postPaths.map(async p => {
    return {
      ...(await parseMarkdown(p)),
      href: `/news/${p}`
    }
  }));

  return {
    props: {
      posts,
    },
  }
}

export default function News({ posts }: any) {
  const { t } = useTranslation();
  return (
    <>
      <div className='bg-background-default px-20 py-10 flex flex-col'>
        <h1 className='border-b-4 border-orange-400 text-5xl font-bold'>{t`News`}</h1>
        <div>
          {
            posts.map((p: any) => <NewsItem key={p.title} title={p.title} date={p.date} description={p.excerpt} img={p.cover_image} href={p.href} />)
          }
        </div>
      </div>
      <ContactForm />
    </>
  )
}

const NewsItem = ({ title, description, date, img, href }: any) => {
  const router = useRouter();
  return <div className='m-10 flex bg-white h-[380px]'>
    <img src={img} alt={title} />
    <div className='ml-10 py-10'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='text-grey-button'>{date}</p>
      <p className='mt-5'>{description}</p>
      <Button onClick={() => router.push(href)} className='float-right mr-5'>Xem thêm</Button>
    </div>
  </div>
}