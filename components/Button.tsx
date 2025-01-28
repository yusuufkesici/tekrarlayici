import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  style,
  textStyle,
}) => {
  const getBackgroundColor = () => {
    if (disabled) return COLORS.gray;
    switch (variant) {
      case 'secondary':
        return COLORS.secondary;
      case 'outline':
        return 'transparent';
      default:
        return COLORS.primary;
    }
  };

  const getBorderColor = () => {
    if (disabled) return COLORS.gray;
    switch (variant) {
      case 'secondary':
        return COLORS.secondary;
      case 'outline':
        return COLORS.primary;
      default:
        return COLORS.primary;
    }
  };

  const getTextColor = () => {
    if (disabled) return COLORS.white;
    switch (variant) {
      case 'outline':
        return COLORS.primary;
      default:
        return COLORS.white;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
        },
        variant === 'outline' && styles.outlineButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <Text style={[styles.text, { color: getTextColor() }, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: SIZES.base,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.large,
  },
  outlineButton: {
    borderWidth: 1,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
  },
}); 