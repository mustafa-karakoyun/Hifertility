import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface Tip {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const tips: Tip[] = [
  {
    id: '1',
    title: 'Düzenli Uyku',
    description: 'Her gece 7-8 saat kaliteli uyku, hormon dengeniz için kritiktir.',
    icon: 'moon',
  },
  {
    id: '2',
    title: 'Dengeli Beslenme',
    description: 'Bol sebze, meyve ve protein içeren dengeli öğünler tüketin.',
    icon: 'nutrition',
  },
  {
    id: '3',
    title: 'Stres Yönetimi',
    description: 'Günlük meditasyon veya nefes egzersizleri stresi azaltır.',
    icon: 'heart',
  },
  {
    id: '4',
    title: 'Düzenli Egzersiz',
    description: 'Haftada en az 3 kez 30 dakika hafif-orta tempolu egzersiz yapın.',
    icon: 'fitness',
  },
  {
    id: '5',
    title: 'Bol Su Tüketimi',
    description: 'Günde en az 2 litre su için, vücudunuzu nemli tutun.',
    icon: 'water',
  },
  {
    id: '6',
    title: 'Sosyal Destek',
    description: 'Sevdiklerinizle zaman geçirin, deneyimlerinizi paylaşın.',
    icon: 'people',
  },
];

const benefits = [
  {
    icon: 'analytics',
    title: 'Kan Akışı Artar',
    color: '#E91E63',
  },
  {
    icon: 'happy',
    title: 'Stres Azalır',
    color: '#9C27B0',
  },
  {
    icon: 'leaf',
    title: 'Hormon Dengesi',
    color: '#4CAF50',
  },
  {
    icon: 'shield-checkmark',
    title: 'Bağışıklık Güçlenir',
    color: '#2196F3',
  },
];

export default function QuickTipsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="bulb" size={48} color={colors.primary} />
        <Text style={styles.headerTitle}>Hızlı İpuçları</Text>
        <Text style={styles.headerSubtitle}>
          Günlük yaşamınıza entegre edebileceğiniz pratik öneriler
        </Text>
      </View>

      {tips.map((tip) => (
        <View key={tip.id} style={styles.tipCard}>
          <View style={styles.tipIcon}>
            <Ionicons name={tip.icon} size={32} color={colors.primary} />
          </View>
          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipDescription}>{tip.description}</Text>
          </View>
        </View>
      ))}

      <View style={styles.benefitsSection}>
        <Text style={styles.benefitsTitle}>Faydaları</Text>
        <View style={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <View key={index} style={styles.benefitItem}>
              <View style={[styles.benefitCircle, { backgroundColor: benefit.color }]}>
                <Ionicons name={benefit.icon as any} size={32} color={colors.white} />
              </View>
              <Text style={styles.benefitText}>{benefit.title}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.exerciseSection}>
        <Text style={styles.sectionTitle}>Önerilen Egzersizler</Text>
        <View style={styles.exerciseCard}>
          <View style={styles.exerciseIcon}>
            <Ionicons name="walk" size={40} color={colors.primary} />
          </View>
          <View style={styles.exerciseContent}>
            <Text style={styles.exerciseTitle}>Yürüyüş</Text>
            <Text style={styles.exerciseDescription}>
              Günde 30 dakika tempolu yürüyüş
            </Text>
          </View>
        </View>

        <View style={styles.exerciseCard}>
          <View style={styles.exerciseIcon}>
            <Ionicons name="body" size={40} color={colors.primary} />
          </View>
          <View style={styles.exerciseContent}>
            <Text style={styles.exerciseTitle}>Yoga</Text>
            <Text style={styles.exerciseDescription}>
              Esneklik ve rahatlama için haftalık 2-3 seans
            </Text>
          </View>
        </View>

        <View style={styles.exerciseCard}>
          <View style={styles.exerciseIcon}>
            <Ionicons name="bicycle" size={40} color={colors.primary} />
          </View>
          <View style={styles.exerciseContent}>
            <Text style={styles.exerciseTitle}>Bisiklet</Text>
            <Text style={styles.exerciseDescription}>
              Hafif tempolu bisiklet sürüşü
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  header: {
    backgroundColor: colors.white,
    padding: 32,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    margin: 16,
    marginTop: 0,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F3E5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 6,
  },
  tipDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  benefitsSection: {
    backgroundColor: colors.white,
    margin: 16,
    marginTop: 8,
    padding: 20,
    borderRadius: 12,
  },
  benefitsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  benefitItem: {
    alignItems: 'center',
    width: '45%',
    marginBottom: 24,
  },
  benefitCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  benefitText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.text,
    textAlign: 'center',
  },
  exerciseSection: {
    margin: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  exerciseCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  exerciseIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#F3E5F5',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  exerciseContent: {
    flex: 1,
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  exerciseDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});
