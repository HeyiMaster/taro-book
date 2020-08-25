/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFanhuiXianxing = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M711.51 927.64c-8.19 0-16.38-3.12-22.63-9.37L289.86 519.25c-12.5-12.5-12.5-32.76 0-45.26L688.88 74.98c12.5-12.5 32.76-12.5 45.26 0s12.5 32.76 0 45.25L357.75 496.62l376.39 376.39c12.5 12.5 12.5 32.76 0 45.25-6.25 6.26-14.44 9.38-22.63 9.38z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconFanhuiXianxing.defaultProps = {
  size: 36,
};

export default IconFanhuiXianxing;
