import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'fa',
    resources: {
      en: {
        translation: {
            PasswordTooShort: "password too short",
            DuplicateUserName: "username is already exist",
            Register: 'Register'
        }
      },
      fa: {
        translation: {
            PasswordTooShort: "تعداد کاراکترهای رمز عبور نباید از 6 کمتر باشد",
            DuplicateUserName: "نام کاربری تکراری است",
            Register: 'ثبت نام کنید'
        }
      },
    }
  });

export default i18n;