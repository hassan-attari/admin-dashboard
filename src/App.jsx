import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Login from './features/Identity/components/login/login';
import Register from './features/Identity/components/register/register';
import router from './router';

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;