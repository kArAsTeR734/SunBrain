import { Link } from 'react-router-dom';
import './ObjectCard.scss';

interface ObjectCardProps {
  id: string;
  fullPath: string;
  title: string;
}

export const ObjectCard = ({ id, fullPath, title }: ObjectCardProps) => {
  return (
    <Link key={id} to={fullPath}>
      <div className="card">
        <div className="card__title">{title}</div>
      </div>
    </Link>
  );
};
