import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { color } from 'react-native-reanimated';



export default function TimeSlots({ navigation }) {

const DATA=[
  
]
 

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [userInput, setUserInput] = useState('')

 // const service = route.params.serviceName
 // const price = route.params.price

  return (
    <ScrollView>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 26 }}>
            APPOINTMENT BOOKING
          </Text>
          <Text style={{ color: 'brown' }}> The Services you have selected are:  </Text>
          <Text>Price: </Text>
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
          {/*}      <View style={{ flex: 0.1, borderColor: '#d6994b', borderWidth: 2, padding: 5 }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 300, }}>
                <Text style={{ color: 'black', fontStyle: 'bold', fontSize: 22 }}> 12PM - 1PM </Text>
                <TouchableOpacity style={{ flexDirection: 'row', marginRight: 15, color: 'red' }} >
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                </TouchableOpacity>
              </View>
        </View> */}
          <View style={[styles.view5] , {flexDirection:'row'}}>
            <View style={{ flex: 0.3, backgroundColor: 'skyblue' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}> Time </Text>
              <View style={{margin:2}}>
                <Text>12pm to 1pm</Text>
              </View>
              <View style={{margin:2}}>
                <Text>1pm to 2pm</Text>
              </View>
              <View style={{margin:2}}>
                <Text>2pm to 3pm</Text>
              </View>
              <View style={{margin:2}}>
                <Text>3pm to 4pm</Text>
              </View>
              {/*}  <View style={{flex:0.2}}>
              <Text style={{ color: 'black', fontSize:12 }}> 12PM - 1PM </Text>
              </View>*/}

            </View>
            
            <View style={{ flex: 0.7, backgroundColor: 'lightpink', color: 'black' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}> Slots </Text>
              <View style={{margin:2,flexDirection:'row'}}>
                <TouchableOpacity >
                <Text style={{fontSize:15, margin:2}}>slot 1</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                <Text style={{fontSize:15, margin:2}}>slot 2</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                <Text style={{fontSize:15, margin:2}}>slot 3</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                <Text style={{fontSize:15, margin:2}}>slot 4</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                <Text style={{fontSize:15, margin:2}}>slot 5</Text>
                </TouchableOpacity> 
              </View>
              {/*}  <View>
          <TouchableOpacity style={{ flexDirection: 'row', marginRight: 15, color: 'red' }} >
                  <Icon name='square' size={30} color='darkgreen' /> </TouchableOpacity>
            </View>*/}
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
    </ScrollView>
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
  },
  view2: {
    flex: 0.2,
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