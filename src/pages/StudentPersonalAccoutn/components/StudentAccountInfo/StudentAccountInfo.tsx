import './studentAccountInfo.css';
import {useGetProfileInfo} from "@/features/User/useGetProfileInfo.ts";
import {useUploadAvatar} from "@/features/User/useUploadAvatar.ts";
import AvatarUpload from "@/features/User/AvatarUpload/AvatarUpload.tsx";

const StudentAccountInfo = () => {
  const { data: profileData, isLoading } = useGetProfileInfo();
  const uploadAvatarMutation = useUploadAvatar();

  const handleUpload = async (file: File) => {
    await uploadAvatarMutation.mutateAsync(file);
  };

  if (isLoading) {
    return <div>Загрузка профиля...</div>;
  }
  const user = profileData?.user;
  return (
    <>
      <div className='general'>
        <h2 className='general__header'>Общая информация</h2>
        <AvatarUpload
            currentAvatar={profileData?.user?.avatarUrl || ''}
            onUpload={handleUpload}
            size={150}
        />
        <div className='general__info'>
          <div className='general__info_item'>
            ФИО: {user?.fullName}
          </div>
          <div className='general__info_item'>
            Адрес электронной почты: {user?.email}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentAccountInfo;
