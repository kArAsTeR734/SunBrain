import './Profile.scss';
import ProfileDropdown from '@features/User/ProfileDropdown/ProfileDropdown.tsx';
import { useRef } from 'react';
import { useHover } from '@shared/hooks/useHover.ts';
import ProfileTrigger from '@entities/User/ui/ProfileTrigger/ProfileTrigger.tsx';

export const Profile = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isHovering = useHover<HTMLDivElement>(ref);
  return (
    <div className="profile">
      <div ref={ref} className="profile__container">
        <ProfileTrigger/>
        {isHovering && <ProfileDropdown/>}
      </div>
    </div>
  );
};
