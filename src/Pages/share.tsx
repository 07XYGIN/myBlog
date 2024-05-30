import "../Style/share.scss"
import Cards from '../commponts/Cards.tsx';
const About = () => {
  const cardList:any = [
      {id:1,title:'测试标题',href:'/share/0',text:"简单介绍666666666666666666666666666666666666",time:"2024-5-31"},
    {id:1,title:'测试标题',href:'/share/0',text:"简单介绍",time:"2024-5-31"},
    {id:1,title:'测试标题',href:'/share/0',text:"简单介绍",time:"2024-5-31"},
    ]
    return(
      <div className="shContainer"><Cards cardlist = {cardList}></Cards></div>

    )
  };

export default About;
