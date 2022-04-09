import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { where } from '@firebase/firestore';
import { useIsFocused } from '@react-navigation/native';

export default function MyBookings(){

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [currentEmail, setCurrentEmail] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [uid, setUid] = useState('')

  useEffect(() => {
    getUser()
  }, [isFocused])


  const getUser = async () => {
    const authUser = auth().currentUser;

    const user = await firestore().collection('users').doc(authUser.uid).get();
    
    await firestore().collection("bookings").where("uId", "==", authUser.uid)
      .get()
      .then(function (querySnapshot) {
        let bookings = []
        querySnapshot.forEach(function (doc) {
          bookings.push(doc.data())
        });
        console.log(bookings)
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);

      });

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