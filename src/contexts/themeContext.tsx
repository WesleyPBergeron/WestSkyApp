import React, { createContext, useContext } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

export type ThemeMode = 'light' | 'dark';

//global Styles for light theme
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
    },
    errorText: {
        color: '#bb2626'
    },
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
    },
    errorText: {
        color: '#bb2626'
    },
});

interface ThemeContextType {
  style: any;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  //grab system color scheme
  const colorScheme = useColorScheme();

  //Variables established for context, default to system theme, if none set, default to dark.
  var style = colorScheme == 'light' ? lightStyle : darkStyle;
  var themeMode: ThemeMode = colorScheme == 'light' ? 'light' : 'dark';

  const setThemeMode = (mode: ThemeMode) => {
    if(mode == "light"){
      style = lightStyle;
      themeMode = mode;
    }
    else if(mode == "dark"){
      style = darkStyle;
      themeMode = mode;
    }
    else{
      style = colorScheme == 'light' ? lightStyle : darkStyle;
      themeMode = mode;
    }
  }

  return (
    <ThemeContext.Provider value={{ style, themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook for importing auth into code
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

