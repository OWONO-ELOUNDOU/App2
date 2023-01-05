import React, { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from "./src/constants/theme";
import Router from "./src/router/router";

const slides = [
  {
    id: 1,
    title: 'Account registration',
    description: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    image: require('./assets/onboard/Account.png')
  },
  {
    id: 2,
    title: 'Recipe Creation',
    description: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    image: require('./assets/onboard/content.png')
  },
  {
    id: 3,
    title: 'Nutriment Search',
    description: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    image: require('./assets/onboard/search.png')
  }
]

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);


  StatusBar.setBarStyle('light-content', true);

  const buttonLabel = (label) => {
    return(
      <View style={{ padding: 12 }} >
        <Text style={{ color: COLORS.title, fontWeight: '600', fontSize: SIZES.h4 }}>
          { label }
        </Text>
      </View>
    )
  }

  if(!showHomePage) {
    return(
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return(
            <View style={{ flex: 1, alignItems: 'center', padding: 15, paddingTop: 100 }} >
              <Image source={item.image} style={{ width: SIZES.width - 80, height: 400 }} resizeMode="contain" />

              <Text style={{ fontWeight: 'bold', fontSize: SIZES.h1, color: COLORS.title }} >
                { item.title }
              </Text>

              <Text style={{ alignItems: 'center', paddingTop: 5, color: COLORS.title }} >
                { item.description }
              </Text>

            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    )
  }

  return (
    <Router />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
