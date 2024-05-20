import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <select
      className='bg-red px-3 py-0 my-5 ml-3 font-bold text-grey-button border-2  border-grey-button'
      onChange={(ev) => {
        i18n.changeLanguage(ev.target.value);
      }}
      value={i18n.language}
    >
      <option value='en'>EN</option>
      <option value='vi'>VI</option>
      <option value='cn'>CN</option>
    </select>
  );
};
