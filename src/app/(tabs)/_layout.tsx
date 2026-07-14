import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs initialRouteName="home">
        <Tabs.Screen
            name="home"
            options={({
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size}/>
                )
            })}
        />
        <Tabs.Screen
            name="profile"
            options={({
                title: "Profile",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size}/>
                )
            })}
        />
    </Tabs>
  );
}
