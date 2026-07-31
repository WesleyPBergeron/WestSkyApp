import Button from "@/components/button";
import { useAuth } from "@/contexts/authContext";
import { useTheme } from "@/contexts/themeContext";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Appearance, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  //establish contexts for auth and color scheme
  const auth = useAuth();
  const globalTheme = useTheme();

  const [serverName, onChangeServerName] = useState('bsky.social');
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [loading, onChangeLoading] = useState(false);
  const [loginFailiure, onChangeLoginFailiure] = useState(false);

  const toggleTheme = () => {
    const nextScheme = globalTheme.themeMode === 'dark' ? 'light' : 'dark';
    Appearance.setColorScheme(nextScheme);
  };

  const logIn = async () => {
    console.log(auth.agent.session);
    onChangeLoading(true);
    onChangeLoginFailiure(false);
    setTimeout(async () => {
      const response = await auth.logIn(serverName, username, password);
      if(!response){
        onChangeLoginFailiure(true);
      }
      onChangeLoading(false);
    }, 1500)
    
  }

  return (
    <View style={[globalTheme.style.background, styles.container]}>
      <Pressable 
        onPress={toggleTheme} 
        style={({ pressed }) => [
          globalTheme.style.iconButton, 
          styles.styleButton,
          { opacity: pressed ? 0.7 : 1.0 } // Visual feedback
        ]}
      >
        <Ionicons name="contrast" color={globalTheme.style.iconButton.color} size={25}/>
      </Pressable>
      <Text style={[globalTheme.style.h1, styles.header]}>Sign In</Text>
      <View style={[globalTheme.style.card, styles.card]}>
        <View style={styles.inputBlock}>
          <Text style={globalTheme.style.h2}>Server</Text>
          <TextInput  style={globalTheme.style.inputField} value={serverName} onChangeText={(text) => onChangeServerName(text)}/>
        </View>
        <View style={styles.inputBlock}>
          <Text style={globalTheme.style.h2}>Username</Text>
          <TextInput autoComplete="username" style={globalTheme.style.inputField} value={username} onChangeText={(text) => onChangeUsername(text)} placeholder="Username/Email" placeholderTextColor={"#999999"}/>
        </View>
        <View style={styles.inputBlock}>
          <Text style={globalTheme.style.h2}>Password</Text>
          <TextInput secureTextEntry={true} autoComplete="password" style={globalTheme.style.inputField} value={password} onChangeText={(text) => onChangePassword(text)} placeholder="Password" placeholderTextColor={"#999999"}/>
        </View>
        <Button style={styles.loginButton} text="Log In" icon={'log-in-outline'} onPress={logIn} loading={loading}/>
        {loginFailiure && (<Text style={[globalTheme.style.errorText, styles.errorText]}>Failed to log in. Server, username, or password is incorrect.</Text>)}
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
    height: '43%',
    width: '80%'
  },
  inputBlock: {
    marginBottom: 12
  },
  loginButton: {
    marginTop: 12,
    width: '60%',
    alignSelf: 'center'
  },
  errorText: {
    marginTop: 18,
    textAlign:'center'
  }
});
