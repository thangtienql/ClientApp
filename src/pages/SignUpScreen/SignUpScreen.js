import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

import Form from '../../component/Form/Form';

export default class SignUpScreen extends Component {
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
                {marginTop: 10, fontSize: 22, fontWeight: '500'},
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
            SIGNUP
          </Text>

          <Form style={styles.inputTitle} title="UserName" />
          <Form
            style={{marginTop: 32, marginBottom: 8}}
            title="Password"
            isSecure={true}
          />
          <Form style={styles.inputTitle} title="FullName" />
          <Form style={styles.inputTitle} title="Phone" />
          <Form style={styles.inputTitle} title="Address" />
          <Form style={styles.inputTitle} title="Email" />

          <TouchableOpacity style={styles.submitContainer}>
            <Text
              style={[
                styles.text,
                {color: '#FFF', fontWeight: '600', fontSize: 16},
              ]}>
              SIGN UP
            </Text>
          </TouchableOpacity>

          <Text
            style={[
              styles.text,
              {
                fontSize: 14,
                color: '#ABB4BD',
                textAlign: 'center',
                marginTop: 24,
              },
            ]}>
            Have an account?{' '}
            <Text style={[styles.text, styles.link]}>LOGIN Now</Text>
          </Text>
        </View>
        <Button title='Login' onPress={() => {
            this.props.navigation.navigate('Login')
          }} >Login</Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:'100%',
    paddingHorizontal:25,
  },
  text: {
    fontFamily: 'Avenir Next',
    color: '#1D2029',
  },
  socialButton: {
    flexDirection: 'row',
    marginHorizontal: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(171, 180, 189, 0.65)',
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: 'rgba(171, 180, 189, 0.35)',
    shadowOffset: {width: 0, height: 10},
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
    shadowOffset: {width: 0, height: 9},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
});