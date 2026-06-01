import iconSunny from '@shared/assets/images/icon-sunny.webp';
import iconPartlyCloudy from '@shared/assets/images/icon-partly-cloudy.webp';
import iconOvercast from '@shared/assets/images/icon-overcast.webp';
import iconFog from '@shared/assets/images/icon-fog.webp';
import iconDrizzle from '@shared/assets/images/icon-drizzle.webp';
import iconRain from '@shared/assets/images/icon-rain.webp';
import iconSnow from '@shared/assets/images/icon-snow.webp';
import iconStorm from '@shared/assets/images/icon-storm.webp';
import iconError from '@shared/assets/images/icon-error.svg';

export const getIconByCode = (code: number) => {
  switch (code) {
    case 0:
      return iconSunny;
    case 1:
    case 2:
      return iconPartlyCloudy;
    case 3:
      return iconOvercast;
    case 45:
    case 48:
      return iconFog;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 80:
      return iconDrizzle;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 81:
      return iconRain;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return iconSnow;
    case 82:
    case 95:
    case 96:
    case 99:
      return iconStorm;
    default:
      return iconError;
  }
};
