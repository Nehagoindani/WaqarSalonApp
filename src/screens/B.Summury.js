import React, { useEffect, useReducer, useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, Modal, Pressable } from 'react-native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import { serviceNull } from '../Redux/Actions/serviceAction';



export default function BSummury({ navigation, route }) {

  const dispatch = useDispatch();

  const Service = route.params.serviceName
  const price = route.params.price
  const date = route.params.Date
  const Ins = route.params.Instructions
  const Time = route.params.Time


  const [currentEmail, setCurrentEmail] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [uid, setUid] = useState('')


  //dispatch servies to null
  useEffect(() => {
    getUser()
  }, [])


  const getUser = async () => {
    const authUser = auth().currentUser;
    console.log(authUser.uid)

    const user = await firestore().collection('users').doc(authUser.uid).get();
    if (user) {
      console.log('User Data: ', user);
      setCurrentEmail(user._data.email)
      setCurrentName(user._data.name)
      setCurrentPhone(user._data.phone)
      setUid(authUser.uid)
    }
  }

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.view3}>

        <View style={{ flex: 0.3, }}>
          <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', marginBottom: 20, marginTop: 20 }}>Booking Summary</Text>
        </View>

        <View style={{ flex: 0.7, justifyContent: 'center' }}>

          <Text style={styles.textin}>User Name</Text>
          <Text style={styles.textinp}>{currentName}</Text>

          <Text style={styles.textin}>Appointment Date</Text>
          <Text style={styles.textinp}>{date}</Text>

          <Text style={styles.textin}>Time Slot</Text>
          <Text style={styles.textinp}>{Time}</Text>

          <Text style={styles.textin}>Services</Text>
          {
            Service.map((item, index) => (
              <Text key={index} style={styles.textinp}>{item.name}</Text>
            ))
          }
          <Text style={styles.textin}>Special Instructions</Text>
          <Text style={styles.textinp}>{Ins}</Text>

        </View>

      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}   >
          <View style={styles.centeredView2}>
            <View style={styles.modalView}>
              <Text style={{ TextAlign: 'center', fontWeight: 'bold', color: '#d6994b', marginBottom: 5, fontSize: 16, }}>Appointment Booked!</Text>
              <Text style={{ color: 'black', marginBottom: 15, textAlign: "center" }}>You will receive a confirmation message shortly.</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  {
                    firestore().collection('bookings')
                      .add({
                        uId: uid,
                        uName: currentName,
                        uEmail: currentEmail,
                        uPhone: currentPhone.substring(1),
                        services: Service,
                        date: date,
                        timeSlot: Time,
                        instruction: Ins,
                        status: 'Pending',
                        arrived: false

                      })
                      .then(function () {
                        console.log("Document successfully written!");
                        dispatch(serviceNull());
                        navigation.navigate("MyTabs");
                      })
                      .catch(function (error) {
                        console.error("Error writing document: ", error);
                      });
                  }
                  setModalVisible(!modalVisible)
                }}
              >
                <Text style={styles.textStyle}>Okay</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.button}>Confirm Booking</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf7f0',
    justifyContent: 'center'
  },
  view3: {
    padding: 20,
    flex: 0.7,
  },
  textin: {
    color: '#d6994b',
    fontSize: 15,
    marginBottom: 15
  },
  textinp: {
    color: '#000',
    fontSize: 17.5,
    marginBottom: 15,
    borderWidth: 1.75,
    borderColor: '#fcf7f0',
    borderBottomColor: '#d6994b',
    width: '80%',

  },
  btn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    color: 'black',
    fontWeight: 'bold',
    shadowOpacity: 0.4,
    shadowRadius: 4.7,
    elevation: 8,
    textAlign: 'center',
    width: '50%',
    backgroundColor: '#1a1a1a',
    height: 40,
    borderRadius: 20,
    marginTop: 20
  },
  button: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 0.3,
    justifyContent: "center",
    padding: 20
  },
  centeredView2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    color: '#d6994b',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 36,
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

  buttonOpen: {
    backgroundColor: "#ffff",
    padding: 15,
    color: 'white',
    width: '50%',
    backgroundColor: '#1a1a1a',
    borderRadius: 25,
    elevation: 8,
  },
  buttonClose: {
    borderColor: "#d6994b",
    color: 'white',
    borderWidth: 1.75,
    padding: 5,
    borderRadius: 6
  },
  textStyle: {
    color: "#d6994b",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  sumText: {
    fontSize: 15,
    color: 'black',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#d6994b',
    width: '80%',
    fontSize: 17
  }
});



