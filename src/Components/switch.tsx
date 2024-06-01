import '../themes.scss';
import '../Style/awitch.scss';
import switchTheme from '../Script/themeSwitcher.ts';
import weatherImage from '../assets/weather.png';
import darkImage from '../assets/dark.png';
import { useState } from 'react';
const SwitchThemes = () => {
  const [key, setKey] = useState(0);
  const handleDefaultTheme = () => {
    switchTheme('light');
    setKey(0);
  };
  const handleDarkTheme = () => {
    switchTheme('dark');
    setKey(1);
  };
  return (
    <>
      {key == 0 ? (
        <img data-img src={darkImage} onClick={handleDarkTheme} alt="" />
      ) : (
        <img data-img src={weatherImage} onClick={handleDefaultTheme} alt="" />
      )}
    </>
  );
};

export default SwitchThemes;
