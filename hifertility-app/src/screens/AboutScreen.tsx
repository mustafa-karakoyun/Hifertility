import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="information-circle" size={60} color={colors.primary} />
        <Text style={styles.headerTitle}>Hakkımızda</Text>
      </View>

      <View style={styles.contentCard}>
        <Text style={styles.sectionTitle}>Hifertility Nedir?</Text>
        <Text style={styles.paragraph}>
          Hifertility, doğurganlık sağlığınızı desteklemek ve sağlıklı bir yaşam
          tarzı benimsemenize yardımcı olmak için tasarlanmış kapsamlı bir dijital
          platformdur.
        </Text>

        <Text style={styles.sectionTitle}>Misyonumuz</Text>
        <Text style={styles.paragraph}>
          Doğurganlık yolculuğunuzda size bilimsel bilgi, uzman desteği ve
          kişiselleştirilmiş programlarla eşlik etmek. Her bireyin benzersiz
          olduğuna inanıyor ve size özel çözümler sunuyoruz.
        </Text>

        <Text style={styles.sectionTitle}>Hizmetlerimiz</Text>
        <View style={styles.serviceItem}>
          <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
          <Text style={styles.serviceText}>Uzman danışmanlık hizmetleri</Text>
        </View>
        <View style={styles.serviceItem}>
          <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
          <Text style={styles.serviceText}>Kişiselleştirilmiş eğitim programları</Text>
        </View>
        <View style={styles.serviceItem}>
          <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
          <Text style={styles.serviceText}>Günlük takip ve hatırlatmalar</Text>
        </View>
        <View style={styles.serviceItem}>
          <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
          <Text style={styles.serviceText}>Topluluk forumu ve destek grupları</Text>
        </View>
        <View style={styles.serviceItem}>
          <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
          <Text style={styles.serviceText}>Bilimsel makaleler ve blog içerikleri</Text>
        </View>

        <Text style={styles.sectionTitle}>İletişim</Text>
        <Text style={styles.paragraph}>
          Sorularınız veya önerileriniz için bizimle iletişime geçmekten çekinmeyin.
          Mutlu ve sağlıklı bir yolculuk diliyoruz! 💜
        </Text>

        <View style={styles.versionInfo}>
          <Text style={styles.versionText}>Versiyon 1.0.0</Text>
          <Text style={styles.versionText}>© 2026 Hifertility. Tüm hakları saklıdır.</Text>
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
  },
  contentCard: {
    backgroundColor: colors.white,
    margin: 16,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 16,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
    marginBottom: 8,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 14,
    color: colors.text,
    marginLeft: 12,
    flex: 1,
  },
  versionInfo: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
});
