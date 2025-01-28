import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS } from '../../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../navigation/types';

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Seviye Kartı */}
        <View style={[styles.card, styles.levelCard]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Öğrenme Seviyesi</Text>
            <TouchableOpacity>
              <Text style={styles.cardLink}>Detaylar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.levelText}>7. seviyedesin</Text>
          <Text style={styles.levelSubtext}>Aralıklı Tekrar Yolu</Text>

          <View style={styles.progressBar}>
            {[...Array(20)].map((_, i) => (
              <View
                key={i}
                style={[
                  styles.progressSegment,
                  i < 15 && styles.progressSegmentFilled,
                  i === 14 && styles.progressSegmentCurrent,
                ]}
              />
            ))}
          </View>

          <View style={styles.levelMarkers}>
            <View style={styles.levelMarker}>
              <View style={[styles.levelDot, styles.levelDotActive]}>
                <Text style={styles.levelNumber}>VII</Text>
              </View>
              <Text style={styles.levelPercent}>25%</Text>
            </View>
            <Text style={styles.levelPercent}>50%</Text>
            <Text style={styles.levelPercent}>75%</Text>
            <View style={styles.levelMarker}>
              <View style={styles.levelDot}>
                <Text style={styles.levelNumber}>VIII</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Başarılar Kartı */}
        <View style={[styles.card, styles.achievementsCard]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Başarılar</Text>
            <TouchableOpacity>
              <Text style={styles.cardLink}>Tümünü Gör</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.achievementsText}>38/120 başarı açıldı</Text>
          <Text style={styles.achievementsSubtext}>20 benzersiz başarıdan</Text>

          <View style={styles.badges}>
            <View style={styles.badge}>
              <MaterialCommunityIcons name="school" size={SIZES.badge} color={COLORS.success} />
              <Text style={styles.badgeCount}>1</Text>
              <Text style={styles.badgeText}>100 Soru</Text>
            </View>
            <View style={styles.badge}>
              <MaterialCommunityIcons name="clock-check" size={SIZES.badge} color={COLORS.primary} />
              <Text style={styles.badgeCount}>2</Text>
              <Text style={styles.badgeText}>Düzenli Tekrar</Text>
            </View>
            <View style={styles.badge}>
              <MaterialCommunityIcons name="share-variant" size={SIZES.badge} color={COLORS.accent} />
              <Text style={styles.badgeCount}>4</Text>
              <Text style={styles.badgeText}>Paylaşım</Text>
            </View>
          </View>
        </View>

        {/* İstatistikler Kartı */}
        <View style={[styles.card, styles.statsCard]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>İstatistikler</Text>
            <TouchableOpacity>
              <Text style={styles.cardLink}>Detaylı Analiz</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>3,255</Text>
              <Text style={styles.statLabel}>Aktif Soru</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>2,002</Text>
              <Text style={styles.statLabel}>Öğrenildi</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>5,257</Text>
              <Text style={styles.statLabel}>Toplam</Text>
            </View>
          </View>

          <View style={styles.progressBar}>
            {[...Array(20)].map((_, i) => (
              <View
                key={i}
                style={[
                  styles.progressSegment,
                  i < 12 && styles.progressSegmentFilled,
                  i === 11 && styles.progressSegmentCurrent,
                ]}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: SIZES.medium,
    paddingTop: SIZES.medium,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: SIZES.medium,
    padding: SIZES.large,
    marginBottom: SIZES.medium,
    ...SHADOWS.medium,
  },
  levelCard: {},
  achievementsCard: {},
  statsCard: {},
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.medium,
  },
  cardTitle: {
    color: COLORS.text,
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
  },
  cardLink: {
    color: COLORS.textSecondary,
    fontSize: SIZES.font,
  },
  levelText: {
    color: COLORS.text,
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.bold,
    marginBottom: SIZES.base,
  },
  levelSubtext: {
    color: COLORS.primary,
    fontSize: SIZES.font,
    marginBottom: SIZES.medium,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.medium,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    backgroundColor: COLORS.progress.background,
    marginHorizontal: 1,
    borderRadius: 2,
  },
  progressSegmentFilled: {
    backgroundColor: COLORS.progress.fill,
  },
  progressSegmentCurrent: {
    backgroundColor: COLORS.progress.fillSecondary,
  },
  levelMarkers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  levelMarker: {
    alignItems: 'center',
  },
  levelDot: {
    width: SIZES.badge,
    height: SIZES.badge,
    borderRadius: SIZES.badge / 2,
    backgroundColor: COLORS.cardAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelDotActive: {
    backgroundColor: COLORS.primary,
  },
  levelNumber: {
    color: COLORS.text,
    fontSize: SIZES.small,
    fontFamily: FONTS.bold,
  },
  levelPercent: {
    color: COLORS.textSecondary,
    fontSize: SIZES.small,
  },
  achievementsText: {
    color: COLORS.text,
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    marginBottom: SIZES.base,
  },
  achievementsSubtext: {
    color: COLORS.textSecondary,
    fontSize: SIZES.font,
    marginBottom: SIZES.large,
  },
  badges: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    alignItems: 'center',
  },
  badgeCount: {
    color: COLORS.text,
    fontSize: SIZES.medium,
    fontFamily: FONTS.bold,
    marginTop: SIZES.small,
  },
  badgeText: {
    color: COLORS.textSecondary,
    fontSize: SIZES.small,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.large,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    color: COLORS.text,
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
  },
  statLabel: {
    color: COLORS.textSecondary,
    fontSize: SIZES.small,
  }
}); 