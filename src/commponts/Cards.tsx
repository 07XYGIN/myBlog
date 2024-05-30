import React from 'react';
import { Card } from 'antd';
import { Link, To } from 'react-router-dom';
import "../Style/Card/Card.scss"
interface CardProps {
  cardlist: any;
}
const App: React.FC<CardProps> = ({cardlist}) => {

  const listItems:CardProps = cardlist.map((item: { id: React.Key | null | undefined; href: To; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) =>
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