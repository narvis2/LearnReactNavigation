import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

/**
 * navigate(), push() 차이
 * navigation.push -> 화면 전환 시 새로운 화면이 계속 Stack에 쌓임,
 *                    네이티브 스택 내비게이터에서만 사용 가능
 * navigation.navigate -> 화면 전환 시 새로 이동할 화면이 현재 화면과 같으면 새로운 화면을 쌓지 않고 파라미터만 변경한다.
 *                        네이티브 스택 내비게이터 외에 다른 내비게이터에도 있음
 */
function DetailScreen({ route, navigation }) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {route.params.id}</Text>

      <View style={styles.button}>
        <Button
          title="다음"
          onPress={() => navigation.push("Detail", { id: route.params.id + 1 })}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
  },
  button: {
    flexDirection: 'row',
  },
});

export default DetailScreen;
