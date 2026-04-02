import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [screen, setScreen] = useState('welcome');

  if (screen === 'welcome') {
    return (
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.logo}>🐝</Text>
            <Text style={styles.title}>HiveKey</Text>
            <Text style={styles.subtitle}>Secure. Simple. Seamless.</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setScreen('home')}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Home Dashboard</Text>
          <TouchableOpacity onPress={() => setScreen('welcome')}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Keys</Text>
            <Text style={styles.cardValue}>12</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Recent Activity</Text>
            <Text style={styles.cardItem}>• Main Entrance Opened</Text>
            <Text style={styles.cardItem}>• Lab Door Locked</Text>
            <Text style={styles.cardItem}>• Guest Access Created</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Security Status</Text>
            <Text style={[styles.cardValue, {color: '#28A745'}]}>Protected</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { fontSize: 80, marginBottom: 10 },
  title: { fontSize: 36, fontWeight: 'bold', color: '#212529' },
  subtitle: { fontSize: 18, color: '#6C757D', marginBottom: 40 },
  button: { backgroundColor: '#FFD700', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30, elevation: 5 },
  buttonText: { fontSize: 18, fontWeight: 'bold', color: '#212529' },
  header: { height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#DEE2E6', backgroundColor: '#FFF' },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  logoutText: { color: '#007BFF', fontWeight: '600' },
  scrollContent: { padding: 20 },
  card: { backgroundColor: '#FFF', padding: 20, borderRadius: 15, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 3 },
  cardTitle: { fontSize: 14, color: '#6C757D', fontWeight: '600', textTransform: 'uppercase', marginBottom: 10 },
  cardValue: { fontSize: 28, fontWeight: 'bold', color: '#212529' },
  cardItem: { fontSize: 15, color: '#495057', marginTop: 8 },
});

export default App;
