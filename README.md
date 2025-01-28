# 📚 Sınav Tekrar Uygulaması

## 🎯 Proje Amacı
Kullanıcıların sınavlara hazırlanırken öğrendiklerini aralıklı tekrar yöntemiyle pekiştirmelerini sağlayan, oyunlaştırma elementleri içeren bir öğrenme platformu.

## 🛠️ Teknik Stack
- **Frontend**: 
  - React Native (Expo ile)
  - TypeScript
  - React Navigation
  - Redux Toolkit (State yönetimi)
  - React Query (Veri yönetimi)
- **Backend**: 
  - Firebase
  - Supabase (Yedek plan)
- **Storage**:
  - Firebase Storage
  - AsyncStorage (Offline veri)
- **AI**: 
  - Claude Sonnet API
  - Offline mod için TensorFlow Lite
- **Authentication**: 
  - Firebase Auth
- **Notifications**: 
  - Firebase Cloud Messaging
  - Local Notifications

## 🚀 Başlangıç

### Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn
- Expo CLI
- Firebase hesabı
- Claude API anahtarı

### Kurulum

1. Projeyi klonlayın
```bash
git clone https://github.com/yusuufkesici/tekrarlayici.git
cd tekrarlayici
```

2. Bağımlılıkları yükleyin
```bash
npm install
# veya
yarn install
```

3. Firebase yapılandırmasını ayarlayın
- `src/config/firebase.config.ts` dosyasını oluşturun
- Firebase Console'dan aldığınız yapılandırma bilgilerini ekleyin

4. Çevre değişkenlerini ayarlayın
- `.env` dosyasını oluşturun
- Gerekli API anahtarlarını ekleyin

5. Uygulamayı başlatın
```bash
npm start
# veya
yarn start
```

## 📱 Özellikler

### Ana Özellikler
- 📝 Akıllı soru tekrar sistemi
- 🎯 Kişiselleştirilmiş öğrenme deneyimi
- 🏆 Gamification elementleri
- 📊 Detaylı performans analizi
- 🔄 Offline çalışma desteği
- 🤖 AI destekli kategorizasyon
- 📱 Cross-platform destek

### Tekrar Algoritması
1. İlk gösterim: Aynı gün
2. Doğru cevap → Sonraki gösterim:
   - 1. tekrar: 3 gün sonra
   - 2. tekrar: 7 gün sonra
   - 3. tekrar: 14 gün sonra
3. Yanlış cevap → Ertesi gün tekrar

## 🎨 UI Tema
- **Ana Renkler**:
  - Mavi: #007AFF
  - Turuncu: #FF9500
  - Arka plan: #F2F2F7
- **Typography**:
  - Başlıklar: SF Pro Display
  - İçerik: SF Pro Text

## 📊 Veritabanı Yapısı
```
users/
  ├── userId/
  │   ├── profile
  │   ├── streak
  │   └── statistics

questions/
  ├── questionId/
  │   ├── content
  │   ├── category
  │   ├── nextReview
  │   └── history
```

## 🔒 Güvenlik
- API key güvenliği
- Veri şifreleme
- Biometrik kimlik doğrulama
- Rate limiting
- Input validasyonu

## 🤝 Katkıda Bulunma
1. Fork'layın
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Commit'leyin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'e push yapın (`git push origin feature/YeniOzellik`)
5. Pull Request oluşturun

## 📝 Lisans
Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim
Proje Sahipleri:
- [@yusuufkesici](https://github.com/yusuufkesici)

Proje Linki: [https://github.com/yusuufkesici/tekrarlayici](https://github.com/yusuufkesici/tekrarlayici) 