import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { RootState } from '../../store';

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Profil</Text>
        <Text style={styles.info}>Ad: {user?.name || 'Bilinmiyor'}</Text>
        <Text style={styles.info}>E-posta: {user?.email || 'Bilinmiyor'}</Text>
        <Text style={styles.stats}>Toplam Soru: 50</Text>
        <Text style={styles.stats}>Başarı Oranı: %80</Text>
        <Button
          title="Çıkış Yap"
          variant="secondary"
          onPress={handleLogout}
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
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.large,
  },
  info: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    marginBottom: SIZES.base,
  },
  stats: {
    fontSize: SIZES.font,
    color: COLORS.textSecondary,
    marginBottom: SIZES.base,
  },
  button: {
    marginTop: SIZES.large,
  },
}); 