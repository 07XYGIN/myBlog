import '../Style/App.scss';
import { Image } from 'antd';
import Switchs from '../componts/switch.jsx';
import Footer from '../componts/Footer.js';
import Nav from '../componts/Nav.js';
import img from '../assets/logo.jpg';
function App() {
  return (
    <>
      <div className="container">
        <div className="user">
          <div className="left">
            <Image width={60} src={img} />
            <p>乔明轩</p>
          </div>
          <div className="right">
            <Switchs />
            <Nav />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
