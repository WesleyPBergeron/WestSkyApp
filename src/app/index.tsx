import { useAuth } from "@/contexts/authContext";
import { useRouter } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { useEffect } from "react";

export default function RootIndex() {
  const auth = useAuth();
  const router = useRouter();
  //on initalization of the app, check for login credentials.
  useEffect(() => {
    //self invoked async function to call asynchronous code inside of use effect
    (async() => {
      const savedCredentials = await SecureStore.getItemAsync('savedCredentials');
      if(savedCredentials != null){
        try{
          const parsedCreds = JSON.parse(savedCredentials);
          const response = await auth.logIn(parsedCreds.service, parsedCreds.username, parsedCreds.password);
          if(response){
            router.replace('/(tabs)/home')
          }
        }
        catch{
          console.error("saved credentails invalid!");
        }
      }
      router.replace('/login');
    })()
  }, []);

  return;
}