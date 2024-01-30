import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

// Style
import { AntDesign } from "@expo/vector-icons";

const Sidebar = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.sideBarContainer}>
        <View style={styles.bannerContainer}>
          <View style={styles.bannerInner}>
            <Text style={styles.bannerText}>Banner</Text>
          </View>
        </View>

        <View style={styles.drawerContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sideBarContainer: {
    backgroundColor: "white",
  },
  // Banner
  bannerContainer: {
    backgroundColor: "white",
    margin: 10,
    height: 100,
    width: "90%",
    borderRadius: 20,
    borderColor: "gray", // atur warna border
    borderWidth: 2, // atur lebar border
  },
  bannerInner: {
    margin: 10,
  },
  bannerText: {
    fontSize: 40,
    fontWeight: 900,
  },

  // Drawer Item
  drawerContainer: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 10,
  },
});

export default Sidebar;
