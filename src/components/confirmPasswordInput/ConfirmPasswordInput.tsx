import { useState } from 'react';

type InputsType = {
  emailOrPhone: string;
  password?: string;
  confirmPassword?: string;
};

type ConfirmPasswordInputProps = {
  setInputs: React.Dispatch<React.SetStateAction<InputsType>>;
  password: string;
  wrapperClass?: string;
  inputClass?: string;
  invalidBorder?: string;
  validBorder?: string;
  disabled?: boolean;
};

function ConfirmPasswordInput({
  setInputs,
  password,
  wrapperClass,
  inputClass,
  invalidBorder,
  validBorder,
  disabled,
}: ConfirmPasswordInputProps) {
  const [input, setInput] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [showError, setShowError] = useState(false);

  invalidBorder = invalidBorder || 'border-red-500';
  validBorder = validBorder || 'border-gray-700';

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
    <div className={wrapperClass}>
      <input
        className={`outline-none w-full p-3 disabled:brightness-50 ${
          inputClass + ' ' + (invalid ? invalidBorder : validBorder)
        }`}
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
