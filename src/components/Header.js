import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Gravatar} from 'react-native-gravatar';
import {View, StyleSheet, Text, Platform, Image} from 'react-native';
import icon from '../../assets/imgs/icon.png';

class Header extends Component {
  render() {
    const name = this.props.name || 'anonymous';
    const gravatar = this.props.email ? (
      <Gravatar
        options={{email: this.props.email, secure: true}}
        style={styles.avatar}
      />
    ) : null;
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}>lambe lambe</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.user}>{name}</Text>
          {gravatar}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    fontSize: 30,
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    fontSize: 10,
    color: '#888',
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

//export default Header;

const mapStateProps = ({user}) => {
  return {
    email: user.email,
    name: user.name,
  };
};

export default connect(mapStateProps)(Header);
