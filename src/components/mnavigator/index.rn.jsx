import Taro, { useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { getSafeArea } from '../../utils/common';

import './index.rn.scss';

export default function MNavigator({ renderBack, children }) {
  const [area] = useState(getSafeArea());
  console.log('area: ', area);
  return (
    <View
      className="mnavigator__wrapper"
      style={{
        marginTop: area.topGap,
        // height: `${area.height}px`,
        // marginRight: `${area.width + 20}px`,
      }}
    >
      {renderBack && <View style={{ paddingLeft: 20, paddingRight: 10 }}>{renderBack()}</View>}
      <View
        style={{
          flex: 1,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {children}
      </View>
      <View className="button"></View>
    </View>
  );
}
