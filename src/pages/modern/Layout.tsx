import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default () => {
  useEffect(() => {
    document.title = 'LightSpeed - Login pages';
  });

  return (
    <div className='w-screen h-screen flex'>
      <div className=' w-1/2 flex-1 bg-[url("../cool-background2.png")] bg-auto text-white flex flex-col justify-between items-center pt-10 pb-8'>
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
      <div className='h-full w-1/2 flex-1'>
        <nav className='text-3xl font-extrabold w-full flex justify-center'>
          <Link to='/modern/login'>
            <div className='text-[#3a86ff] px-7 mt-32 italic md:w-[380px]'>
              LightSpeed
            </div>
          </Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};