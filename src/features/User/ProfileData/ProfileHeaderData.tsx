import Button from '@/shared/ui/Button/Button.tsx';
import {useAppSelector } from '@/shared/hooks/redux.ts';
import { useNavigate } from 'react-router-dom';
import '@/shared/ui/Button/button.scss';
import Profile from '@shared/ui/Profile';

const ProfileHeaderData = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.userReducer);
  return (
    <>
      <div className="user-actions">
        {!isAuth
          ? <Button
            onClick={() => navigate('/login')}
            className="button button__sign-in"
          >
            Войти
          </Button>
          : <Profile/>
        }
      </div>
    </>
  );
};

export default ProfileHeaderData;
