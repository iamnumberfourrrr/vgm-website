import { Inter } from 'next/font/google';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { Option, Select, Textarea } from '@material-tailwind/react';
import { MailIcon, MapPin, PhoneIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import { ContactForm } from '@/components/ContactForm';

const inter = Inter({subsets: ['latin']});

const pagination = {
  clickable: true,
  renderBullet: function (index: number, className: string) {
    return '<span class="' + className + '">' + '</span>';
  },
};

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className={`flex min-w-full min-h-screen flex-col ${inter.className}`}>
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
          <img className='min-w-full' src='/img/hero-1.png' alt='hero-1' />
        </SwiperSlide>
        <SwiperSlide className='relative min-w-full'>
          <img className='min-w-full' src='/img/hero-1.png' alt='hero-1' />
        </SwiperSlide>
        <SwiperSlide className='relative min-w-full'>
          <img className='min-w-full' src='/img/hero-1.png' alt='hero-1' />
        </SwiperSlide>
      </Swiper>
      <div className='mt-10'>
        <div className='font-bold text-5xl text-center md:text-end md:text-5xl xl:text-8xl md:pr-24 mb-6 text-grey-english uppercase'>
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
            <Button className='float-end'>
              {t('See more')}
            </Button>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <div className='font-bold text-5xl md:text-5xl xl:text-8xl pl-24 mb-6 text-grey-english uppercase'>
          Our services
        </div>
        <div className='grid grid-cols-2 bg-background-default py-10'>
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <div className='mt-10 mx-20'>
        <div className='font-bold text-5xl text-center md:text-5xl xl:text-8xl pl-24 mb-6 text-grey-english uppercase'>
          Products
        </div>
        <div className='flex gap-10 mt-10'>
          {PRODUCTS.map((product, index) => (<ProductCard key={index} {...product} />))}
        </div>
      </div>
      <div className='mt-20 flex'>
        <div className='bg-white brightness-[40%]'>
          <img className='w-[80%]' src='/img/world-map.png' alt='map' />
        </div>
        <div className='absolute text-white right-20 mt-10'>
          <div className='text-6xl uppercase font-bold'>Networks</div>
          <div className='text-2xl text-right uppercase font-bold'>Mạng lưới phân phối</div>
          <div className='mt-6'>
            <div className='font-bold text-6xl'>120</div>
            <div className='text-2xl'>nhà phân phối trong nước</div>
          </div>
          <div className='mt-6'>
            <div className='font-bold text-6xl'>20</div>
            <div className='text-2xl'>nước đã xuất khẩu</div>
          </div>
          <div className='mt-6'>
            <div className='font-bold text-6xl'>6500<span className='text-4xl'>KG</span></div>
            <div className='text-2xl'>số lượng hàng hoá xuất đi mỗi năm</div>
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
    img: '/img/home-service-1.jpeg'
  },
  {
    title: 'Thu mua nguyên liệu',
    img: '/img/home-service-2.jpeg'
  },
  {
    title: 'Gia công',
    img: '/img/home-service-3.jpeg'
  },
  {
    title: 'Cung cấp nguyên liệu',
    img: '/img/home-service-4.jpeg'
  },
  {
    title: 'Xuất nhập khẩu quốc tế',
    img: '/img/home-service-5.jpeg'
  },
  {
    title: 'Xì gà',
    img: '/img/home-service-5.jpeg'
  },
]

const ServiceCard = ({ title, img }: { title: string, img: string }) => {
  return (
    <div className='flex flex-col mt-5 mx-20'>
      <div className='self-start mb-1 bg-orange-400 text-white px-3 text-sm'>{title}</div>
      <img className='w-[640px] h-[340px] object-cover' src={img} alt={title} />
    </div>
  );
}

const PRODUCTS = [
  {
    title: 'DARK FIRED CURED SOLID LEAF',
    img: '/img/product-1.png'
  },
  {
    title: 'DARK FIRED CURED SOLID LEAF',
    img: '/img/product-2.png'
  },
  {
    title: 'DARK FIRED CURED SOLID LEAF',
    img: '/img/product-3.png'
  }
]

const ProductCard = ({ title, img }: { title: string, img: string }) => {
  return <div className='flex flex-col items-center border border-grey-button w-[450px]'>
    <img className='h-[250px]' src={img} alt={title} />
    <div className='uppercase text-grey-product'>{title}</div>
  </div>
}