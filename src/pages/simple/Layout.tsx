import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default () => {
  useEffect(() => {
    document.title = 'Steep - Login pages';
  });

  return (
    <div className='w-screen min-h-full lg:h-screen flex'>
      <Outlet />
    </div>
  );
};
