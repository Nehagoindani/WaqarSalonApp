
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { color } from 'react-native-reanimated';

export default function AdminScreen(){
    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
        Welcome To Admin Dashboard
        </Text>

        
      </View>
    );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: 'black'
  },
  textStyle: {
    fontSize: 30,
    marginBottom: 20,
    color:'#d6994b'
  }
});