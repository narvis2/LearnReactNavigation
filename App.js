/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Button } from "react-native";

// const Stack = createNativeStackNavigator();

/**
 * navigate stack 예제
 */
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         // navigate stack navigator 에서 관리하는 모든 화면에 screenOptions 넣기
//         // screenOptions={{
//         //   headerShown: false, navigate stack navigator 에서 관리하는 모든 화면에 Header 없애기
//         // }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: "홈",
//             headerStyle: {
//               backgroundColor: "#29b6f6",
//             },
//             // 헤더의 텍스트, 버튼들 색상
//             headerTintColor: "#ffffff",
//             // 타이틀 텍스트의 스타일
//             headerTitleStyle: {
//               fontWeight: "bold",
//               fontSize: 20,
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Detail"
//           component={DetailScreen}
//           // 헤더 title 지정 방법 1
//           // options={({ route }) => ({
//           //   title: `상세 정보 ${route.params.id}`,
//           // })}
//           options={{
//             headerLeft: ({ onPress }) => (
//               <TouchableOpacity onPress={onPress}>
//                 <Text>Left</Text>
//               </TouchableOpacity>
//             ),
//             headerTitle: ({ children }) => (
//               <View>
//                 <Text>{children}</Text>
//               </View>
//             ),
//             headerRight: () => (
//               <View>
//                 <Text>Right</Text>
//               </View>
//             ),
//             // Android 에서 <- 화살표 없애기
//             headerBackVisible: false,
//           }}
//         />
//         <Stack.Screen
//           name="Headerless"
//           component={HeaderlessScreen}
//           options={{
//             headerShown: false,
//           }}
//         ></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
}

// DrawerNavigator 에서는 navigation.goBack() 을 사용
function SettingScreen({ navigation }) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history"
        drawerContent={({ navigation }) => (
          <SafeAreaView>
            <Text>A Custom Drawer</Text>
            <Button
              onPress={() => navigation.closeDrawer()}
              title="Drawer 닫기"
            />
          </SafeAreaView>
        )}
        screenOptions={{
          drawerActiveBackgroundColor: "#fb8c00", // 활성화된 항복의 배경색 지정
          drawerActiveTintColor: "white", // 활성화된 항목의 텍스트 색상 지정
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "홈" }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{ title: "설정" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
