import RegisterScreen from './Screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/Login';
import TurnosScreen from './Screens/Turnos';
import UserNormal from './Screens/UserNormal';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Turnos" component={TurnosScreen}/>
      <Stack.Screen name="UserNormal" component={UserNormal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;