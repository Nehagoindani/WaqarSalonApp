
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
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
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fcf7f0' }}>

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
                  <Text style={{ fontSize: 15, color: '#d6994b', fontWeight: 'bold', padding: 5, paddingLeft: 0 }}> Product Name:  {item.pName}</Text>
                  <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', padding: 5, paddingLeft: 0 }}> Price:  {item.price}</Text>
                  <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', padding: 5, paddingLeft: 0 }}> Quantity:  {item.count} </Text>
                  <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', padding: 5, paddingLeft: 0 }}> Description:  {item.description} </Text>
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
    backgroundColor: '#fcf7f0'
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
    justifyContent: 'space-evenly',
    borderWidth: 0.75,
    borderColor: '#fcf7f0',
    borderBottomColor: '#cccccc',
    marginVertical: 3,

  }
});