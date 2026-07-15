import GlobalStyle from "@/globalStyle";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  const gs = GlobalStyle();
  const router = useRouter();
  const [serverName, onChangeServerName] = useState('https://bsky.social');
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View style={[gs.background, styles.container]}>
      <Text style={[gs.h1, styles.header]}>Sign In</Text>
      <View style={[gs.card, styles.card]}>
        <View style={styles.inputBlock}>
          <Text style={gs.h2}>Server</Text>
          <TextInput style={gs.inputField} value={serverName} onChangeText={onChangeServerName}/>
        </View>
        <View style={styles.inputBlock}>
          <Text style={gs.h2}>Username</Text>
          <TextInput style={gs.inputField} value={username} onChangeText={onChangeUsername} placeholder="Username/Email" placeholderTextColor={"#999999"}/>
        </View>
        <View style={styles.inputBlock}>
          <Text style={gs.h2}>Password</Text>
          <TextInput style={gs.inputField} value={password} onChangeText={onChangePassword} placeholder="Password" placeholderTextColor={"#999999"}/>
        </View>
      </View>
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
  header: {
    width: '80%',
    textAlign: 'left'
  },
  card: {
    marginTop: 12,
    height: '50%',
    width: '80%'
  },
  inputBlock: {
    marginBottom: 12
  }
});
