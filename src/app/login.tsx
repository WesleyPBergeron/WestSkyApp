import { TextInputField } from "@/components/textInputField";
import GlobalStyle from "@/globalStyle";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
  const gs = GlobalStyle();
  const router = useRouter();
  const [serverName, onChangeServerName] = useState('https://bsky.social');
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View style={[gs.background, styles.container]}>
      <Text style={gs.text}>Sign In</Text>
      <TextInputField value={serverName} onChangeValue={onChangeServerName} label={'Server'}/>
      <TextInputField value={username} onChangeValue={onChangeUsername} label={'Username'} placeholder="Username/Email"/>
      <TextInputField value={password} onChangeValue={onChangePassword} label={'Password'} placeholder="Password"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
