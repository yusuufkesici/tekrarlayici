import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';
import { COLORS, SIZES, FONTS } from '../../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/authSlice';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export const LoginScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: '',
  });

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: '',
      general: '',
    };

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
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Burada normalde backend'e istek atılacak
      // Şimdilik test için basit bir kontrol yapalım
      if (email === 'test@test.com' && password === '123456') {
        const user = {
          id: '1',
          email: email,
          name: 'Test Kullanıcı',
        };
        dispatch(setUser(user));
        setErrors({ ...errors, general: '' });
      } else {
        setErrors({ ...errors, general: 'E-posta veya şifre hatalı' });
      }
    } catch (error) {
      setErrors({ ...errors, general: 'Giriş yapılırken bir hata oluştu' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Giriş Yap</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Input
            label="Kullanıcı Adı"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setErrors({ ...errors, email: '', general: '' });
            }}
            placeholder="kullaniciadi"
            error={errors.email}
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
            title="Giriş Yap"
            onPress={handleLogin}
            loading={loading}
            style={styles.loginButton}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Hesabın yok mu? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.createText}>Kayıt Ol</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.decorationTop} />
      <View style={styles.decorationBottom} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
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
  registerText: {
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
  loginButton: {
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
  createText: {
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
