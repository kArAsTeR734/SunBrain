import Button from '@/shared/ui/Button/Button.tsx';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux.ts';
import { useNavigate } from 'react-router-dom';
import './ProfileHeaderData.scss';
import '@/shared/ui/Button/button.scss';
import { getUserInitials } from '@/utils/getUserInitials.ts';
import { userSlice } from '@app/store/reducers/UserSlice.ts';

const ProfileHeaderData = () => {
  const navigate = useNavigate();
  const {logout} = userSlice.actions;
  const {isAuth,user} = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(logout());
  };

  const handleTest = () => {
    navigate('/test');
  };

  return (
    <>
      <div className="user-actions">
        {!isAuth ? (
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
                <p>{getUserInitials(user?.fullName ?? 'Иван Иванович')}</p>
              </div>
              <div className="profile-item--text">
                <p>{user?.fullName ??
                  'Пользователь'}</p>
              </div>
              <div className="profile__dropdown-icon">
                <img
                  src="/src/assets/chevron-down.svg"
                  alt="accountIcon"
                />
              </div>
            </button>
            <div className="user-actions__buttons">
              <button className="button button__pass-test--student"
                      onClick={handleTest}>
                Пройти тест
              </button>
              <button className="button button--logout"
                      onClick={handleLogout}>
                Выйти
              </button>
            </div>

          </div>
        )}
      </div>
    </>
  );
};

export default ProfileHeaderData;