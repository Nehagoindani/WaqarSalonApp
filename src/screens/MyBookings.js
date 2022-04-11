import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { where } from '@firebase/firestore';
import { useIsFocused } from '@react-navigation/native';
import Table from 'reactnative-ui-bootstrap'

export default function MyBookings(){

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [info, setInfo] = useState([])

 
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
          var data = {
            id: doc.id,
            data: doc.data()
        }

        setInfo(arr => [...arr, data]);

        });
        console.log(bookings)
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);

      });

  }
    return (
      <div>
            <div>
                <h1 style={{color: '#d6994b', textAlign:'center', backgroundColor:'black', padding:10 }}>Bookings</h1>
            </div>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr style={{textAlign: 'center'}} >
                        <th>Name</th>
                        <th>Service</th>
                        <th>TimeSlot</th>
                        <th>Date</th>
                        <th>Actions</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        info.map((data) => (
                            <tr style={{ fontsize: 5 }}>
                                <td style={{ color: '#d6994b', fontsize: 3 }}  >
                                    {data.data.uName}
                                </td>
                                <td className='td' >
                                    {data.data.services}
                                </td>
                                <td style={{ color: '#d6994b', fontsize: 3 }} >
                                    {data.data.timeSlot}
                                </td>
                                <td style={{ color: '#d6994b', fontsize: 3 }} >
                                    {data.data.date}
                                </td>
                                
                               
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
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