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

  const forgotPassword = () => {
    auth().sendPasswordResetEmail(email)
      .then(() => {
        alert("reset email sent to " + email);
        console.log("reset email sent to ", email);
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (

    <View style={styles.container}>
      <View style={{ flex: 0.2, justifyContent: 'center' }}>
        <Text style={styles.text}>Reset Password</Text>
      </View>

      <View style={{ flex: 0.8 }}>
        <View style={{ marginTop: 20 }}>
          <TextInput
            style={styles.textinp}
            placeholder="Enter your Email Address"
            placeholderTextColor="#1a1a1a"
            keyboardType='email-address'
            value={email}
            onChangeText={(email) => setEmail(email)}></TextInput>
        </View>

        <View>
          <TouchableOpacity style={styles.btn}
            onPress={() => { forgotPassword() }} >
            <Text style={{ textAlign: 'center', fontSize: 16, padding: 10, color: 'white', fontWeight: 'bold' }}>Reset</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '80%', alignItems: 'flex-end', margin:50, marginTop: 30 }}>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")} >
            <Text style={styles.textin}> Back to Login?</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
export default ResetScreen;

const styles = StyleSheet.create({

  text: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  container: {
    flex: 1,
    backgroundColor: '#fcf7f0',
    justifyContent: 'center',
    padding: 20
  },

  textin: {
    color: '#d6994b',
    fontSize: 16,
    marginTop: 20
  },
  textinp: {
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1.75,
    borderColor: '#fcf7f0',
    borderBottomColor: '#d6994b',
    width: '96%',

  },
  btn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    color: 'black',
    fontWeight: 'bold',
    shadowOpacity: 0.4,
    shadowRadius: 4.7,
    elevation: 8,
    textAlign: 'center',
    width: '50%',
    backgroundColor: '#1a1a1a',
    height: 40,
    borderRadius: 20,
    marginTop: 40
  },

});