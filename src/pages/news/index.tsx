import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm';
import { CONTENT_PATH, parseMarkdown } from '@/helpers/parseMarkdown';
import fs from 'fs';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export async function getStaticProps() {
  const postPaths = fs
    .readdirSync(CONTENT_PATH, {
      recursive: true,
    })
    .filter((p) => fs.statSync(`${CONTENT_PATH}/${p}`).isFile())
    .map((p) => (p as string).replace(/\.md$/, ''));

  const posts = await Promise.all(
    postPaths.map(async (p) => {
      return {
        ...(await parseMarkdown(p)),
        href: `/news/${p}`,
      };
    })
  );

  return {
    props: {
      posts,
    },
  };
}

export default function News({posts}: any) {
  const {t, i18n} = useTranslation();

  return (
    <>
      <div className='bg-background-default px-20 py-10 flex flex-col'>
        <h1 className='border-b-4 border-orange-400 text-5xl font-bold'>{t`News`}</h1>
        <div>
          {posts
            .filter((p: any) => p.href.endsWith(i18n.language))
            .map((p: any) => (
              <NewsItem
                key={p.title}
                {...p}
                description={p.excerpt}
                img={p.cover_image}
              />
            ))}
        </div>
      </div>
      <ContactForm />
    </>
  );
}

const NewsItem = ({title, description, date, img, href}: any) => {
  const router = useRouter();
  return (
    <div className='m-10 flex bg-white h-[380px]'>
      <img src={img} alt={title} />
      <div className='ml-10 py-10'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-grey-button'>{date}</p>
        <p className='mt-5'>{description}</p>
        <Button onClick={() => router.push(href)} className='float-right mr-5'>
          Xem thêm
        </Button>
      </div>
    </div>
  );
};
