import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { color } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';
import { isDisabled } from 'react-native/Libraries/LogBox/Data/LogBoxData';


export default function TimeSlots({ navigation, route }) {

  const { services } = useSelector(state => state.service)

  const DATA = []
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  const [open, setOpen] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const [test, setTest] = useState([])
  const [buttonStatus, setButtonStatus] = useState(true);
 
  let firstSlot, secondSlot  , thirdSlot  , fourthSlot ;

  useEffect(() => {
    //getBooking()
  })

  const getBooking = async (date) => {
    let check = moment(date).format('DD-M-YYYY')
    console.log(check)
    firestore().collection("bookings").where("Date", "==", check)
      .get()
      .then(function (querySnapshot) {
        let bookings = []
        firstSlot = 0, secondSlot = 0, thirdSlot = 0, fourthSlot = 0
        querySnapshot.forEach(function (doc) {
          bookings.push(doc.data())
        });
        console.log(bookings)
        firstSlot = bookings.filter(booking => booking.TimeSlot == '12pm - 1pm').length;
        secondSlot = bookings.filter(booking => booking.TimeSlot == '1pm - 2pm').length;
        thirdSlot = bookings.filter(booking => booking.TimeSlot == '2pm - 3pm').length;
        fourthSlot = bookings.filter(booking => booking.TimeSlot == '3pm - 4pm').length;
        console.log(firstSlot)
        console.log(secondSlot)
        console.log(thirdSlot)
        console.log(fourthSlot)
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);

      });
  }
   const dis =()=>{
     if(firstSlot > 1){
       setButtonStatus(false)
     }

   }


  return (

    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 26 }}>
          {test}
        </Text>

      </View>

      <View style={styles.view3}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}>Date</Text>
        <Text style={{ color: '#d6994b', fontStyle: 'italic', fontSize: 16 }}>
          Select your desired date.
        </Text>
        <TouchableOpacity 
          onPress={() => setOpen(true)}>
          <Text style={styles.textin}>{moment(date).format('Do MMMM YYYY')}</Text>
        </TouchableOpacity>

        <DatePicker
          modal
          open={open}
          date={date}
          mode={"date"}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
            console.log(date)
            getBooking(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />

        <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}>Time</Text>
        <Text style={{ color: '#d6994b', fontStyle: 'italic', fontSize: 16 }}>
          Select your desired timeslot.
        </Text>

        <View style={styles.view5}>


          <View style={{ flex: 0.25, flexDirection: 'row', marginVertical: 2 }}>
            <View style={{
              flex: 0.5, justifyContent: 'center', alignItems: 'center'
            }}>
              {
                firstSlot < 4?
                  (
                    <TouchableOpacity onPress={() => setTime('12pm - 1pm')}  >

                      <Text style={{ color: time === '12pm - 1pm' ? '#d6994b' : 'black' }}>12pm - 1pm</Text>
                    </TouchableOpacity>
                  ) : 
                  (
                    <Text style={{ color : 'red' }}>12pm - 1pm</Text>
                  )
              }



            </View>

          </View>
          <View style={{ flex: 0.25, flexDirection: 'row', marginVertical: 2 }}>
            <View style={{
              flex: 0.5, justifyContent: 'center', alignItems: 'center'
            }}>
              <TouchableOpacity onPress={() => 
              setTime('1pm - 2pm')} disabled={dis}  >

                <Text style={{ color: time === '1pm - 2pm' ? '#d6994b' : 'black' }}>1pm - 2pm</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ flex: 0.25, flexDirection: 'row', marginVertical: 2 }}>
            <View style={{
              flex: 0.5, justifyContent: 'center', alignItems: 'center'
            }}>
              <TouchableOpacity onPress={() => {
                setTime('2pm - 3pm')
              }}
              >
                <Text style={{ color: time === '2pm - 3pm' ? '#d6994b' : 'black' }}>2pm - 3pm</Text>

              </TouchableOpacity>
            </View>


          </View>
          <View style={{ flex: 0.25, flexDirection: 'row', marginVertical: 2 }}>
            <View style={{
              flex: 0.5, justifyContent: 'center', alignItems: 'center'
            }}>
              <TouchableOpacity onPress={() => setTime('3pm - 4pm')} >

                <Text style={{ color: time === '3pm - 4pm' ? '#d6994b' : 'black' }}>3pm - 4pm</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}>Special Instructions</Text>
        <Text style={{ color: '#d6994b', fontStyle: 'italic', fontSize: 16 }}>
          Please enter any special instructions or staff  requests here.
        </Text>
        <TextInput style={styles.textin}
          placeholder="Enter Instructions Here"
          onChangeText={(userInput) => setUserInput(userInput)} ></TextInput>
      </View>
      <View style={styles.view4}>
        <TouchableOpacity style={{ backgroundColor: '#d6994b' }}
          onPress={
            () => {
              const check = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
              console.log(check + ' ' + time + ' ' + services)
              navigation.navigate('Booking Summury',
                {
                  serviceName: services,
                  Date: check,
                  Instructions: userInput,
                  Time: time

                })
            }}
        >
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', backgroundColor: '#d6994b' }}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}
const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: 'white',

  },
  view3: {
    flex: 0.78,
    paddingLeft: 25,
    paddingBottom: 10,
    justifyContent: 'space-evenly',
    marginBottom: 5

  },
  view5: {
    flex: 1,
    //flexDirection: 'row'
  },
  view2: {
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view4: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6994b'
  },
  textin: {
    borderWidth: 2,
    padding: 8,
    width: '88%',
    fontSize: 14,
    color: 'black'
  },
})