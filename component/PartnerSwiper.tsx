import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

const PartnersSwiper = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Our Partners</Text>
      <Text style={styles.description}>
        "Our sincere thanks to our partners who support our car wash service. 
        With your trust and collaboration, our service has reached the highest level. 
        We extend our respect to our valuable partners as we continue to work together in the future."
      </Text>
      <Swiper
        style={styles.swiper}
        horizontal={true} 
        showsButtons={false} 
        autoplay={true} 
        autoplayTimeout={8}
        loop={true} 
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        autoplayDirection={true} 
        scrollEnabled={true}  
        scrollTo={{animated: true, easing: 'linear'}}  
      >
        <View style={styles.slide}>
          <Image
            source={require("../assets/images/png3.png")}
            style={styles.partnerImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require("../assets/images/20.png")}
            style={styles.partnerImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require("../assets/images/21.png")}
            style={styles.partnerImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require("../assets/images/22.png")}
            style={styles.partnerImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require("../assets/images/23.png")}
            style={styles.partnerImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require("../assets/images/24.png")}
            style={styles.partnerImage}
            resizeMode="contain"
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  description: {
    fontSize: 12,
    color: "#555",
    marginBottom: 15,
    textAlign: "center",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  swiper: {
    height: height * 0.4, 
  },
  slide: {
    width: "100%", 
    justifyContent: "center",
    alignItems: "center",
  },
  partnerImage: {
    width: 300, 
    height: 300, 
    marginBottom: 10,
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

export default PartnersSwiper;
