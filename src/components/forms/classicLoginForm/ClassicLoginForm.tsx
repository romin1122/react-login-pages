import { useMutation } from '@tanstack/react-query';
import EmailOrPhoneInput from '../../emailOrPhoneInput/EmailOrPhoneInput';
import PasswordInput from '../../passwordInput/PasswordInput';
import SubmitForm from '../../submitForm/SubmitForm';
import { useState } from 'react';
import LinkButton from '../../linkButton/LinkButton';

type InputsType = {
  emailOrPhone: string;
  password?: string;
  confirmPassword?: string;
};

function ClassicLoginForm() {
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
    <div>
      <EmailOrPhoneInput
        setInputs={setInputs}
        className='mb-4'
        disabled={mutation.isLoading}
      />
      <PasswordInput
        setInputs={setInputs}
        className='mb-1'
        disabled={mutation.isLoading}
      />
      <LinkButton
        className='mb-3'
        preText=''
        linkText='Forgot Password?'
        linkTo='/classic/forgot-password'
      />
      <SubmitForm
        text='Sign in'
        handleSubmit={() => {
          mutation.mutate();
        }}
        disabled={mutation.isLoading}
      />
    </div>
  );
}

export default ClassicLoginForm;
