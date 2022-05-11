import React, { useState } from 'react';
import { View, Button, ScrollView, Image, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground, ActivityIndicator, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { login, serviceNull } from '../Redux/Actions/serviceAction';



function LoginScreen({ navigation }) {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [isEmail, setIsEmail] = useState()


  const userLogin = async () => {
   const user = auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        dispatch(login());
        console.log('user logged in successfully');

      })
      .catch((err)=>{
        console.log(err.code)
        Alert.alert(err.message)
      })
  
  }

  validateEmail = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false
    }
  }


  return (
    <ImageBackground style={styles.bgimg}
      source={require("../Images/back2.jpeg")}
    >
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.box}>
            <View style={{ marginTop: 10 }} >
              <Image style={styles.icon}
                source={require("../Images/icon.png")}
              ></Image>

            </View>

            <Text style={styles.text}>Login</Text>

            <View style={{ flexDirection: 'row', borderBottomWidth: 1.75, borderBottomColor: '#d6994b',width: '90%' }}>

              <View style={{ marginTop: 10, padding: 5 }}>
                <Icon name='email-outline' size={20} color='black' />
                </View>

              <TextInput style={styles.textin}
                placeholder="Email"
                placeholderTextColor='#404040'
                onChangeText={(email) => setEmail(email)}
                onBlur={() => {
                  if (email.length > 0) {
                    setErrorEmail(false)
                    setIsEmail(validateEmail());
                  }
                  else {
                    setErrorEmail(true)
                  }
                }
                }>

              </TextInput>
            </View>


            <View style={{ height: 12, alignItems: 'flex-end', justifyContent: 'center', width: '80%' }}>
              {
                errorEmail ? <Text style={{ fontSize: 10, color: 'red' }} > Email cannot be empty </Text> : isEmail === false ? <Text style={{ fontSize: 10, color: 'red' }} >Please enter valid email</Text> : null

              }
            </View>

            <View style={{  flexDirection: 'row', borderBottomWidth: 1.75, borderBottomColor: '#d6994b',width: '90%'  }}>

            <View style={{ marginTop: 10, padding: 5 }}>
              <Icon name='lock-outline' size={20} color='black' />
            </View>
            <TextInput style={styles.textin}
              placeholder="Password"
              placeholderTextColor='black'
              onChangeText={(password) => setPassword(password)}
              maxLength={15}
              secureTextEntry={true}
              onBlur={(value) => {
                if (password.length == 0) {
                  setErrorPassword(true)
                }
              }}
            ></TextInput>
            </View>
            <View style={{ height: 12, alignItems: 'flex-end', justifyContent: 'center', width: '80%' }}>
              {
                errorPassword ? <Text style={{ fontSize: 10, color: 'red' }} > Please enter Password </Text> : null
              }

            </View>


            <View style={{ width: '80%', alignItems: 'flex-end' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("forgotPass")}
              >
                <Text style={{ color: '#1a1a1a', margin: 10, fontSize: 14, }}>Forgot Password? </Text>

              </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.btn}
              onPress={()=>userLogin()} >
              <View>
                <Text style={{ textAlign: 'center', fontSize: 16, padding: 10, color: 'white', fontWeight: 'bold' }}>Login</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.btmText}>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{ color: '#1a1a1a', textDecorationLine: 'none' }}>Don't have an account?  Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    </ImageBackground>

  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    top: 80
  },
  bgimg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: 'cover',
    width: '100%',
    height: '100%'

  },

  box: {
    padding: 5,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: 'white',
    width: 300,
    height: '100%',
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,

  },
  textin: {
    flex: 1,
    marginVertical: 6,
    padding: 6,
    
  
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
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
    backgroundColor: '#1a1a1a',
    height: 40,
    borderRadius: 20,
    marginTop: 25

  },
  btmText: {
    margin: 20,
    textTransform: 'blue'
  }
})
