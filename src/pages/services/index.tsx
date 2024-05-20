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
            SERVICES.map((service, index) => <ServiceItem key={index} {...service} index={index + 1} />)
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
    description: 'Vương Gia Minh thực hiện đầu tư hàng năm vào vùng trồng thuốc lá, cung cấp chi phí, phân bón, và hỗ trợ kỹ thuật cho nông dân. Mục tiêu của công ty là nâng cao chất lượng nguồn thu và năng suất sản xuất thuốc lá để thúc đẩy phát triển kinh tế, cũng như cải thiện cuộc sống ở các vùng nông thôn.',
    img: '/img/service-1.jpeg'
  },
  {
    title: 'Thu mua nguyên liệu',
    description: 'Vương Gia Minh thực hiện quy trình thu mua nguyên liệu thuốc lá chặt chẽ, kết nối trực tiếp với nông dân và doanh nghiệp sản xuất thuốc lá điếu, cả trong và ngoài nước. Quy trình bao gồm kiểm tra cận thị, lấy mẫu, và kiểm tra chất lượng. Công ty đảm bảo giá cả công bằng, cam kết hỗ trợ cộng đồng nông thôn và mang lại nguồn cung ứng nguyên liệu đa dạng và ổn định.',
    img: '/img/service-2.jpeg'
  },
  {
    title: 'Gia công sơ chế',
    description: 'Vương Gia Minh sử dụng các thiết bị hiện đại để tách cọng lá thuốc. Quy trình bao gồm các bước làm ẩm, phối trộn, và tách bó bằng hơi nước để tạo sư tinh khiết cho lá thuốc. Lá thuốc và cọng sau khi tách được sấy khô, phân loại và đóng thùng riêng theo yêu cầu. Cuối mỗi quy trình, công ty luôn lấy mẫu để kiểm tra chất lượng, đảm bảo đáp ứng các tiêu chuẩn đề ra của của doanh nghiệp sản xuất thuốc lá điếu.',
    img: '/img/service-3.jpeg'
  },
  {
    title: 'Cung cấp nguyên liệu',
    description: 'Vương Gia Minh lưu trữ nguyên liệu thuốc lá ở nhiệt độ từ 15-30 độ Celsius để tạo môi trường lý tưởng cho lên men tự nhiên, cải thiện hương vị và giảm độc hại. Quy trình giao hàng của công ty sử dụng phương tiện đường bộ, được kiểm tra và bảo dưỡng thường xuyên để đảm bảo an toàn và giao hàng đúng thời hạn. Đội ngũ giao hàng của Vương Gia Minh cũng được đào tạo về thuốc lá để đảm bảo chất lượng sản phẩm trong quá trình vận chuyển.',
    img: '/img/service-4.png'
  },
  {
    title: 'Xuất khẩu quốc tế',
    description: 'Vương Gia Minh không chỉ đóng vai trò là cầu nối cho các doanh nghiệp trong nước mà còn liên kết với nhiều nhà đầu tư và doanh nghiệp quốc tế, bao gồm khu vực Nam Mỹ, Nam Phi và Đông Nam Á. Nhờ sở hữu một đội ngũ có chuyên môn về xuất nhập khẩu thuốc lá, Vương Gia Minh tự tin trong việc thu mua nguyên liệu và phân phối sản phẩm đã hoàn thiện. Điều này giúp chúng tôi xây dựng một chuỗi cung ứng linh hoạt, từ người trồng thuốc, doanh nghiệp sản xuất, cho đến người tiêu dùng, để đa dạng hóa sản phẩm và thúc đẩy sự phát triển của thuốc lá toàn cầu.',
    img: '/img/service-5.jpeg'
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