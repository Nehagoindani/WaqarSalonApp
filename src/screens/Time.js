import React, { Component, useState } from 'react'
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, Image, SectionList, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';

export default class TimeSlots extends Component {
  constructor(props) {
    super(props)
    this.state = { date: "2022-02-03" }
  }

  render() {
    return (
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25 }}>
            {'APPOINTMENT BOOKING'}
          </Text>
          <Text style={{ fontSize: 3 }}> </Text>
          <Text style={{ color: '#d6994b', fontStyle: 'italic', fontSize: 15 }}>
            Choose your desired date and time
          </Text>
          <Text style={{ fontSize: 15, color: 'black' }}>{this.props.route.params.serviceName}</Text>
        </View>
        <View style={styles.view4}>
          <Text style={{ color: '#d6994b', fontWeight: 'bold', fontSize: 18 }}>DATE</Text>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2022-01-01"
            maxDate="2023-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}
          />
        </View>
        <View style={styles.view3}>
          <Text style={{ color: '#d6994b', fontWeight: 'bold', fontSize: 18 }}>TIME SLOTS</Text>
          <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>

            <View style={{ flex: 0.1, borderColor: '#d6994b', borderWidth: 2, padding: 5 }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 300, }}>
                <Text style={{ color: 'black', fontStyle: 'bold', fontSize: 22 }}> 12PM - 1PM </Text>
                <TouchableOpacity style={{ flexDirection: 'row', marginRight: 15, color: 'red' }}


                >
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flex: 0.1, borderColor: '#d6994b', borderWidth: 2, padding: 5 }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 300 }}>
                <Text style={{ color: 'black', fontStyle: 'bold', fontSize: 22 }}> 1PM - 2PM   </Text>
                <TouchableOpacity style={{ flexDirection: 'row', marginRight: 15 }}
                  onPress={() => alert('Your time slot is booked')}>
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flex: 0.1, borderColor: '#d6994b', borderWidth: 2, padding: 5 }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 300 }}>
                <Text style={{ color: 'black', fontStyle: 'bold', fontSize: 22 }}> 2PM - 3PM   </Text>
                <TouchableOpacity style={{ flexDirection: 'row', marginRight: 15 }}
                  onPress={() => alert('Your time slot is booked')}>
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ flex: 0.1, borderColor: '#d6994b', borderWidth: 2, padding: 5 }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 300 }}>
                <Text style={{ color: 'black', fontStyle: 'bold', fontSize: 22 }}> 3PM - 4PM   </Text>
                <TouchableOpacity style={{ flexDirection: 'row', marginRight: 15 }}
                  onPress={() => alert('Your time slot is booked'),
                    this.props.navigation.navigate('Booking Summury',
                      {

                        Date: this.state.date

                      })} >

                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                  <Icon name='square' size={30} color='darkgreen' />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: 'white',
  },
  view3: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5,
  },
  view4: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img1: {
    height: 220,
    width: '100%',
  }
})