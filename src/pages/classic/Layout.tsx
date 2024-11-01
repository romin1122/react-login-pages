import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default () => {
  useEffect(() => {
    document.title = 'Phoenix - Login pages';
  });

  return (
    <div className='font-sourceSans min-h-screen flex flex-col lg:justify-between'>
      <nav className='text-3xl font-bold w-screen'>
        <Link to='/classic/login'>
          <div className='text-[#c1121f] p-6 px-7'>Phoenix</div>
        </Link>
      </nav>
      <Outlet />
      <footer className='flex gap-2 p-5 flex-col md:flex-row justify-center md:gap-5 invisible lg:visible'>
        <span>Phoenix &#169; 2024</span>
        <span className='cursor-pointer'>User Agreement</span>
        <span className='cursor-pointer'>Privacy Policy</span>
        <span className='cursor-pointer'>Cookie Policy</span>
        <span className='cursor-pointer'>Send Feedback</span>
      </footer>
    </div>
  );
};
