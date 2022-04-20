import React from 'react';
import { View, Text, StyleSheet, Image, SectionList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addService, removeService } from '../Redux/Actions/serviceAction';

const DATA = [
  {
    title: "Spa",
    data: [
      {
        name: 'Head Massage & Shoulder Massage (30min)',
        price: 'Rs. 1200'
      },
      {
        name: 'Foot Massage (30min)',
        price: 'Rs. 1000'
      },
      {
        name: 'Body Massage (40min)',
        price: 'Rs. 3000'
      },
      {
        name: 'Thai Massage (40min)',
        price: 'Rs. 2500'
      },
      {
        name: 'Deep tissue Back Massage (25min)',
        price: 'Rs. 1500'
      },
      {
        name: 'Boody Scrub & Oil Massage (60min)',
        price: 'Rs. 4000'
      },
      {
        name: 'Body Treatment (60min)',
        price: 'Rs. 5000'
      },
      {
        name: 'Body Scrub (35min)',
        price: 'Rs. 2000'
      }
    ]
  },
]

const SpaService = ({navigation}) => {
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
        <Text style={{ color: 'black', fontSize: 20 }}>{name}</Text>
        <Text style={{ color: '#d6994b', fontSize: 18 }}>{price}</Text>
      </View>
      <View style={{ flex: 0.3, flexDirection: 'row' }}>
        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
            onPress={() => dispatch(removeService(name))}
            disabled={
              services.includes(name) ? false : true
            }
         
         >
          
            <Icon name='minus-circle-outline' size={20} color={services.includes(name) ? '#d6994b' : 'grey'} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
         
        <TouchableOpacity
            onPress={() => dispatch(addService(name))}
            disabled={
              !services.includes(name) ? false : true
            }
          >
            <Icon name='plus-circle-outline' size={20} color={!services.includes(name) ? '#d6994b' : 'grey'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.view1}>
      <View style={[styles.view2, { alignContent: 'center' }]}>
        <Image source={require('../Images/spa.jpg')} style={styles.img1} />
      </View>
      <View style={styles.view4}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25 }}>
          SPA SERVICES
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
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 21 }}>{title}</Text>
            </View>
          )}
          ItemSeparatorComponent={FlatListItemSeparator}
        />
      </View>
      <View style={styles.view5}>
        <TouchableOpacity
          onPress={() => {
            services.length > 0 ? (navigation.navigate('TimeSlot')) : (Alert.alert('please select atleast one service'))

          }}
        >
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default SpaService;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor:'white'
  },
  view5: {
    flex: 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6994b'
  },
  view2: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view4: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:20,
    paddingBottom:10,
  },
  view3: {
    flex: 0.6,
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