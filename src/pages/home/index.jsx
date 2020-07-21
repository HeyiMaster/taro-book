import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({ index, loading }) => ({
  ...index,
  modelLoading: loading.models.index,
  fetchListLoading: loading.effects['index/fetchList'],
}))
export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {
    this.props.dispatch({ type: 'index/fetchList', payload: '123' });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页',
  };

  render() {
    const { list, modelLoading, fetchListLoading } = this.props;
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Text>{modelLoading && '页面loading'}</Text>
        <Text>{fetchListLoading && '接口loading'}</Text>
        {list.map((e, i) => (
          <View key={e.id} style={{ display: 'flex' }}>
            <Text>{e.title}</Text>
          </View>
        ))}
      </View>
    );
  }
}
