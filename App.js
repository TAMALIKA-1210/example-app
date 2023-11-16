import React from 'react';
import { View, Text, Button } from 'react-native';
import {styles} from './assets/Style';
import {Goodbye} from './assets/Components/Goodbye';
//import { Link } from 'expo-router';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { Hellopage } from './assets/Components/Hellopage';
import { Floatingmenu } from './assets/Floatingmenu';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { createAppContainer } from 'react-navigation';
//const Stack = createStackNavigator();
//import  Ionicons  from '@expo/vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-web';
//import react from 'react';

const Stack = createStackNavigator();

function Helloscreen({navigation}){
  return(
  <>
        <Hellopage/>
        <Floatingmenu navigation = {navigation}/>
  </>
  )
}
function Goodbyescreen({navigation}){
  return(
    <>
    <Goodbye/>
    <Button title='hello' onPress={()=>navigation.navigate("Friends")}></Button>

    </>
  )
}
//const Tab = createBottomTabNavigator()

class  App extends React.Component {
  render (){
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Helloscreen}
          />
          <Stack.Screen
            name="Friends"
            component={Goodbyescreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}}
export default App



//export default createAppContainer(TabNavigator);

{/*export default function App() {
  return (
 
  <View style={styles.container}>
      <Floatingmenu/>
    </View>
  );
}


 {/*
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hello" component={Hellopage} />
        <Stack.Screen name="Hello" component={Goodbye} />
      </Stack.Navigator>
      
  </NavigationContainer>*/}


