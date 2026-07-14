import { StyleSheet, useColorScheme } from "react-native";

export default function GlobalStyle() {
    //gets current color scheme from react native hook
    const colorScheme = useColorScheme();

    //global styles for light theme
    const lightStyle = StyleSheet.create({
        background: {
            backgroundColor: '#FFFFFF',
            
        },
        h1: {
            fontSize: 50,
            fontWeight: 'bold',

        },
        h2: {
            fontSize: 30,
            fontWeight: 'bold',
        },
        subtitle: {
            color: '#777777',
            fontSize: 20,
            fontWeight: 'bold',
        },
        subtext: {
            color: '#777777',
        }
    });

    //global styles for dark theme
    const darkStyle = StyleSheet.create({
        background: {
            backgroundColor: '#101225',
        },
        h1: {
            fontSize: 50,
            fontWeight: 'bold',

        },
        h2: {
            fontSize: 30,
            fontWeight: 'bold',
        },
        subtitle: {
            color: '#999999',
            fontSize: 20,
            fontWeight: 'bold',
        },
        subtext: {
            color: '#999999',
        },
        text: {
            color: '#FFFFFF'
        }
    });

    //defaults to dark if unspecified
    return (colorScheme === 'light' ? darkStyle : darkStyle);
}

