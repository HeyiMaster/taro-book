import Taro from '@tarojs/taro';
import { Image, View, Text } from '@tarojs/components';

import './index.scss';

export default function ImageCard({ src, title, desc }) {
  const className = 'image-card-wrapper';
  return (
    <View className={className}>
      <View style={{ width: '100%', backgroundColor: '#F9F9F9' }}>
        <Image style={{ width: '100%' }} mode="widthFix" src={src} />
      </View>
      <View className={`${className}__title-wrapper`}>
        <Text className={`${className}__title`}>{title}</Text>
        <Text className={`${className}__desc`}>{desc}</Text>
      </View>
    </View>
  );
}
