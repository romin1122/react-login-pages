import { useMutation } from '@tanstack/react-query';
import EmailOrPhoneInput from '../../emailOrPhoneInput/EmailOrPhoneInput';
import PasswordInput from '../../passwordInput/PasswordInput';
import SubmitForm from '../../submitForm/SubmitForm';
import { useState } from 'react';
import {
  validateEmailOrPhone,
  validatePassword,
} from '../../../utilities/inputValidations';
import ConfirmPasswordInput from '../../confirmPasswordInput/ConfirmPasswordInput';

type InputsType = {
  emailOrPhone: string;
  password?: string;
  confirmPassword?: string;
};

function ModernRegisterForm({ className }: { className?: string }) {
  const [inputs, setInputs] = useState<InputsType>({
    emailOrPhone: '',
    password: '',
    confirmPassword: '',
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
        validateEmailOrPhone(inputs.emailOrPhone) &&
        validatePassword(inputs.password || '')
          ? alert('Register successful!')
          : alert('Invalid inputs!');
      },
    }
  );
  return (
    <div className={className}>
      <EmailOrPhoneInput
        setInputs={setInputs}
        wrapperClass='mb-5'
        inputClass='border-b-2 bg-gray-50 focus:border-b-3 focus:bg-gray-100'
        invalidBorder='border-red-500 bg-red-100 focus:bg-red-100'
        disabled={mutation.isLoading}
      />
      <PasswordInput
        setInputs={setInputs}
        wrapperClass='mb-5'
        inputClass='border-b-2 bg-gray-50 focus:border-b-3 focus:bg-gray-100'
        invalidBorder='border-red-500 bg-red-100 focus:bg-red-100'
        disabled={mutation.isLoading}
      />
      <ConfirmPasswordInput
        setInputs={setInputs}
        password={inputs.password || ''}
        wrapperClass='mb-7'
        inputClass='border-b-2 bg-gray-50 focus:border-b-3 focus:bg-gray-100'
        invalidBorder='border-red-500 bg-red-100 focus:bg-red-100'
        disabled={mutation.isLoading}
      />

      <SubmitForm
        text='Register'
        className='bg-gray-900 rounded-md text-white py-2'
        handleSubmit={() => {
          mutation.mutate();
        }}
        disabled={mutation.isLoading}
      />
    </div>
  );
}

export default ModernRegisterForm;
