import { Link } from 'react-router-dom';

type cardProps = {
  img?: string;
  title: string;
  src?: string;
};

function Card({ img, title, src }: cardProps) {
  return (
    <Link to={src || ''}>
      <div className='flex flex-col h-56 w-56 bg-white rounded-lg shadow transition hover:scale-105'>
        <img className='flex-[3] bg-gray-50 bg-center' src={img || ''} alt='' />
        <div className='flex-[2] font-medium'>
          <span className='px-4 py-2 block'>{title}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
