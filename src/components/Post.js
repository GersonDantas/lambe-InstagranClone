import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import Author from './Author';
import Comments from './Comments';
import AddComments from './AddComments';

class Post extends Component {
  render() {
    const addComment = this.props.name ? (
      <AddComments postId={this.props.id} />
    ) : null;
    return (
      <View style={styles.container}>
        <Image source={this.props.image} style={styles.image} />
        <Author email={this.props.email} nickname={this.props.nickname} />
        <Comments comments={this.props.comments} />
        {addComment}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'contain',
  },
});

// export default Post;

const mapStateProps = ({user}) => {
  return {
    name: user.name,
  };
};

export default connect(mapStateProps)(Post);
