import { MailIcon, MapPin, PhoneIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import { InputField } from './InputField';

export const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className='py-20'>
      <div className='uppercase text-3xl text-orange-400 text-center font-bold'>{t`Become our partner`}</div>
      <div className='grid xl:grid-cols-2 mx-20 mt-10'>
        <div className='bg-grey-button text-white p-10'>
          <div className='underline decoration-orange-400 text-4xl'>{t`Contact detail`}</div>
          <div className='mt-10 flex gap-4'>
            <PhoneIcon size={24} />
            <div>028 22196940</div>
            <div>FAX 0838391467</div>
          </div>
          <div className='mt-10 flex gap-4'>
            <MailIcon size={24} />
            <div>vuonggiaminh01@gmail.com</div>
          </div>
          <div className='mt-10 flex gap-4'>
            <MapPin size={24} />
            <div>
              CÔNG TY TNHH TM VƯƠNG GIA MINH <br /> 16/87/61 Nguyễn Thiện Thuật,
              P2, Quận 3, TP.Hồ Chí Minh
            </div>
          </div>
        </div>
        <form className='mx-3 border-2 p-10'>
          <div className='grid grid-cols-2 gap-10'>
            <InputField label={t`Full Name`} />
            <InputField label={t`Company Name`} />
          </div>
          <div className='grid grid-cols-2 gap-10 mt-20'>
            <InputField type='email' label={t`Email`} />
            <InputField label={t`Phone Number`} />
          </div>
          <div className="mt-20">
            {/* <Select variant='static' label={t`Country`} placeholder={t`Country`}>
              <Option>Vietnam</Option>
              <Option>China</Option>
            </Select> */}
          </div>
          <div className='mt-20'>
            {/* <Textarea variant='static' label={t`Message`} placeholder={t`Message`} /> */}
          </div>
          <Button className='float-end mt-10'>{t`Send`}</Button>
        </form>
      </div>
    </div>
  );
}