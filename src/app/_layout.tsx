import { AuthProvider } from "@/contexts/authContext";
import { ThemeProvider } from "@/contexts/themeContext";
import { Stack } from "expo-router";
import { StatusBar, useColorScheme, View } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme() == 'light' ? 'dark-content': 'light-content';


  return (
    <AuthProvider>
      <ThemeProvider>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle={colorScheme}/>
          <Stack initialRouteName="index" screenOptions={{ headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="login"/>
            <Stack.Screen name="(tabs)"/>
          </Stack>
        </View>
      </ThemeProvider>
    </AuthProvider>
  );
}
