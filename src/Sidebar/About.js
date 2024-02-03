import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Header } from "@react-navigation/stack";

const About = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text>About</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 10,
  },
});

export default About;
