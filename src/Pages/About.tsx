import '../Style/About.scss';
import { Link } from 'react-router-dom';
const About = () => {
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
            <li>Numpy + pandas + matplotlib</li>
            <li>Requests + BeautifulSoup + Xpath</li>
          </ul>
        </div>
        <div className="s">
          <p className="animate__animated animate__fadeInDown animate__delay-1s">
            您也可以访问我的其他博客:
          </p>
          <ul className="animate__animated animate__fadeInDown animate__delay-2s">
            <li>CSDN: <Link to="https://blog.csdn.net/GXSmile">点击访问</Link> <span id="b">Csdn这里会存放一些我在开发中的笔记,心得。作为我的备忘录</span></li>
            <li>Github:<Link to="https://github.com/07XYGIN">点击访问</Link><span id="b">Github主要存放我的学习笔记,包括但不限于计算机。此外还有我的项目</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
