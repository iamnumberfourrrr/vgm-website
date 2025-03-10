import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRouter } from 'next/router';

const pagination = {
  clickable: true,
  renderBullet: function (index: number, className: string) {
    return '<span class="' + className + '">' + '</span>';
  },
};

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <main className={`flex min-w-full min-h-screen flex-col`}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={pagination}
        className='w-full max-h-[800px]'
      >
        <SwiperSlide className='relative min-w-full'>
          <div className='hidden md:block absolute left-[5vw] top-[45%] bg-white p-8' >
            <div className='text-orange-400 font-bold uppercase text-4xl'>
              Nhà phân phối Thuốc lá
            </div>
            <div className='text-orange-400 font-bold uppercase text-4xl'>
              uy tín chất lượng cao
            </div>
            <div>
              Sau hơn 40 năm, đến nay Công ty Vương Gia Minh đã trở thành <br />{' '}
              một trong những Công ty ở Việt Nam.
            </div>
          </div>
          <img className='min-w-full' src='/img/hero-1.jpg' alt='hero-1' />
        </SwiperSlide>
        <SwiperSlide className='relative min-w-full'>
          <img className='min-w-full' src='/img/hero-2.jpg' alt='hero-2' />
        </SwiperSlide>
        <SwiperSlide className='relative min-w-full'>
          <img className='min-w-full' src='/img/hero-3.jpg' alt='hero-3' />
        </SwiperSlide>
      </Swiper>
      <div className='mt-10'>
        <div className='font-bold text-3xl text-center md:text-end md:text-5xl xl:text-8xl md:pr-24 mb-6 text-grey-english uppercase'>
          About us
        </div>
        <div className='md:flex bg-background-default p-8'>
          <img
            className='w-[50vw] mx-auto mb-5 md:mt-[-100px]'
            src='/img/home-about-us.png'
            alt='about us'
          />
          <div className='pl-4'>
            <div>
              Công ty TNHH TM Vương Gia Minh đã phát triển trong hơn 40 năm và
              hiện là một trong những nhà cung ứng nguyên liệu quan trọng trong
              ngành sản xuất thuốc lá điếu tại Việt Nam. Chúng tôi góp phần vào sự
              phát triển của ngành này thông qua việc hợp tác với nhiều vùng trồng
              trên toàn quốc. Với trụ sở tại TP. Hồ Chí Minh, Vương Gia Minh mở
              rộng tầm ảnh hưởng cả trong và ngoài nước bằng sản phẩm chất lượng
              và dịch vụ uy tín. Ngoài ra, chúng tôi còn định hướng kết nối vùng
              Đông Nam Á và tạo nên tương lai sáng hơn cho thị trường thuốc lá
              Việt Nam.
            </div>
            <Button className='float-end' onClick={() => router.push('/about')}>
              {t('See more')}
            </Button>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <div className='font-bold text-3xl md:text-5xl xl:text-8xl pl-24 mb-6 text-grey-english uppercase'>
          Our services
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-background-default py-10'>
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <div className='mt-10 mx-20'>
        <div className='font-bold text-3xl text-center md:text-5xl xl:text-8xl pl-24 mb-6 text-grey-english uppercase'>
          Products
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-10'>
          {PRODUCTS.map((product, index) => (<ProductCard key={index} {...product} />))}
        </div>
      </div>
      <div className='mt-20 flex'>
        <div className='bg-white brightness-[40%]'>
          <img className='w-[80%]' src='/img/world-map.png' alt='map' />
        </div>
        <div className='absolute text-white right-5 lg:right-20 mt-2 md:mt-5 lg:mt-14'>
          <div className='text-sm md:text-lg lg:text-5xl uppercase font-bold'>Mạng lưới phân phối</div>
          <div className='md:mt-2 lg:mt-6 flex gap-2'>
            <div className='font-bold text-lg lg:text-6xl'>120</div>
            <div className='text-sm md:text-lg lg:text-2xl self-center'>nhà phân phối trong nước</div>
          </div>
          <div className='md:mt-2 lg:mt-6 flex gap-2'>
            <div className='font-bold text-lg lg:text-6xl'>20</div>
            <div className='text-sm md:text-lg lg:text-2xl self-center'>nước đã xuất khẩu</div>
          </div>
          <div className='md:mt-2 lg:mt-6'>
            <div className='font-bold text-lg lg:text-6xl'>6500<span className='text-md lg:text-4xl'>KG</span></div>
            <div className='text-sm md:text-lg lg:text-2xl'>số lượng hàng hoá xuất đi mỗi năm</div>
          </div>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}

const SERVICES = [
  {
    title: 'Đầu tư vùng trồng',
    img: '/img/home-service-1.jpeg',
    link: 'invest'
  },
  {
    title: 'Thu mua nguyên liệu',
    img: '/img/home-service-2.jpeg',
    link: 'purchase'
  },
  {
    title: 'Gia công tách cọng',
    img: '/img/home-service-3.jpeg',
    link: 'processing'
  },
  {
    title: 'Xuất nhập khẩu quốc tế',
    img: '/img/home-service-4.png',
    link: 'supply'
  },
  {
    title: 'Cung cấp nguyên liệu',
    img: '/img/home-service-5.jpeg',
    link: 'export'
  },
]

const ServiceCard = ({ title, img, link }: { title: string, img: string, link: string }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/services#${link}`)} className='group cursor-pointer flex flex-col items-center my-5 mx-20'>
      <div className='relative flex'>
      <img className='brightness-50 group-hover:brightness-100 min-w-[400px] h-[266px] object-cover' src={img} alt={title} />
      <div className='self-start absolute z-50 p-2 bg-orange-400 text-white px-3 text-sm'>{title}</div>
      </div>
    </div>
  );
}

const PRODUCTS = [
  {
    title: 'Thuốc lá chưa tách cọng',
    img: '/img/product-1.png'
  },
  {
    title: 'Thuốc lá đã tách cọng',
    img: '/img/product-2.png'
  },
  {
    title: 'Thuốc lá cọng',
    img: '/img/product-3.png'
  },
  {
    title: 'Thuốc lá sợi',
    img: '/img/product-4.png'
  }
]

const ProductCard = ({ title, img }: { title: string, img: string }) => {
  return <div className='flex flex-col items-center border border-grey-button'>
    <img className='min-h-[250px]' src={img} alt={title} />
    <div className='uppercase text-grey-product'>{title}</div>
  </div>
}