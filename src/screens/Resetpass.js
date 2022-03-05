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

function ResetScreen({ navigation }) {
  var [firstname, setFirstName] = useState('');
  

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={{ flex: 0.9 }}>
          <Text style={styles.text}>Reset Password </Text>
        </View>
        <View style={styles.box}>

        <View style={{ flex:0.3, margin:20,alignSelf:'center'}}>
        <Image style={{width:150,height:100,margin:10}}
         source={require("../Images/forgot.png")} ></Image>
        </View>

          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.textin}
              placeholder="Email address"
              placeholderTextColor="black"
              keyboardType='email-address'
              onChangeText={(val) => setFirstName(val)}></TextInput>
          </View>

          <View style={{marginTop:30}}>
            <TouchableOpacity style={{ color: 'orange' }}>
              <View
                style={{
                  marginTop:20,
                  width:200,
                  borderRadius:20,
                 alignSelf:'center'
                 
                }}>
                <Button
                title='Reset'
                color='black'
                ></Button>
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
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
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
    paddingLeft:5,
    width: 250,
    borderBottomColor: '#d6994b',
    borderBottomWidth: 3,
  },
});
