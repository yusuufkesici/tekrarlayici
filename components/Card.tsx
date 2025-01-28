import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../constants/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'elevated';
}

export const Card: React.FC<CardProps> = ({ children, style, variant = 'default' }) => {
  return (
    <View
      style={[
        styles.card,
        variant === 'elevated' && styles.elevatedCard,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    padding: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.gray + '20',
  },
  elevatedCard: {
    ...SHADOWS.medium,
    borderWidth: 0,
  },
}); 