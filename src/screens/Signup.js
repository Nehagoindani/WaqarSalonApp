import React, { Component, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Actions/serviceAction';


function Signup({ navigation }) {

  const dispatch = useDispatch();

  dbRef = firestore().collection('users');
  dbRef1 = firestore().collection('users').get();

  const [uid, setUid] = useState('');
  const [Name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)
  const [isEmail, setIsEmail] = useState()
  const [isPhone, setIsPhone] = useState()

  onPressSignUp = async () => {
    try {
      let user = await auth().createUserWithEmailAndPassword(email, password)
      user = user.user
      console.log('User account created & signed in!', user);

      let userData = {
        userId: user.uid,
        name: Name,
        email: email,
        phone: phone
      }

      let addUser = firestore().collection('users').doc(user.uid).set(userData)
      console.log("add User >>> ", addUser)
      await user.sendEmailVerification()
      dispatch(login());

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
  validatephone = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
   // if (reg.test(phone)) {
      if (phone.length == 11 && phone.startsWith('03')) {
        return true;
      } else {
        return false;
      }
   // }
  }
  validateEmail = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  const onChangeName = (value) => {
    setName(value)
  }
  const onChangePassword = (value) => {
    setPassword(value)
  }
  const onChangePhone = (value) => {
    setPhone(value)
    console.log(value)
  }
  const onChangeEmail = (value) => {
    setEmail(value)
  }
  const onChangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }

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
              placeholderTextColor='#404040'
              value={Name}
              onChangeText={onChangeName}
              onBlur={() => {
                if (Name.length == 0) {
                  setErrorName(true)
                }
              }}

            />
            <View style={{ height: 12, alignItems: 'flex-end', justifyContent: 'center', width: '80%' }}>
              {
                errorName ? <Text style={{ fontSize: 10, color: 'red' }} > Please enter name </Text> : null
              }

            </View>

            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              keyboardType='email-address'
              placeholderTextColor='#404040'
              value={email}
              onBlur={async () => {
                if (email.length === 0) {
                  setErrorEmail(true)
                  setIsEmail()
                
                }
                else {
                  setErrorEmail(false)
                  setIsEmail(validateEmail());
                }
              }
              }
              onChangeText={onChangeEmail} />

            <View style={{ height: 12, alignItems: 'flex-end', justifyContent: 'center', width: '80%' }}>
              {
                errorEmail === true ? <Text style={{ fontSize: 10, color: 'red' }} > Email cannot be empty </Text> : null
              }
              {
                isEmail === false ? <Text style={{ fontSize: 10, color: 'red' }} > please enter valid Email </Text> : null
              }
            </View>


            <TextInput
              style={styles.inputStyle}
              placeholder="Phone"
              keyboardType='numeric'
              placeholderTextColor='#404040'
              value={phone}
              onBlur={() => {
                if (phone.length > 0) {
                  setErrorPhone(false)
                  setIsPhone(validatephone());
                }
                else {
                  setErrorPhone(true)
                }
              }
              }
              onChangeText={onChangePhone} />

            <View style={{ height: 12, alignItems: 'flex-end', justifyContent: 'center', width: '80%' }}>
              {
                errorPhone ? <Text style={{ fontSize: 10, color: 'red' }} > Field cannot be empty </Text> : isPhone === false ? <Text style={{ fontSize: 10, color: 'red' }} >Please enter valid phone number</Text> : null

              }
            </View>

            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              placeholderTextColor='#404040'
              value={password}
              onChangeText={onChangePassword}
              maxLength={15}
              secureTextEntry={true}
              onBlur={() => {
                if (password.length == 0) {
                  setErrorPassword(true)
                }
              }}

            />
            <View style={{ height: 12, alignItems: 'flex-end', justifyContent: 'center', width: '80%' }}>
              {
                errorPassword ? <Text style={{ fontSize: 10, color: 'red' }} > Field cannot be empty </Text> : null

              }
            </View>

            <TextInput
              style={styles.inputStyle}
              placeholder="Confirm Password"
              placeholderTextColor='#404040'
              value={ConfirmPassword}
              onChangeText={onChangeConfirmPassword}
              maxLength={15}
              secureTextEntry={true}
              onBlur={() => {
                if (ConfirmPassword !== password) {
                  setErrorConfirmPassword(true)
                }
              }}

            />
            <View style={{ height: 12, alignItems: 'flex-end', justifyContent: 'center', width: '80%' }}>
              {
                errorConfirmPassword ? <Text style={{ fontSize: 10, color: 'red' }} > password does not match </Text> : null

              }
            </View>


            <TouchableOpacity style={styles.btn}
              onPress={() => { onPressSignUp() }} >
              <View>
                <Text style={{ textAlign: 'center', fontSize: 16, padding: 10, color: 'white', fontWeight: 'bold' }}>Sign Up</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.btmText}>
              <TouchableOpacity style={{ color: 'blue' }} onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: '#1a1a1a', textDecorationLine: 'underline' }}>Already have Account?  Login</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    </ImageBackground>

  );
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
    borderWidth: 1.75,
    borderColor: 'white',
    borderBottomColor: '#d6994b',
    marginVertical: 6,
    padding: 6,
    width: '80%',

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
