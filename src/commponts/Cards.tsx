import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import "../Style/Card/Card.scss"
interface CardProps {
  cards: object;
}
const App: React.FC<CardProps> = ({cardlist}) => {

  const listItems = cardlist.map(item =>
    <Link key={item.id} to={item.href} data-Cards-a>
      <Card title={item.title} bordered={false} style={{ width: 300,backgroundColor:'var(--background-color)' }}>
        <p>{item.text}</p>
        <p>{item.time}</p>
      </Card>
    </Link>

  );

  return (
    <>{listItems}</>
  );
};

export default App;