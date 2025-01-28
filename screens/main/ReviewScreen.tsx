import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';

export const ReviewScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Soru</Text>
        <Text style={styles.question}>2 + 2 kaç eder?</Text>
        <Button
          title="Cevabı Göster"
          onPress={() => {}}
          style={styles.button}
        />
        <Button
          title="Kolay"
          variant="outline"
          onPress={() => {}}
          style={styles.button}
        />
        <Button
          title="Zor"
          variant="secondary"
          onPress={() => {}}
          style={styles.button}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.medium,
  },
  card: {
    padding: SIZES.large,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.base,
  },
  question: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    marginBottom: SIZES.large,
  },
  button: {
    marginTop: SIZES.medium,
  },
}); 