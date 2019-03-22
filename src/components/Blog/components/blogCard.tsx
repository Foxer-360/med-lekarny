import * as React from 'react';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';

export interface BlogCardProps {
  title: string;
  text: string;
  color: string;
  textColor: string;
  img: LooseObject;
  special?: boolean;
}

export function BlogCard(props: BlogCardProps) {
  const { title, text, color, textColor, img, special } = props;

  if (special) {
    return (
      <Link className={'blogCard blogCard--special'}>
        <h3>{title}</h3>
        <p>{text}</p>
      </Link>
    );
  }

  return (
    <Link className={'blogCard'}>
      <h3 style={textColor ? {color: `${textColor}`} : {}}>{title}</h3>
      <p style={textColor ? {color: `${textColor}`} : {}}>{text}</p>

      {img && <Media type={'image'} data={img} />}
      <div
        className={'blogCard__colorGradient'}
        style={{ background: `linear-gradient( to bottom,rgba(125, 185, 232, 0) 0%,${color} 100%)` }}
      />
    </Link>
  );
}
