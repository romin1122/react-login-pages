import { useState } from 'react';
import { validatePhone } from '../../utilities/inputValidations';

type InputsType = {
  emailOrPhone: string;
  password?: string;
  confirmPassword?: string;
};

type EmailOrPhoneInputProps = {
  setInputs: React.Dispatch<React.SetStateAction<InputsType>>;
  wrapperClass?: string;
  inputClass?: string;
  invalidBorder?: string;
  validBorder?: string;
  disabled?: boolean;
};

function PhoneInput({
  setInputs,
  wrapperClass,
  inputClass,
  invalidBorder,
  validBorder,
  disabled,
}: EmailOrPhoneInputProps) {
  const [input, setInput] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [showError, setShowError] = useState(false);

  invalidBorder = invalidBorder || 'border-red-500';
  validBorder = validBorder || 'border-gray-700';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setInputs((prev: InputsType) => ({
      ...prev,
      emailOrPhone: e.target.value,
    }));

    if (validatePhone(e.target.value)) {
      setInvalid(false);
      setShowError(false);
    }
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validatePhone(e.target.value)) {
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
        type='text'
        placeholder='Phone'
        name='phone'
        value={input}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
      />

      {showError && <div className='text-red-500'>Invalid phone number!</div>}
    </div>
  );
}

export default PhoneInput;
