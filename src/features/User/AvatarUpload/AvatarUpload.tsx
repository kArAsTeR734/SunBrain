import { useState, useRef, ChangeEvent } from 'react';
import './AvatarUpload.scss';

interface AvatarUploadProps {
  currentAvatar?: string;
  onUpload: (_file: File) => Promise<void>;
  size?: number;
}

const AvatarUpload = ({
  currentAvatar,
  onUpload,
  size = 120,
}: AvatarUploadProps) => {
  const [preview, setPreview] = useState<string>(currentAvatar || '');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Валидация файла
    if (!file.type.startsWith('image/')) {
      alert('Пожалуйста, выберите изображение');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      // 5MB
      alert('Файл слишком большой. Максимум 5MB');
      return;
    }

    // Создаем превью
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Загружаем на сервер
    try {
      setIsUploading(true);
      await onUpload(file);
    } catch (error) {
      console.error('Ошибка загрузки:', error);
      alert('Ошибка при загрузке аватарки');
      setPreview(currentAvatar || '');
    } finally {
      setIsUploading(false);
      // Сбрасываем input чтобы можно было выбрать тот же файл снова
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="avatar-upload" style={{ width: size, height: size }}>
      <div
        className="avatar-upload__container"
        onClick={handleClick}
        style={{ cursor: isUploading ? 'wait' : 'pointer' }}
      >
        {preview ? (
          <img src={preview} alt="Аватар" className="avatar-upload__image" />
        ) : (
          <div className="avatar-upload__placeholder">
            <span className="avatar-upload__icon">👤</span>
          </div>
        )}

        <div className="avatar-upload__overlay">
          {isUploading ? (
            <div className="avatar-upload__loading">Загрузка...</div>
          ) : (
            <div className="avatar-upload__change">
              <span>Изменить</span>
            </div>
          )}
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/gif,image/webp"
        onChange={handleFileChange}
        className="avatar-upload__input"
        disabled={isUploading}
      />
    </div>
  );
};

export default AvatarUpload;
