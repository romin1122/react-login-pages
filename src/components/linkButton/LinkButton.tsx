import { Link } from 'react-router-dom';

type RegisterButtonProps = {
  preText: string;
  className?: string;
  linkText: string;
  linkTo: string;
};

function LinkButton({
  preText,
  className,
  linkText,
  linkTo,
}: RegisterButtonProps) {
  return (
    <div className={className}>
      {preText + ' '}
      <Link to={linkTo}>
        <span className='text-[#c1121f] font-bold hover:underline'>
          {linkText}
        </span>
      </Link>
    </div>
  );
}

export default LinkButton;
