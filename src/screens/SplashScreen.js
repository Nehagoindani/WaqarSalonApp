import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'
function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 4000);

  }, []);
  return (
    <View style={styles.MainContainer}>

      <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Image style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 220, height: 80 }}
            source={require('../Images/waqarlogo.png')}>
          </Image>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom:30 }}>
        <Text style={{ fontSize: 11, textAlign: 'center', color: 'white' }}>Copyright 2022  ©</Text>
        <Text style={{ fontSize: 10, textAlign: 'center', color: '#d6994b' }}>Neha Goindani and Hiba Zakir</Text>
      </View>

    </View >

  )
}
export default SplashScreen

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
  },

});

