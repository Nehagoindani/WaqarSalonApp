import React from 'react';
import { View, Text, StyleSheet, Image, SectionList, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addService , removeService } from '../Redux/Actions/serviceAction';




const DATA = [
  {
    title: "HAIR CUT",
    data: [
      {
        name: 'Hair Cut by Waqar',
        price: 'Rs. 3500+'
      },
      {
        name: 'Hair Cut by Senior Stylist',
        price: 'Rs. 2500+'
      },
      {
        name: 'Hair Cut by Junior Stylist',
        price: 'Rs. 2000+'
      },
      {
        name: 'Bangs',
        price: 'Rs. 800'
      },
      {
        name: 'Trimming',
        price: 'Rs. 1000'
      },
      /* <Text> '(Charges may vary according to Thickness and Length of Hair)' </Text>, */
      {
        name: 'Baby Cut',
        price: 'Rs. 1500'
      },
    ]
  },
  {
    title: "SHAMPOO",
    data: [
      {
        name: 'Normal Shampoo',
        price: 'Rs. 500'
      },
      {
        name: 'Branded Shampoo',
        price: 'Rs. 800'
      },]
  },
  {
    title: "HAIR STYLING",
    data: [
      {
        name: 'Blow Dry',
        price: 'Rs. 1000+'
      },
      {
        name: 'Ironing',
        price: 'Rs. 1000+'
      },
      {
        name: 'Hair Do',
        price: 'Rs. 1000+'
      },
      {
        name: 'Baby Hair Do',
        price: 'Rs. 800+'
      },
    ]
  },
  {
    title: "HAIR TEXTURE",
    data: [
      {
        name: 'Rebonding',
        price: 'Rs. 10,000+'
      },
      {
        name: 'Extenso',
        price: 'Rs. 15,000+'
      },
      {
        name: 'Keratin Treatment',
        price: 'Rs. 12,000+'
      },
      {
        name: 'Perming',
        price: 'Rs. 10,000+'
      },
    ]
  },
  {
    title: "HAIR COLOURING",
    data: [
      {
        name: 'Base Colour Dye',
        price: 'Loreal/Schwarzkopf: Rs. 7000+\nSilky: Rs. 5000+'
      },
      {
        name: 'Full Colour Dye',
        price: 'Loreal/Schwarzkopf: Rs. 10,000+\nSilky: Rs. 8000+'
      },
      {
        name: 'Colour Correction',
        price: 'Loreal/Schwarzkopf: Rs. 10,000+\nSilky: Rs. 8000+'
      },
      {
        name: 'Glossing',
        price: 'Loreal/Schwarzkopf: Rs. 5000+\nSilky: Rs. 4000+'
      },
      {
        name: 'Roots Touchup',
        price: 'Loreal/Schwarzkopf: Rs. 3000+\nSilky: Rs. 2000+'
      },
      {
        name: 'Roots Correction',
        price: 'Loreal/Schwarzkopf: Rs. 3000+\nSilky: Rs. 2000+'
      },
      {
        name: 'Highlights',
        price: 'Loreal/Schwarzkopf: Rs. 10,000+\nSilky: Rs. 8000+'
      },
      {
        name: 'Lowlights',
        price: 'Loreal/Schwarzkopf: Rs. 10,000+\nSilky: Rs. 8000+'
      },
      {
        name: 'Ombre',
        price: 'Loreal/Schwarzkopf: Rs. 10,000+\nSilky: Rs. 8000+'
      },
      {
        name: 'Balayage',
        price: 'Loreal/Schwarzkopf: Rs. 10,000+\nSilky: Rs. 8000+'
      },
      {
        name: 'Sombre',
        price: 'Loreal/Schwarzkopf: Rs. 10,000+\nSilky: Rs. 8000+'
      },
      {
        name: 'Dip Dye',
        price: 'Loreal/Schwarzkopf: Rs. 8000+\nSilky: Rs. 6000+'
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
        <Text style={{ color: '#d6994b', fontSize: 15 }}>{price}</Text>
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
            services.length > 0 ? (navigation.navigate('TimeSlot')) : (Alert.alert('please select atleast one service'))

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
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  view3: {
    flex: 0.52,
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