import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const SwiperComponent = () => {
  return (
    
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Our Services</Text>
      </View>
      <Swiper
        style={styles.swiper}
        horizontal={true}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        loop={true}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        
        <View style={styles.slide}>
          <View style={styles.card}>
            <LinearGradient colors={["#4e2b2c", "#080808"]} style={styles.gradient}>
              <Text style={styles.title}>FULL SERVICE</Text>
              <Text style={styles.list}>• External Wash</Text>
              <Text style={styles.list}>• Interior Cleaning (Vacuum, Dashboard, Seats)</Text>
              <Text style={styles.list}>• Wax & Polish</Text>
              <Text style={styles.list}>• Engine Bay Cleaning</Text>
              <Text style={styles.list}>• Tire & Rim Cleaning</Text>
              <Text style={styles.list}>• Fragrance Spray</Text>
              <Text style={styles.list}>• Underbody Wash</Text>
              <Text style={styles.list}>• Seat Shampooing</Text>
              <Text style={styles.list}>• Glass Cleaning & Rain Repellent</Text>
            </LinearGradient>
          </View>
        </View>

   
        <View style={styles.slide}>
          <View style={styles.card}>
            <LinearGradient colors={["#4e2b2c", "#080808"]} style={styles.gradient}>
              <Text style={styles.title}>BASIC SERVICE</Text>
              <Text style={styles.list}>• External Wash Only</Text>
              <Text style={styles.list}>• Vacuum Cleaning</Text>
              <Text style={styles.list}>• Tire Cleaning</Text>
              <Text style={styles.list}>• Hand Drying</Text>
              <Text style={styles.list}>• Dashboard Cleaning</Text>
              <Text style={styles.list}>• Door Panel Cleaning</Text>
              <Text style={styles.list}>• Window Cleaning</Text>
            </LinearGradient>
          </View>
        </View>

       
        <View style={styles.slide}>
          <View style={styles.card}>
            <LinearGradient colors={["#4e2b2c", "#080808"]} style={styles.gradient}>
              <Text style={styles.title}>EXPRESS SERVICE</Text>
              <Text style={styles.list}>• Quick External Wash</Text>
              <Text style={styles.list}>• Hand Drying</Text>
              <Text style={styles.list}>• Tire Shine</Text>
              <Text style={styles.list}>• Basic Air Freshener</Text>
              <Text style={styles.list}>• Quick Windshield Cleaning</Text>
              <Text style={styles.list}>• Dashboard Shine</Text>
              <Text style={styles.list}>• Bug & Tar Removal</Text>
            </LinearGradient>
          </View>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    fontSize:40,
    fontWeight:'bold',
    bottom:20,
  },
  list:{
    color:'white',
  },
  title:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  swiper: {
    height: height * 0.6, 
  },
  slide: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    width: "95%",
    height: height * 0.5,
    borderRadius: 25, 
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    gap:20
  },
  text: {
    color: "white",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 5,
    borderRadius: 4,
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: "white",
    marginHorizontal: 5,
    borderRadius: 5,
  },
});

export default SwiperComponent;
