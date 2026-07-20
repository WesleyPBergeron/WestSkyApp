import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

interface ButtonProps {
    onPress: null | ((event: GestureResponderEvent) => void) | undefined;
    text?: string;
    style?: StyleProp<ViewStyle>;
    icon?: string;
    loading?: boolean;
}

export default function Button({text, onPress, style, icon, loading}: ButtonProps) {

  return (
    <View style={[style, styles.container]}>
        <Pressable style={[styles.button]} onPress={onPress} disabled={loading}>
            {icon && !loading && (<Ionicons style={styles.icon} name={icon} color='#ffffff' size={20}/>)}
            {text && !loading && (
                <Text style={styles.text}>
                    {text}
                </Text>
            )}
            {loading && (<ActivityIndicator color='#ffffff'/>)}
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: undefined
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        paddingRight: 5,
        paddingLeft: 5,
    },
    icon: {
        paddingRight: 5,
        paddingLeft: 5,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#0d8a9b',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 6,
        boxShadow: '4px 4px 2px 2px rgba(0, 0, 0, 0.15)',
    },
});
