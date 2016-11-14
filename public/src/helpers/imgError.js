  export const replaceImg = '../../assets/replace.png';

  export function imgError(image) {
    image.onerror = '';
    image.src = replaceImg;
  }