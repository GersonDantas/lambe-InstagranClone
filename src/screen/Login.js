import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  login = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          style={styles.input}
          autoFocus={true}
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          placeholder="senha"
          secureTextEntry={true}
          style={styles.input}
          keyboardType="visible-password"
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <TouchableOpacity style={styles.buttom} onPress={this.Login}>
          <Text style={styles.buttomText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttom}
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}>
          <Text style={styles.buttomText}>Criar nova conta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#eee',
    height: 40,
    borderRadius: 1,
    borderColor: '#333',
  },
});
