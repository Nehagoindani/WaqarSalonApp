import React, { useState } from 'react';
import { View, Button, ScrollView, Image, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native'
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function AdminLoginScreen({ navigation }) {

    var [firstname, setfirstName] = useState('')
    var [password, setPassword] = useState('')
  
    function Submit(){
      if(firstname=="admin"){
        if(password=="admin123"){
          navigation.navigate('AdminHome')
        }
        else{
         alert("incorrect username/password")
  
        }
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

            <Text style={styles.text}>Admin Login</Text>


            <TextInput style={styles.textin}
              placeholder="Username"
              placeholderTextColor='black'
              onChangeText={(firstname) => setfirstName(firstname)} ></TextInput>
             
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
              onPress={()=>Submit()}
            >
              <View>
                <Text style={{ textAlign: 'center', fontSize: 16, padding: 10, color: 'white', fontWeight: 'bold' }}>Login</Text>

              </View>
            </TouchableOpacity>

           

          </View>

        </ScrollView>
      </View>
    </ImageBackground>

  );
}

export default AdminLoginScreen;

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
    height: 500,
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
