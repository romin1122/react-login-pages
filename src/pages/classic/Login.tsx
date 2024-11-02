import ClassicLoginForm from '../../components/forms/classicLoginForm/ClassicLoginForm';
import OAuth from '../../components/oAuth/OAuth';
import LinkButton from '../../components/linkButton/LinkButton';

function Login() {
  return (
    <main className='flex flex-col items-center lg:my-14 md:mx-6 '>
      <div className='bg-white w-full md:w-[380px] p-8 py-1 lg:py-8 rounded-lg lg:drop-shadow-[0_0px_5px_rgba(0,0,0,0.15)]'>
        <div className='text-2xl font-semibold mb-4'>Sign in</div>
        <ClassicLoginForm />
        <div className='w-full text-center border-b border-black leading-[0.01] my-5'>
          <span className='bg-white px-2 text-sm leading-[0.01]'>
            Or login with
          </span>
        </div>
        <OAuth startText='Sign in' />
      </div>
      <LinkButton
        wrapperClass='lg:mt-10 w-full text-center m-2 overflow-x-visible'
        preText="Don't have an account?"
        linkText='Register'
        linkTo='/classic/register'
      />
    </main>
  );
}

export default Login;
