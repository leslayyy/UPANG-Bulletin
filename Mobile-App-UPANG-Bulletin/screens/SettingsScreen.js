import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import COLORS from '../constants/colors';

const SettingsScreen = ({ navigation }) => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigateTo('AboutUs')} style={styles.button}>
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateTo('Guidelines')} style={styles.button}>
        <Text style={styles.buttonText}>Guidelines</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={[styles.button, styles.logoutButton]}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grey // Use a white background
  },
  button: {
    padding: 16,
    backgroundColor: '#355E3B', // Use a light gray background
    borderRadius: 10,
    marginBottom: 16,
    borderColor: COLORS.primary
  },
  logoutButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white', // Use black text
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Center-align the text
  },
});

export default SettingsScreen;
