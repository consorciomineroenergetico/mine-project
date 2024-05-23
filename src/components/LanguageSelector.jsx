import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { switchLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('es')}>Espa�ol</button>
    </div>
  );
};

export default LanguageSelector;
