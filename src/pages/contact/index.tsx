import { ContactForm } from '@/components/ContactForm';
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className='bg-background-default px-20 py-10 flex flex-col'>
        <h1 className='border-b-4 border-orange-400 text-5xl font-bold'>{t`Contact`}</h1>
        <ContactForm /> 
        <iframe className='mx-20' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5828051567696!2d106.67933127571135!3d10.766601059373462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1f33cc8007%3A0xdc173015343c3980!2zMTYgxJAuIE5ndXnhu4VuIFRoaeG7h24gVGh14bqtdCwgUGjGsOG7nW5nIDIsIFF14bqtbiAzLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1708559061745!5m2!1sen!2s" height="600" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}