import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useSelector } from 'react-redux';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';




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
  const [buttonStatus, setButtonStatus] = useState();
  const [firstSlot, setFirstslot] = useState(0)
  const [secondSlot, setSecondslot] = useState(0)
  const [thirdSlot, setThirdslot] = useState(0)
  const [fourthSlot, setFourthslot] = useState(0)
  const [isLoading, setIsloading] = useState(false)


  const getBooking = async (date) => {
    //  setIsloading(true)
    let check = moment(date).format('DD-M-YYYY')
    console.log(check)
    await firestore().collection("bookings").where("date", "==", check)
      .get()
      .then(function (querySnapshot) {
        let bookings = []
        let fs = 0, ss = 0, ts = 0, ffs = 0
        querySnapshot.forEach(function (doc) {
          bookings.push(doc.data())
        });
        console.log(bookings)

        fs = bookings.filter(booking => booking.timeSlot == '12pm - 1pm').length;
        setFirstslot(fs)
        ss = bookings.filter(booking => booking.timeSlot == '1pm - 2pm').length;
        setSecondslot(ss);
        ts = bookings.filter(booking => booking.timeSlot == '2pm - 3pm').length;
        setThirdslot(ts)
        ffs = bookings.filter(booking => booking.timeSlot == '3pm - 4pm').length;
        setFourthslot(ffs)
        setIsloading(false)
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
  return (

    <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 26 }}>
            Appointment Booking
          </Text>
        </View>

        <View style={styles.view3}>

          <View style={{ flex: 0.25 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'black', paddingTop: 3, }}>Date</Text>
            <Text style={{ color: '#d6994b', fontStyle: 'italic', fontSize: 13, paddingTop: 5, paddingBottom: 5 }}>
              Select your desired date. </Text>
            <TouchableOpacity style={{ height: 60 }}
              onPress={() => setOpen(true)}>
              <Text style={styles.textin}>{moment(date).format('Do MMMM YYYY')}</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              date={date}
              mode={"date"}
              onConfirm={(datee) => {
                setOpen(false)
                setDate(datee)
                getBooking(datee)
              }}
              onCancel={() => {
                setOpen(false)
              }} />
          </View>
          <View style={{ flex: 0.13 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'black', paddingTop: 5, }}>Time</Text>
            <Text style={{ color: '#d6994b', fontStyle: 'italic', fontSize: 13, paddingTop: 5, paddingBottom: 5 }}>
              Select your desired timeslot.</Text>
          </View>
          {
            isLoading ? (<View> <ActivityIndicator /> </View>) :
              (
                <View style={styles.view5}>
                  <View style={{ flex: 0.25, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fcf7f0', width: '88%', borderColor: '#a6a5a4', borderWidth: 1, borderBottomWidth: 0, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>
                    {
                      firstSlot < 2 ?
                        (
                          <TouchableOpacity onPress={() => setTime('12pm - 1pm')}  >
                            <Text style={{ color: time === '12pm - 1pm' ? '#d6994b' : 'black', fontSize: 15, paddingLeft: 20 }}>12pm - 1pm</Text>
                          </TouchableOpacity>
                        ) :
                        (
                          <Text style={{ color: 'red' }}>12pm - 1pm</Text>
                        )
                    }
                  </View>

                  <View style={{ flex: 0.25, flexDirection: 'row', alignItems: 'center', backgroundColor: '#faf0e1', width: '88%', borderColor: '#a6a5a4', borderWidth: 1, borderBottomWidth: 0, borderBottomWidth: 0, }}>
                    {
                      secondSlot < 2 ?
                        (
                          <TouchableOpacity onPress={() => setTime('1pm - 2pm')}  >
                            <Text style={{ color: time === '1pm - 2pm' ? '#d6994b' : 'black', fontSize: 15, paddingLeft: 20 }}>1pm - 2pm</Text>
                          </TouchableOpacity>
                        ) :
                        (
                          <Text style={{ color: 'red' }}>1pm - 2pm</Text>
                        )
                    }
                  </View>
                  <View style={{ flex: 0.25, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fcf7f0', width: '88%', borderColor: '#a6a5a4', borderWidth: 1, borderBottomWidth: 0, }}>
                    {
                      thirdSlot < 2 ?
                        (
                          <TouchableOpacity onPress={() => setTime('2pm - 3pm')}  >
                            <Text style={{ color: time === '2pm - 3pm' ? '#d6994b' : 'black', fontSize: 15, paddingLeft: 20 }}>2pm - 3pm</Text>
                          </TouchableOpacity>
                        ) :
                        (
                          <Text style={{ color: 'red' }}>2pm - 3pm</Text>
                        )
                    }
                  </View>
                  <View style={{ flex: 0.25, flexDirection: 'row', alignItems: 'center', backgroundColor: '#faf0e1', width: '88%', borderColor: '#a6a5a4', borderWidth: 1, borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
                    {
                      fourthSlot < 2 ?
                        (
                          <TouchableOpacity onPress={() => setTime('3pm - 4pm')}  >
                            <Text style={{ color: time === '3pm - 4pm' ? '#d6994b' : 'black', fontSize: 15, paddingLeft: 20 }}>3pm - 4pm</Text>
                          </TouchableOpacity>
                        ) :
                        (
                          <Text style={{ color: 'red' }}>3pm - 4pm</Text>
                        )
                    }
                  </View>
                </View>
              )
          }
          <View style={{ flex: 0.3 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'black' }}>Special Instructions</Text>
            <Text style={{ color: '#d6994b', fontStyle: 'italic', fontSize: 13, paddingTop: 5, paddingBottom: 5 }}>
              Please enter any instructions or staff requests here.</Text>
            <TextInput style={styles.textin} placeholder="Enter Instructions Here"
              onChangeText={(userInput) => setUserInput(userInput)} ></TextInput>
          </View>

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
            <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', backgroundColor: '#d6994b' }}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
    </View>
  )

}
const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: '#fcf7f0' //'#fcf7f0' #f5f2ed  '#fff7eb'  '#faedd9

  },
  view3: {
    flex: 1,
    paddingLeft: 25,
    justifyContent: 'space-around',
  },
  view5: {
    flex: 0.5,
    marginBottom: 20,
    fontSize: 13
  },
  view2: {
    flex: 0.15,
    justifyContent: 'center',
    marginLeft: 25,
  },
  view4: {
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6994b',
  },
  textin: {
    borderWidth: 0.75,
    padding: 8,
    width: '88%',
    fontSize: 14,
    color: 'black',
    borderColor: '#a6a5a4', borderRadius: 4
  },
})