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

function ClassicRegisterForm() {
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
    <div>
      <EmailOrPhoneInput
        setInputs={setInputs}
        wrapperClass='mb-4'
        inputClass='border rounded focus:border-2'
        disabled={mutation.isLoading}
      />
      <PasswordInput
        setInputs={setInputs}
        wrapperClass='mb-3'
        inputClass='border rounded focus:border-2'
        disabled={mutation.isLoading}
      />
      <ConfirmPasswordInput
        setInputs={setInputs}
        password={inputs.password || ''}
        wrapperClass='mb-3'
        inputClass='border rounded focus:border-2'
        disabled={mutation.isLoading}
      />
      <SubmitForm
        text='Sign up'
        className='bg-[#c1121f] rounded-full text-white'
        handleSubmit={() => {
          mutation.mutate();
        }}
        disabled={mutation.isLoading}
      />
    </div>
  );
}

export default ClassicRegisterForm;
