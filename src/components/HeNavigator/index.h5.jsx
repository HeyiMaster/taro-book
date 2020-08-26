import Taro, { useCallback } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Iconfont from '@/components/Iconfont';

import './index.h5.scss';

export default function HeNavigator({ title, children, style, backgroundColor, color }) {
  console.log('title: ', title);
  const className = 'he-navigator';
  const handleClick = useCallback(() => {
    Taro.navigateBack();
  }, []);
  return (
    <View className={className} style={{ backgroundColor, color }}>
      <View
        className={`${className}__wrapper`}
        style={style}
      >
        {title ? (
          <View className={`${className}__wrapper__inner`}>
            <View className={`${className}__left`} onClick={handleClick}>
              <Iconfont name="icon-fanhui-xianxing" />
            </View>
            <View
              className={`${className}__title__wrapper`}
            >
              <Text>{title}</Text>
            </View>
          </View>
        ) : (
          <View>{children}</View>
        )}
      </View>
    </View>
  );
}
