import './ProfileTrigger.scss'
import { getUserInitials } from '@/utils/getUserInitials.ts';
import { useAppSelector } from '@shared/hooks/redux.ts';

const ProfileTrigger = () => {
  const { user } = useAppSelector((state) => state.userReducer);

  return (
    <div className="profile-trigger">
      <div className="profile-trigger__initials">
        <p>{getUserInitials(user?.fullName ?? 'Иван Иванович')}</p>
      </div>
      <div className="profile-trigger__username">
        <p>{user?.fullName ?? 'Пользователь'}</p>
      </div>
      <div className="icon profile__dropdown-icon">
        <img src="/src/assets/chevron-down.svg" alt="accountIcon" />
      </div>
    </div>
  );
};

export default ProfileTrigger;