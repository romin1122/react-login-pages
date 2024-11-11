import Card from '../../components/card/Card';

function Homepage() {
  return (
    <div className='h-screen bg-gray-100'>
      <nav className='bg-white w-full py-5 flex justify-center'>
        <div className='flex items-center min-w-full lg:min-w-[1024px]'>
          <img
            className='w-10 h-10 mr-2 ml-3 xl:ml-0 cursor-pointer block'
            src='/siteLogo.png'
            alt=''
          />
          <span className='font-extrabold text-3xl cursor-pointer block'>
            Login Pages
          </span>
        </div>
      </nav>
      <main className='flex flex-col items-center'>
        <div className='min-w-full px-8 xl:px-0 lg:min-w-[1024px]'>
          <div className='font-semibold text-xl my-10'>Login page styles</div>
          <div className='flex flex-col md:flex-row gap-4 flex-wrap'>
            <Card
              title='Classic'
              img='/classic-login.jpg'
              src='/classic/login'
            />
            <Card title='Modern' img='/modern-login.jpg' src='/modern/login' />
            <Card title='Elegant' img='' src='/simple/login' />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
