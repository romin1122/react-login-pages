import { useState } from 'react';
import { validatePassword } from '../../utilities/inputValidations';

type InputsType = {
  emailOrPhone: string;
  password?: string;
  confirmPassword?: string;
};

type PasswordInputProps = {
  setInputs: React.Dispatch<React.SetStateAction<InputsType>>;
  className?: string;
  disabled?: boolean;
};

function PasswordInput({ setInputs, className, disabled }: PasswordInputProps) {
  const [input, setInput] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setInputs((prev: InputsType) => ({
      ...prev,
      password: e.target.value,
    }));

    if (validatePassword(e.target.value)) {
      setInvalid(false);
      setShowError(false);
    }
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validatePassword(e.target.value)) {
      setInvalid(true);
      setShowError(true);
    }
  };

  return (
    <div className={className}>
      <input
        className={`outline-none w-full p-3 border rounded focus:border-2 disabled:brightness-50 ${
          invalid ? 'border-red-500' : 'border-gray-700'
        } `}
        type='password'
        placeholder='Password'
        name='password'
        value={input}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
      />

      {showError && input.length < 8 && (
        <div className='text-red-500'>Password is too short!</div>
      )}
      {showError && input.length > 32 && (
        <div className='text-red-500'>Password is too long!</div>
      )}
    </div>
  );
}

export default PasswordInput;
