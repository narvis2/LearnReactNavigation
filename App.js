/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./sreens/HomeScreen";
import DetailScreen from "./sreens/DetailScreen";
import HeaderlessScreen from "./sreens/HeaderlessScreen";
import { View, Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // navigate stack navigator 에서 관리하는 모든 화면에 screenOptions 넣기
        // screenOptions={{
        //   headerShown: false, navigate stack navigator 에서 관리하는 모든 화면에 Header 없애기
        // }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "홈",
            headerStyle: {
              backgroundColor: "#29b6f6",
            },
            // 헤더의 텍스트, 버튼들 색상
            headerTintColor: "#ffffff",
            // 타이틀 텍스트의 스타일
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          // 헤더 title 지정 방법 1
          // options={({ route }) => ({
          //   title: `상세 정보 ${route.params.id}`,
          // })}
          options={{
            headerLeft: ({ onPress }) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({ children }) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
            // Android 에서 <- 화살표 없애기
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
