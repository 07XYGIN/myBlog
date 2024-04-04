import '../Style/App.scss'
import '../themes.scss'
import switchTheme from '../Script/themeSwitcher.ts'  
function ThemeSwitcher() {  
  const handleDefaultTheme = () => {  
    switchTheme('light');  
  };  
  
  const handleDarkTheme = () => {  
    switchTheme('dark');  
  };  
  
  return (  
    <div className='container'>  
      <button onClick={handleDefaultTheme}>light</button>  
      <button onClick={handleDarkTheme}>dark</button>  
    </div>  
  );  
}  
export default ThemeSwitcher;