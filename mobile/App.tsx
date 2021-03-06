import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

import { Roboto_400Regular, Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';


import Points from './src/pages/Points';
import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
        <Points />
      </>
    );
  }
}
