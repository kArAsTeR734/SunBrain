import './studentAccountInfo.css';
import { useUploadAvatar } from '@features/User/hooks/useUploadAvatar.ts';
import AvatarUpload from '@/features/User/AvatarUpload/AvatarUpload.tsx';
import { useAppSelector } from '@shared/hooks/redux.ts';

export const StudentAccountInfo = () => {
  const uploadAvatarMutation = useUploadAvatar();
  const { user } = useAppSelector((state) => state.userReducer);
  const handleUpload = async (file: File) => {
    await uploadAvatarMutation.mutateAsync(file);
  };

  return (
    <>
      <div className="general">
        <h2 className="general__header">Общая информация</h2>
        <AvatarUpload
          currentAvatar={user?.avatarUrl ?? ''}
          onUpload={handleUpload}
          size={150}
        />
        <div className="general__info">
          <div className="general__info_item">ФИО: {user?.fullName ?? ''}</div>
          <div className="general__info_item">
            Адрес электронной почты: {user?.email ?? ''}
          </div>
        </div>
      </div>
    </>
  );
};
