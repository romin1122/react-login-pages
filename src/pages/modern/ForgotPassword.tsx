import ClassicForgotPasswordForm from '../../components/forms/classForgotPasswordForm/ClassicForgotPasswordForm';

function ForgotPassword() {
  return (
    <main className='flex flex-col md:items-center lg:my-14 md:mx-6 '>
      <div className='bg-white w-full md:w-[380px] p-8 py-1 lg:py-8 rounded-lg lg:drop-shadow-[0_0px_5px_rgba(0,0,0,0.15)]'>
        <div className='text-2xl font-semibold mb-4'>Forgot Password</div>
        <ClassicForgotPasswordForm />
      </div>
    </main>
  );
}

export default ForgotPassword;
