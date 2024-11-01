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
        className='mb-4'
        disabled={mutation.isLoading}
      />
      <PasswordInput
        setInputs={setInputs}
        className='mb-3'
        disabled={mutation.isLoading}
      />
      <ConfirmPasswordInput
        setInputs={setInputs}
        password={inputs.password || ''}
        className='mb-3'
        disabled={mutation.isLoading}
      />
      <SubmitForm
        text='Sign up'
        handleSubmit={() => {
          mutation.mutate();
        }}
        disabled={mutation.isLoading}
      />
    </div>
  );
}

export default ClassicRegisterForm;
