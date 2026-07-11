import { Button, Card, Host } from "@expo/ui/jetpack-compose";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Host matchContents>
        <Card >
            <Button onClick={() => router.push("/(tabs)/home")}>
                <Text>Login</Text>
            </Button>
        </Card>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
