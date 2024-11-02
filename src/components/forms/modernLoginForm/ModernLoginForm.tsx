import { useMutation } from '@tanstack/react-query';
import EmailOrPhoneInput from '../../emailOrPhoneInput/EmailOrPhoneInput';
import PasswordInput from '../../passwordInput/PasswordInput';
import SubmitForm from '../../submitForm/SubmitForm';
import { useState } from 'react';

type InputsType = {
  emailOrPhone: string;
  password?: string;
  confirmPassword?: string;
};

function ModernLoginForm({ className }: { className?: string }) {
  const users = [{ emailOrPhone: 'tester@gmail.com', password: '12345678' }];
  const [inputs, setInputs] = useState<InputsType>({
    emailOrPhone: '',
    password: '',
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
        inputs.emailOrPhone == users[0].emailOrPhone &&
        inputs.password == users[0].password
          ? alert('Login successful!')
          : alert('Invalid credentials!');
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
        wrapperClass='mb-7'
        inputClass='border-b-2 bg-gray-50 focus:border-b-3 focus:bg-gray-100'
        invalidBorder='border-red-500 bg-red-100 focus:bg-red-100'
        disabled={mutation.isLoading}
      />
      <SubmitForm
        text='Login'
        className='bg-gray-900 rounded-md text-white py-2'
        handleSubmit={() => {
          mutation.mutate();
        }}
        disabled={mutation.isLoading}
      />
    </div>
  );
}

export default ModernLoginForm;
