import Taro from '@tarojs/taro';
import { Image, View, Text } from '@tarojs/components';

import './index.scss';

export default function ImageCard({ src }) {
  const className = 'image-card-wrapper';
  return (
    <View className={className}>
      <View style={{ width: '100%', minHeight: 300, backgroundColor: '#F9F9F9' }}>
        <Image
          style={{ width: '100%' }}
          mode="widthFix"
          // src="http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/cristofer-jeschke-AqLIkOzWDAk-unsplash.jpg"
          // src="http://walker-markdown.oss-cn-shenzhen.aliyuncs.com/uPic/milada-vigerova-p8Drpg_duLw-unsplash.jpg"
          src={src}
        />
      </View>
      <View className={`${className}__title-wrapper`}>
        <Text className={`${className}__title`}>商品标题标题</Text>
        <Text className={`${className}__desc`}>
          商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述
        </Text>
      </View>
    </View>
  );
}
