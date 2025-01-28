import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const AddQuestionScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Input
          label="Soru"
          placeholder="Sorunuzu girin"
          multiline
          numberOfLines={4}
        />
        <Input
          label="Cevap"
          placeholder="Cevabı girin"
          multiline
          numberOfLines={4}
        />
        <Button title="Soru Ekle" onPress={() => {}} style={styles.button} />
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
  button: {
    marginTop: SIZES.medium,
  },
}); 