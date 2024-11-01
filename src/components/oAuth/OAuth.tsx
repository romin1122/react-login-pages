import Google from './google.png';
import Apple from './apple.png';

type OAuthProps = {
  startText: string;
};

function OAuth({ startText }: OAuthProps) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='bg-white flex border border-black rounded-full items-center justify-center p-3 hover:brightness-75 cursor-pointer'>
        <img src={Google} alt='Google logo' className='w-6 mx-2' />
        {startText} with Google
      </div>
      <div className='bg-white flex border border-black rounded-full items-center justify-center p-3 hover:brightness-75 cursor-pointer'>
        <img src={Apple} alt='Apple logo' className='w-6 mx-2' />
        Sign in with Apple
      </div>
    </div>
  );
}

export default OAuth;
