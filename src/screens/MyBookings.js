import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { where } from '@firebase/firestore';

export default function MyBookings(){

  const dispatch = useDispatch();

  const [currentEmail, setCurrentEmail] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [uid, setUid] = useState('')

  useEffect(() => {
    getUser()
  }, [])


  const getUser = async () => {
    const authUser = auth().currentUser;

    const user = await firestore().collection('users').doc(authUser.uid).get();
    const  bb = user.id
    
    const dataa = await firestore().collection('bookings').doc(user.id).get()
    
    if (user) {
      console.log('User Data: ', user.id);
    
    }
    if(dataa){
      console.log('bookings', dataa.id)
     
    }

  }
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
         You don't have any notifications right now
        </Text>
       <Text> {currentName} </Text>
       <Text> {uid} </Text>
      

        
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