import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, MainTabParamList } from './types';
import { AuthNavigator } from './AuthNavigator';
import { HomeScreen } from '../screens/main/HomeScreen';
import { AddQuestionScreen } from '../screens/main/AddQuestionScreen';
import { ReviewScreen } from '../screens/main/ReviewScreen';
import { ProfileScreen } from '../screens/main/ProfileScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { COLORS } from '../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: COLORS.card,
        height: 65,
        paddingBottom: 12,
        paddingTop: 8,
      },
      tabBarItemStyle: {
        padding: 5,
      },
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.textSecondary,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Ana Sayfa',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="apps" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="AddQuestion"
      component={AddQuestionScreen}
      options={{
        tabBarLabel: 'Soru Ekle',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Review"
      component={ReviewScreen}
      options={{
        tabBarLabel: 'Tekrar Et',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="book-open-page-variant" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profil',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export const RootNavigator = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="Main" component={MainTabs} />
      )}
    </Stack.Navigator>
  );
}; 