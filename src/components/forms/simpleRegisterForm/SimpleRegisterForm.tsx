import { useState } from 'react';
import PasswordInput from '../../passwordInput/PasswordInput';
import EmailInput from '../../emailInput/EmailInput';
import SubmitForm from '../../submitForm/SubmitForm';
import PhoneInput from '../../phoneInput/PhoneInput';
import { useMutation } from '@tanstack/react-query';
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

function SimpleRegisterForm() {
  const users = [{ emailOrPhone: 'tester@gmail.com', password: '12345678' }];
  const [inputs, setInputs] = useState<InputsType>({
    emailOrPhone: '',
    password: '',
  });

  const [mobileForm, setMobile] = useState<boolean>(true);

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
    <div className='w-full'>
      <div className='flex w-full'>
        <div
          className={`flex-1 text-center text-lg uppercase p-1 border-b cursor-pointer ${
            !mobileForm
              ? 'text-black  border-black border-b-2'
              : 'text-gray-400  border-gray-400'
          }`}
          onClick={() => setMobile(false)}
        >
          Email
        </div>
        <div
          className={`flex-1 text-center text-lg uppercase p-1 border-b cursor-pointer ${
            mobileForm
              ? 'text-black border-black border-b-2'
              : 'text-gray-400 border-gray-400'
          }`}
          onClick={() => setMobile(true)}
        >
          Mobile
        </div>
      </div>
      <div className='mt-12 flex flex-col items-center text-center'>
        {!mobileForm ? (
          <div className='w-full my-3'>
            <label
              className='uppercase text-gray-500 font-semibold text-lg'
              htmlFor='email'
            >
              Email address
            </label>
            <EmailInput
              setInputs={setInputs}
              inputClass='w-full border p-[7px] border-[#ccc] shadow-inner mt-2'
              wrapperClass='text-left'
            />
          </div>
        ) : (
          <div className='w-full my-3'>
            <label
              className='uppercase text-gray-500 font-semibold text-lg'
              htmlFor='phone'
            >
              Phone number
            </label>
            <PhoneInput
              setInputs={setInputs}
              inputClass='w-full border p-[7px] border-[#ccc] shadow-inner mt-2'
              wrapperClass='text-left'
            />
          </div>
        )}

        <div className='w-full my-3'>
          <label
            className='uppercase text-gray-500 font-semibold text-lg'
            htmlFor=''
          >
            Password
          </label>
          <PasswordInput
            setInputs={setInputs}
            inputClass='w-full border p-[7px] border-[#ccc] shadow-inner mt-2'
            wrapperClass='text-left'
          />
        </div>

        <div className='w-full my-3'>
          <label
            className='uppercase text-gray-500 font-semibold text-lg'
            htmlFor=''
          >
            Confirm Password
          </label>
          <ConfirmPasswordInput
            setInputs={setInputs}
            password={inputs.password || ''}
            inputClass='w-full border p-[7px] border-[#ccc] shadow-inner mt-2'
            wrapperClass='text-left'
          />
        </div>

        <SubmitForm
          className='uppercase border border-black font-light p-4 px-8 mt-4'
          text='Sign up'
          handleSubmit={() => {
            mutation.mutate();
          }}
        />
      </div>
    </div>
  );
}

export default SimpleRegisterForm;
