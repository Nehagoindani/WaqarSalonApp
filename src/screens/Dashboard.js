import React, { useEffect, useReducer, useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/Actions/serviceAction';
import Icon from 'react-native-vector-icons/MaterialIcons';


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
    <View style={styles.view1}>

      <View style={styles.view3}>

      <View style={{ flex: 0.2 }}>
        <Icon name='account-box' size={55} color='black'/>
        </View>

        <View style={{ flex: 0.2 }}>
          <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>My Profile</Text>
        </View>

        <View>
          <Text style={styles.textin}>Name:</Text>
          <Text style={styles.textStyle}>
           {currentName}
          </Text>
        </View>
        <View>
          <Text style={styles.textin}>Email:</Text>
          <Text style={styles.textStyle}>
          {currentEmail}
          </Text>
        </View>
        <View>
          <Text style={styles.textin}>Phone:</Text>
          <Text style={styles.textStyle}>
          {currentPhone}
          </Text>
        </View>
        <View> 
        <TouchableOpacity style={styles.btn}
          onPress={signOut} >
          <View>
            <Text style={{ textAlign: 'center', fontSize: 16, padding: 8, color: 'white', fontWeight: 'bold' }}>Logout</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: '#fcf7f0',
    padding:8,
  },
  view3: {
    flex: 0.78,
    justifyContent: 'space-evenly',
    padding: 20
  },
  view2: {
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    borderWidth: 1.75,
    borderColor: '#fcf7f0',
    borderBottomColor: '#d6994b',
    marginVertical: 5,
    width: '90%',
    color: 'black',
    fontSize:18,
  },
  textin: {
    color: '#d6994b', 
    fontSize:15
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

