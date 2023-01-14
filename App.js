import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, search, View, container, TextInput, ScrollView, TouchableOpacity, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react';
//import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator ();
//const Drawer = createDrawerNavigator();

const Home = ({navigator}) =>{
   const [products, setProduts] = useState([]);
}

export default function App() {
  return (
      <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Shop XR') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            if (route.name === 'Notifiton') {
              iconName = focused
                ? 'chatbox'
                : 'chatbox-outline';
            } else if (route.name === 'cart') {
              iconName = focused ? 'settings' : 'settings';
            }

            if (route.name === 'Cart') {
              iconName = focused
                ? 'cart'
                : 'cart-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#25E314',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Shop XR" component={HomeScreen} />
        <Tab.Screen name="Notifiton" component={NotificationsScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Settings" component={ProfileScreen} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}

const HomeScreen =({ navigation }) => {
  return (
    <View>       
      <View style={{
        padding:10, 
        flexDirection:'row',
         width:'95%', 
         backgroundColor:"#d9dbda", 
         borderRadius:15, 
         alignItems: 'center', 
         marginTop:22, 
         marginLeft:10, 
         marginBottom:30
      }}>
       <View style={{ flexDirection:'row' }}>
      <Ionicons name='search' size={20} style={{ 
        marginLeft: 2, 
        marginRight:9 ,
        color:'#25E314' 
      }}></Ionicons>
       <TextInput placeholder="Search.." style={{ size:10}}></TextInput>
       </View>        
      </View>
      <ScrollView style={{ marginBottom:105 }}>
        <View style={{ flexDirection:'row'}}>
          <Text style={{ fontSize: 25, marginBottom:16,marginLeft:10 }}>Products</Text>
          <Text style={{ color:"#d9dbda"}}>30</Text>
          <TouchableOpacity>
            <Text style={{ marginLeft:180, color:'#25E314'}}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection:'row'}}>
        <Image style={{ width:170,
           height:170, 
           backgroundColor:'#d9dbda',
           marginBottom:12,
           borderRadius: 30,
           marginLeft:12 
            }} source={require('./assets/accessories/boatairpods1.png')} />
        <Image style={{ width:170,
           height:170, 
           backgroundColor:'#d9dbda',
           borderRadius:30,
           marginLeft:16, 
           }} source={require('./assets/accessories/boatairpods2.png')} />
        </View>
        <View style={{ flexDirection:'row' }}>
           <Image style={{ 
            width:170, 
            height:170,
            backgroundColor:'#d9dbda', 
            marginBottom:12, 
            borderRadius: 30, 
            marginLeft:12 
            }} source={require('./assets/accessories/boatairpods3.png')} />
           <Image style={{ 
            width:170, 
            height:170,
            backgroundColor:'#d9dbda', 
            marginBottom:12, 
            borderRadius: 30, 
            marginLeft:12 
            }} source={require('./assets/accessories/boatbassheads3.png')} />
           </View>
           <View style={{ flexDirection:'row', }}>
           <View style={{ flexDirection:'row'}}>
          <Text style={{ fontSize: 25, marginLeft:10 }}>Female Fashion</Text>
          <Text style={{ color:"#d9dbda"}}>120</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Notifiton')}>
            <Text style={{ marginLeft:80, color:'#25E314'}}>See All</Text>
          </TouchableOpacity>
        </View>
           </View>
          <View style={{ flexDirection:'row' }}>
            <TouchableOpacity>
        <Image style={{ 
            width:170, 
            height:170,
            backgroundColor:'#d9dbda', 
            marginBottom:12, 
            borderRadius: 30, 
            marginLeft:12 
            }} source={require('./assets/female/Shorts-Women.jpg')} />              
            </TouchableOpacity>
          <TouchableOpacity>
       <Image style={{ 
            width:170, 
            height:170,
            backgroundColor:'#d9dbda', 
            marginBottom:12, 
            borderRadius: 30, 
            marginLeft:12 
            }} source={require('./assets/female/Shorts-Woman.jpg')} />            
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection:'row' }}>
          <TouchableOpacity>
        <Image style={{ 
            width:170, 
            height:170,
            backgroundColor:'#d9dbda', 
            marginBottom:12, 
            borderRadius: 30, 
            marginLeft:12 
            }} source={require('./assets/female/Washed-Shorts-Women.jpg')} />            
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ 
            width:170, 
            height:170,
            backgroundColor:'#d9dbda', 
            marginBottom:12, 
            borderRadius: 30, 
            marginLeft:12 
            }} source={require('./assets/female/Women-Short-Jean.jpg')} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection:'row' }}>
          <TouchableOpacity>
         <Image style={{ 
            width:170, 
            height:170,
            backgroundColor:'#d9dbda', 
            marginBottom:12, 
            borderRadius: 30, 
            marginLeft:12 
            }} source={require('./assets/female/Denim-Shorts.jpg')} />    
          </TouchableOpacity>
       <Image style={{ 
            width:170, 
            height:170,
            backgroundColor:'#d9dbda', 
            marginBottom:12, 
            borderRadius: 30, 
            marginLeft:12 
            }} source={require('./assets/female/Shorts-For-Women.jpg')} />
        </View>

      </ScrollView>
    </View>
  );
}

const NotificationsScreen =() => {
  return (
    <View >
      <View style={{ flexDirection:'row'}}>
      <TouchableOpacity>
        <Image style={{ 
            width:70, 
            height:70,
            backgroundColor:'#d9dbda', 
            marginBottom:12, 
            borderRadius: 10, 
            marginLeft:12,
            marginTop:20 
            }} source={require('./assets/female/Shorts-Women.jpg')} />
            </TouchableOpacity>
            <View style={{ flexDirection:'column'}}>            
            <Text style={{ marginTop:30, marginLeft:10, fontSize: 20, fontStyle:'italic' }}>Shorts-Women</Text>
            <Text style={{ marginTop:2, marginLeft:10, color:'gray'}}>your order his ben place</Text>
            </View>          
        </View>
        <View style={{ flexDirection:'row'}}>
      <TouchableOpacity>
        <Image style={{ 
            width:70, 
            height:70,
            backgroundColor:'#d9dbda', 
            marginBottom:12, 
            borderRadius: 10, 
            marginLeft:12,
            marginTop:20 
            }} source={require('./assets/female/Shorts-Woman.jpg')} />
            </TouchableOpacity>
            <View style={{ flexDirection:'column'}}>            
            <Text style={{ marginTop:30, marginLeft:10, fontSize: 20, fontStyle:'italic' }}>Shorts-Women</Text>
            <Text style={{ marginTop:2, marginLeft:10, color:'gray'}}>your order his ben place</Text>
            </View>          
        </View>
    </View>
  );
}

const CartScreen =() => {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems:'center'}}>
      <Text>CartS</Text>
    </View>
  );
}


const ProfileScreen =() => {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems:'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ffff'
  },
  search:{
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: 'grey',
      marginTop: 12
  }
});
