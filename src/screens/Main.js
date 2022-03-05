import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';



function MainPage({ navigation }) {
  return (
    <View style={{ flex: 1 }}>

      <ScrollView
        verticle={true}
        showsVerticalScrollIndicator={true}
        style={styles.scroll}>

        <View style={{ flex: 0.1 }}>
          <Image style={styles.imgStyling} source={require("../Images/courses.jpeg")} ></Image>
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}> Top Categories</Text>
        </View>

        <View style={styles.categryView}>
          <TouchableOpacity onPress={() => navigation.navigate('TopTab')}  >
            <Text style={styles.ctext}>Hair</Text></TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('TopTab')} >
            <Text style={styles.ctext}>Makeup</Text></ TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate('TopTab')}>
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
          <TouchableOpacity onPress={()=> navigation.navigate('TopTab')}>
          <Text style={styles.ctext}>Courses</Text>
          </TouchableOpacity>
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{ color: '#1a1a1a', fontSize: 20, fontWeight: 'bold' }}>Celebrity clients by Waqar</Text>
        </View>

        <View style={styles.categryView}>
          <View>
            <Image style={styles.specImg} source={require("../Images/waq.jpg")}></Image>
          </View>
          <View>
            <Image style={styles.specImg} source={require("../Images/waq2.jpeg")}></Image></View>
          <View><Image style={styles.specImg} source={require("../Images/waq3.jpeg")}></Image></View>
        </View>
      



      </ScrollView>
    </View>


  );
}
export default MainPage;
const styles = StyleSheet.create({

  scroll: {
    backgroundColor: 'ivory'
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ctext: {
    width: 100,
    borderWidth: 4,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 15,
    color: 'white',
    backgroundColor: 'black',
    borderColor: '#d6994b'
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
    width: 120,
    height: 170,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 12,
    borderColor: 'brown'
  },
  imgStyling: {
    height: 200,
    width: 400,
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  MapView:{
    flex:0.5,
    margin:10
  }

})