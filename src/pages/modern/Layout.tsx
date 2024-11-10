import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default () => {
  useEffect(() => {
    document.title = 'LightSpeed - Login pages';
  });

  return (
    <div className='w-screen h-screen flex'>
      <div className='hidden lg:flex w-1/2 lg:flex-1 bg-[url("../cool-background2.png")] bg-auto text-white lg:flex-col justify-between items-center pt-10 pb-8'>
        <div className='w-[500px] flex flex-col gap-8'>
          <div className='text-8xl font-semibold pl-2'>✳</div>
          <div className='text-7xl font-semibold'>Go LightSpeed!</div>
          <div className=''>
            Fastest internet provider in Asia. Latency is a thing of the past.
            Frequent nodes keeps the mesh active and alive. Stay upto date
            easily with LightSpeed!
          </div>
        </div>
        <footer className=''>
          &#169; 2024 LightSpeed. All rights reserved.
        </footer>
      </div>
      <div className='h-full w-1/2 flex-1 '>
        <nav className='w-full lg:flex lg:justify-center lg:mt-32'>
          <Link to='/modern/login'>
            <div className='text-3xl font-extrabold text-gray-900 px-7 py-6 lg:px-8 lg:py-0 lg:mx-6 md:w-[380px]'>
              LightSpeed
            </div>
          </Link>
        </nav>

        <Outlet />
      </div>
    </div>
  );
};
