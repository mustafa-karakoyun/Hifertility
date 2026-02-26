import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function CounselingScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerCard}>
        <Ionicons name="chatbubbles" size={60} color={colors.primary} />
        <Text style={styles.headerTitle}>Danışmanlık Hizmeti</Text>
        <Text style={styles.headerSubtitle}>
          Uzman danışmanlarımızla iletişime geçin
        </Text>
      </View>

      <TouchableOpacity style={styles.counselorCard}>
        <View style={styles.counselorAvatar}>
          <Ionicons name="person" size={40} color={colors.white} />
        </View>
        <View style={styles.counselorInfo}>
          <Text style={styles.counselorName}>Dr. Ayşe Demir</Text>
          <Text style={styles.counselorTitle}>Fertilite Uzmanı</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFC107" />
            <Text style={styles.rating}>4.9 (124 değerlendirme)</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={24} color={colors.textSecondary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.counselorCard}>
        <View style={styles.counselorAvatar}>
          <Ionicons name="person" size={40} color={colors.white} />
        </View>
        <View style={styles.counselorInfo}>
          <Text style={styles.counselorName}>Uzm. Mehmet Yılmaz</Text>
          <Text style={styles.counselorTitle}>Yaşam Koçu</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFC107" />
            <Text style={styles.rating}>4.8 (98 değerlendirme)</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={24} color={colors.textSecondary} />
      </TouchableOpacity>

      <View style={styles.infoCard}>
        <Ionicons name="information-circle" size={24} color={colors.primary} />
        <Text style={styles.infoText}>
          Danışmanlarımız size özel programlar hazırlayarak doğurganlık
          yolculuğunuzda destek olmaktadır.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  headerCard: {
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
  counselorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    margin: 16,
    marginTop: 0,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  counselorAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  counselorInfo: {
    flex: 1,
  },
  counselorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  counselorTitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    marginLeft: 12,
    lineHeight: 20,
  },
});
