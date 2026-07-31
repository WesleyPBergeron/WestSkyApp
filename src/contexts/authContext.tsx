import { BskyAgent } from '@atproto/api';
import React, { createContext, useContext } from 'react';
interface AuthContextType {
  agent: BskyAgent;
  logIn: (service: string, username: string, password: string) => Promise<boolean>;
  logOut: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const agent = new BskyAgent({service: "https://bsky.social"});

  const logIn = async(serverName: string, username: string, password: string) => {
    try {
      await agent.login({identifier: username + '.' + serverName, password: password})
      console.log('agent established, successfully logged In ');
      return true;
    }
    catch{
      console.warn('Failed to establish bluesky agent under the service: "' + serverName + '".');
      return false;
    }
  }

  const logOut = async() => {
    try {
      await agent.logout()
      console.log('Successfully logged out.');
      return true;
    }
    catch{
      console.warn('Failed to log out.');
      return false;
    }
  }

  return (
    <AuthContext.Provider value={{ agent, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook for importing auth into code
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}