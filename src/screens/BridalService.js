import React from 'react';
import { View, Text, StyleSheet, Image, SectionList, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addService, removeService } from '../Redux/Actions/serviceAction';
const DATA = [
  {
    title: "SILVER PACKAGE  Rs. 7500",
    data: [
      {
        name: 'Whitening Facial',
        price: '2500'
      },
      {
        name: 'Full Arm Wax',
        price: '1000'
      },
      {
        name: 'Full Leg Wax',
        price: '1500'
      },
      {
        name: 'Under Arm Wax',
        price: '500'
      },
      {
        name: 'Herbal Manicure',
        price: '1000'
      },
      {
        name: 'Herbal Pedicure',
        price: '1200'
      },
      {
        name: 'Face Wax/Face Threading',
        price: '1000'
      }
    ]
  },
  {
    title: "GOLDEN PACKAGE Rs. 10,000",
    data: [
      {
        name: 'JANSSEN Whitening Facial',
        price: '4000'
      },
      {
        name: 'Full Arm Wax',
        price: '1000'
      },
      {
        name: 'Full Leg Wax',
        price: '1500'
      },
      {
        name: 'Under Arm Wax',
        price: '500'
      },
      {
        name: 'Whitening Manicure',
        price: '1000'
      },
      {
        name: 'Whitening Pedicure',
        price: '1200'
      },
      {
        name: 'Protein Hair Treatment',
        price: '2000'
      },
      {
        name: 'Face Wax/Face Threading',
        price: '1000'
      }
    ]
  },
  {
    title: "DIAMOND PACKAGE Rs. 20,000",
    data: [
      {
        name: 'JANSSEN Whitening Supreme Facial',
        price: '4500'
      },
      {
        name: 'Body Wax',
        price: '4500'
      },
      {
        name: 'Paraffin Whitening Manicure',
        price: '1500'
      },
      {
        name: 'Paraffin Whitening Pedicure',
        price: '1800'
      },
      {
        name: 'Loreal Power Mix Treatment',
        price: '4500'
      },
      {
        name: 'Face Wax',
        price: '1000'
      },
      {
        name: 'Body Massage + Body Treatment',
        price: '5000'
      }
    ]
  }, ];

const BridalService = ({navigation}) => { 
  const dispatch = useDispatch();  
  const { services } = useSelector(state => state.service)
  const FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={styles.listItemSeparatorStyle} />
    );
  };
  const Item = ({ name, price}) => (
    <View style={styles.item}>
      <View style={{ flex: 0.7 }}>
        <Text style={{ color: 'black', fontSize: 17 }}>{name}</Text>
        <Text style={{ color: '#d6994b', fontSize: 16 }}>Rs. {price}</Text>
      </View>
      <View style={{ flex: 0.3, flexDirection: 'row' }}>
        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
            onPress={() => dispatch(removeService(name))}
            disabled={
              services.some(item => item.name === name) ? false : true
            }
         
         >
          
            <Icon name='minus-circle-outline' size={20} color={services.some(item => item.name === name) ? '#d6994b' : 'grey'} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
        
        <TouchableOpacity
            onPress={() => dispatch(addService({
              name: name,
              price: price
            }))}
            disabled={
              !services.some(item => item.name === name) ? false : true
            }
          >
            <Icon name='plus-circle-outline' size={20} color={!services.some(item => item.name === name) ? '#d6994b' : 'grey'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.view1}>
      <View style={[styles.view2, { alignContent: 'center' }]}>
        <Image source={require('../Images/bride-pic.jpg')} style={styles.img1} />
      </View>
      <View style={styles.view4}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25 }}>
          BRIDAL SERVICES
        </Text>
        <Text style={{ fontSize: 3 }}> </Text>
        <Text style={{ color: '#d6994b', fontStyle: 'italic', fontSize: 15 }}>
          Choose the services that you want to book below.
        </Text>
      </View>
      <View style={styles.view3}>

        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index} //unique key for each item
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Item name={item.name} price={item.price} />}
          renderSectionHeader={({ section: { title } }) => (
            <View style={{ borderColor: '#d6994b', borderWidth: 2, padding: 10, }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
            </View>
          )}
          ItemSeparatorComponent={FlatListItemSeparator}
        />
      </View>
      <View style={styles.view5}>
        <TouchableOpacity
          onPress={() => {
            services.length > 0 ? (navigation.navigate('TimeSlot')) : (Alert.alert('Please Select Atleast One Service'))

          }}
        >
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default BridalService;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor:'white'
  },
  view2: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view5: {
    flex: 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6994b'
  },
  view4: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:20,
    paddingBottom:10,
  },
  view3: {
    flex: 0.52,
    padding: 8,
  },
  img1: {
    height: 220,
    width: '100%',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    flexDirection: 'row'
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20
  },
  listItemSeparatorStyle: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  }

});