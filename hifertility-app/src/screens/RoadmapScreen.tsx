import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
}

const roadmapSteps: RoadmapStep[] = [
  {
    id: '1',
    title: 'Kayıt ve Profil Oluşturma',
    description: 'Hesabınızı oluşturun ve kişisel bilgilerinizi girin',
    completed: true,
    current: false,
  },
  {
    id: '2',
    title: 'İlk Değerlendirme',
    description: 'Sağlık anketini tamamlayın',
    completed: true,
    current: false,
  },
  {
    id: '3',
    title: 'Kişisel Program Oluşturma',
    description: 'Size özel programınız hazırlanıyor',
    completed: false,
    current: true,
  },
  {
    id: '4',
    title: 'Eğitim Modülleri',
    description: 'Önerilen kursları tamamlayın',
    completed: false,
    current: false,
  },
  {
    id: '5',
    title: 'Günlük Takip',
    description: 'Uyku, beslenme ve egzersiz takibi yapın',
    completed: false,
    current: false,
  },
  {
    id: '6',
    title: 'Düzenli Danışmanlık',
    description: 'Uzmanlarla düzenli görüşmeler',
    completed: false,
    current: false,
  },
];

export default function RoadmapScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gelişim Yol Haritanız</Text>
        <Text style={styles.headerSubtitle}>
          Doğurganlık yolculuğunuzda adım adım ilerleyin
        </Text>
      </View>

      <View style={styles.timeline}>
        {roadmapSteps.map((step, index) => (
          <View key={step.id} style={styles.stepContainer}>
            <View style={styles.stepIndicator}>
              <View
                style={[
                  styles.stepCircle,
                  step.completed && styles.completedCircle,
                  step.current && styles.currentCircle,
                ]}
              >
                {step.completed ? (
                  <Ionicons name="checkmark" size={20} color={colors.white} />
                ) : (
                  <Text style={styles.stepNumber}>{index + 1}</Text>
                )}
              </View>
              {index < roadmapSteps.length - 1 && (
                <View
                  style={[
                    styles.connector,
                    step.completed && styles.completedConnector,
                  ]}
                />
              )}
            </View>
            <View style={styles.stepContent}>
              <Text
                style={[
                  styles.stepTitle,
                  step.current && styles.currentTitle,
                ]}
              >
                {step.title}
              </Text>
              <Text style={styles.stepDescription}>{step.description}</Text>
            </View>
          </View>
        ))}
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
    padding: 24,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  timeline: {
    padding: 16,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  stepIndicator: {
    alignItems: 'center',
    marginRight: 16,
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedCircle: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  currentCircle: {
    borderColor: colors.primary,
    borderWidth: 3,
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textSecondary,
  },
  connector: {
    width: 2,
    flex: 1,
    backgroundColor: colors.border,
    marginTop: 8,
  },
  completedConnector: {
    backgroundColor: colors.primary,
  },
  stepContent: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  currentTitle: {
    color: colors.primary,
  },
  stepDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});
