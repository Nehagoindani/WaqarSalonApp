import React, { useEffect, useReducer, useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, Modal, Pressable } from 'react-native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function BSummury({ navigation, route }) {

  const [currentEmail, setCurrentEmail] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');

  useEffect(() => {
    getUser()
  }, [])


  const getUser = async () => {
    const authUser = await auth().currentUser;

    const user = await firestore().collection('users').doc(authUser.uid).get();
    if (user) {
      console.log('User Data: ', user, user._data);
      setCurrentEmail(user._data.email)
      setCurrentName(user._data.name)
      setCurrentPhone(user._data.phone)


    }

  }
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text>welcome</Text>
      <Text style={styles.textStyle}>
        Name:   {currentName}
      </Text>
      <Text style={styles.textStyle}>
        Email:  {currentEmail}
      </Text>
      <Text style={styles.textStyle}>
        Phone:  {currentPhone}
      </Text>
      <Text style={styles.sumText}>Your Service: {route.params.serviceName} </Text>
      <Text style={styles.sumText}>Service Price: {route.params.price} </Text>

      <Text style={styles.sumText}> you have selected your appointment on Date: {route.params.Date}</Text>
      <Text style={styles.sumText}> Special Instructions: {route.params.Instructions}</Text>

     

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>your appointment is booked you will get confirmation email shortly</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Ok</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Confirm Booking</Text>
        </Pressable>
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
    backgroundColor: 'black'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
    color: 'white'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#d6994b",
    padding: 15,
    width: 250
  },
  buttonClose: {
    backgroundColor: "#d6994b",

  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  sumText: {
    fontSize: 15, color: 'white',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'white',
    width: '80%',
    fontSize: 17

  }
});



