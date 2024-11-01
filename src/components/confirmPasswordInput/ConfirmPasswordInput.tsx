import { useState } from 'react';

type InputsType = {
  emailOrPhone: string;
  password?: string;
  confirmPassword?: string;
};

type ConfirmPasswordInputProps = {
  setInputs: React.Dispatch<React.SetStateAction<InputsType>>;
  password: string;
  className?: string;
  disabled?: boolean;
};

function ConfirmPasswordInput({
  setInputs,
  password,
  className,
  disabled,
}: ConfirmPasswordInputProps) {
  const [input, setInput] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setInputs((prev: InputsType) => ({
      ...prev,
      confirmPassword: e.target.value,
    }));

    if (e.target.value == password) {
      setInvalid(false);
      setShowError(false);
    }
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != password) {
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
        placeholder='Confirm password'
        name='confirmPassword'
        value={input}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
      />

      {showError && <div className='text-red-500'>Passwords do not match!</div>}
    </div>
  );
}

export default ConfirmPasswordInput;
