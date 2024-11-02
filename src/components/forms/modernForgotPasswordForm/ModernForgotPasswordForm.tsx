import { useMutation } from '@tanstack/react-query';
import EmailOrPhoneInput from '../../emailOrPhoneInput/EmailOrPhoneInput';
import SubmitForm from '../../submitForm/SubmitForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmailOrPhone } from '../../../utilities/inputValidations';

function ModernForgotPasswordForm() {
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
        matches an existing LightSpeed account.
      </div>

      <SubmitForm
        className='bg-gray-900 rounded-md text-white py-2 mb-2'
        text='Next'
        handleSubmit={() => {
          mutation.mutate();
        }}
        disabled={mutation.isLoading}
      />
      <SubmitForm
        className='bg-white rounded-md text-gray-900 py-2'
        text='Back'
        handleSubmit={() => {
          navigate('/modern/login');
        }}
      />
    </div>
  );
}

export default ModernForgotPasswordForm;
