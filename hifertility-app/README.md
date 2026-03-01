# Hifertility - Doğurganlık ve Yaşam Tarzı Koçluk Platformu

Hifertility, doğurganlık sağlığınızı desteklemek ve sağlıklı bir yaşam tarzı benimsemenize yardımcı olmak için tasarlanmış kapsamlı bir React Native mobil uygulamasıdır.

## 🎨 Tasarım Özellikleri

- **Ana Renk**: Turkuaz Mavi (#2badee) - İkonlar, butonlar ve vurgular için
- **Arka Plan**: Temiz beyaz (#FDFCFE) ve açık gri tonları
- **Tipografi**: Modern, sans-serif fontlar (Inter & Playfair Display)
- **Navigasyon**: Drawer Navigation (Yan Menü) kullanıcı profili ile
- **UI/UX**: Modern, minimalist ve kullanıcı dostu arayüz
- **Kartlar**: Yuvarlatılmış köşeler (16px border-radius)
- **İkonlar**: Ionicons seti

## 📱 Özellikler

### Ekranlar

1. **Anasayfa (Home)** - Kişiselleştirilmiş dashboard, günlük görevler ve hızlı erişim
2. **Bildirimler** - Hatırlatıcılar, ipuçları ve sistem mesajları
3. **Ev Ödevi** - Günlük ve haftalık görevler
4. **Danışmanlık** - Uzman danışmanlarla iletişim
5. **Yol Haritası** - İlerleme takibi ve hedefler
6. **Kurslar** - Video dersler ve eğitim içerikleri (genişletilebilir ders listesi)
7. **Blog** - Bilgi makaleleri ve sağlık içerikleri
8. **Anket** - Sağlık değerlendirmeleri
9. **Forum** - Topluluk tartışma alanı ve yeni konu oluşturma
10. **İletişim** - Destek ve iletişim bilgileri
11. **Hakkında** - Uygulama hakkında bilgiler
12. **Onay & Rıza** - KVKK ve gizlilik bilgileri
13. **Hızlı İpuçları** - Günlük sağlık önerileri

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
│   │   ├── HomeScreen.tsx           # Anasayfa (Dashboard)
│   │   ├── NotificationsScreen.tsx  # Bildirimler (filtreleme ile)
│   │   ├── HomeworkScreen.tsx
│   │   ├── CounselingScreen.tsx
│   │   ├── RoadmapScreen.tsx
│   │   ├── CoursesScreen.tsx        # Genişletilebilir kurs listesi
│   │   ├── CourseDetailScreen.tsx
│   │   ├── BlogScreen.tsx
│   │   ├── BlogDetailScreen.tsx     # Modern blog detay tasarımı
│   │   ├── ForumScreen.tsx
│   │   ├── NewTopicScreen.tsx       # Modern forum yazı oluşturma
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

## 🎯 Kullanıcı Akışı

1. Kullanıcı uygulamayı açar ve modern **Anasayfa (Dashboard)** ile karşılanır
2. Anasayfada kişiselleştirilmiş içerik, günlük görevler ve ilerleme gösterilir
3. Drawer menüden istediği bölüme kolayca gider
4. Profil bilgileri drawer menünün en üstünde görüntülenir
5. Her ekranda turkuaz mavi (#2badee) tema rengi ile modern, minimal tasarım kullanılır
6. İkonlar Ionicons kütüphanesinden sağlanır
7. Bildirimler kategorilere ayrılmış ve filtrelenebilir (Tümü, Hatırlatıcılar, İpuçları)
8. Kurslar genişletilebilir kart yapısıyla ders listelerini gösterir
9. Blog yazıları modern, görselle desteklenmiş detay sayfalarında açılır
10. Forum'da yeni konu oluşturma modern form tasarımı ile yapılır

## 🔧 Yapılandırma

### Tema Renkleri (src/theme/colors.ts)

```typescript
export const colors = {
  primary: '#2badee',           // Ana renk (Turkuaz Mavi)
  background: '#FFFFFF',        // Arka plan
  backgroundLight: '#FDFCFE',   // Açık arka plan
  text: '#333333',              // Ana metin
  textSecondary: '#666666',     // İkincil metin
  textLight: '#9CA3AF',         // Açık metin
  border: '#E0E0E0',           // Kenarlıklar
  white: '#FFFFFF',
  error: '#D32F2F',
  success: '#388E3C',
  icon: '#2badee',
  surface: '#FFFFFF',
  backgroundDark: '#121212',    // Koyu mod arka plan
  surfaceDark: '#1E1E1E',       // Koyu mod yüzey
};
```

### Navigasyon Tipleri (src/types/navigation.ts)

Tüm ekranlar ve parametreleri TypeScript ile tip güvenli şekilde tanımlanmıştır.

## 🚀 Özelleştirme

### Yeni Ekran Ekleme

1. `src/screens/` klasörüne yeni ekran dosyası oluşturun
2. `src/types/navigation.ts` dosyasına ekran tipini ekleyin (DrawerParamList veya RootStackParamList)
3. `src/navigation/RootNavigator.tsx` dosyasına ekranı kaydedin
4. Drawer menüye dahil etmek için Drawer.Screen ekleyin

### Tema Değiştirme

`src/theme/colors.ts` dosyasındaki renk değerlerini güncelleyin. Ana rengi değiştirmek için `primary` değerini düzenleyin.

### Tasarım Standartları

- **Border Radius**: 16px (kartlar), 12px (küçük elementler), 20px (butonlar)
- **Padding**: 16px (standart), 12px (orta), 8px (küçük)
- **Gap**: Flexbox/Grid yapılarda 8px, 12px, 16px
- **Font Sizes**: 28px (başlıklar), 18px (alt başlık), 14px (normal), 12px (küçük)
- **Colors**: Ana renk #2badee, ikincil renkler pastel tonlarda

## 📄 Lisans

Bu proje özel bir projedir. Tüm hakları saklıdır.



## 🔄 Güncellemeler

### v2.0.0 (Tasarım Güncellemesi)
- ✨ Yeni modern tasarım dili
- 🎨 Ana renk Purple'dan Turkuaz Maviye (#2badee) güncellendi
- 🏠 Yeni Anasayfa (Dashboard) eklendi
- 📱 Tüm ekranlar modern tasarım prensiplerine göre yeniden tasarlandı
- 🔔 Bildirimler sayfası kategori filtreleme ile geliştirildi
- 📚 Kurslar sayfası genişletilebilir ders listesi ile iyileştirildi
- 📝 Blog detay sayfası modern görselli tasarım ile güncellendi
- ✍️ Forum yazı oluşturma modern form tasarımı ile yenilendi
- 🎨 Tüm ekranlarda tutarlı border-radius (16px) ve spacing
- 🖼️ Görselle desteklenmiş kart tasarımları

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
