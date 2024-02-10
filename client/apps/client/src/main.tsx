import { StrictMode } from 'react';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';

import {Root} from './app/routes/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
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
