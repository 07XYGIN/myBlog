import { lazy } from 'react';
import { createHashRouter } from 'react-router-dom';
const App = lazy(() => import('../Pages/App'));
const Index = lazy(() => import('../Pages/Index'));
const Article = lazy(() => import('../Pages/article'));
const Share = lazy(() => import('../Pages/share'));
const About = lazy(() => import('../Pages/About'));
const router = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: 'article', element: <Article /> },
      { path: 'share', element: <Share /> },
      { path: 'About', element: <About /> }
    ]
  }
];

export default createHashRouter(router);
