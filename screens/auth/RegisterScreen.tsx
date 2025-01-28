import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';
import { COLORS, SIZES, FONTS } from '../../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    general: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      general: '',
    };

    if (!name) {
      newErrors.name = 'Ad Soyad gereklidir';
    }

    if (!email) {
      newErrors.email = 'E-posta adresi gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!password) {
      newErrors.password = 'Şifre gereklidir';
    } else if (password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalıdır';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.password;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      // TODO: Kayıt işlemleri
      setErrors({ ...errors, general: '' });
    } catch (error) {
      setErrors({ ...errors, general: 'Kayıt olurken bir hata oluştu' });
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
        <Text style={styles.headerText}>Kayıt Ol</Text>
      </View>

      <View style={styles.form}>
        <Input
          label="Kullanıcı Adı"
          value={name}
          onChangeText={(text) => {
            setName(text);
            setErrors({ ...errors, name: '', general: '' });
          }}
          placeholder="kullaniciadi"
          error={errors.name}
          autoCapitalize="none"
        />
        
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
        
        <Input
          label="Şifre"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setErrors({ ...errors, password: '', general: '' });
          }}
          placeholder="••••••"
          secureTextEntry
          error={errors.password}
        />

        <TouchableOpacity 
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotPassword}
        >
          <Text style={styles.forgotPasswordText}>şifremi unuttum?</Text>
        </TouchableOpacity>

        <Button
          title="Kayıt Ol"
          onPress={handleRegister}
          loading={loading}
          style={styles.registerButton}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Zaten hesabın var mı? </Text>
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: SIZES.small,
    marginBottom: SIZES.extraLarge,
  },
  forgotPasswordText: {
    color: COLORS.primary,
    fontSize: SIZES.font,
  },
  registerButton: {
    marginTop: SIZES.medium,
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
  },
  loginLinkText: {
    color: COLORS.primary,
    fontSize: SIZES.font,
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
