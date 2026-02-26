import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  date: string;
  imageUrl?: string;
}

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Doğurganlık ve Stres İlişkisi',
    description: 'Stres hormonlarının doğurganlık üzerindeki etkileri ve yönetim stratejileri...',
    likes: 24,
    comments: 8,
    date: '20 Şubat 2026',
  },
  {
    id: '2',
    title: 'Sağlıklı Uyku Düzeni',
    description: 'Uyku kalitesinin hormon dengesi ve doğurganlık üzerindeki kritik önemi...',
    likes: 42,
    comments: 15,
    date: '18 Şubat 2026',
  },
  {
    id: '3',
    title: 'Egzersiz ve Fertilite',
    description: 'Doğru egzersiz programıyla doğurganlığınızı desteklemenin yolları...',
    likes: 31,
    comments: 12,
    date: '15 Şubat 2026',
  },
  {
    id: '4',
    title: 'Beslenme ve Doğurganlık',
    description: 'Doğurganlığı artıran besinler ve beslenme alışkanlıkları hakkında bilgiler...',
    likes: 56,
    comments: 23,
    date: '10 Şubat 2026',
  },
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Blog'>;

export default function BlogScreen() {
  const navigation = useNavigation<NavigationProp>();

  const renderPost = ({ item }: { item: BlogPost }) => (
    <TouchableOpacity
      style={styles.postCard}
      onPress={() => navigation.navigate('BlogDetail', { postId: item.id, postTitle: item.title })}
    >
      <View style={styles.imageContainer}>
        <Ionicons name="image-outline" size={60} color={colors.primary} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
      <View style={styles.interactionBar}>
        <TouchableOpacity style={styles.interactionButton}>
          <Ionicons name="heart-outline" size={20} color={colors.primary} />
          <Text style={styles.interactionText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton}>
          <Ionicons name="chatbubble-outline" size={20} color={colors.primary} />
          <Text style={styles.interactionText}>{item.comments} Yorum</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockPosts}
        renderItem={renderPost}
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
  listContainer: {
    padding: 16,
  },
  postCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 16,
  },
  date: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  interactionBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  interactionText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 6,
  },
});
