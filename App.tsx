import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { store } from './store';
import { RootNavigator } from './navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <View style={{ flex: 1 }}>
            <RootNavigator />
            <StatusBar style="auto" />
          </View>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
