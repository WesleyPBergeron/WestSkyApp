import { Stack } from "expo-router";
import { StatusBar, useColorScheme, View } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme() == 'light' ? 'dark-content': 'light-content';


  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={colorScheme}/>
      <Stack initialRouteName="login" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="login"/>
        <Stack.Screen name="(tabs)"/>
      </Stack>
    </View>
  );
}
