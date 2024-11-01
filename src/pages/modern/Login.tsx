import ClassicLoginForm from '../../components/forms/classicLoginForm/ClassicLoginForm';
import OAuth from '../../components/oAuth/OAuth';
import LinkButton from '../../components/linkButton/LinkButton';

function Login() {
  return (
    <main className='flex flex-col items-center lg:my-14 md:mx-6 '>
      <div className='bg-white w-full md:w-[380px] p-8 py-1 lg:py-8'>
        <div className='text-2xl font-semibold'>Welcome Back!</div>
        <LinkButton
          className='w-full mb-4 overflow-x-visible'
          preText="Don't have an account?"
          linkText='Create one now.'
          linkTo='/classic/register'
        />
        <ClassicLoginForm />
        <div className='w-full text-center border-b border-black leading-[0.01] my-5'>
          <span className='bg-white px-2 text-sm leading-[0.01]'>
            Or login with
          </span>
        </div>
        <OAuth startText='Sign in' />
      </div>
    </main>
  );
}

export default Login;
