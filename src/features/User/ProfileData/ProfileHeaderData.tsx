import Button from '@/shared/ui/Button/Button.tsx';
import {userSlice} from '@/app/store/reducers/UserSlice.ts';
import {useAppDispatch, useAppSelector} from '@/shared/hooks/redux.ts';
import {useAuthQuery} from '@/features/Authorization/useCheckAuth.ts';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './ProfileHeaderData.scss'
import '@/shared/ui/Button/button.scss'
import {getUserInitials} from "@/utils/getUserInitials.ts";
import {AuthorizationService} from "@/api/services/AuthorizationService.ts";

const ProfileHeaderData = () => {
  const navigate = useNavigate();
  const {setAuth} = userSlice.actions;
  const dispatch = useAppDispatch();
  const {data: authData, isLoading} = useAuthQuery();
  const user = useAppSelector(state => state.userReducer.user);
  useEffect(() => {
    if (authData) {
      dispatch(setAuth(true));
      window.location.reload();
    }
  }, [dispatch, setAuth]);

  const isUserAuthenticated = authData?.isAuthenticated;

  const handleLogout = async () => {
    await AuthorizationService.logout();
    window.location.reload();
  }

  const handleTest = () => {
    navigate('/test');
  }

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
                    <p>{getUserInitials(user?.fullName)}</p>
                  </div>
                  <div className="profile-item--text">
                    <p>{user?.fullName ||
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