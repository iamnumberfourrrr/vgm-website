import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm';
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className='bg-background-default px-20 py-10 flex flex-col'>
        <h1 className='border-b-4 border-orange-400 text-5xl font-bold'>{t`Introduction`}</h1>
        <div className='flex mt-20'>
          <img src='/img/about-1.jpeg' alt='about-1' className='w-[60%] object-cover' />
          <div className='bg-white p-20 mt-60 -ml-20 w-[80%]'>
            Với hơn 40 năm vững vàng phát triển, Công ty TNHH TM Vương Gia Minh đã trở thành một trong những nhà cung ứng cốt lõi trong ngành sản xuất thuốc lá điếu của quốc gia. Mang trên mình sứ mệnh đó, Vương Gia Minh còn là ngọn lửa thắp sáng cho ngành công nghiệp này, với nhiều vùng trồng nở rộ khắp ba miền đất nước. Từ trụ sở chính đặt tại thành phố Hồ Chí Minh, Vương Gia Minh lan toả làn khói thương mại bao trùm mọi khu vực nội địa lẫn quốc tế. Với sản phẩm chất lượng cao, dịch vụ uy tín, Vương Gia Minh sẵn sàng mở rộng tầm nhìn, kết nối với khu vực Đông Nam Á và hình thành một tương lai thú vị cho thị trường thuốc lá Việt Nam.
          </div>
        </div>
        <h2 className='text-4xl uppercase font-bold mt-20 text-center'>TRIET LY KINH DOANH (dummy)</h2>
        <div className='mx-auto mt-5 flex gap-5'>
          <div className='h-[20px] w-[95px] bg-[#00571b]'></div>
          <div className='h-[20px] w-[95px] bg-[#DA9A00]'></div>
          <div className='h-[20px] w-[95px] bg-[#363022]'></div>
        </div>
        <div className='mt-10'>
          <div className=''>
            <div className='flex'>
              <div>
                <div className='text-5xl font-bold text-center'>1</div>
                <div className='h-[20px] w-[95px] bg-[#00571b]'></div>
              </div>
              <div className='text-[#00571b] uppercase font-bold mt-8 ml-5 text-3xl'>Sản phẩm thương hiệu</div>
            </div>
            <div className='mt-5'>
              Sau hơn 40 năm, đến nay Công ty Vương Gia Minh đã trở thành một trong những Công ty ở Việt Nam, chuyên kinh doanh ngành nguyên liệu thuốc lá và đầu tư vùng trồng nguyên liệu thuốc lá trên Toàn Quốc . Sau hơn 40 năm, đến nay Công ty Vương Gia Minh đã trở thành một trong những Công ty ở Việt Nam, chuyên kinh doanh ngành nguyên liệu thuốc lá và đầu tư vùng trồng nguyên liệu thuốc lá trên Toàn Quốc .Sau hơn 40 năm, đến nay Công ty Vương Gia Minh đã trở thành một trong những Công ty ở Việt Nam, chuyên kinh doanh ngành nguyên liệu thuốc lá và đầu tư vùng trồng nguyên liệu thuốc lá trên Toàn Quốc.
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <div className=''>
            <div className='flex'>
              <div>
                <div className='text-5xl font-bold text-center'>2</div>
                <div className='h-[20px] w-[95px] bg-[#DA9A00]'></div>
              </div>
              <div className='text-[#DA9A00] uppercase font-bold mt-8 ml-5 text-3xl'>Tối ưu dịch vụ</div>
            </div>
            <div className='mt-5'>
              Sau hơn 40 năm, đến nay Công ty Vương Gia Minh đã trở thành một trong những Công ty ở Việt Nam, chuyên kinh doanh ngành nguyên liệu thuốc lá và đầu tư vùng trồng nguyên liệu thuốc lá trên Toàn Quốc . Sau hơn 40 năm, đến nay Công ty Vương Gia Minh đã trở thành một trong những Công ty ở Việt Nam, chuyên kinh doanh ngành nguyên liệu thuốc lá và đầu tư vùng trồng nguyên liệu thuốc lá trên Toàn Quốc .Sau hơn 40 năm, đến nay Công ty Vương Gia Minh đã trở thành một trong những Công ty ở Việt Nam, chuyên kinh doanh ngành nguyên liệu thuốc lá và đầu tư vùng trồng nguyên liệu thuốc lá trên Toàn Quốc.
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <div className=''>
            <div className='flex'>
              <div>
                <div className='text-5xl font-bold text-center'>3</div>
                <div className='h-[20px] w-[95px] bg-[#363022]'></div>
              </div>
              <div className='text-[#363022] uppercase font-bold mt-8 ml-5 text-3xl'>Hợp tác minh bạch</div>
            </div>
            <div className='mt-5'>
              Sau hơn 40 năm, đến nay Công ty Vương Gia Minh đã trở thành một trong những Công ty ở Việt Nam, chuyên kinh doanh ngành nguyên liệu thuốc lá và đầu tư vùng trồng nguyên liệu thuốc lá trên Toàn Quốc . Sau hơn 40 năm, đến nay Công ty Vương Gia Minh đã trở thành một trong những Công ty ở Việt Nam, chuyên kinh doanh ngành nguyên liệu thuốc lá và đầu tư vùng trồng nguyên liệu thuốc lá trên Toàn Quốc .Sau hơn 40 năm, đến nay Công ty Vương Gia Minh đã trở thành một trong những Công ty ở Việt Nam, chuyên kinh doanh ngành nguyên liệu thuốc lá và đầu tư vùng trồng nguyên liệu thuốc lá trên Toàn Quốc.
            </div>
          </div>
        </div>
        <h2 className='text-4xl uppercase font-bold mt-20 text-center'>Thông tin công ty</h2>
        <table className='mt-10 bg-white'>
          <tr>
            <td rowSpan={2} className='p-3 border-2 border-solid border-grey-border'>Tên công ty</td>
            <td className='p-3 border-2 border-solid border-grey-border'>Công ty TNHH TM Vương Gia Minh</td>
          </tr>
          <tr>
          <td className='p-3 border-2 border-solid border-grey-border'>Vuong Gia Minh Tobacco Trading Company (English)</td>
          </tr>
          <tr>
            <td className='p-3 border-2 border-solid border-grey-border'>Ngày thành lập</td>
            <td className='p-3 border-2 border-solid border-grey-border'></td>
          </tr>
          <tr>
            <td className='p-3 border-2 border-solid border-grey-border'>Địa chỉ</td>
            <td className='p-3 border-2 border-solid border-grey-border'></td>
          </tr>
          <tr>
            <td className='p-3 border-2 border-solid border-grey-border'>Chủ doanh nghiệp</td>
            <td className='p-3 border-2 border-solid border-grey-border'></td>
          </tr>
          <tr>
            <td className='p-3 border-2 border-solid border-grey-border'>Số nhân viên</td>
            <td className='p-3 border-2 border-solid border-grey-border'></td>
          </tr>
          <tr>
            <td className='p-3 border-2 border-solid border-grey-border'>Giấy phép kinh doanh</td>
            <td className='p-3 border-2 border-solid border-grey-border'></td>
          </tr>
        </table>
        <h2 className='text-4xl uppercase font-bold mt-20 text-center'>Mạng lưới phân phối</h2>
        <img src='/img/world-map.png' className='mt-20' />
        <div className='mt-20'>Vương Gia Minh không chỉ đóng vai trò là cầu nối cho các doanh nghiệp trong nước mà còn liên kết với nhiều nhà đầu tư và doanh nghiệp quốc tế, bao gồm khu vực Nam Mỹ, Nam Phi và Đông Nam Á. Nhờ sở hữu một đội ngũ có chuyên môn về xuất nhập khẩu thuốc lá, Vương Gia Minh tự tin trong việc thu mua nguyên liệu và phân phối sản phẩm đã hoàn thiện. Điều này giúp chúng tôi xây dựng một chuỗi cung ứng linh hoạt, từ người trồng thuốc, doanh nghiệp sản xuất, cho đến người tiêu dùng, để đa dạng hóa sản phẩm và thúc đẩy sự phát triển của thuốc lá toàn cầu.</div>
        <Button className='mt-20 self-end'>Xem thêm về xuất khẩu</Button>
        <h2 className='text-4xl uppercase font-bold mt-20 text-center'>Hình ảnh công ty</h2>
        <div className='m-20 grid grid-cols-3 gap-5'>
          {Array.from({ length: 6 }).map((_, index) => (<img key={index} src='/img/company-picture-1.jpeg' /> ))}
        </div>
      </div>
      <ContactForm />
    </>
  )
}