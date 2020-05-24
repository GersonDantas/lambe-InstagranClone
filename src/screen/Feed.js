import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

export default class Feed extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'Pardal',
        image: require('../../assets/imgs/gate.jpg'),
        comments: [
          {
            nickname: 'Bada',
            comment: 'pardal vei de roxa',
          },
          {
            nickname: 'Joaozinho',
            comment: 'Muito bom mermo',
          },
        ],
      },
      {
        id: Math.random(),
        nickname: 'Bada',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [
          {
            nickname: 'Pardal',
            comment: 'Bada vei de roxa',
          },
          {
            nickname: 'Joaozinho',
            comment: 'Muito bom mermo',
          },
        ],
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Post key={item.id} {...item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
