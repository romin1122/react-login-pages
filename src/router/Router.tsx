import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/homepage/Homepage';
import ClassicLogin from '../pages/classic/Login';
import ClassicForgotPassword from '../pages/classic/ForgotPassword';
import ClassicLayout from '../pages/classic/Layout';
import ClassicRegister from '../pages/classic/Register';

import ModernLogin from '../pages/modern/Login';
import ModernForgotPassword from '../pages/modern/ForgotPassword';
import ModernLayout from '../pages/modern/Layout';
import ModernRegister from '../pages/modern/Register';

import SimpleLogin from '../pages/simple/Login';
import SimpleForgotPassword from '../pages/simple/ForgotPassword';
import SimpleLayout from '../pages/simple/Layout';
import SimpleRegister from '../pages/simple/Register';

export default createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/classic',
    element: <ClassicLayout />,
    children: [
      { path: '/classic/login', element: <ClassicLogin /> },
      { path: '/classic/register', element: <ClassicRegister /> },
      {
        path: '/classic/forgot-password',
        element: <ClassicForgotPassword />,
      },
    ],
  },
  {
    path: '/modern',
    element: <ModernLayout />,
    children: [
      { path: '/modern/login', element: <ModernLogin /> },
      { path: '/modern/register', element: <ModernRegister /> },
      {
        path: '/modern/forgot-password',
        element: <ModernForgotPassword />,
      },
    ],
  },
  {
    path: '/simple',
    element: <SimpleLayout />,
    children: [
      { path: '/simple/login', element: <SimpleLogin /> },
      { path: '/simple/register', element: <SimpleRegister /> },
      {
        path: '/simple/forgot-password',
        element: <SimpleForgotPassword />,
      },
    ],
  },
]);
