import { Image } from 'antd';
import Switchs from '../componts/switch.jsx';
import Footer from '../componts/Footer.js';
import Nav from '../componts/Nav.js';
import img from '../assets/logo.jpg';
import { GithubOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
import '../Style/App.scss';
let App = () => {
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
            <GithubOutlined id="github" />
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
