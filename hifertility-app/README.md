# Hifertility - Doğurganlık ve Yaşam Tarzı Koçluk Platformu

Hifertility, doğurganlık sağlığınızı desteklemek ve sağlıklı bir yaşam tarzı benimsemenize yardımcı olmak için tasarlanmış kapsamlı bir React Native mobil uygulamasıdır.

## 🎨 Tasarım Özellikleri

- **Ana Renk**: Deep Purple (#802277) - İkonlar, butonlar ve başlıklar için
- **Arka Plan**: Temiz beyaz veya çok açık gri
- **Tipografi**: Modern, sans-serif fontlar (Roboto)
- **Navigasyon**: Drawer Navigation (Yan Menü) kullanıcı profili ile

## 📱 Özellikler

### Ekranlar

1. **Bildirimler** - Hatırlatıcılar ve sistem mesajları
2. **Ev Ödevi** - Günlük ve haftalık görevler
3. **Danışmanlık** - Uzman danışmanlarla iletişim
4. **Yol Haritası** - İlerleme takibi
5. **Kurslar** - Video dersler ve eğitim içerikleri
6. **Blog** - Bilgi makaleleri ve içerik
7. **Anket** - Sağlık değerlendirmeleri
8. **Forum** - Topluluk tartışma alanı
9. **İletişim** - Destek ve iletişim bilgileri
10. **Hakkında** - Uygulama hakkında bilgiler
11. **Onay & Rıza** - KVKK ve gizlilik bilgileri
12. **Hızlı İpuçları** - Günlük sağlık önerileri

## 🛠️ Teknoloji Stack

- **Framework**: React Native + Expo
- **Navigation**: React Navigation (Drawer + Stack)
- **UI Components**: React Native Paper + Ionicons
- **Video Player**: Expo AV
- **Language**: TypeScript
- **Gestures**: React Native Gesture Handler
- **Animations**: React Native Reanimated

## 📦 Kurulum

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn
- Expo CLI
- Android Studio (Android için) veya Xcode (iOS için)

### Adımlar

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Uygulamayı başlatın:
```bash
npm start
```

3. Geliştirme ortamında çalıştırın:
```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

## 🏗️ Proje Yapısı

```
hifertility-app/
├── src/
│   ├── components/          # Yeniden kullanılabilir bileşenler
│   │   └── CustomDrawerContent.tsx
│   ├── navigation/          # Navigasyon yapılandırması
│   │   └── RootNavigator.tsx
│   ├── screens/            # Uygulama ekranları
│   │   ├── NotificationsScreen.tsx
│   │   ├── HomeworkScreen.tsx
│   │   ├── CounselingScreen.tsx
│   │   ├── RoadmapScreen.tsx
│   │   ├── CoursesScreen.tsx
│   │   ├── CourseDetailScreen.tsx
│   │   ├── BlogScreen.tsx
│   │   ├── BlogDetailScreen.tsx
│   │   ├── ForumScreen.tsx
│   │   ├── NewTopicScreen.tsx
│   │   ├── SurveyScreen.tsx
│   │   ├── ContactScreen.tsx
│   │   ├── AboutScreen.tsx
│   │   ├── ConsentScreen.tsx
│   │   └── QuickTipsScreen.tsx
│   ├── theme/              # Tema ve renkler
│   │   └── colors.ts
│   └── types/              # TypeScript tip tanımları
│       └── navigation.ts
├── App.tsx
├── app.json
├── eas.json               # EAS Build yapılandırması
├── babel.config.js
├── tsconfig.json
└── package.json
```

## 📱 APK Oluşturma (EAS Build)

### EAS CLI Kurulumu

```bash
npm install -g eas-cli
```

### Expo Hesabına Giriş

```bash
eas login
```

### Proje Yapılandırması

```bash
eas build:configure
```

### APK Oluşturma

**Preview (Test) APK:**
```bash
eas build -p android --profile preview
```

**Production APK:**
```bash
eas build -p android --profile production
```

Build tamamlandığında, EAS size indirme linki sağlayacaktır.

## 🎯 Kullanıcı Akışı

1. Kullanıcı uygulamayı açar
2. Drawer menüden istediği bölüme gider
3. Profil bilgileri drawer menünün en üstünde görüntülenir
4. Her ekranda purple (#802277) tema rengi kullanılır
5. İkonlar Ionicons kütüphanesinden sağlanır
6. Drawer navigasyon ile tüm bölümlere erişim sağlanır

## 🔧 Yapılandırma

### Tema Renkleri (src/theme/colors.ts)

```typescript
export const colors = {
  primary: '#802277',       // Ana renk
  background: '#FFFFFF',    // Arka plan
  backgroundLight: '#F5F5F5', // Açık arka plan
  text: '#333333',          // Ana metin
  textSecondary: '#666666', // İkincil metin
  border: '#E0E0E0',       // Kenarlıklar
  // ...
};
```

### Navigasyon Tipleri (src/types/navigation.ts)

Tüm ekranlar ve parametreleri TypeScript ile tip güvenli şekilde tanımlanmıştır.

## 🚀 Özelleştirme

### Yeni Ekran Ekleme

1. `src/screens/` klasörüne yeni ekran dosyası oluşturun
2. `src/types/navigation.ts` dosyasına ekran tipini ekleyin
3. `src/navigation/RootNavigator.tsx` dosyasına ekranı kaydedin
4. Drawer menüye dahil etmek için Drawer.Screen ekleyin

### Tema Değiştirme

`src/theme/colors.ts` dosyasındaki renk değerlerini güncelleyin.

## 📄 Lisans

Bu proje özel bir projedir. Tüm hakları saklıdır.

## 👥 Destek

Herhangi bir sorun veya öneriniz için:
- Email: info@hifertility.com
- Telefon: +90 555 123 45 67

## 🔄 Güncellemeler

### v1.0.0 (İlk Sürüm)
- Temel navigasyon yapısı
- Tüm ana ekranlar tamamlandı
- Drawer menü kullanıcı profili ile
- EAS Build yapılandırması
- TypeScript desteği
- Purple tema rengi (#802277)

---

**Geliştirici Notları:**

- Uygulama Expo SDK 55 üzerine kurulmuştur
- React Native 0.83.2 kullanılmaktadır
- TypeScript strict mode etkindir
- Tüm bağımlılıklar güncel versiyonlardadır
