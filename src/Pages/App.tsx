import { Image } from 'antd';
import Switchs from '../commponts/switch.js';
import Footer from '../commponts/Footer.js';
import Nav from '../commponts/Nav.js';
import img from '../assets/logo.jpg';
import { GithubOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import '../Style/App.scss';
let App = () => {
  let goGithub = () => {
    window.location.href = 'https://github.com/07XYGIN';
  };
  return (
    <>
      <div className="container">
        <div className="user">
          <div className="left">
            <Image width={40} src={img} id="imgs" />
            <p>乔明轩</p>
          </div>
          <div className="right">
            <Switchs />
            <GithubOutlined id="github" onClick={goGithub} />
            <Nav />
          </div>
        </div>
        <Outlet></Outlet>
        <Footer />
      </div>
    </>
  );
};
export default App;
