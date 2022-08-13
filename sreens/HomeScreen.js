import React, { useEffect } from "react";
import { View, Button } from "react-native";

/**
 * 드로어 내비게이터에서 navigation.push, navigation.pop 같은 기능들은 호환되지 않음
 */
function HomeScreen({ navigation }) {
  // useEffect Hook 을 사용하여 컴포넌트가 화면에 나타났을 때 navigation.setOptions 를 사용하여 헤더의 제목을 바꿈
  useEffect(() => {
    navigation.setOptions({
      title: "홈",
    });
  }, [navigation]);
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.push("Detail", { id: 1 })}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => navigation.push("Detail", { id: 2 })}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => navigation.push("Detail", { id: 3 })}
      />
      <Button
        title="Headless 열기"
        onPress={() => navigation.push("Headerless")}
      />
    </View>
  );
}

export default HomeScreen;
