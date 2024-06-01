import Empty from '../Components/Empty.tsx';
const About = () => {
  const a:number = 0
  return <div className="container">{a==0?<Empty />:<p>1</p>}</div>;
};

export default About;
