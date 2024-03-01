import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

import { COLORS, images, icons, SIZES } from "../constants";
import {
  ScreenHeaderBtn,
  Popularjobs,
  Nearbyjobs,
  Welcome,
} from "../components";

const Home = () => {
  const inset = useSafeAreaInsets();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        paddingBottom: inset.bottom,
        paddingTop: inset.top,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
        {/* <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" /> */}
      </ScrollView>
    </View>
  );
};

export default () => (
  <SafeAreaProvider>
    <Home />
  </SafeAreaProvider>
);
