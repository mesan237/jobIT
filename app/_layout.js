import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    WorkRegular: require("../assets/fonts/WorkSans-Regular.ttf"),
    WorkMedium: require("../assets/fonts/WorkSans-Medium.ttf"),
    WorkBold: require("../assets/fonts/WorkSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
}
