import {  Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome,ProfileScreen } from "./screens";
import HomeScreen from './screens/Homescreen';
import useAuth from './hook/useAuth';
import { View } from 'react-native';
import { Latest} from './screens/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'
import forgotPassword from './screens/forgotpassword';
import AboutUs from './screens/AboutUs'
import SettingsScreen from './screens/SettingsScreen';
import Guidelines from './screens/Guidelines';


export {

}
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: '#fff'
  }
}
const ProfileStack = createNativeStackNavigator()

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name='SettingsScreen'
      component={ProfileScreen}
      options={({ navigation }) => ({
        title: 'Profile',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <AntDesign
              name='setting'
              size={24}
              color='black'
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        )
      })}
    />
    <ProfileStack.Screen name='Settings' component={SettingsScreen} />
    <ProfileStack.Screen name='AboutUs' component={AboutUs} />
     <ProfileStack.Screen name="Guidelines" component={Guidelines} />
  </ProfileStack.Navigator>
)



export default function AppNavigation () {
  const { user } = useAuth()
  if (user) {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Entypo
                      name='home'
                      size={30}
                      color={focused ? '#0A5C36' : '#111'}
                    />
                  </View>
                )
              }
            }}
          />
          <Tab.Screen
            name='Latest'
            component={Latest}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Entypo
                      name='new'
                      size={30}
                      color={focused ? '#0A5C36' : '#111'}
                    />
                  </View>
                )
              }
            }}
          />
          <Tab.Screen
            name='Profile'
            component={ProfileStackScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                  >
                    <MaterialIcons
                      name='face'
                      size={30}
                      color={focused ? '#0A5C36' : '#111'}
                    />
                  </View>
                )
              }
            }}
          />
          
          
        </Tab.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen
            name='Welcome'
            options={{ headerShown: false }}
            component={Welcome}
          />
          <Stack.Screen
            name='Login'
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name='Signup'
            options={{ headerShown: false }}
            component={Signup}
          />
          <Stack.Screen 
        name="forgotPassword"
        options={{headerShown: false}}
        component={forgotPassword} />

        
        </Stack.Navigator>
        
      </NavigationContainer>
    )
  }
}
