import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Drawer Navigator screens
import Settings from "./src/Sidebar/Settings";
import Sync_Backup from "./src/Sidebar/Sync_Backup";
import About from "./src/Sidebar/About";

// Stack Navigator screens
import Home from "./src/Home";
import NoteAdd from "./src/NoteAdd";
import Header from "./src/Header";
import Detail from "./src/Detail";

// AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Drawer Navigator
function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: "Notes" }} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Sync and Backup" component={Sync_Backup} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

// Stack Navigator
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrawerRoutes}
          options={{
            headerShown: false, // hide header dari Stack dan menampilkan yang dari Drawer
            title: "Home",
            headerStyle: {
              backgroundColor: "#fff",
              height: 50,
              borderWidth: 0, // remove header border
            },
          }}
        />
        <Stack.Screen
          name="NoteAdd"
          component={NoteAdd}
          options={{
            title: "NoteAdd",
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

export default App;
