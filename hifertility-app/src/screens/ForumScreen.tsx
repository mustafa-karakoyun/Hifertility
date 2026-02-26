import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

interface ForumTopic {
  id: string;
  title: string;
  author: string;
  replies: number;
  lastActivity: string;
  views: number;
}

const mockTopics: ForumTopic[] = [
  {
    id: '1',
    title: 'IVF Tedavisi Deneyimlerinizi Paylaşalım',
    author: 'Zeynep A.',
    replies: 45,
    lastActivity: '2 saat önce',
    views: 234,
  },
  {
    id: '2',
    title: 'Doğal Yöntemlerle Doğurganlık Artışı',
    author: 'Elif K.',
    replies: 28,
    lastActivity: '5 saat önce',
    views: 156,
  },
  {
    id: '3',
    title: 'Stres Yönetimi İçin En İyi Teknikler',
    author: 'Merve Y.',
    replies: 37,
    lastActivity: '1 gün önce',
    views: 198,
  },
  {
    id: '4',
    title: 'Beslenme ve Doğurganlık İlişkisi',
    author: 'Ayşe M.',
    replies: 52,
    lastActivity: '2 gün önce',
    views: 312,
  },
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Forum'>;

export default function ForumScreen() {
  const navigation = useNavigation<NavigationProp>();

  const renderTopic = ({ item }: { item: ForumTopic }) => (
    <TouchableOpacity style={styles.topicCard}>
      <View style={styles.topicHeader}>
        <Text style={styles.topicTitle}>{item.title}</Text>
      </View>
      <View style={styles.topicMeta}>
        <View style={styles.metaItem}>
          <Ionicons name="person-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.metaText}>{item.author}</Text>
        </View>
        <View style={styles.metaItem}>
          <Ionicons name="chatbubbles-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.metaText}>{item.replies} yanıt</Text>
        </View>
        <View style={styles.metaItem}>
          <Ionicons name="eye-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.metaText}>{item.views}</Text>
        </View>
      </View>
      <Text style={styles.lastActivity}>{item.lastActivity}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.newTopicButton}
        onPress={() => navigation.navigate('NewTopic')}
      >
        <Ionicons name="add-circle" size={24} color={colors.white} />
        <Text style={styles.newTopicText}>Yeni Konu Aç</Text>
      </TouchableOpacity>

      <FlatList
        data={mockTopics}
        renderItem={renderTopic}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  newTopicButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  newTopicText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  topicCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topicHeader: {
    marginBottom: 12,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  topicMeta: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  lastActivity: {
    fontSize: 12,
    color: colors.textSecondary,
    alignSelf: 'flex-end',
  },
});
