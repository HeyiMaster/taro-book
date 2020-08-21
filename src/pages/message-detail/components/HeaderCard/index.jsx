import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { px } from '../../../../utils/common';

import './index.scss';

export default function HeaderCard({ title = '', logo = '' }) {
  const className = 'he-header-card';
  return (
    <View className={`${className}__wrapper`}>
      <Image src={logo} className={`${className}__logo`} />
      <View className={`${className}__right`}>
        <Text className={`${className}__right-title`}>{title}</Text>
        <View className={`${className}__right-action`}>
          <View style={{ marginRight: px(10) }}>
            <Text>申请换</Text>
          </View>
          <View>
            <Text>毛毛买</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
