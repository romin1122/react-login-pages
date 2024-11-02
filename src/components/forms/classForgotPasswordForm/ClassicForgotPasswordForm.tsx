import { useMutation } from '@tanstack/react-query';
import EmailOrPhoneInput from '../../emailOrPhoneInput/EmailOrPhoneInput';
import SubmitForm from '../../submitForm/SubmitForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmailOrPhone } from '../../../utilities/inputValidations';

function ClassicForgotPasswordForm() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    emailOrPhone: '',
  });

  () => {
    setInputs((prev) => prev);
  };
  const mutation = useMutation(
    () => {
      //random fetch request
      return fetch('https://jsonplaceholder.typicode.com/todos/1');
    },
    {
      onSuccess: () => {
        validateEmailOrPhone(inputs.emailOrPhone)
          ? alert('Reset link sent, check inbox!')
          : alert('Invalid email or phone number!');
      },
    }
  );
  return (
    <div>
      <EmailOrPhoneInput
        setInputs={setInputs}
        wrapperClass='mb-4'
        inputClass='border rounded focus:border-2'
        disabled={mutation.isLoading}
      />

      <div className='text-sm mb-5'>
        We’ll send a verification code to this email or phone number if it
        matches an existing Phoenix account.
      </div>

      <SubmitForm
        className='bg-[#c1121f] rounded-full text-white mb-2'
        text='Next'
        handleSubmit={() => {
          mutation.mutate();
        }}
        disabled={mutation.isLoading}
      />
      <SubmitForm
        className='bg-white text-gray-900 max-w-fit px-2 py-2 rounded-full'
        text='Back'
        handleSubmit={() => {
          navigate('/classic/login');
        }}
      />
    </div>
  );
}

export default ClassicForgotPasswordForm;
