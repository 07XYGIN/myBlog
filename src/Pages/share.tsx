import "../Style/share.scss"
import Cards from '../Components/Cards.tsx';
const About = () => {
  const cardList:object = [
      {id:1,title:'测试标题',href:'#',text:"简单介绍",time:"2024-5-31"},
    ]
    return(
      <div className="shContainer"><Cards cardlist = {cardList}></Cards></div>

    )
  };

export default About;
