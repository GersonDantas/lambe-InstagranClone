import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPost} from '../store/actions/posts';
import {
  View,
  Text,
  TextInput,
  Platform,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ImagePiker from 'react-native-image-picker';
const noUser = 'você precisa estar logado para adicionar imagem';
// export default
class AddPhoto extends Component {
  state = {
    image: null,
    comment: '',
  };

  pickImage = () => {
    if (!this.props.name) {
      Alert.alert('Falha!', noUser);
      return;
    }
    ImagePiker.showImagePicker(
      {
        title: 'Escolha a imagem',
        maxHeight: 600,
        maxWidth: 800,
      },
      res => {
        if (!res.didCancel) {
          this.setState({image: {uri: res.uri, base64: res.data}});
        }
      },
    );
  };
  save = async () => {
    if (!this.props.name) {
      Alert.alert('Falha!', noUser);
      return;
    }
    this.props.onAddPost({
      id: Math.random(),
      nickname: this.props.name,
      email: this.props.email,
      image: this.state.image,
      comments: [
        {
          nickname: this.props.name,
          comment: this.state.comment,
        },
      ],
    });

    this.setState({image: null, comment: ''});
    this.props.navigation.navigate('Feed');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Poste a foto aí mann</Text>
          <View style={styles.imageContainer}>
            <Image source={this.state.image} style={styles.image} />
          </View>
          <TouchableOpacity style={styles.buttom} onPress={this.pickImage}>
            <Text style={styles.buttomText}>Carregue uma foto!</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Adicione um comentário"
            value={this.state.comment}
            onChangeText={comment => this.setState({comment})}
            editable={this.props.name != null}
          />
          <TouchableOpacity style={styles.buttom} onPress={this.save}>
            <Text style={styles.buttomText}> Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
  },
  imageContainer: {
    width: '90%',
    height: (Dimensions.get('window').width * 3) / 4,
    backgroundColor: '#eee',
  },
  image: {
    width: '100%',
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'center',
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    marginTop: 20,
    width: '90%',
  },
});
const mapStateProps = ({user}) => {
  return {
    email: user.email,
    name: user.name,
  };
};

const mapDispatchProps = dispatch => {
  return {
    onAddPost: posts => dispatch(addPost(posts)),
  };
};
export default connect(
  mapStateProps,
  mapDispatchProps,
)(AddPhoto);
