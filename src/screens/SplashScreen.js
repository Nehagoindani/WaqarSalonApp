import React,{useEffect} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native'
function SplashScreen({navigation}){
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Login')
      }, 10000);
  
    }, []);
    return (
      <View style={styles.MainContainer}>
  
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Image style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 200, height: 70 }}
              source={require('../Images/icon.png')}>
            </Image>
            <Text style={{fontSize:30}}>Waqar Salon</Text>
          </TouchableOpacity>
  
        </View>
  
  
      </View>
  
    )
  }
  export default SplashScreen

  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#292828',
  
      padding: 8,
    },
    
  
  
  });
  
  