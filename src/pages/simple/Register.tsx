import LinkButton from '../../components/linkButton/LinkButton';
import SimpleRegisterForm from '../../components/forms/simpleRegisterForm/SimpleRegisterForm';

function Register() {
  return (
    <div className='flex w-full items-center'>
      <div className='flex-[4_4_0%] flex justify-center border-r'>
        <div className='flex flex-col items-center md:w-[420px]'>
          <div className='uppercase font-semibold text-3xl mb-3'>Sign up</div>
          <SimpleRegisterForm />
        </div>
      </div>
      <div className='flex-[3_3_0%] flex justify-center items-center text-center'>
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
