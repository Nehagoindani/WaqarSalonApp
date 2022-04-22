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
              onChangeText={onChangeName} />

            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              keyboardType='email-address'
              placeholderTextColor='#404040'
              value={email}
              onBlur={() => { validateEmail }}
              onChangeText={onChangeEmail} />
               

            <TextInput
              style={styles.inputStyle}
              placeholder="Phone"
              keyboardType='numeric'
              placeholderTextColor='#404040'
              value={phone}
              onChangeText={onChangePhone}
            />

            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              placeholderTextColor='#404040'
              value={password}
              onChangeText={onChangePassword}
              maxLength={15}
              secureTextEntry={true} />

            <TextInput
              style={styles.inputStyle}
              placeholder="Confirm Password"
              placeholderTextColor='#404040'
              value={ConfirmPassword}
              onChangeText={onChangeConfirmPassword}
              maxLength={15}
              secureTextEntry={true} />
            <View>
            </View>

            <TouchableOpacity style={styles.btn}
              onPress={() => {
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                if (reg.test(email)) {
                  if (phone.length == 11 && phone.startsWith('03')) {
                    if (ConfirmPassword == password) {
                      alert('password match')
                      onPressSignUp()
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
