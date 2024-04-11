import '../Style/Footer.scss';
let Footer = () => {
  let go = () => {
    window.location.href = 'https://beian.miit.gov.cn/#/Integrated/index';
  };

  return (
    <>
      <footer onClick={go}> &copy;黑ICP备2023011849号</footer>
    </>
  );
};

export default Footer;
