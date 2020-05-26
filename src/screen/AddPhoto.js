import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  StyleSheet,
  Dimensions,
  Alert,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImagePiker from 'react-native-image-picker';

export default class AddPhoto extends Component {
  state = {
    image: null,
    comment: '',
  };

  pickImage = () => {
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
    Alert.alert('Imagem Adicionada', this.state.comment);
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
