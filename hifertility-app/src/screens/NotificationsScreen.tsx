import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  category: 'reminder' | 'tip' | 'general';
  icon: string;
  color: string;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Uyku Hijyen Günlüğü',
    message: 'Uyku hijyen günlüğünüzü tutmayı unutmayın.',
    timestamp: '10:56',
    category: 'reminder',
    icon: 'calendar',
    color: '#A78BFA',
  },
  {
    id: '2',
    title: 'Olumlu Düşünce Gücü',
    message: '"Çocuk sahibi olma ile ilgili olumlu düşüncelerimi her geçen gün artırıyorum."',
    timestamp: '09:00',
    category: 'tip',
    icon: 'leaf',
    color: '#10B981',
  },
  {
    id: '3',
    title: 'Yeni Ders Eklendi',
    message: 'Stres Yönetimi modülüne yeni bir ders eklendi',
    timestamp: '1 gün önce',
    category: 'general',
    icon: 'school',
    color: '#3B82F6',
  },
];

export default function NotificationsScreen() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'reminder' | 'tip'>('all');
  const navigation = useNavigation<any>();

  const filteredNotifications = selectedFilter === 'all'
    ? mockNotifications
    : mockNotifications.filter(n => n.category === selectedFilter);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'reminder':
        return 'HATIRLATICI';
      case 'tip':
        return 'İPUCU';
      default:
        return 'BİLDİRİM';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'reminder':
        return '#A78BFA';
      case 'tip':
        return '#10B981';
      default:
        return colors.primary;
    }
  };

  const renderNotification = ({ item }: { item: Notification }) => (
    <View style={styles.notificationCard}>
      <View style={[styles.notificationIconContainer, { backgroundColor: item.color + '20' }]}>
        <Ionicons name={item.icon as any} size={24} color={item.color} />
      </View>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={[styles.notificationCategory, { color: getCategoryColor(item.category) }]}>
            {getCategoryLabel(item.category)}
          </Text>
          <Text style={styles.notificationTime}>{item.timestamp}</Text>
        </View>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Bildirimler</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.markAllRead}>Hepsini Oku</Text>
        </TouchableOpacity>
      </View>

      {/* Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
        contentContainerStyle={styles.filtersContent}
      >
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === 'all' && styles.filterButtonActive,
          ]}
          onPress={() => setSelectedFilter('all')}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedFilter === 'all' && styles.filterButtonTextActive,
            ]}
          >
            Tümü
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === 'reminder' && styles.filterButtonActive,
          ]}
          onPress={() => setSelectedFilter('reminder')}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedFilter === 'reminder' && styles.filterButtonTextActive,
            ]}
          >
            Hatırlatıcılar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilter === 'tip' && styles.filterButtonActive,
          ]}
          onPress={() => setSelectedFilter('tip')}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedFilter === 'tip' && styles.filterButtonTextActive,
            ]}
          >
            İpuçları
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Notifications List */}
      <FlatList
        data={filteredNotifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={<Text style={styles.dateHeader}>BUGÜN</Text>}
      />
    </View>
  );
}

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
    backgroundColor: colors.background,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  markAllRead: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
  },
  filtersContainer: {
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  filtersContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterButtonText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.text,
  },
  filterButtonTextActive: {
    color: colors.white,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  dateHeader: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#9CA3AF',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  notificationIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  notificationCategory: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  notificationTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
});
