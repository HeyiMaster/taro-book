/* eslint-disable */


import IconIconfontzhizuobiaozhun20 from './IconIconfontzhizuobiaozhun20';
import IconSousuo from './IconSousuo';
import IconXihuan from './IconXihuan';
import IconLiwu from './IconLiwu';
import IconFanhuiXianxing from './IconFanhuiXianxing';
import IconLiaotian from './IconLiaotian';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-iconfontzhizuobiaozhun20':
      return <IconIconfontzhizuobiaozhun20 {...rest} />;
    case 'icon-sousuo':
      return <IconSousuo {...rest} />;
    case 'icon-xihuan':
      return <IconXihuan {...rest} />;
    case 'icon-liwu':
      return <IconLiwu {...rest} />;
    case 'icon-fanhui-xianxing':
      return <IconFanhuiXianxing {...rest} />;
    case 'icon--_liaotian':
      return <IconLiaotian {...rest} />;
  }

  return null;
};

export default IconFont;
