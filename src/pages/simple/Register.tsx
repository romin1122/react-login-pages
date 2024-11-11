import LinkButton from '../../components/linkButton/LinkButton';
import SimpleRegisterForm from '../../components/forms/simpleRegisterForm/SimpleRegisterForm';

function Register() {
  return (
    <div className='lg:flex w-full items-center lg:flex-row justify-center my-20 lg:my-0'>
      <div className='lg:flex-[4_4_0%] flex justify-center lg:border-r'>
        <div className='flex flex-col items-center md:w-[420px] border-b lg:border-b-0 pb-10 lg:pb-0'>
          <div className='uppercase font-semibold text-3xl mb-3'>Sign up</div>
          <SimpleRegisterForm />
        </div>
      </div>
      <div className='lg:flex-[3_3_0%] flex justify-center items-center text-center pt-10 lg:pt-0'>
        <div className='md:w-[420px] flex flex-col justify-center items-center text-center gap-4'>
          <div>Already registered? Sign in now!</div>
          <LinkButton
            wrapperClass='uppercase border border-black font-light p-4 px-8 mt-4 w-fit cursor-pointer'
            textClass='uppercase text-black font-light hover:no-underline'
            linkText='Sign in'
            linkTo='/simple/login'
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
