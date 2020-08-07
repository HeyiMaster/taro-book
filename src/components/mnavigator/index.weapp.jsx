import Taro, { useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { getMenuArea, getSafeArea } from '../../utils/common';
console.log('getSafeArea: ', getSafeArea());

import './index.weapp.scss';

export default function MNavigator({ renderBack, children }) {
  const [area] = useState(getMenuArea());
  console.log('area: ', area);
  return (
    <View
      className="mnavigator__wrapper"
      style={{
        height: `${area.height}px`,
        marginTop: `${area.top}px`,
        // marginRight: `${area.width + 20}px`,
      }}
    >
      {renderBack && <View style={{ paddingLeft: 20, paddingRight: 10 }}>{renderBack()}</View>}
      <View style={{ flex: 1, textAlign: 'center' }}>{children}</View>
    </View>
  );
}
