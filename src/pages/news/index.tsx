import { ContactForm } from '@/components/ContactForm';
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className='bg-background-default px-20 py-10 flex flex-col'>
        <h1 className='border-b-4 border-orange-400 text-5xl font-bold'>{t`News`}</h1>
        <div>
          {
            NEWS.map((news, index) => <NewsItem key={index} {...news} />)
          }
        </div>
      </div>
      <ContactForm />
    </>
  )
}

const NEWS = [
  {
    title: 'Mối lo ngại về thị trường thuốc lá có hương vị tại Việt Nam',
    date: '20/10/2023',
    description: 'Thị trường thuốc lá có hương vị tại Việt Nam đang gia tăng và chính các loại hương vị có thể thúc đẩy việc sử dụng và mở rộng số lượng người hút các sản phẩm thuốc lá độc hại.Thị trường thuốc lá có hương vị tại Việt Nam đang gia tăng và chính các loại hương vị có thể thúc đẩy việc sử dụng và mở rộng số lượng người hút các sản phẩm thuốc lá độc hại.',
    img: '/img/home-service-1.jpeg'
  },
  {
    title: 'Mối lo ngại về thị trường thuốc lá có hương vị tại Việt Nam',
    date: '20/10/2023',
    description: 'Thị trường thuốc lá có hương vị tại Việt Nam đang gia tăng và chính các loại hương vị có thể thúc đẩy việc sử dụng và mở rộng số lượng người hút các sản phẩm thuốc lá độc hại.Thị trường thuốc lá có hương vị tại Việt Nam đang gia tăng và chính các loại hương vị có thể thúc đẩy việc sử dụng và mở rộng số lượng người hút các sản phẩm thuốc lá độc hại.',
    img: '/img/home-service-1.jpeg'
  },
  {
    title: 'Mối lo ngại về thị trường thuốc lá có hương vị tại Việt Nam',
    date: '20/10/2023',
    description: 'Thị trường thuốc lá có hương vị tại Việt Nam đang gia tăng và chính các loại hương vị có thể thúc đẩy việc sử dụng và mở rộng số lượng người hút các sản phẩm thuốc lá độc hại.Thị trường thuốc lá có hương vị tại Việt Nam đang gia tăng và chính các loại hương vị có thể thúc đẩy việc sử dụng và mở rộng số lượng người hút các sản phẩm thuốc lá độc hại.',
    img: '/img/home-service-1.jpeg'
  },
  {
    title: 'Mối lo ngại về thị trường thuốc lá có hương vị tại Việt Nam',
    date: '20/10/2023',
    description: 'Thị trường thuốc lá có hương vị tại Việt Nam đang gia tăng và chính các loại hương vị có thể thúc đẩy việc sử dụng và mở rộng số lượng người hút các sản phẩm thuốc lá độc hại.Thị trường thuốc lá có hương vị tại Việt Nam đang gia tăng và chính các loại hương vị có thể thúc đẩy việc sử dụng và mở rộng số lượng người hút các sản phẩm thuốc lá độc hại.',
    img: '/img/home-service-1.jpeg'
  }
]

const NewsItem = ({ title, description, date, img }: any) => {
  return <div className='m-10 flex bg-white h-[380px]'>
    <img src={img} alt={title} />
    <div className='ml-10 py-10'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='text-grey-button'>{date}</p>
      <p className='mt-5'>{description}</p>
    </div>
  </div>
}