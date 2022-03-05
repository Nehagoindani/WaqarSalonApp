import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  Text,
  Drawer,
  Title,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function DrawerContent({ ...props }) {
  const [isDarkTheme, setisDarkTheme] = useState(false);
  const toggleTheme = () => {
    setisDarkTheme(!isDarkTheme);
 

  };

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: 'white' }}>
      <View>
        <View>
          <DrawerItem
              style={styles.drawerItems}
              icon={({ color, size }) => (
                <Icon name="home-outline" color="#035956" size={20} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              style={styles.drawerItems}
              icon={({ color, size }) => (
                <Icon name="account-outline" color="#035956" size={20} />
              )}
              label="Dashboard"
              onPress={() => {
                props.navigation.navigate('Dashboard');
              }}
            />
            <DrawerItem
              style={styles.drawerItems}
             icon={({ color, size }) => (
                <Icon name="bookmark-outline" color="#035956" size={20} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
        </View>
        <Drawer.Section title ='prefrence'>
           <TouchableRipple onPress={()=>{toggleTheme()}}>
           <View style={{flexDirection:'row',marginStart:10,justifyContent:'space-between', marginEnd:10}}>
           <Text>Dark mode</Text>
           <View pointerEvents='none'>
           <Switch value={isDarkTheme}
            />
         </View>

          </View>

         </TouchableRipple>
      </Drawer.Section>
      </View>
    </DrawerContentScrollView>

    // <View>
    //   <DrawerContentScrollView{...props}>
    //     <View>
    //         <DrawerItem
    //           style={styles.drawerItems}
    //           icon={({ color, size }) => (
    //             <Icon name="home-outline" color="#035956" size={20} />
    //           )}
    //           label="Home"
    //           onPress={() => {
    //             props.navigation.navigate('Home');
    //           }}
    //         />
    //         <DrawerItem
    //           style={styles.drawerItems}
    //           icon={({ color, size }) => (
    //             <Icon name="account-outline" color="#035956" size={20} />
    //           )}
    //           label="Profile"
    //           onPress={() => {
    //             props.navigation.navigate('Home');
    //           }}
    //         />
    //         <DrawerItem
    //           style={styles.drawerItems}
    //          icon={({ color, size }) => (
    //             <Icon name="bookmark-outline" color="#035956" size={20} />
    //           )}
    //           label="Bookmarks"
    //           onPress={() => {
    //             props.navigation.navigate('Home');
    //           }}
    //         />
    //       <Drawer.Section title ='prefrence'>
    //       <TouchableRipple onPress={()=>{toggleTheme()}}>
    //       <View style={{flexDirection:'row',marginStart:10,justifyContent:'space-between', marginEnd:10}}>
    //       <Text>Dark mode</Text>
    //       <View pointerEvents='none'>
    //       <Switch value={isDarkTheme} />
    //       </View>

    //       </View>

    //       </TouchableRipple>

    //       </Drawer.Section>
    //     </View>
    //   </DrawerContentScrollView>
    // </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerItems: {
    backgroundColor: '#cfe1c9',
    marginTop: 2,
  },
});
