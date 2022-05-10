import React, { useState } from 'react';
import {
  View,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth'

function ResetScreen({ navigation }) {
  const [email, setEmail] = useState('')

const forgotPassword=()=>{ 
    auth().sendPasswordResetEmail(email)
      .then(() => {
        alert("reset email sent to "+email);
        console.log("reset email sent to ",email);
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={{ flex: 0.9 }}>
          <Text style={styles.text}>Reset Password </Text>
        </View>
        <View style={styles.box}>

          <View style={{ flex: 0.3, margin: 20, alignSelf: 'center' }}>
            <Image style={{ width: 150, height: 100, margin: 10 }}
              source={require("../Images/forgot.png")} ></Image>
          </View>

          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.textin}
              placeholder="Email address"
              placeholderTextColor="black"
              keyboardType='email-address'
              value={email}
              onChangeText={(email) => setEmail(email)}></TextInput>
          </View>

          <View style={{ marginTop: 30 }}>
            <TouchableOpacity style={styles.btn}
              onPress={() =>{forgotPassword()} } >
              <View>
                <Text style={{ textAlign: 'center', fontSize: 16, padding: 10, color: 'black', fontWeight: 'bold' }}>Reset</Text>
              </View>
              <View style={{ width: '80%', alignItems: 'flex-end', margin:12 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={{ color: '#1a1a1a', margin: 10, fontSize: 14, }}>Back to SignIn?

                </Text>

              </TouchableOpacity>

            </View>
            </TouchableOpacity>
          </View>


        </View>
      </View>
    </ScrollView>
  );
}
export default ResetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    backgroundColor: 'black',
  },
  text: {

    padding: 10,
    marginTop: 60,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'sans-serif',
  },
  box: {
    flex: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 50,
    backgroundColor: 'white',
    width: '80%',
    height: 400,
  },
  textin: {

    marginBottom: 10,
    marginTop: 20,
    margin: 5,
    padding: 10,
    paddingLeft: 5,
    width: 250,
    borderBottomColor: '#d6994b',
    borderBottomWidth: 3,
  },
});
