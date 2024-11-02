import OAuth from '../../components/oAuth/OAuth';
import LinkButton from '../../components/linkButton/LinkButton';
import ModernRegisterForm from '../../components/forms/modernRegisterForm/ModernRegisterForm';

function Register() {
  return (
    <main className='flex flex-col items-center lg:my-14 md:mx-6 '>
      <div className='bg-white w-full md:w-[380px] p-8 py-1 lg:py-8'>
        <div className='text-2xl font-semibold'>Join Now!</div>
        <LinkButton
          wrapperClass='w-full mb-4 overflow-x-visible'
          preText='Already registered?'
          linkText='Login.'
          linkTo='/modern/login'
        />

        <ModernRegisterForm className='mb-3' />

        <OAuth itemClass='rounded-md py-2' startText='Sign up' />
      </div>
    </main>
  );
}

export default Register;
