import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';



function MainPage({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'ivory', paddingLeft: 10, paddingRight: 10, paddingTop:5 }}>

      <View style={{ flex: 0.1 }}>
        <Image style={styles.imgStyling2} source={require("../Images/3waq.png")}></Image>
      </View>

      <View style={{ flex: 0.25, paddingHorizontal: 10, marginBottom:15}}>
        <Image style={styles.imgStyling} source={require("../Images/courses.jpeg")} resizeMode='cover' ></Image>
      </View>

      <View style={{ flex: 0.25 }}>
        <View style={{ flex: 0.2 }}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}> Top Categories</Text>
        </View>

        <View style={{ flex: 0.8 }}>
          <View style={styles.categryView}>
            <TouchableOpacity onPress={() => navigation.navigate('TopTab')}  >
              <Text style={styles.ctext}>Hair</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TopTab')} >
              <Text style={styles.ctext}>Makeup</Text></ TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TopTab')}>
              <Text style={styles.ctext}>Bridal</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categryView}>
            <TouchableOpacity onPress={() => navigation.navigate('TopTab')} >
              <Text style={styles.ctext}>Spa</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TopTab')}>
              <Text style={styles.ctext}>Nails</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TopTab')}>
              <Text style={styles.ctext}>Courses</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.3 }}>
        <View style={{ flex: 0.2 }}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}> Clients by Waqar</Text>
        </View>

        <View style={{ flex: 0.8, justifyContent:'center', flexDirection:'row' }}>
          <View><Image style={styles.specImg} source={require("../Images/waq.jpg")}></Image></View>
          <View><Image style={styles.specImg} source={require("../Images/waq2.jpeg")}></Image></View>
          <View><Image style={styles.specImg} source={require("../Images/waq3.jpeg")}></Image></View>
        </View>
      </View>

      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 11, color: '#d6994b' }}>House No. A3, Jinnah Avenue, Opposite Total Petrol Pump</Text>
        <Text style={{ textAlign: 'center', fontSize: 11, color: '#d6994b' }}>Model Colony Malir Halt, Karachi.</Text>
      </View>
    </View>


  );
}
export default MainPage;
const styles = StyleSheet.create({

  scroll: {
    backgroundColor:'#fcf7f0' // '#faf6e9'
  },
  searchbar: {
    backgroundColor: 'black',
    opacity: 0.2,
    margin: 10,
    padding: 20,
    borderWidth: 3,
    borderColor: 'brown',
    height: 40
  },
  categryView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ctext: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#d6994b',
    shadowOpacity: 0.4,
    shadowRadius: 4.7,
    elevation: 8,
    width: 100,
    textAlign: 'center',
    margin: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#1a1a1a',
    borderWidth: 0.25
  },
  disPanel: {
    margin: 15,
    width: 330,
    height: 100,
    backgroundColor: 'white',
    borderColor: 'brown',
    borderWidth: 20
  },
  disimg: {
    position: 'relative',
    left: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: 100,
    height: 60,
  },
  specImg: {
    width: 100,
    height: 150,
    borderWidth: 1,
    margin: 5,
    padding: 5,
    borderRadius: 10,
   
  },
  imgStyling: {
    flex: 1,
    width: '100%',
    borderRadius: 14,
  },
  imgStyling2: {
    height: 50,
    flex: 1,
    margin: 5,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor:'#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4
    // },
    // shadowOpacity: 0.4,
    // shadowRadius: 4.7,
    // elevation: 8,
  },
  MapView: {
    flex: 0.5,
    margin: 10,
  }

})