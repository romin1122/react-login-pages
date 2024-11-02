import { Link } from 'react-router-dom';

type RegisterButtonProps = {
  preText: string;
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
  return (
    <div className={wrapperClass}>
      {preText + ' '}
      <Link to={linkTo}>
        <span
          className={'text-[#c1121f] font-bold hover:underline ' + textClass}
        >
          {linkText}
        </span>
      </Link>
    </div>
  );
}

export default LinkButton;
