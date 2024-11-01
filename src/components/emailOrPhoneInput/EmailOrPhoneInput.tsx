import { useState } from 'react';
import { validateEmailOrPhone } from '../../utilities/inputValidations';

type InputsType = {
  emailOrPhone: string;
  password?: string;
  confirmPassword?: string;
};

type EmailOrPhoneInputProps = {
  setInputs: React.Dispatch<React.SetStateAction<InputsType>>;
  className?: string;
  disabled?: boolean;
};

function EmailOrPhoneInput({
  setInputs,
  className,
  disabled,
}: EmailOrPhoneInputProps) {
  const [input, setInput] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setInputs((prev: InputsType) => ({
      ...prev,
      emailOrPhone: e.target.value,
    }));

    if (validateEmailOrPhone(e.target.value)) {
      setInvalid(false);
      setShowError(false);
    }
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validateEmailOrPhone(e.target.value)) {
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
        type='text'
        placeholder='Email or Phone'
        name='emailOrPhone'
        value={input}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
      />

      {showError && (
        <div className='text-red-500'>Invalid email or phone number!</div>
      )}
    </div>
  );
}

export default EmailOrPhoneInput;
