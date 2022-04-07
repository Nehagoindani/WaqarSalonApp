import React, { useEffect, useReducer, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/Actions/serviceAction';


export default function Dashboard({ navigation }) {

  const dispatch = useDispatch();

  const [currentEmail, setCurrentEmail] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');

  useEffect(() => {
    getUser()
  }, [])


  const getUser = async () => {
    const authUser = auth().currentUser;

    const user = await firestore().collection('users').doc(authUser.uid).get();
    if (user) {
      console.log('User Data: ', user, user._data);
      setCurrentEmail(user._data.email)
      setCurrentName(user._data.name)
      setCurrentPhone(user._data.phone)


    }

  }

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!')
        dispatch(logout())
      })

  }


  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2, margin: 10 }}>
        <Text style={{ fontSize: 30, color: '#d6994b', padding: 10, fontWeight: 'bold' }}>My Profile</Text></View>

      <Text style={styles.textStyle}>
        Name:   {currentName}
      </Text>
      <Text style={styles.textStyle}>
        Email:  {currentEmail}
      </Text>
      <Text style={styles.textStyle}>
        Phone:  {currentPhone}
      </Text>

      <Button
        color="#d6994b"
        title="Logout"
        onPress={signOut}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    borderWidth: 2,
    borderColor: '#d6994b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: 'black'

  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
    color: 'white'
  }
});




/*import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
class UserDetailScreen extends Component {

  constructor() {
    super();
    this.state = {
      Name: '',
      email: '',
      phone: '',
      isLoading: true
    };
  }
 
  componentDidMount() {
    const dbRef = firestore().collection('users').doc(this.props.route.params.userkey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          Name: user.Name,
          email: user.email,
          phone: user.phone,
          isLoading: false
        });
      } else {
        console.log("Document does not exist!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  updateUser() {
    this.setState({
      isLoading: true,
    });
    const updateDBRef = auth.firestore().collection('users').doc(this.state.key);
    updateDBRef.set({
      Name: this.state.Name,
      email: this.state.email,
      phone: this.state.phone,
    }).then((docRef) => {
      this.setState({
        key: '',
        Name: '',
        email: '',
        phone: '',
        isLoading: false,
      });
      this.props.navigation.navigate('UserScreen');
    })
    .catch((error) => {
      console.error("Error: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }

  deleteUser() {
    const dbRef = auth.firestore().collection('users').doc(this.props.route.params.userkey)
      dbRef.delete().then((res) => {
          console.log('Item removed from database')
          this.props.navigation.navigate('UserScreen');
      })
  }

  openTwoButtonAlert=()=>{
    Alert.alert(
      'Delete User',
      'Are you sure?',
      [
        {text: 'Yes', onPress: () => this.deleteUser()},
        {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Name'}
              value={this.state.Name}
              onChangeText={(val) => this.inputValueUpdate(val, 'Name')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Email'}
              value={this.state.email}
              onChangeText={(val) => this.inputValueUpdate(val, 'email')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'phone'}
              value={this.state.phone}
              onChangeText={(val) => this.inputValueUpdate(val, 'phone')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Update'
            onPress={() => this.updateUser()} 
            color="#19AC52"
          />
          </View>
         <View>
          <Button
            title='Delete'
            onPress={this.openTwoButtonAlert}
            color="#E37399"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 7, 
  }
})

export default UserDetailScreen;*/

