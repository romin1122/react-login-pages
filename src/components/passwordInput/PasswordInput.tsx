import { useState } from 'react';
import { validatePassword } from '../../utilities/inputValidations';

type InputsType = {
  emailOrPhone: string;
  password?: string;
  confirmPassword?: string;
};

type PasswordInputProps = {
  setInputs: React.Dispatch<React.SetStateAction<InputsType>>;
  wrapperClass?: string;
  inputClass?: string;
  invalidBorder?: string;
  validBorder?: string;
  disabled?: boolean;
};

function PasswordInput({
  setInputs,
  wrapperClass,
  inputClass,
  invalidBorder,
  validBorder,
  disabled,
}: PasswordInputProps) {
  const [input, setInput] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [showError, setShowError] = useState(false);

  invalidBorder = invalidBorder || 'border-red-500';
  validBorder = validBorder || 'border-gray-700';

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
    <div className={wrapperClass}>
      <input
        className={`outline-none w-full p-3 disabled:brightness-50 ${
          inputClass + ' ' + (invalid ? invalidBorder : validBorder)
        }`}
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
