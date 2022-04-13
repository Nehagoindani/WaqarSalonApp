import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { doc, where } from '@firebase/firestore';
import { useIsFocused } from '@react-navigation/native';
import Table from 'reactnative-ui-bootstrap'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default function MyBookings() {

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [cart, setCart] = useState([]);

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
        setCart(bookings);
      })

      .catch(function (error) {
        console.log("Error getting documents: ", error);

      });

  }
  return (
    <View style={{ flex: 1, padding: 20,  backgroundColor: '#fcf7f0' }}>
      
       <View style={{ flex: 0.1, paddingTop:20 }}>
        <Icon name='date-range' size={55} color='black'/>
        </View>

        <View style={{ flex: 0.1}}>
          <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>My Bookings</Text>
        </View>


      <View style={{ flex: 0.4 }}>
        <View style={{ flex: 0.2, justifyContent: 'center' }}>
          <Text style={{ color: '#d6994b', fontWeight:'bold', fontSize: 18 }}>Upcoming Bookings</Text>
        </View>
        <View style={{ flex: 0.8 }}>
          <ScrollView>
          {
            cart.map((item, index) => {
              return(
                <View key={index} style={styles.bkstyle}> 
                  <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold', padding:5}}> Date:  {item.date}</Text>
                  <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold', padding:5}}> Time Slot:  {item.timeSlot}</Text>
                  <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold', padding:5}}> Services:  </Text>
                  {item.services.map((item, index) => {
                    return <Text key={index}>  {item}</Text>
                  })}
                </View>
              )
            })
          }
          </ScrollView>
          
        </View>


      </View>


      <View style={{ flex: 0.4 }}>
        <View style={{ flex: 0.2 , justifyContent: 'center'}}>
        <Text style={{ color: '#d6994b', fontWeight:'bold', fontSize: 18 }}> Booking History </Text>

        </View>
        <View style={{ flex: 0.8 }}>

        </View>

      </View>


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
    backgroundColor:'#fcf7f0'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  },
  bkstyle:{
    borderWidth: 1,
    borderColor: '#d6994b',
    height:88, 
    flex: 1, 
    padding:10,
    borderRadius: 15, 
    backgroundColor:  'white', 
    marginVertical: 10, 
    justifyContent: 'space-evenly'

  }
});