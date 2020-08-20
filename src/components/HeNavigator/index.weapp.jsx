import Taro, { useCallback } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import './index.weapp.scss';

export default function HeNavigator({ title, children, style, backgroundColor, color }) {
  const className = 'he-navigator';
  const { top, height, width } = Taro.getMenuButtonBoundingClientRect();
  const { screenWidth } = Taro.getSystemInfoSync();

  const handleClick = useCallback(() => {
    Taro.navigateBack();
  }, []);
  return (
    <View className={className} style={{ backgroundColor, color }}>
      <View
        className={`${className}__wrapper`}
        style={{
          paddingTop: `${top}px`,
          marginRight: `${width + 20}px`,
          height: `${height}px`,
          lineHeight: `${height}px`,
          ...style,
        }}
      >
        {title ? (
          <View className={`${className}__wrapper__inner`}>
            <View className={`${className}__left`} onClick={handleClick}>
              <Text>＜</Text>
            </View>
            <View
              className={`${className}__title__wrapper`}
              style={{
                width: `${screenWidth - 2 * (width + 20)}px`,
              }}
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
