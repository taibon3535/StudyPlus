import { StrictMode } from 'react';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';

import {Pomodoro} from './app/routes/pomodoro'
import Fifty from './app/routes/fiftytoten';
import Blocking from './app/routes/Blocking';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pomodoro/>,
    children: [
      {
        path: '/FiftyToTen',
        element: <Fifty/>,
      },
      {
        path: '/Blocking',
        element: <Blocking/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
); 
