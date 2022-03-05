import React, { useState } from 'react';
import { View, Button, ScrollView, Image, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native'
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const userLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('user logged in successfully');
        navigation.navigate('MyTabs')

      })
    if (email == '' || password == '') {
      console.log('please enter email/password');
      alert('please enter email/password')
    }
    else if(email=='auth/invalid-email'){
      alert('please enter valid email')
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


            <TextInput style={styles.textin}
              placeholder="Email"
              placeholderTextColor='black'
              onChangeText={(email) => setEmail(email)} ></TextInput>
             
            <TextInput style={styles.textin}
              placeholder="Password"
              placeholderTextColor='black'
              onChangeText={(password) => setPassword(password)}
              maxLength={15}
              secureTextEntry={true}
            ></TextInput>

            <View style={{ width: '80%', alignItems: 'flex-end' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Reset")}
              >
                <Text style={{ color: '#1a1a1a', margin: 10, fontSize: 14, }}>Forgot Password ?

                </Text>

              </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.btn}
              onPress={() => {
                if (email && password) {
                  userLogin();
                }
                else if(email==null){
                  alert('please enter mail')
                }
                else if(password==null){
                  alert('please enter password')
                }
                else {
                  alert('fields can not be empty')
                }
              }}
            >
              <View>
                <Text style={{ textAlign: 'center', fontSize: 16, padding: 10, color: 'white', fontWeight: 'bold' }}>Login</Text>

              </View>
            </TouchableOpacity>

            <View style={styles.btmText}>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{ color: '#1a1a1a', textDecorationLine: 'underline' }}>Don't have an account?  Sign Up</Text>
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
    backgroundColor: 'white',
    width: 300,
    height: '100%',
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4   },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,

  },
  textin: {
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
