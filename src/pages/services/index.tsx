import { ContactForm } from '@/components/ContactForm';
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className='bg-background-default px-20 py-10 flex flex-col'>
        <h1 className='border-b-4 border-orange-400 text-5xl font-bold'>{t`Services`}</h1>
        <img src='/img/services.svg' alt='services' />
        <div>
          {
            SERVICES.map((service, index) => <ServiceItem key={index} {...service} index={index + 1} description='Công đoạn nạp liệu và xử lý sơ bộ, phân loại lá, tách bó, lựa tạp vật: Hệ thống nạp liệu liên động, đội ngũ công nhân lành nghề, chuyên cần.Công đoạn nạp liệu và xử lý sơ bộ, phân loại lá, tách bó, lựa tạp vật: Hệ thống nạp liệu liên động, đội ngũ công nhân lành nghề, chuyên cần.' />)
          }
        </div>
      </div>
      <ContactForm />
    </>
  )
}

const SERVICES = [
  {
    title: 'Đầu tư vùng trồng',
    description: '',
    img: '/img/home-service-1.jpeg'
  },
  {
    title: 'Thu mua nguyên liệu',
    description: '',
    img: '/img/home-service-2.jpeg'
  },
  {
    title: 'Gia công sơ chế',
    description: '',
    img: '/img/home-service-4.jpeg'
  },
  {
    title: 'Cung cấp nguyên liệu',
    description: '',
    img: '/img/home-service-4.jpeg'
  },
  {
    title: 'Xuất khẩu quốc tế',
    description: '',
    img: '/img/home-service-5.jpeg'
  }
]

const ServiceItem = ({ title, description, img, index }: any) => {
  const isOdd = index % 2 === 1;

  return <div className={isOdd ? 'mt-10 flex flex-row-reverse' : 'mt-10 flex'}>
    <div className={isOdd ? 'text-right self-start' : ''}>
      <div className={isOdd ? 'flex flex-row-reverse' : 'flex' }>
        <div className='text-[128px] font-bold text-center text-[#DA9A00] opacity-50'>{index}</div>
        <div className='font-bold mt-20 ml-5 text-3xl'>{title}</div>
      </div>
      <div className={`h-[20px] w-[280px] bg-[#DA9A00] ${isOdd ? 'float-right' : ''}`}></div>
      <div className='mt-10'>
      {description}
      </div>
    </div>
    <img src={img} className='max-w-[40%]' />
  </div>
}