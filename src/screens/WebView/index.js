import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {WebView as WebViewDefault} from 'react-native-webview';
import style from './style';

const WebView = props => {
  return (
    <View style={style.container}>
      <WebViewDefault
        source={{uri: 'https://web.telegram.org'}}
        style={style.container}
      />
    </View>
  );
};

WebView.propTypes = {};

export default WebView;
