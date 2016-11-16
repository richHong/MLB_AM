export const replaceImg = '../../assets/replace.png';
// Function used to replace images on error
export function imgError(image) {
  image.onerror = '';
  image.src = replaceImg;
}