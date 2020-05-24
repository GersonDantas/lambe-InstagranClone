import React, {Component} from 'react';
import Header from './src/components/Header';
import Post from './src/components/Post';
import {View} from 'react-native';
export default class App extends Component {
  render() {
    const comments = [
      {
        nickname: 'Pardal',
        comment: 'muito boom doidao',
      },
      {
        nickname: 'Sinho',
        comment: 'cade a toxinha?',
      },
    ];
    return (
      <View style={{flex: 1}}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
      </View>
    );
  }
}
