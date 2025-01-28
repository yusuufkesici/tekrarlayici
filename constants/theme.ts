export const COLORS = {
  // Ana renkler
  primary: '#8B5CF6', // Ana mor
  secondary: '#7C3AED', // Koyu mor
  accent: '#F59E0B', // Turuncu vurgu
  
  // Arka plan renkleri
  background: '#0F172A', // Koyu lacivert
  card: '#1E293B', // Kart arka planı
  cardAlt: '#334155', // Alternatif kart
  
  // Grafik renkleri
  chart: {
    green: '#10B981', // Yeşil çizgi
    blue: '#3B82F6', // Mavi çizgi
    purple: '#8B5CF6', // Mor çizgi
  },
  
  // Form alanları
  input: {
    background: '#1E293B',
    text: '#F1F5F9',
    placeholder: '#64748B',
    border: '#334155',
    borderFocus: '#8B5CF6',
  },
  
  // Metin renkleri
  text: '#F1F5F9', // Ana metin
  textSecondary: '#94A3B8', // İkincil metin
  textMuted: '#64748B', // Soluk metin
  
  // Durum renkleri
  success: '#10B981', // Yeşil
  error: '#EF4444', // Kırmızı
  warning: '#F59E0B', // Turuncu
  
  // Progress bar renkleri
  progress: {
    background: '#334155',
    fill: '#8B5CF6',
    fillSecondary: '#7C3AED',
  },
  
  // Temel renkler
  white: '#FFFFFF',
  black: '#000000',
  gray: '#64748B',
  
  // Gölgeler için
  shadowLight: 'rgba(139, 92, 246, 0.1)', // Mor gölge
  shadowDark: 'rgba(0, 0, 0, 0.2)',
};

export const FONTS = {
  regular: 'FuturaPT-Book',
  medium: 'FuturaPT-Medium',
  bold: 'FuturaPT-Bold',
  demi: 'FuturaPT-Demi',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 20,
  extraLarge: 28,
  huge: 34,
  
  // Özel boyutlar
  icon: 24,
  badge: 32,
  card: 80,
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.shadowLight,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  medium: {
    shadowColor: COLORS.shadowDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  strong: {
    shadowColor: COLORS.shadowDark,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
  },
}; 