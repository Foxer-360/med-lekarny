import { CSSProperties } from 'react';
import { WHITE_COLOR } from './const';
const BASE_URL = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';

const getImageOriginalUrl = (image: LooseObject | undefined): string => {
  if (!image) { return ''; }
  const { category, hash, filename } = image;
  return BASE_URL + category + hash + '_' + filename;
};

export const getBackgroundImageStyle = (image: LooseObject | undefined, color: string | undefined): CSSProperties => ({
  backgroundImage: `url("${getImageOriginalUrl(image)}")`,
  backgroundColor: color,
});

export const getTextColor = (isTextWhite) => (isTextWhite ? { color: WHITE_COLOR } : {});
export const shouldButtonRender = (url: LooseObject, buttonTitle: string) => (
    url && url.url && buttonTitle ? true : false
  );
