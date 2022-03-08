import React from 'react';
import { View, Text, StyleSheet, Image, SectionList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { addService } from '../Redux/Actions/serviceAction';

const DATA = [
  {
    title: "HANDS",
    data: [
      {
        name: 'Manicure',
        price: 'Rs. 800'
      },
      {
        name: 'Whitening Manicure',
        price: 'Rs. 1000'
      },
      {
        name: 'Paraffin Manicure',
        price: 'Rs. 1200'
      },
      {
        name: 'Herbal Manicure',
        price: 'Rs. 1000'
      },
      {
        name: 'Spa Manicure',
        price: 'Rs. 1000'
      },
      {
        name: 'Paraffin Whitening Manicure',
        price: 'Rs. 1500'
      },
      {
        name: 'OPI Manicure',
        price: 'Rs. 1800'
      }
    ]
  },
  {
    title: "FEET",
    data: [
      {
        name: 'Pedicure',
        price: 'Rs. 1000'
      },
      {
        name: 'Whitening Pedicure',
        price: 'Rs. 1200'
      },
      {
        name: 'Paraffin Pedicure',
        price: 'Rs. 1500'
      },
      {
        name: 'Herbal Pedicure',
        price: 'Rs. 1200'
      },
      {
        name: 'Spa Pedicure',
        price: 'Rs. 1200'
      },
      {
        name: 'Paraffin Whitening Pedicure',
        price: 'Rs. 1800'
      },
      {
        name: 'OPI Pedicure',
        price: 'Rs. 2000'
      }, ] }, ];

const NailService = ({navigation}) => {
  const dispatch = useDispatch();
 
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
          <TouchableOpacity>
            <Icon name='minus-circle-outline' size={20} color='#d6994b' />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
          // onPress={()=>navigation.navigate('TimeSlot',{serviceName:name,price:price})}
          onPress={()=>dispatch(addService(name))}
          >
          <Icon name='plus-circle-outline' size={20} color='#d6994b' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.view1}>
      <View style={[styles.view2, { alignContent: 'center' }]}>
        <Image source={require('../Images/m2.jpg')} style={styles.img1} />
      </View>
      <View style={styles.view4}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25 }}>
          {'NAIL SERVICES'}
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
    </View>
  );
}
export default NailService;

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