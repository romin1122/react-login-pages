type SubmitFormProps = {
  className?: string;
  text: string;
  handleSubmit?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
};

function SubmitForm({
  className,
  text,
  handleSubmit,
  disabled,
}: SubmitFormProps) {
  return (
    <div className='flex justify-center'>
      <button
        className={
          'w-full bg-[#c1121f] p-3 rounded-full text-white font-semibold disabled:brightness-75 hover:brightness-75 ' +
          className
        }
        onClick={handleSubmit}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}

export default SubmitForm;