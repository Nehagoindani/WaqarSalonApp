import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import AutoScrolling from "react-native-auto-scrolling";
import Swiper from 'react-native-swiper';

function MainPage({ navigation }) {
  return (

    <View style={{ flex: 1, backgroundColor: '#fcf7f0', paddingLeft: 10, paddingRight: 10, paddingTop: 5 }}>

      <View style={{ flex: 0.1 }}>
        <Image style={styles.imgStyling2} source={require("../Images/3waq.png")}></Image>
      </View>

      <View style={{ flex: 0.25, justifyContent: 'center', flexDirection: 'row' }}>
        <Swiper autoplay autoplayTimeout={4} showsPagination={false} scrollEnabled={false}>
          <View>
            <Image style={styles.specImg1} source={require("../Images/salon3.jpg")} />
          </View>
          <View>
            <Image style={styles.specImg1} source={require("../Images/salon1.jpg")} />
          </View>
          <View>
            <Image style={styles.specImg1} source={require("../Images/salon2.jpg")} />
          </View>
        </Swiper>
        </View>

        <View style={{ flex: 0.25 }}>
          <View style={{ flex: 0.2 }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>  Top Categories</Text>
          </View>

          <View style={{ flex: 0.8 }}>
            <View style={styles.categryView}>
              <TouchableOpacity onPress={() => navigation.navigate('TopTab', { screen: 'Hair' })}  >
                <Text style={styles.ctext}>Hair</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('TopTab', { screen: 'Makeup' })} >
                <Text style={styles.ctext}>Makeup</Text>
              </ TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('TopTab', { screen: 'Bridal' })}>
                <Text style={styles.ctext}>Bridal</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categryView}>
              <TouchableOpacity onPress={() => navigation.navigate('TopTab', { screen: 'Spa' })} >
                <Text style={styles.ctext}>Spa</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('TopTab', { screen: 'Nails' })}>
                <Text style={styles.ctext}>Nails</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('TopTab', { screen: 'Çourse' })}>
                <Text style={styles.ctext}>Courses</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ flex: 0.3 }}>
          <View style={{ flex: 0.2 }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>  Our Clients</Text>
          </View>

          <ScrollView horizontal={true} style={{ flex: 1 }}>
            <View style={{ flex: 0.8, justifyContent: 'center', flexDirection: 'row' }}>
              <View><Image style={styles.specImg} source={require("../Images/wc1.jpeg")}></Image></View>
              <View><Image style={styles.specImg} source={require("../Images/waq3.jpeg")}></Image></View>
              <View><Image style={styles.specImg} source={require("../Images/wq3.jpeg")}></Image></View>
              <View><Image style={styles.specImg} source={require("../Images/wq6.jpeg")}></Image></View>
              <View><Image style={styles.specImg} source={require("../Images/wq1.jpeg")}></Image></View>
              <View><Image style={styles.specImg} source={require("../Images/wq2.jpeg")}></Image></View>
              <View><Image style={styles.specImg} source={require("../Images/waq.jpg")}></Image></View>
              
            </View>
          </ScrollView>
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
    backgroundColor: '#fcf7f0' // '#faf6e9'
  },
  searchbar: {
    backgroundColor: 'black',
    opacity: 0.2,
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
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
    fontWeight: 'bold',
    borderColor: '#d6994b',       //'#1a1a1a'
    borderWidth: 1.25,
    borderRadius: 8,
    color: '#000',
    backgroundColor: '#fcf7f0',   //'#fcf7f0' '#d6994b'
    shadowOpacity: 0.4,
    shadowRadius: 4.7,
    elevation: 8,
    width: 100,
    textAlign: 'center',
    margin: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
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
    width: 103,
    height: 150,
    margin: 5,
    padding: 5,
    borderRadius: 8,
  },
  specImg1: {
    width: 330,
    height: 151,
    margin: 5,
    padding: 5,
    borderRadius: 8,
  },
  imgStyling: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
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
  },
  scrolling1: {
    width: 400,
    padding: 10,
    marginBottom: 10,
  },

})