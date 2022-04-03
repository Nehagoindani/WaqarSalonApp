import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.dbRef = firestore().collection('users');
    this.dbRef1 = firestore().collection('users').get();
    this.state = {

      uid: '',
      Name: '',
      email: '',
      phone: '',
      password: '',
      ConfirmPassword: '',
      isLoading: false


    }
  }


  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  onPressSignUp = async () => {
    try {
      let user = await auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      user = user.user
      console.log('User account created & signed in!', user);

      3
      let userData = {
        userId: user.uid,
        name: this.state.Name,
        email: this.state.email,
        phone: this.state.phone
      }


      let addUser = firestore().collection('users').doc(user.uid).set(userData)
      console.log("add User >>> ", addUser)
      await user.sendEmailVerification()
      this.setState({
        isLoading: false,
        uid: '',
        Name: '',
        email: '',
        phone: '',
        password: '',
        ConfirmPassword: ''

      })

      this.props.navigation.navigate('MyTabs')


    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    }

  }
  validatephone = (phone) => {
    const emailRegex = /^(\+92|0|92)[0-9]{10}$/;
    if (emailRegex.test(phone) === false) {
      alert('error')
      console.log('error')

    }
  }
  validateEmail = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  }


  render() {
    console.log(this.dbRef1, 'signup')

    return (

      <ImageBackground style={styles.bgimg}
        source={require("../Images/back2.jpeg")}>
        <View style={styles.cont}>
          <ScrollView>
            <View style={styles.box}>
              <View style={{ marginTop: 10 }} >
                <Image style={styles.icon}
                  source={require("../Images/icon.png")}
                ></Image>
              </View>
              <Text style={styles.text}>Sign Up</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder="Name"
                placeholderTextColor='black'
                value={this.state.Name}
                onChangeText={(val) => this.updateInputVal(val, 'Name')} />

              <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                keyboardType='email-address'
                placeholderTextColor='black'
                value={this.state.email}
                onBlur={() => { this.validateEmail }}
                onChangeText={(val) => this.updateInputVal(val, 'email')} />

              <TextInput
                style={styles.inputStyle}
                placeholder="Phone"
                keyboardType='numeric'
                placeholderTextColor='black'
                value={this.state.phone}
                onChangeText={(val) => this.updateInputVal(val, 'phone')}
              />

              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                placeholderTextColor='black'
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'password')}
                maxLength={15}
                secureTextEntry={true} />

              <TextInput
                style={styles.inputStyle}
                placeholder="Confirm Password"
                placeholderTextColor='black'
                value={this.state.ConfirmPassword}
                onChangeText={(val) => this.updateInputVal(val, 'ConfirmPassword')}
                maxLength={15}
                secureTextEntry={true} />
              <View>
              </View>

              <TouchableOpacity style={styles.btn}
                onPress={() => {
                  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                  if (reg.test(this.state.email)) {
                    if (this.state.phone.length == 11 && this.state.phone.startsWith('03')) {
                      if (this.state.ConfirmPassword == this.state.password) {
                        alert('password match')
                        this.onPressSignUp()
                      }
                      else {
                        alert('password does not match')
                      }
                    } else {
                      alert('Phone number must be 11 digits.')
                    }
                  } else {
                    alert('Please Enter Valid Email.')
                  }


                }}
              >
                <View>
                  <Text style={{ textAlign: 'center', fontSize: 16, padding: 10, color: 'white', fontWeight: 'bold' }}>Sign Up</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.btmText}>
                <TouchableOpacity style={{ color: 'blue' }} onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={{ color: '#1a1a1a', textDecorationLine: 'underline' }}>Already have Account?  Login</Text>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </View>
      </ImageBackground>

    );
  }
}


export default Signup
const styles = StyleSheet.create({
  cont: {
    top: 80

  },
  bgimg: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  box: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 330,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,

  },

  inputStyle: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'black',
    marginVertical: 8,
    padding: 10,
    width: '80%',
    borderBottomWidth: 4,
    borderBottomColor: '#d6994b'
  },

  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#1f1f1f',
    marginBottom: 15,
    marginTop: 8
  },
  loginText: {
    margin: 5,
    color: 'brown',
    fontSize: 20
  },
  icon: {
    width: 80,
    height: 90
  },

  btn: {
    width: '50%',
    backgroundColor: '#1f1f1f',
    height: 40,
    borderRadius: 20,
    marginTop: 25
  },
  btmText: {
    margin: 20
  }
})
