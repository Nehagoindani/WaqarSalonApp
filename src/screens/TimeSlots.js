import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { color } from 'react-native-reanimated';
import { useSelector } from 'react-redux';



export default function TimeSlots({ navigation, route }) {

  const { services } = useSelector(state => state.service)

  const DATA = [

  ]
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [userInput, setUserInput] = useState('')

  const service = route.params.hairServices
  const price = route.params.price

  const Slot =
    ['Slot1 ', 'Slot2 ', 'Slot3 ', 'Slot4 ', 'Slot5 ']


  return (

    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 26 }}>
          APPOINTMENT BOOKING:
          {services}
        </Text>

      </View>

      <View style={styles.view3}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}>Date</Text>
        <Text style={{ color: '#d6994b', fontStyle: 'italic', fontSize: 16 }}>
          Select your desired date.
        </Text>
        <TouchableOpacity
          onPress={() => setOpen(true)}>
          <Text style={styles.textin}>{date.toString()}</Text>
        </TouchableOpacity>
        <DatePicker
          modal
          open={open}
          date={date}
          minuteInterval={15}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
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
              <TouchableOpacity onPress={() => console.log('12pm - 1pm')}>
                <Text>12pm - 1pm</Text>
              </TouchableOpacity>


            </View>
            <View style={{
              flex: 0.5, justifyContent: 'center', alignItems: 'center'
            }}>

            </View>

          </View>
          <View style={{ flex: 0.25, flexDirection: 'row', marginVertical: 2 }}>
            <View style={{
              flex: 0.5, justifyContent: 'center', alignItems: 'center'
            }}>
              <TouchableOpacity onPress={() => console.log('1pm - 2pm' + service)}>

                <Text>1pm - 2pm</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              flex: 0.5, justifyContent: 'center', alignItems: 'center'
            }}>

            </View>
          </View>
          <View style={{ flex: 0.25, flexDirection: 'row', marginVertical: 2 }}>
            <View style={{
              flex: 0.5, justifyContent: 'center', alignItems: 'center'
            }}>
              <TouchableOpacity onPress={() => console.log('2pm - 3pm')}>
                <Text>2pm - 3pm</Text>

              </TouchableOpacity>
            </View>
            <View style={{
              flex: 0.5, justifyContent: 'center', alignItems: 'center'
            }}>

            </View>

          </View>
          <View style={{ flex: 0.25, flexDirection: 'row', marginVertical: 2 }}>
            <View style={{
              flex: 0.5, justifyContent: 'center', alignItems: 'center'
            }}>
              <TouchableOpacity onPress={() => console.log('3pm - 4pm')}>

                <Text>3pm - 4pm</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              flex: 0.5, justifyContent: 'center', alignItems: 'center'
            }}>

            </View>

          </View>




        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}>Special Instructions</Text>
        <Text style={{ color: '#d6994b', fontStyle: 'italic', fontSize: 16 }}>
          Please enter any special instructions or staff requests here.
        </Text>
        <TextInput style={styles.textin}
          placeholder="Enter Instructions Here"
          onChangeText={(userInput) => setUserInput(userInput)} ></TextInput>
      </View>
      <View style={styles.view4}>
        <TouchableOpacity style={{ backgroundColor: '#d6994b', padding: 10, margin: 5, alignItems: 'center', borderWidth: 2, borderRadius: 20 }}
          onPress={
            () => {
              navigation.navigate('Booking Summury',
                {
                  serviceName: service,
                  price: price,
                  Date: date.toString(),
                  Instructions: userInput

                })
            }}
        >
          <Text style={{ color: 'black', fontSize: 20, borderWidth: 0 }}>Book Appointment</Text>
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
    flex: 0.7,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  view5: {
    flex: 1,
    padding: 10,
    //flexDirection: 'row'
  },
  view2: {
    flex: 0.1,
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
    padding: 10,
    width: '90%',
    fontSize: 14,
    color: 'black'
  },
})