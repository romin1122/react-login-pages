import LinkButton from '../../components/linkButton/LinkButton';
import SimpleForgotPasswordForm from '../../components/forms/simpleForgotPasswordForm/SimpleForgotPasswordForm';

function ForgotPassword() {
  return (
    <div className='flex w-full items-center mt-20 lg:mt-0 mx-4 lg:mx-0'>
      <div className='flex-[4_4_0%] flex justify-center'>
        <div className='flex flex-col items-center md:w-[420px]'>
          <div className='uppercase font-semibold text-3xl mb-3 text-center'>
            Forgot Password
          </div>
          <SimpleForgotPasswordForm />
          <LinkButton
            wrapperClass='text-gray-500 mt-3'
            textClass='block text-gray-500 underline font-normal'
            preText=''
            linkText='Go Back'
            linkTo='/simple/login'
          />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
