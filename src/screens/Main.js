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
            <Image style={styles.specImg1} source={require("../Images/salon2.jpg")} />
          </View>
          <View>
            <Image style={styles.specImg1} source={require("../Images/salon1.jpg")} />
          </View>
        </Swiper>

        <View style={{ flex: 0.25, justifyContent: 'center', flexDirection: 'row' }}>
          <Swiper autoplay autoplayTimeout={4} showsPagination={false} scrollEnabled={false}>
            <View>
              <Image style={styles.specImg1} source={require("../Images/salon3.jpg")} />
            </View>
            <View>
              <Image style={styles.specImg1} source={require("../Images/salon2.jpg")} />
            </View>
            <View>
              <Image style={styles.specImg1} source={require("../Images/salon1.jpg")} />
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
              <View><Image style={styles.specImg} source={require("../Images/wq3.jpeg")}></Image></View>
              <View><Image style={styles.specImg} source={require("../Images/wq1.jpeg")}></Image></View>
              <View><Image style={styles.specImg} source={require("../Images/wq2.jpeg")}></Image></View>
              <View><Image style={styles.specImg} source={require("../Images/waq.jpg")}></Image></View>
              <View><Image style={styles.specImg} source={require("../Images/waq3.jpeg")}></Image></View>
            </View>
          </ScrollView>
        </View>

        <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 11, color: '#d6994b' }}>House No. A3, Jinnah Avenue, Opposite Total Petrol Pump</Text>
          <Text style={{ textAlign: 'center', fontSize: 11, color: '#d6994b' }}>Model Colony Malir Halt, Karachi.</Text>
        </View>
      </View>
    </View>

  );
}


export default MainPage;