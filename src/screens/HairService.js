import React from 'react';
import { View, Text, StyleSheet, Image, SectionList, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addService, removeService } from '../Redux/Actions/serviceAction';




const DATA = [
  {
    title: "HAIR CUT",
    data: [
      {
        name: 'Hair Cut by Waqar',
        price: '3500'
      },
      {
        name: 'Hair Cut by Senior Stylist',
        price: '2500'
      },
      {
        name: 'Hair Cut by Junior Stylist',
        price: '2000'
      },
      {
        name: 'Bangs',
        price: '800'
      },
      {
        name: 'Trimming',
        price: '1000'
      },
      /* <Text> '(Charges may vary according to Thickness and Length of Hair)' </Text>, */
      {
        name: 'Baby Cut',
        price: '1500'
      },
    ]
  },
  {
    title: "SHAMPOO",
    data: [
      {
        name: 'Normal Shampoo',
        price: '500'
      },
      {
        name: 'Branded Shampoo',
        price: '800'
      },]
  },
  {
    title: "HAIR STYLING",
    data: [
      {
        name: 'Blow Dry',
        price: '1000'
      },
      {
        name: 'Ironing',
        price: '1000'
      },
      {
        name: 'Hair Do',
        price: '1000'
      },
      {
        name: 'Baby Hair Do',
        price: '800'
      },
    ]
  },
  {
    title: "HAIR TEXTURE",
    data: [
      {
        name: 'Rebonding',
        price: '10000'
      },
      {
        name: 'Extenso',
        price: '15000'
      },
      {
        name: 'Keratin Treatment',
        price: '12000'
      },
      {
        name: 'Perming',
        price: '10000'
      },
    ]
  },
  {
    title: "HAIR COLOURING\n(Loreal/Schwarzkopf)",
    data: [
      {
        name: 'Base Colour Dye',
        price: '7000'
      },
      {
        name: 'Full Colour Dye',
        price: '10000'
      },
      {
        name: 'Colour Correction',
        price: '10000'
      },
      {
        name: 'Glossing',
        price: '5000'
      },
      {
        name: 'Roots Touchup',
        price: '3000'
      },
      {
        name: 'Roots Correction',
        price: '3000'
      },
      {
        name: 'Highlights',
        price: '10000'
      },
      {
        name: 'Lowlights',
        price: '10000'
      },
      {
        name: 'Ombre',
        price: '10000'
      },
      {
        name: 'Balayage',
        price: '10000'
      },
      {
        name: 'Sombre',
        price: '10000'
      },
      {
        name: 'Dip Dye',
        price: '8000'
      },
    ]
  },
  {
    title: "HAIR COLOURING (Silky)",
    data: [
      {
        name: 'Base Colour Dye',
        price: '5000'
      },
      {
        name: 'Full Colour Dye',
        price: '8000'
      },
      {
        name: 'Colour Correction',
        price: '8000'
      },
      {
        name: 'Glossing',
        price: '4000'
      },
      {
        name: 'Roots Touchup',
        price: '2000'
      },
      {
        name: 'Roots Correction',
        price: '2000'
      },
      {
        name: 'Highlights',
        price: '8000'
      },
      {
        name: 'Lowlights',
        price: '8000'
      },
      {
        name: 'Ombre',
        price: '8000'
      },
      {
        name: 'Balayage',
        price: '8000'
      },
      {
        name: 'Sombre',
        price: '8000'
      },
      {
        name: 'Dip Dye',
        price: '6000'
      },
    ]
  },
  {
    title: "HAIR TREATMENT",
    data: [
      {
        name: 'Herbal Treatment',
        price: '1200'
      },
      {
        name: 'Protein Treatment',
        price: '2000'
      },
      {
        name: 'High Frequency Protein Treatment',
        price: '2500'
      },
      {
        name: 'Hair Loss Treatment',
        price: '3000'
      },
      {
        name: 'Anti Dandruff Treatment',
        price: '3000'
      },
      {
        name: 'Hair Fall Treatment',
        price: '3000'
      },
    ]
  },
  {
    title: "LOREAL TREATMENT",
    data: [
      {
        name: 'Smart Bond Treatment',
        price: '4500'
      },
      {
        name: 'Power Mix Treatment',
        price: '4500'
      },
      {
        name: 'Reconstruct Treatment',
        price: '4500'
      },
      {
        name: 'Recreate Treatment',
        price: '4500'
      }
    ]
  },
  {
    title: "SCHWARZKOPF TREATMENT",
    data: [
      {
        name: 'Fiber Plex Treatment',
        price: '4500'
      },
      {
        name: 'Repair Treatment',
        price: '4500'
      },
    ]
  },
];
const HairService = ({ navigation }) => {
  const dispatch = useDispatch();
  const { services } = useSelector(state => state.service)
  const hairServices = []


  const FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={styles.listItemSeparatorStyle} />
    );
  };

  const check = (name) => {
    if (services.some(item => item.name === name)) return true
    else return false

  }


  const Item = ({ name, price }) => (


    <View style={styles.item}>
      <View style={{ flex: 0.7 }}>
        <Text style={{ color: 'black', fontSize: 17 }}>{name}</Text>
        <Text style={{ color: '#d6994b', fontSize: 15 }}>Rs. {price}</Text>
      </View>
      <View style={{ flex: 0.3, flexDirection: 'row' }}>
        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => dispatch(removeService(name))}
            disabled={
              services.some(item => item.name === name) ? false : true
            }  >
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
        <Image source={require('../Images/p2.jpg')} style={styles.img1} />
      </View>
      <View style={styles.view4}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22 }}>
          HAIR SERVICES
        </Text>
        <Text style={{ fontSize: 3 }}> </Text>
        <Text style={{ color: '#d6994b', fontStyle: 'italic', fontSize: 15 }}>
          Choose the services that you want to book below.
        </Text>
        <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 12 }}>
          *Charges may vary according to thickness & length of hair*</Text>
        <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 13 }}>
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
export default HairService;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: 'white'
  },
  view2: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view4: {
    flex: 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  view3: {
    flex: 0.5,
    padding: 8,
  },
  view5: {
    flex: 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6994b'
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