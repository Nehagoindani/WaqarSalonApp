
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Products(){
    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
         There are no products at the moment.
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
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});