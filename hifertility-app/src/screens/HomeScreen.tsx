import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoContainer}>
            <Ionicons name="leaf" size={24} color={colors.primary} />
          </View>
          <Text style={styles.headerTitle}>Hifertility</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}
            style={styles.notificationButton}
          >
            <Ionicons name="notifications" size={24} color={colors.text} />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAajkpRTCrmAu5cHhl9bt4zdPZ52qCD-GN9rHzsvMDktJH9uTAdGXZ0MBQWV1FBvV4M5H3GK-ACp_CuuVlUWBILf1QEX5m29Ojealoiw8ms1bGRjWtMvdesnfqcMF4XdyS7H92JKfEdK-YopWXbekK3rgdEpJUmcIFjfkGgeSbuZSO3VXDtWkBLjdM1ax5utjPamkTsCCnTr12ZXvozzsW_SVZkqDgJRrlERw0melMTJnQzimF1N5t8NDD5-P35q5ByRO_WqmDE5oYD',
            }}
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Merhaba, Esra 👋</Text>
        <Text style={styles.welcomeSubtitle}>Bugün kendini nasıl hissediyorsun?</Text>
      </View>

      {/* Course Progress Card */}
      <TouchableOpacity
        style={styles.courseCard}
        onPress={() => navigation.navigate('Courses')}
        activeOpacity={0.7}
      >
        <View style={styles.courseCardHeader}>
          <View>
            <Text style={styles.courseLabel}>MEVCUT KURS</Text>
            <Text style={styles.courseTitle}>Doğurganlık Masajı</Text>
          </View>
          <View style={styles.courseBadge}>
            <Text style={styles.courseBadgeText}>GÜN 12</Text>
          </View>
        </View>
        <View style={styles.courseProgressSection}>
          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>İlerleme</Text>
            <Text style={styles.progressValue}>65%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '65%' }]} />
          </View>
          <Text style={styles.nextLesson}>Sonraki Ders: Ders 2 - Hazırlık Aşaması</Text>
        </View>
      </TouchableOpacity>

      {/* Daily Tasks */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Günlük Görevler</Text>
          <TouchableOpacity>
            <Text style={styles.sectionLink}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.taskCard} activeOpacity={0.7}>
          <View style={styles.taskIconContainer}>
            <Ionicons name="book" size={28} color="#9333EA" />
          </View>
          <View style={styles.taskContent}>
            <Text style={styles.taskTitle}>Uyku Hijyen Günlüğü</Text>
            <Text style={styles.taskSubtitle}>Dün geceki uykunu kaydet</Text>
          </View>
          <TouchableOpacity style={styles.taskButton}>
            <Ionicons name="add" size={24} color={colors.primary} />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeworkCard} activeOpacity={0.7}>
          <View>
            <View style={styles.homeworkBadge}>
              <Ionicons name="document" size={16} color="#F59E0B" />
              <Text style={styles.homeworkLabel}>EV ÖDEVİ</Text>
            </View>
            <Text style={styles.homeworkTitle}>Beslenme Alışveriş Listeniz</Text>
            <Text style={styles.homeworkDescription}>
              Aylık alışveriş listenizi bu sefer doğurganlığı arttırıcı besinleri göz önünde bulundurarak hazırlayın.
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkLiv7A-kW6pODOXBlPr6fPi-DEaVBnDPs9ykpQ8qgl9oRXZ--kANg8f8un1sXTgj08W_LkeU65-trYYssPrq3o2t8Tq1IceHNWX-R0BlQJABVrrWDTfxpLQzC0zzC9Pahy2kTFgg1u23o4x2DtSksFGKctlRELFZO8RIgu7pZtHfvDM5WVnhFY5xpuVf1uGUbkWHUj1qpx9_0SCKk_Lsz5Q68Fclg89iV6EHqwhXGR0m-DTqEt6MEIIip0PiJvjTsUPydcK-HmRhp',
            }}
            style={styles.homeworkImage}
          />
          <View style={styles.homeworkFooter}>
            <View style={styles.avatarStack}>
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC26f-pebQskva_RcfrMD6L7WtunMwfThCG0vmAreeTnrQ-HJMPZdURRILUFAoYr9aYGsVC4wFVrF6wYhK0v7i0IbQI85udp7wenRY57JuDH3XNnJ7fKjAfOZWsJpL5Eg1nhn64gIyZ62M0FB8zJtOth1IC0iMaGFGND19Zuqi38b6Dk199xfmYiz4YDP6vCmmmsUEEsm_KVWszXIq2HJ2GnVRQl3_4aHH3dv6iKg_KlNJPdiUKGfHQuwueUz5KiVdXm9qHJlXjRCuL',
                }}
                style={styles.avatar}
              />
            </View>
            <Text style={styles.homeworkStats}>28 Kişi Tamamladı</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Quick Access */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hızlı Erişim</Text>
        <View style={styles.quickAccessGrid}>
          <TouchableOpacity
            style={styles.quickAccessItem}
            onPress={() => navigation.navigate('Blog')}
            activeOpacity={0.7}
          >
            <View style={[styles.quickAccessIcon, { backgroundColor: '#EFF6FF' }]}>
              <Ionicons name="newspaper" size={28} color="#3B82F6" />
            </View>
            <Text style={styles.quickAccessLabel}>Blog</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickAccessItem}
            onPress={() => navigation.navigate('Courses')}
            activeOpacity={0.7}
          >
            <View style={[styles.quickAccessIcon, { backgroundColor: '#ECFDF5' }]}>
              <Ionicons name="school" size={28} color="#10B981" />
            </View>
            <Text style={styles.quickAccessLabel}>Kurslar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickAccessItem}
            onPress={() => navigation.navigate('Forum')}
            activeOpacity={0.7}
          >
            <View style={[styles.quickAccessIcon, { backgroundColor: '#FDF2F8' }]}>
              <Ionicons name="chatbubbles" size={28} color="#EC4899" />
            </View>
            <Text style={styles.quickAccessLabel}>Forum</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickAccessItem}
            onPress={() => navigation.navigate('Roadmap')}
            activeOpacity={0.7}
          >
            <View style={[styles.quickAccessIcon, { backgroundColor: '#FFFBEB' }]}>
              <Ionicons name="map" size={28} color="#F59E0B" />
            </View>
            <Text style={styles.quickAccessLabel}>Yol Haritası</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  notificationBadge: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    top: 8,
    right: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  welcomeSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  courseCard: {
    marginHorizontal: 16,
    marginBottom: 24,
    backgroundColor: '#F0F8FF',
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  courseCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  courseLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.primary,
    opacity: 0.8,
    letterSpacing: 0.5,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 4,
  },
  courseBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  courseBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.white,
  },
  courseProgressSection: {
    gap: 8,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.text,
  },
  progressValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.primary,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#D1D5DB',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  nextLesson: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  sectionLink: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 12,
  },
  taskIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  taskSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  taskButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeworkCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  homeworkBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  homeworkLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#F59E0B',
    letterSpacing: 0.5,
  },
  homeworkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    paddingHorizontal: 16,
    marginTop: 4,
  },
  homeworkDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    paddingHorizontal: 16,
    marginTop: 6,
    paddingBottom: 8,
    lineHeight: 18,
  },
  homeworkImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  homeworkFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F9FAFB',
  },
  avatarStack: {
    flexDirection: 'row',
    marginRight: 12,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.white,
  },
  homeworkStats: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickAccessItem: {
    width: (width - 48) / 2,
    alignItems: 'center',
    marginBottom: 16,
  },
  quickAccessIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickAccessLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text,
  },
});

export default HomeScreen;
