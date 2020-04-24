import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { RequestPostBaseApi } from '../../services/ApiRequest'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
  Alert
} from 'react-native';

import SignUpScreen from '../SignUpScreen/SignUpScreen';
import Form from '../../component/Form/Form';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View
            style={{
              marginTop: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={[
                styles.text,
                { marginTop: 10, fontSize: 22, fontWeight: '500' },
              ]}>
              Welcome To My App
            </Text>
          </View>

          <Text
            style={[
              styles.text,
              {
                color: '#ABB4BD',
                fontSize: 15,
                textAlign: 'center',
                marginVertical: 20,
              },
            ]}>
            LOGIN Account
          </Text>

          <Form
            onChangeText={text => {
              console.log('test:', text);
              this.setState({
                username: text
              })
            }}
            style={styles.inputTitle}
            title="UserName"
            value={this.state.userName}
          />
          <Form
            onChangeText={text => {
              this.setState({
                password: text
              })
              console.log('test:', text);
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ marginTop: 32, marginBottom: 8 }}
            title="Password"
            value={this.state.pass}
            isSecure={true}
          />

          <Text style={[styles.text, styles.link, { textAlign: 'right' }]}>
            Forgot Password?
          </Text>

          <TouchableOpacity
            style={styles.submitContainer}
            onPress={() => {
              console.log(this.state);
              this.login();
              // this.props.navigation.navigate('Home')
            }}>
            <Text
              style={[
                styles.text,
                { color: '#FFF', fontWeight: '600', fontSize: 16 },
              ]}>
              Login
            </Text>
          </TouchableOpacity>

          <Text
            style={[
              styles.text,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                fontSize: 14,
                color: '#ABB4BD',
                textAlign: 'center',
                marginTop: 24,
              },
            ]}>
            Don't have an account?{' '}
            <Text style={[styles.text, styles.link]}>Register</Text>
          </Text>
          <Button
            title="Register"
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}>
            Register
          </Button>
        </View>
      </ScrollView>
    );
  }
  async login() {
    try {

      const data = await RequestPostBaseApi('/api/login/client', { ...this.state }, {});
      console.log("login:", data);
      this.props.navigation.navigate('Home');

    } catch (error) {
      Alert.alert(
        "Thông báo:",
        "Dang Nhap That Bai",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
      console.log("err signup:" + error.toString())
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    width: '100%',
  },
  text: {
    fontFamily: 'Avenir Next',
    color: '#1D2029',
  },
  socialButton: {
    flexDirection: 'row',
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(171, 180, 189, 0.65)',
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: 'rgba(171, 180, 189, 0.35)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  socialLogo: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  link: {
    color: '#FF1654',
    fontSize: 14,
    fontWeight: '500',
  },
  submitContainer: {
    backgroundColor: '#FF1654',
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    shadowColor: 'rgba(255, 22, 84, 0.24)',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
});
