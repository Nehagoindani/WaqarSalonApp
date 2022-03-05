import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

/* SCREENS */
import Signup from './src/screens/Signup';
import MainPage from './src/screens/Main';
import LoginScreen from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import Products from './src/screens/Products';
import Notifications from './src/screens/Notifications';
import NailService from './src/screens/NailService';
import HairService from './src/screens/HairService';
import MakeupService from './src/screens/MakeupService';
import TimeSlots from './src/screens/TimeSlots';
import HomeScreen from './src/screens/HomeScreen';
import UserDetailScreen from './src/screens/Dashboard';
import BSummury from './src/screens/B.Summury';
import SpaService from './src/screens/SpaService';
import BridalService from './src/screens/BridalService';
import CourseService from './src/screens/Courses';
import AdminLoginScreen from './src/screens/AdminLogin';
import AdminScreen from './src/screens/AdminScreen';

function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 5000);

  }, []);
  return (
    <View style={styles.MainContainer}>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Image style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: 200, height: 70 }}
            source={require('./src/Images/waqarlogo.png')}>
          </Image>
        </TouchableOpacity>

      </View>


    </View>

  )
}

const Top = createMaterialTopTabNavigator();


function TopTabs() {
  return (


    <Top.Navigator
      initialRouteName="Hair"
      swipeEnabled={true}
      screenOptions={{
        tabBarActiveTintColor: '#d6994b',
        tabBarScrollEnabled:true,
        tabBarLabelStyle: { fontSize: 15, },
        tabBarItemStyle: { width: 90 },
        tabBarStyle: { backgroundColor: '#1a1a1a' },
      }}
    >
      <Top.Screen name="Hair" options={{ backgroundColor: '#1a1a1a' }} component={HairService} />
      <Top.Screen name="Nails" options={{ backgroundColor: '#1a1a1a' }} component={NailService} />
      <Top.Screen name="Makeup" options={{ backgroundColor: '#1a1a1a' }} component={MakeupService} />
      <Top.Screen name="Spa" options={{ backgroundColor: '#1a1a1a' }} component={SpaService} />
      <Top.Screen name="Bridal" options={{ backgroundColor: '#1a1a1a' }} component={BridalService} />
      <Top.Screen name="Course" options={{ backgroundColor: '#1a1a1a' }} component={CourseService} />
    </Top.Navigator>


  );
}



const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#d6994b"
      inactiveColor="white"
      barStyle={{ backgroundColor: '#1a1a1a' }}
    >
      <Tab.Screen name="Home" component={MainPage} options={{

        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Products" component={Products} options={{
        tabBarLabel: 'Products',
        tabBarIcon: ({ color }) => (
          <Icon name="shopping-bag" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="notification" component={Notifications} options={{
        tabBarLabel: 'Notification',
        tabBarIcon: ({ color }) => (
          <Icon name="notifications" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Profile" component={UserDetailScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon name="account-circle" color={color} size={26} />
        ),
      }} />

    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen name='Splash' options={{ headerShown: false }} component={SplashScreen} />
        <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name='SignUp' options={{ headerShown: false }} component={Signup} />
        <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name='AdminLogin' options={{ headerShown: false }} component={AdminLoginScreen} />
  <Stack.Screen name='AdminHome' options={{ headerShown: false }} component={AdminScreen} />*/}
        <Stack.Screen name='TopTab' options={{ headerShown: false }} component={TopTabs} />
        <Stack.Screen name='MyTabs' options={{ headerShown: false }} component={MyTabs} />
        <Stack.Screen name='TimeSlot' ScreenOptions={{ backgroundColor: '#1a1a1a' }} component={TimeSlots} />
        <Stack.Screen name='Booking Summury' options={{ backgroundColor: '#1a1a1a' }} component={BSummury} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}


export default App;


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#292828',

    padding: 8,
  },
  maintext: {

    textShadowOffset: { width: -2, height: 4 },
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 10,
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txt: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20
  },
  HmScrnBtn: {
    margin: 10
  }



});
