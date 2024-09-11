
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Color } from "../../Theme";
import { scale } from "../../Theme/ResposiveSize";


const NavigationTab = ({ state, descriptors, navigation }: any) => {
  const home = require("../../assets/Image/home.png");
    const shopping = require("../../assets/Image/shopping.png");
    const chat = require("../../assets/Image/chat.png");
    const profile = require("../../assets/Image/profile.png");
    const bookPooja = require("../../assets/Image/kalasha.png");
  return (
      <View
        style={[
          styles.wrapper,
          { paddingBottom: 0, marginBottom: 0, marginTop: 0 },
        ]}
      >
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: index,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: index,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, justifyContent: "center" }}
              key={Math.random() * 10}
            >
              <View style={isFocused ? styles.activeTab : styles.tab}>
                {label === "Home" && (
                  <Image source={home} style={{ height: 25, width: 25 }} />
                )}
                {label === "Store" && (
                  <Image
                    source={shopping}
                    style={{ height: 24, width: 24 }}
                  />
                )}
                {/* {label === "BookPooja" && (
                  <View style={{backgroundColor: Color.orange, height: scale(45), width: scale(45), borderRadius: scale(50)}}>
                    <Image source={bookPooja} style={{ height: 21, width: 31 }} />
                  </View>
                )} */}
                 {label === "BookPooja" && (
                <View
                  style={[
                    {
                      backgroundColor: Color.orange,
                      height: scale(45),
                      width: scale(45),
                      borderRadius: scale(50),
                      justifyContent: "center",
                      alignItems: "center", // Center the image
                    },
                    isFocused ? styles.activeTab : styles.tab,
                  ]}
                >
                  <Image
                    source={bookPooja}
                    style={{ height: scale(21), width: scale(31) }}
                    resizeMode="contain"
                  />
                </View>
              )}
                {label === "Chats" && (
                  <Image
                    source={chat}
                    style={{ height: 23, width: 23 }}
                  />
                )}
                {label === "Profile" && (
                  <Image source={profile} style={{ height: 23, width: 20 }} />
                )}
                {isFocused && (
                  <Text
                    key={Math.floor(Math.random() * 100) + 1}
                    style={styles.activeText}
                  >
                    {label}
                  </Text>
                )}
                {!isFocused && (
                  <Text
                    key={Math.floor(Math.random() * 100) + 1}
                    style={[styles.text]}
                  >
                    {label}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    display: "flex",
    alignSelf: "flex-start",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
   
  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 4,
    gap: 5,
    borderRadius: 15,
  },
  activeTab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 4,
    gap: 5,
  },
  text: {
 
    color: Color.black,
  },
  activeText: {
    color: Color.orange,
  },
});

export default NavigationTab;
