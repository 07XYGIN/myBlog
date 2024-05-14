import { Html5Outlined } from '@ant-design/icons';
import '../Style/About.scss';
let About = () => {
  return (
    <div className="container" data-a>
      <div className="qustion">
        <div className="q animate__animated animate__fadeInDown">
          <h3>我</h3>
        </div>
        <div className="s">
          <p className="animate__animated animate__fadeInDown animate__delay-1s">
            我叫乔明轩,是一名更贴近前端的全栈开发。
          </p>
        </div>
        <div className="q animate__animated animate__fadeInDown">
          <h3>技能</h3>
        </div>
        {/* animate__delay-5s animate__animated animate__fadeInDow */}
        <div className="s ">
          <p className="animate__animated animate__fadeInDown animate__delay-1s">
            前端:
          </p>
          <ul className="animate__animated animate__fadeInDown animate__delay-2s">
            <li>HTML + CSS + JavaScript</li>
            <li>VueJS + ReactJS + TypeScript</li>
            <li>Scss,Less</li>
            <li>Webpack</li>
          </ul>
        </div>
        <div className="s">
          <p className="animate__animated animate__fadeInDown animate__delay-1s">
            后端:
          </p>
          <ul className="animate__animated animate__fadeInDown animate__delay-2s">
            <li>NodeJS</li>
            <li>Express.js + Mysql 作为主要全栈开发</li>
            <li>Python</li>
            <li>Numpy + pandas + matplotlib做数据分析</li>
            <li>Requests + BeautifulSoup + Xpath做网络爬虫</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
