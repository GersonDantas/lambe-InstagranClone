import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../store/actions/posts';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback as TWF,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// export default
class AddComments extends Component {
  state = {
    comment: '',
    editMode: false,
  };
  handleAddComment = () => {
    this.props.onAddComment({
      postId: this.props.postId,
      comment: {
        nickname: this.props.name,
        comment: this.state.comment,
      },
    });
    this.setState({comment: '', editMode: false});
  };
  render() {
    let commentArea = null;
    if (this.state.editMode) {
      commentArea = (
        <View style={styles.container}>
          <TextInput
            placeholder="Pode comentar..."
            value={this.state.comment}
            style={styles.input}
            onChangeText={comment => this.setState({comment})}
            autoFocus={true}
            onSubmitEditing={this.handleAddComment}
          />
          <TWF
            onPress={() => {
              this.setState({editMode: false});
            }}>
            <Icon name="times" size={15} color="#555" />
          </TWF>
        </View>
      );
    } else {
      commentArea = (
        <TWF
          onPress={() => {
            this.setState({editMode: true});
          }}>
          <View style={styles.container}>
            <Icon name="comment-o" size={25} color="#555" />
            <Text style={styles.caption}>Comente Algo...</Text>
          </View>
        </TWF>
      );
    }
    return <View style={{flex: 1}}>{commentArea}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#ccc',
  },
  input: {
    width: '90%',
  },
});

const mapStateProps = ({user}) => {
  return {
    name: user.name,
  };
};

const mapDispatchProps = dispatch => {
  return {
    onAddComment: payload => dispatch(addComment(payload)),
  };
};

export default connect(
  mapStateProps,
  mapDispatchProps,
)(AddComments);
