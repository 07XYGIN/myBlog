import '../Style/App.scss';
import { Image } from 'antd';
import Switchs from '../componts/switch.jsx';
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
            <ul>
              <li>首页</li>
              <li>分享</li>
              <li>文章</li>
              <li>关于</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
