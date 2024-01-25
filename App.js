import "react-native-gesture-handler";
import Home from "./src/Home";
import NoteAdd from "./src/NoteAdd";
import Header from "./src/Header";
import Detail from "./src/Detail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerTitleStyle: {
              fontSize: 32,
              fontWeight: "bold",
            },
            headerTintColor: "grey",
            headerStyle: {
              backgroundColor: "#fff",
              height: 50,
              // borderWidth: 0, // remove header border
            },
          }}
        />
        <Stack.Screen
          name="NoteAdd"
          component={NoteAdd}
          options={{
            title: "NoteAdd",
            headerTitleStyle: {
              fontSize: 32,
              fontWeight: "bold",
            },
            headerTintColor: "grey",
            headerStyle: {
              backgroundColor: "#fff",
              height: 50,
              // borderWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: "Detail",
            headerTitleStyle: {
              fontSize: 32,
              fontWeight: "bold",
            },
            headerTintColor: "grey",
            headerStyle: {
              backgroundColor: "#fff",
              height: 50,
              // borderWidth: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
