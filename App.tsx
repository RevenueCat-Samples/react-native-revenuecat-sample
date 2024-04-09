import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  // Platform,
} from 'react-native';
import Purchases from 'react-native-purchases';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// const API_KEY_APPLE = '';
// const API_KEY_ANDROID = '';

function App(): JSX.Element {
  const isDarkModeInitial = useColorScheme() === 'dark';
  const [isDarkMode, setIsDarkMode] = useState<boolean>(isDarkModeInitial);
  const [cosmicSecret, setCosmicSecret] = useState<string>(
    'The stars hold ancient wisdom.',
  );

  const lightModeStyles = {
    backgroundColor: Colors.lighter,
    textColor: Colors.darker,
    buttonColor: '#4285F4',
  };

  const darkModeStyles = {
    backgroundColor: Colors.darker,
    textColor: Colors.lighter,
    buttonColor: '#483D8B',
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? darkModeStyles.backgroundColor
      : lightModeStyles.backgroundColor,
  };

  const getRandomCosmicSecret = () => {
    const cosmicSecrets = [
      'The stars hold ancient wisdom.',
      'Time bends in cosmic whispers.',
      'Galaxies sing in celestial harmony.',
      'Moonlight carries dreams across the cosmos.',
      'Ethereal beings dance in the cosmic ballet.',
      'Whispers of the nebula reveal hidden truths.',
      'Celestial gates open to the seekers.',
      'The cosmic river flows with stardust currents.',
      'In the silence, the universe speaks.',
      'Astral winds carry tales of distant realms.',
      'Planets whisper the secrets of the ancients.',
      'The cosmic symphony orchestrates existence.',
      'Constellations map the journey of the soul.',
      'Beyond the veil, cosmic energies converge.',
      'The dance of meteors paints the night sky.',
      'Solar flares release celestial energies.',
      'Galactic serenity resides in cosmic echoes.',
      'Mystical energies converge at the eventide.',
      'Orbiting moons witness cosmic revelations.',
      'Stellar dust settles on the shores of eternity.',
      'The celestial compass guides the wanderer.',
      'Interstellar realms cradle cosmic dreams.',
      'Auroras weave tales of cosmic enchantment.',
      'In the cosmic void, silence echoes loudest.',
      'Waves of energy pulse through cosmic veins.',
      'Celestial whispers guide the pathfinder.',
      'Starlight weaves a tapestry of cosmic tales.',
      'Nebulaic mysteries unfold in cosmic time.',
      'A cosmic heartbeat echoes through infinity.',
      'Ephemeral comets script cosmic destinies.',
    ];

    const randomIndex = Math.floor(Math.random() * cosmicSecrets.length);
    const secret = cosmicSecrets[randomIndex];

    setCosmicSecret(secret);
  };

  const onPressDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);

    Purchases.configure({apiKey: 'strp_yjrXKizjGufFLYPRoCAuSOgPPyp'});

    // if (Platform.OS === 'ios') {
    //   Purchases.configure({apiKey: API_KEY_APPLE});
    // } else if (Platform.OS === 'android') {
    //   Purchases.configure({apiKey: API_KEY_ANDROID});
    // }
  }, []);

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: isDarkMode
          ? darkModeStyles.backgroundColor
          : lightModeStyles.backgroundColor,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollViewContentContainer}
        style={{
          ...styles.scrollView,
          backgroundColor: isDarkMode
            ? darkModeStyles.backgroundColor
            : lightModeStyles.backgroundColor,
        }}>
        <View
          style={{
            ...styles.outerView,
            backgroundColor: backgroundStyle.backgroundColor,
          }}>
          <Text
            style={{
              ...styles.appName,
              color: isDarkMode
                ? darkModeStyles.textColor
                : lightModeStyles.textColor,
            }}>
            Celestial Cipher
          </Text>
          <View style={styles.contentContainer}>
            <Text
              style={{
                ...styles.message,
                color: isDarkMode
                  ? darkModeStyles.textColor
                  : lightModeStyles.textColor,
              }}>
              {cosmicSecret}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Refresh Cosmic Secret"
              onPress={getRandomCosmicSecret}
              color={
                isDarkMode
                  ? darkModeStyles.buttonColor
                  : lightModeStyles.buttonColor
              }
            />
            <Button
              title="Toggle Cosmic Mode"
              onPress={onPressDarkMode}
              color={
                isDarkMode
                  ? darkModeStyles.buttonColor
                  : lightModeStyles.buttonColor
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#990000',
  },
  scrollViewContentContainer: {
    flexGrow: 1,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#009900',
  },
  outerView: {
    flex: 1,
    padding: 16,
    height: '100%',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
