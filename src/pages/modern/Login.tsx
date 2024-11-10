import OAuth from '../../components/oAuth/OAuth';
import LinkButton from '../../components/linkButton/LinkButton';
import ModernLoginForm from '../../components/forms/modernLoginForm/ModernLoginForm';

function Login() {
  return (
    <main className='flex flex-col items-center lg:my-14 md:mx-6'>
      <div className='bg-white w-full md:w-[380px] p-8 py-1 lg:py-8'>
        <div className='text-2xl font-semibold'>Welcome Back!</div>
        <LinkButton
          wrapperClass='w-full mb-4 overflow-x-visible'
          preText="Don't have an account?"
          linkText='Create one now.'
          linkTo='/modern/register'
          textClass='!text-[#3a86ff]'
        />
        <ModernLoginForm className='mb-3' />

        <OAuth itemClass='rounded-md py-2' startText='Login' />

        <LinkButton
          wrapperClass='mt-5 text-center'
          preText='Forgot password?'
          linkText='Click here'
          linkTo='/modern/forgot-password'
          textClass='!text-[#3a86ff]'
        />
      </div>
    </main>
  );
}

export default Login;
