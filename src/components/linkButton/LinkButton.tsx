import { Link } from 'react-router-dom';

type RegisterButtonProps = {
  preText?: string;
  wrapperClass?: string;
  textClass?: string;
  linkText: string;
  linkTo: string;
};

function LinkButton({
  preText,
  wrapperClass,
  textClass,
  linkText,
  linkTo,
}: RegisterButtonProps) {
  preText = preText || '';
  return (
    <Link to={linkTo}>
      <div className={wrapperClass}>
        {preText + ' '}
        <span
          className={'text-[#c1121f] font-bold hover:underline ' + textClass}
        >
          {linkText}
        </span>
      </div>
    </Link>
  );
}

export default LinkButton;
