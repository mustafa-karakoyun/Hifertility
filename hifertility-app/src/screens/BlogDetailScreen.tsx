import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation';

type BlogDetailRouteProp = RouteProp<RootStackParamList, 'BlogDetail'>;
const { width } = Dimensions.get('window');

interface Props {
  route?: BlogDetailRouteProp;
}

interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

const mockComments: Comment[] = [
  {
    id: '1',
    author: 'Ayşe K.',
    text: 'Çok faydalı bir yazı, teşekkürler!',
    date: '21 Şubat 2026',
  },
  {
    id: '2',
    author: 'Mehmet Y.',
    text: 'Bu konuda daha fazla bilgi paylaşırsanız sevinirim.',
    date: '22 Şubat 2026',
  },
];

export default function BlogDetailScreen({ route }: Props) {
  const navigation = useNavigation<any>();
  const postTitle = route?.params?.postTitle || 'Fiziksel Aktivite Doğurganlığımı Nasıl Etkiler?';
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(124);
  const [comments, setComments] = useState(12);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={styles.headerLabel}>EĞITIM</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="bookmark-outline" size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="share-social-outline" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Article Image */}
        <View style={styles.articleImageContainer}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0-8rOWCf8kvlmCATao4pteO3G1QqdKOZz1P3JdRsyIqVhli9hpzMB-0jIK3qNt7pG3LYowpqAEdNzypEpXEt1qSGfuOwU7GUAXzyi44OdRurGVymkbHQnPFuP-rViFbbFi9M7zCO37zkSDNtPQSrW9F7EdKdTI5s3ZhFok5w9YWzbrX3GZe5EZ3ZAjbjKKveWHEbcLjigTkaL3a8q6zwHZ-e0JxvsPCYKdwPif_JgiUwf3uVQSPh_F_caWDIB0YxWvlaCiVi9wDSG',
            }}
            style={styles.articleImage}
          />
        </View>

        {/* Article Content */}
        <View style={styles.contentContainer}>
          {/* Category & Title */}
          <View>
            <View style={styles.categoryTag}>
              <Text style={styles.categoryText}>YAŞAM TARZI</Text>
            </View>
            <Text style={styles.articleTitle}>{postTitle}</Text>
          </View>

          {/* Author Info */}
          <View style={styles.authorSection}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7CpXRc8Tw4gcpA5v1I4C659sGhV1OFPOdz70PcSaQgYqR8OZ274O1ro14PKScJSyr7-srnRHww4LXtEJ59oR4sIakWrsFW-A7opP9EzBnDB6h_wKvqWf2tNBXQd3tNpC9VNzwjEIbSxwIaNZ9qnQXVq6UuUYC6XRRWuQFFz1rQceZHgtrJsRSi0HBdn1lj6bwge4TjOhzr_mRV27S-HHeUCyIfVKRkklT_6oh9hkAjV3MPk11juWa4N61rg-OBPFoR5VYApMhwNm3',
              }}
              style={styles.authorImage}
            />
            <View>
              <Text style={styles.authorName}>Dr. Ayşe Yılmaz</Text>
              <Text style={styles.authorRole}>Kadın Sağlığı Uzmanı</Text>
            </View>
          </View>

          {/* Article Body */}
          <View style={styles.bodySection}>
            <Text style={styles.bodyText}>
              Fiziksel aktivite günlük yaşam içerisinde kas ve eklemlerimizi kullanarak enerji tüketimi ile gerçekleşen, kalp ve solunum hızını arttıran ve farklı şiddetlerde yorgunlukla sonuçlanan aktivitelerdir.
            </Text>
            <Text style={styles.bodyText}>
              Yürümek, koşmak, sıçramak, yüzmek gibi hareketler fiziksel aktivite olarak kabul edilebilirler.
            </Text>
          </View>

          {/* Comments Section */}
          <View style={styles.commentsSection}>
            <Text style={styles.sectionTitle}>Yorumlar ({mockComments.length})</Text>
            {mockComments.map((comment) => (
              <View key={comment.id} style={styles.commentCard}>
                <View style={styles.commentHeader}>
                  <Text style={styles.commentAuthor}>{comment.author}</Text>
                  <Text style={styles.commentDate}>{comment.date}</Text>
                </View>
                <Text style={styles.commentText}>{comment.text}</Text>
              </View>
            ))}
          </View>

          <View style={{ height: 80 }} />
        </View>
      </ScrollView>

      {/* Bottom Interaction Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleLike}
        >
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={20}
            color={liked ? '#EF4444' : colors.textSecondary}
          />
          <Text style={styles.actionButtonText}>{likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={20} color={colors.textSecondary} />
          <Text style={styles.actionButtonText}>{comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="add" size={20} color="white" />
          <Text style={styles.shareButtonText}>Paylaş</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 8,
  },
  headerButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleImageContainer: {
    height: 240,
    backgroundColor: '#F0F0F0',
    overflow: 'hidden',
  },
  articleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  categoryTag: {
    backgroundColor: '#F0F8FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.primary,
    letterSpacing: 0.5,
  },
  articleTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    lineHeight: 36,
    marginBottom: 20,
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  authorName: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  authorRole: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  bodySection: {
    gap: 16,
    marginBottom: 24,
  },
  bodyText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  commentsSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },
  commentCard: {
    backgroundColor: '#FAFBFC',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  commentAuthor: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  commentDate: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  commentText: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  actionButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  shareButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: colors.primary,
  },
  shareButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: 'white',
  },
});
