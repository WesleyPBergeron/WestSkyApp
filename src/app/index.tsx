import { Redirect } from "expo-router";

export default function RootIndex() {
  // establish an agent for bluesky with saved creds, check if user is logged in, redirect.
  // if (false) {
  //   return <Redirect href="/(tabs)/home" />;
  // }

  return <Redirect href="/login" />;
}