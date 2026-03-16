import { useAppDispatch } from '@shared/hooks/redux.ts';
import { useNavigate } from 'react-router-dom';
import { userSlice } from '@app/store/reducers/UserSlice.ts';
import './ProfileDropdown.scss'

const ProfileDropdown = () => {
  const navigate = useNavigate();

  const { logout } = userSlice.actions;
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(logout());
  };

  const handleTest = () => {
    navigate('/test');
  };
  return (
    <ul className="profile-dropdown">
      <li onClick={() => navigate('/student/account')}>Личный кабинет</li>
      <li onClick={() => navigate('/student/homework')}>Домашние работы</li>
      <li onClick={handleTest}>Пройти тест</li>
      <li className="logout" onClick={handleLogout}>Выйти</li>
    </ul>
  );
};

export default ProfileDropdown;