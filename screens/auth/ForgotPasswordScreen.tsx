import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';
import { COLORS, SIZES, FONTS } from '../../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>;

export const ForgotPasswordScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    general: '',
  });

  const validateForm = () => {
    const newErrors = {
      email: '',
      general: '',
    };

    if (!email) {
      newErrors.email = 'E-posta adresi gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    setErrors(newErrors);
    return !newErrors.email;
  };

  const handleResetPassword = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      // TODO: Şifre sıfırlama işlemleri
      setErrors({ ...errors, general: '' });
    } catch (error) {
      setErrors({ ...errors, general: 'Şifre sıfırlama işlemi başarısız oldu' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Giriş Yap</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Şifremi Unuttum</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.description}>
          Şifrenizi sıfırlamak için e-posta adresinizi girin. Size şifre sıfırlama bağlantısı göndereceğiz.
        </Text>
        
        <Input
          label="E-posta"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErrors({ ...errors, email: '', general: '' });
          }}
          placeholder="ornek@email.com"
          error={errors.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Button
          title="Şifremi Sıfırla"
          onPress={handleResetPassword}
          loading={loading}
          style={styles.resetButton}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Şifrenizi hatırladınız mı? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLinkText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.decorationTop} />
      <View style={styles.decorationBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.large,
    paddingTop: SIZES.extraLarge * 2,
    paddingBottom: SIZES.large,
  },
  headerText: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
  loginText: {
    fontSize: SIZES.font,
    color: COLORS.textSecondary,
  },
  form: {
    flex: 1,
    padding: SIZES.large,
    paddingTop: SIZES.extraLarge,
  },
  description: {
    fontSize: SIZES.font,
    color: COLORS.textSecondary,
    marginBottom: SIZES.extraLarge,
    textAlign: 'center',
    fontFamily: FONTS.regular,
  },
  resetButton: {
    marginTop: SIZES.extraLarge,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.large,
  },
  footerText: {
    color: COLORS.textSecondary,
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
  },
  loginLinkText: {
    color: COLORS.primary,
    fontSize: SIZES.font,
    fontFamily: FONTS.medium,
  },
  decorationTop: {
    position: 'absolute',
    top: -100,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    opacity: 0.1,
  },
  decorationBottom: {
    position: 'absolute',
    bottom: -100,
    left: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    opacity: 0.1,
  },
}); 
