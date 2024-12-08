import { useRef } from "react";
import {
  StyleSheet,
  Animated,
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const animatedValues = {
    opacity: useRef(new Animated.Value(1)).current,
    scale: useRef(new Animated.Value(1)).current,
  };

  const { opacity, scale } = animatedValues;

  const handleAnimated = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(scale, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };

  const animatedStyles = {
    opacity: opacity,
    transform: [
      {
        scale: scale,
      },
    ],
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#F29F58" }} />

      <View style={styles.container}>
        <Text style={styles.title}>
          Toca el cuadro para ver la animación.
        </Text>
        <TouchableWithoutFeedback onPress={handleAnimated}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
        <View style={styles.footer}>
          <Text style={styles.footerText}>@Diegoberrio1601</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1833",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
    
    
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "#AB4459",
  },
  footer: {
    position: "absolute", 
    bottom: 20, 
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight:'bold'
  },
});
