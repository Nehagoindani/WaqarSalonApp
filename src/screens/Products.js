import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default function Products() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    getProducts()
  })

  const getProducts = () => {
    firestore().collection("products").get().then((querySnapshot) => {
      let products = []
      querySnapshot.forEach(function (doc) {
        products.push(doc.data())
      });
      setInfo(products);

    });

  }
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>

      <View style={{ flex: 0.1, paddingTop: 20 }}>
        <Icon name='date-range' size={55} color='black' />
      </View>
      <View style={{ flex: 0.1 }}>
        <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>Products</Text>
      </View>

      <View style={{ flex: 0.8 }}>
        <ScrollView>
          {
            info.map((item, index) => {
              return (
                <View key={index} style={styles.bkstyle}>
                  <View style={{ flex: 0.5 }}>
                    <Text style={{ fontSize: 15, color: '#d6994b', fontWeight: 'bold', lineHeight: 20 }}>{item.pName}</Text>
                    <Text style={{ fontSize: 15, color: 'black', marginTop: 3, fontWeight: 'bold' }}>Rs. {item.price}</Text>
                    <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>{item.description}</Text>
                  </View>
                  <View style={{ flex: 0.5 }}>
                    <Image source={{ uri: item.image }} resizeMode={'center'} style={{ flex: 1 }} />
                    {/* <Text>{item.image}</Text> */}
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
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
    padding: 33,
    backgroundColor: 'white'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 15
  },
  bkstyle: {
    height: 118,
    flex: 1,
    padding: 10,
    marginVertical: 10,
    // justifyContent: 'space-evenly',
    borderWidth: 0.75,
    borderColor: '#fcf7f0',
    borderBottomColor: '#cccccc',
    marginVertical: 3,
    flexDirection: 'row'

  }
});