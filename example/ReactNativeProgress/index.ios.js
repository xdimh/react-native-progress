/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ProgressBar from '../src/';

export default class ReactNativeProgress extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressBar borderStyle={styles.progress} end={0.8} width={96} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  progress : {

  }
});

AppRegistry.registerComponent('ReactNativeProgress', () => ReactNativeProgress);
