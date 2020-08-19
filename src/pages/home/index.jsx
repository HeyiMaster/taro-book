import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { px } from '../../utils/common';
import HeNavigator from '../../components/HeNavigator';
import HeSearch from '../../components/HeSearch';
import './index.scss';

@connect(({ index, loading }) => ({
  ...index,
  modelLoading: loading.models.index,
  fetchListLoading: loading.effects['index/fetchList'],
}))
export default class Index extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'index/fetchList', payload: '123' });
  }

  config = {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom',
  };

  render() {
    return (
      <View className="index">
        {/* <HeNavigator title="Taro" backgroundColor="#00B388" color="#FFF" /> */}
        <HeNavigator>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: px(10) }}>分享</Text>
            <View style={{ flex: 1 }}>
              <HeSearch placeholder="请输入关键词" />
            </View>
          </View>
        </HeNavigator>
      </View>
    );
  }
}
