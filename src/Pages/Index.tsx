import { Link } from 'react-router-dom';
import '../Style/first.scss';
import { Button } from 'antd';
let Index = () => {
  return (
    <div data-container className="">
      <div className="introduce">
        <h1 className="name animate__animated animate__fadeInDown ">
          你好,我是乔明轩
        </h1>
        <h1 className="animate__animated animate__fadeInDown animate__delay-1s">
          一名前端开发
        </h1>
        <h2 className="animate__animated animate__fadeInDown animate__delay-2s">
          喜欢并热爱着
          <span id="vue">Vue,</span>
          <span id="react">React</span>
          <span>和</span>
          <span id="python">Python</span>
        </h2>
      </div>
      <div className="about">
        <Link to="article">
          <Button>我的博客</Button>
        </Link>
        <Link to="about">
          <Button>关于作者</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
