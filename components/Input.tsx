import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, style, ...props }: Props) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          style,
        ]}
        placeholderTextColor={COLORS.input.placeholder}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.medium,
  },
  label: {
    color: COLORS.primary,
    fontSize: SIZES.small,
    marginBottom: SIZES.base,
    fontFamily: FONTS.medium,
  },
  input: {
    backgroundColor: COLORS.input.background,
    color: COLORS.input.text,
    borderRadius: SIZES.base,
    padding: SIZES.medium,
    fontSize: SIZES.font,
    borderWidth: 1,
    borderColor: COLORS.input.border,
  },
  inputError: {
    borderColor: COLORS.error,
  },
  error: {
    color: COLORS.error,
    fontSize: SIZES.small,
    marginTop: SIZES.base / 2,
  },
}); 
