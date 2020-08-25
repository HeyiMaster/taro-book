/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconXihuan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M728.178 113.778c-130.845 0-210.49 102.4-210.49 102.4s-68.266-102.4-210.488-102.4S56.889 193.422 56.889 386.844c0 273.067 460.8 568.89 460.8 568.89s449.422-312.89 449.422-563.2c0-204.8-130.844-278.756-238.933-278.756m-210.49 773.689s-403.91-278.756-403.91-500.623c0-142.222 96.71-221.866 204.8-221.866 108.089 0 199.11 119.466 199.11 119.466s108.09-119.466 204.8-119.466c96.712 0 193.423 73.955 193.423 227.555-5.689 216.178-398.222 494.934-398.222 494.934"
        fill={getIconColor(color, 0, '#73777A')}
      />
    </Svg>
  );
};

IconXihuan.defaultProps = {
  size: 36,
};

export default IconXihuan;
