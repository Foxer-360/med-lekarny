import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';
import Link from '@source/partials/Link';

export interface SocialProps {
  icons: Array<any>;
}

const Social = (props: SocialProps) => {
  const { icons } = props;

  return (
    <div className={'social'}>
      {icons && icons.map((icon, i) => (
        <Link key={i} url={icon.url && icon.url}>
          <SvgIcon type={'white'} name={icon.title && icon.title} />
        </Link>
      ))}
    </div>
  );
};

export default Social;