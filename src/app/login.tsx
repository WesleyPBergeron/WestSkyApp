import Button from "@/components/button";
import { GlobalStyle } from "@/globalStyle";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Appearance, Pressable, StyleSheet, Text, TextInput, useColorScheme, View } from "react-native";

export default function Login() {
  //gets current color scheme from react native hook
  const colorScheme = useColorScheme();

  const [serverName, onChangeServerName] = useState('https://bsky.social');
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const gs = GlobalStyle(colorScheme);

  const toggleTheme = () => {
    const nextScheme = colorScheme === 'dark' ? 'light' : 'dark';
    Appearance.setColorScheme(nextScheme);
  };

  return (
    <View style={[gs.background, styles.container]}>
      <Pressable 
        onPress={toggleTheme} 
        style={({ pressed }) => [
          gs.iconButton, 
          styles.styleButton,
          { opacity: pressed ? 0.7 : 1.0 } // Visual feedback
        ]}
      >
        <Ionicons name="contrast" color={gs.iconButton.color} size={25}/>
      </Pressable>
      <Text style={[gs.h1, styles.header]}>Sign In</Text>
      <View style={[gs.card, styles.card]}>
        <View style={styles.inputBlock}>
          <Text style={gs.h2}>Server</Text>
          <TextInput  style={gs.inputField} value={serverName} onChangeText={(text) => onChangeServerName(text)}/>
        </View>
        <View style={styles.inputBlock}>
          <Text style={gs.h2}>Username</Text>
          <TextInput autoComplete="username" style={gs.inputField} value={username} onChangeText={(text) => onChangeUsername(text)} placeholder="Username/Email" placeholderTextColor={"#999999"}/>
        </View>
        <View style={styles.inputBlock}>
          <Text style={gs.h2}>Password</Text>
          <TextInput secureTextEntry={true} autoComplete="password" style={gs.inputField} value={password} onChangeText={(text) => onChangePassword(text)} placeholder="Password" placeholderTextColor={"#999999"}/>
        </View>
        <Button style={styles.loginButton} text="Log In" icon={'log-in-outline'} onPress={() => console.log('pressed')}/>
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
  styleButton: {
    position: 'absolute',
    top: 50,
    right: 12,
  },
  header: {
    width: '80%',
    textAlign: 'left'
  },
  card: {
    marginTop: 12,
    height: '40%',
    width: '80%'
  },
  inputBlock: {
    marginBottom: 12
  },
  loginButton: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '60%',
    alignSelf: 'center'
  }
});
