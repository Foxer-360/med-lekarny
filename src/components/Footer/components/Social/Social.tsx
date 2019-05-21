import * as React from 'react';

import SvgIcon from '../../../../partials/SvgIcon';
import Link from '../../../../partials/Link';

export interface SocialProps {
  // tslint:disable-next-line:no-any
  icons: Array<any>;
}

const Social = (props: SocialProps) => {
  const { icons } = props;

  return (
    <div className={'social'}>
      {icons && icons.map((icon, i) => (
        <Link key={i} {...icon.url}>
          <SvgIcon type={'white'} name={icon.title && icon.title} />
        </Link>
      ))}
    </div>
  );
};

export default Social;