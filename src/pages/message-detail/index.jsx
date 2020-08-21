import Taro from '@tarojs/taro';
import { View, ScrollView, Input } from '@tarojs/components';
import HeNavigator from '../../components/HeNavigator';
import HeaderCard from './components/HeaderCard';
import MessageCell from './components/MessageCell';
import AvatarTo from '../../public/avatar-to.png';
import AvatarFrom from '../../public/avatar-from.png';
import { px } from '../../utils/common';
import './index.scss';

export default function MessageDetail() {
  const className = 'message';
  const { screenHeight, statusBarHeight } = Taro.getSystemInfoSync();
  return (
    <View className={className}>
      <View className={`${className}__header`}>
        <HeNavigator title="合一" backgroundColor="#F5F5F5" />
        <HeaderCard title="商品详情详情" logo={AvatarFrom} />
      </View>
      <ScrollView
        className={`${className}__content`}
        style={{ height: px(screenHeight - statusBarHeight - (process.env.TARO_ENV === 'rn' ? 210 : 190)) }}
        scrollY
      >
        <View className={`${className}__content-list`}>
          <MessageCell avatar={AvatarFrom} type="from" text="这件商品很不错，想跟你换" />
          <MessageCell avatar={AvatarTo} type="to" text="可以呀，你拿什么换" />
          <MessageCell avatar={AvatarFrom} type="from" text="我想想，你喜欢看汉服吗？" />
          <MessageCell avatar={AvatarTo} type="to" text="喜欢" />
          <MessageCell avatar={AvatarFrom} type="from" text="我这里有几件闲置汉服" />
          <MessageCell avatar={AvatarTo} type="to" text="好的，你申请换，我看看" />
          <MessageCell avatar={AvatarFrom} type="from" text="嗯嗯" />
          <MessageCell avatar={AvatarTo} type="to" text="如果看上喜欢的，就跟你换" />
          <MessageCell avatar={AvatarFrom} type="from" text="好的哦" />
          <MessageCell avatar={AvatarTo} type="to" text="发了吗？" />
        </View>
      </ScrollView>
      <View className={`${className}__chat-wrapper`}>
        <View className={`${className}__chat`}>
          <Input
            style={{ paddingLeft: 20, paddingRight: 20, height: px(30) }}
            className={`${className}__chat-input`}
            placeholderClass={`${className}__chat-placeholder`}
            placeholder="聊聊..."
          />
        </View>
      </View>
    </View>
  );
}

MessageDetail.config = {
  navigationStyle: 'custom',
};
