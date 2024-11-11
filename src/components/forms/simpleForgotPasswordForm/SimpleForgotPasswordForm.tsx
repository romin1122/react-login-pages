import { useState } from 'react';
import SubmitForm from '../../submitForm/SubmitForm';
import { useMutation } from '@tanstack/react-query';
import { validateEmailOrPhone } from '../../../utilities/inputValidations';
import EmailOrPhoneInput from '../../emailOrPhoneInput/EmailOrPhoneInput';

type InputsType = {
  emailOrPhone: string;
  password?: string;
  confirmPassword?: string;
};

function SimpleForgotPasswordForm() {
  const [inputs, setInputs] = useState<InputsType>({
    emailOrPhone: '',
    password: '',
  });

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
    <div className='w-full'>
      <div className='mt-3 flex flex-col items-center text-center'>
        <div className='w-full my-3'>
          <label
            className='uppercase text-gray-500 font-semibold text-lg'
            htmlFor='email'
          >
            Email or Phone
          </label>
          <EmailOrPhoneInput
            setInputs={setInputs}
            inputClass='w-full border p-[7px] border-[#ccc] shadow-inner mt-2'
            wrapperClass='text-left'
          />
        </div>

        <SubmitForm
          className='uppercase border border-black font-light p-4 px-8 mt-4'
          text='Next'
          handleSubmit={() => {
            mutation.mutate();
          }}
        />
      </div>
    </div>
  );
}

export default SimpleForgotPasswordForm;
