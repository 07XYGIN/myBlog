import '../Style/Nav.scss';
import { Link } from 'react-router-dom';
let Nav = () => {
  return (
    <>
      <ul data-ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="share">分享</Link>
        </li>
        <li>
          <Link to="article">文章</Link>
        </li>
        <li>
          <Link to="about">关于</Link>
        </li>
      </ul>
    </>
  );
};
export default Nav;
