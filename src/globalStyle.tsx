import { StyleSheet } from "react-native";

export function GlobalStyle(colorScheme: string) {
    //global styles for light theme
    const lightStyle = StyleSheet.create({
        background: {
            backgroundColor: '#ffffff', 
        },
        h1: {
            fontSize: 40,
            fontWeight: 'bold',
            color: '#000000'

        },
        h2: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000000'
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
            color: '#000000'
        },
        card: {
            backgroundColor: '#FFFFFF',
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#999999',
            borderStyle: 'solid',
            boxShadow: '4px 4px 2px 2px rgba(0, 0, 0, 0.15)',
            padding: 12,
        },
        inputField: {
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#999999',
            borderRadius: 6,
            backgroundColor: '#ebebeb',
            width: '100%',
            color: '#000000',
            paddingLeft: 6,
            paddingRight: 6
        },
        iconButton: {
            backgroundColor: '#FFFFFF',
            color: '#000000',
            
        }
    });

    //global styles for dark theme
    const darkStyle = StyleSheet.create({
        background: {
            backgroundColor: '#101225',
        },
        h1: {
            fontSize: 40,
            fontWeight: 'bold',
            color: '#FFFFFF'

        },
        h2: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF'
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
        },
        card: {
            backgroundColor: '#101225',
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#999999',
            borderStyle: 'solid',
            boxShadow: '4px 4px 2px 2px rgba(0, 0, 0, 0.15)',
            padding: 12,
        },
        inputField: {
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#999999',
            borderRadius: 6,
            backgroundColor: '#1b1e3d',
            width: '100%',
            color: '#FFFFFF',
            paddingLeft: 6,
            paddingRight: 6
        },
        iconButton: {
            backgroundColor: '#101225',
            color: '#FFFFFF'
        }
    });

    //defaults to dark if unspecified
    return (colorScheme === 'light' ? lightStyle : darkStyle);
}

