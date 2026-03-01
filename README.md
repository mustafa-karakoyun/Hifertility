# Hifertility - Doğurganlık ve Yaşam Tarzı Koçluk Platformu

Hifertility, doğurganlık sağlığınızı desteklemek ve sağlıklı bir yaşam tarzı benimsemenize yardımcı olmak için tasarlanmış kapsamlı bir React Native mobil uygulamasıdır.

# UYGULAMANIN APK DOSYASI YAN TARAFTA BULUNAN REALESES BÖLÜMÜNDEDİR.

# DEMO VİDEO
https://youtube.com/shorts/Q_yQK2xmqdo?si=BTHicwwGSiUTNbLP

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


## 📱 APK Oluşturma (EAS Build)

### EAS CLI Kurulumu

```bash
npm install -g eas-cli
```

### Expo Hesabına Giriş

```bash
eas login
```

### Proje Yapılandırması (İlk kez)

```bash
eas build:configure
```

### APK Oluşturma

**Preview (Test) APK:**
```bash
eas build --platform android --profile preview
```

**Development APK (Hata ayıklama modlu):**
```bash
eas build --platform android --profile development
```

**Production APK:**
```bash
eas build --platform android --profile production
```

**Yerel Build (Daha hızlı):**
```bash
eas build --platform android --type apk --local
```

### Build Durumunu Kontrol Etme

```bash
eas build:list
```

Build tamamlandığında, EAS size indirme linki sağlayacaktır.

**Geliştirici Notları:**

- Uygulama Expo SDK 55 üzerine kurulmuştur
- React Native 0.83.2 kullanılmaktadır
- TypeScript strict mode etkindir
- Tüm bağımlılıklar güncel versiyonlardadır
