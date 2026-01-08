import Button from '@/shared/ui/Button/Button.tsx';
import { userSlice } from '@/app/store/reducers/UserSlice.ts';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux.ts';
import { useAuthQuery } from '@/features/Authorization/useCheckAuth.ts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileData.scss'

const ProfileData = () => {
  const navigate = useNavigate();
  const {setAuth} = userSlice.actions;
  const dispatch = useAppDispatch();
  const { data: authData, isLoading } = useAuthQuery();
  const isAuth = useAppSelector(state => state.userReducer.isAuth);

  useEffect(() => {
    if(authData){
      console.log('Статус авторизации:', authData.isAuthenticated);
      dispatch(setAuth(true));
    }
  }, [authData]);

  const isUserAuthenticated = isAuth || authData?.isAuthenticated;

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      <div className="user-actions">
        {!isUserAuthenticated ? (
          <Button
            onClick={() => navigate('/login')}
            className="button button__sign-in"
          >
            Войти
          </Button>
        ) : (
          <div className="profile">
            <button className="profile-item">
              <div className="profile-initials">
                <p>НБ</p>
              </div>
              <div className="profile-item--text">
                <p>Никита Беляев</p>
              </div>
            </button>
            <div className="profile__dropdown-icon">
              <img
                src="/src/assets/chevron-down.svg"
                alt="accountIcon"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileData;