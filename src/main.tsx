import ReactDOM from 'react-dom/client';
import { Suspense } from 'react';
import './Style/index.scss';
import 'animate.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.js';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense>
    <RouterProvider router={router}></RouterProvider>
  </Suspense>
);
