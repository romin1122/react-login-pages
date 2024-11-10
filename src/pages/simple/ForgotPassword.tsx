import ModernForgotPasswordForm from '../../components/forms/modernForgotPasswordForm/ModernForgotPasswordForm';

function ForgotPassword() {
  return (
    <main className='flex flex-col items-center lg:my-14 md:mx-6 '>
      <div className='bg-white w-full md:w-[380px] p-8 py-1 lg:py-8'>
        <div className='text-2xl font-semibold mb-3'>Forgot Password</div>
        <ModernForgotPasswordForm />
      </div>
    </main>
  );
}

export default ForgotPassword;
