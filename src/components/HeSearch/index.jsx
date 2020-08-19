import Taro, { useCallback } from '@tarojs/taro';
import { View, Text, Input } from '@tarojs/components';
import { isFunction } from 'lodash';

import './index.scss';

export default function HeSearch({ style, placeholder, onChange, onFocus }) {
  const className = 'he-search';
  const handleChange = useCallback(() => {
    if (isFunction(onChange)) onChange();
  }, [onChange]);
  const handleFocus = useCallback(() => {
    if (isFunction(onFocus)) onFocus();
  }, [onFocus]);
  return (
    <View className={className} style={style}>
      <View>
        <Text>🔍</Text>
      </View>
      <Input
        placeholder={placeholder}
        className={`${className}__input`}
        placeholderClass={`${className}__input__placeholder`}
        onChange={handleChange}
        onBlur={handleFocus}
      />
    </View>
  );
}
