import { useState } from 'react';  
import "../themes.scss";  
import "../Style/awitch.scss";  
import switchTheme from "../Script/themeSwitcher.ts";  
import weatherImage from '../assets/weather.png';  
import darkImage from '../assets/dark.png';  
  
const SwitchThemes = () => {  
  const [currentTheme, setCurrentTheme] = useState("dark");  
  const [currentImage, setCurrentImage] = useState(darkImage);  
  
  const handleThemeSwitch = (newTheme:any) => {  
    switchTheme(newTheme);  
    setCurrentTheme(newTheme);  
    setCurrentImage(newTheme === "light" ? darkImage : weatherImage);  
  };  
  
  return (  
    <img src={currentImage} data-img onClick={() => handleThemeSwitch(currentTheme === "light" ? "dark" : "light")} />  
  );  
};  
  
export default SwitchThemes;