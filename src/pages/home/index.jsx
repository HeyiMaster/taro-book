import Taro, { Component } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { px } from '../../utils/common';
import HeNavigator from '../../components/HeNavigator';
import HeSearch from '../../components/HeSearch';
import ImageCard from './components/ImageCard';
import './index.scss';

@connect(({ home, loading }) => ({
  ...home,
  modelLoading: loading.models.home,
  fetchBannerLoading: loading.effects['home/fetchBanner'],
}))
export default class Home extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'home/fetchBanner' });
    this.props.dispatch({ type: 'home/fetchList' });
  }

  config = {
    navigationStyle: 'custom',
  };

  render() {
    const { banner, list } = this.props;
    const leftList = list.slice(0, Math.floor(list.length / 2));
    const rightList = list.slice(Math.floor(list.length / 2));
    return (
      <View className="index">
        <HeNavigator>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: px(10) }}>分享</Text>
            <View style={{ flex: 1 }}>
              <HeSearch placeholder="请输入关键词" />
            </View>
          </View>
        </HeNavigator>
        <View
          style={{
            borderRadius: px(10),
            overflow: 'hidden',
            height: px(150),
            marginBottom: px(10),
          }}
        >
          <Swiper
            style={{
              height: px(150),
              marginBottom: px(10),
              backgroundColor: '#F5F5F5',
            }}
            indicatorColor="#999"
            indicatorActiveColor="#333"
            circular
            indicatorDots
            autoplay
          >
            {banner.map(e => (
              <SwiperItem key={e.url}>
                <Image mode="widthFix" style={{ width: '100%' }} src={e.url} />
              </SwiperItem>
            ))}
          </Swiper>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: '48%' }}>
            {leftList.map(e => (
              <ImageCard key={e} src={e.url} title={e.title} desc={e.desc} />
            ))}
          </View>
          <View style={{ width: '48%' }}>
            {rightList.map(e => (
              <ImageCard key={e} src={e.url} title={e.title} desc={e.desc} />
            ))}
          </View>
        </View>
      </View>
    );
  }
}
