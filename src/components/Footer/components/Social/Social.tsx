import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';

export interface SocialProps {}

const Social = (props: SocialProps) => (
  <div className="social">
    <a href="#"><SvgIcon type={'white'} name="fb" /></a>
  </div>
);

export default Social;
