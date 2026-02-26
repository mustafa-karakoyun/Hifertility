import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation';

type BlogDetailRouteProp = RouteProp<RootStackParamList, 'BlogDetail'>;

interface Props {
  route: BlogDetailRouteProp;
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
  const { postTitle } = route.params;
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(24);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header Image */}
        <View style={styles.headerImage}>
          <Ionicons name="image-outline" size={80} color={colors.primary} />
        </View>

        {/* Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.date}>20 Şubat 2026</Text>
          <Text style={styles.title}>{postTitle}</Text>
          <Text style={styles.body}>
            Stres, modern yaşamın kaçınılmaz bir parçası haline gelmiştir. Ancak
            kronik stres, vücudumuzun hormon dengesini olumsuz etkileyerek
            doğurganlık üzerinde ciddi sonuçlar doğurabilir.
            {'\n\n'}
            Kortizol olarak bilinen stres hormonu, üreme hormonları ile doğrudan
            etkileşim halindedir. Yüksek kortizol seviyeleri, ovulasyonu
            engelleyebilir ve menstrual döngüyü düzensiz hale getirebilir.
            {'\n\n'}
            Stresi yönetmek için:
            {'\n'}• Düzenli meditasyon yapın
            {'\n'}• Yeterli uyku alın
            {'\n'}• Yoga veya hafif egzersiz yapın
            {'\n'}• Sosyal destekten faydalanın
            {'\n\n'}
            Bu stratejileri hayatınıza entegre ederek hem genel sağlığınızı hem de
            doğurganlığınızı olumlu yönde etkileyebilirsiniz.
          </Text>

          {/* Interaction Section */}
          <View style={styles.interactionSection}>
            <TouchableOpacity
              style={styles.likeButton}
              onPress={handleLike}
            >
              <Ionicons
                name={liked ? 'heart' : 'heart-outline'}
                size={24}
                color={liked ? '#E91E63' : colors.primary}
              />
              <Text style={styles.likeText}>{likes} Beğeni</Text>
            </TouchableOpacity>
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

          {/* Add Comment */}
          <View style={styles.addCommentSection}>
            <TextInput
              style={styles.commentInput}
              placeholder="Yorum ekle..."
              value={comment}
              onChangeText={setComment}
              multiline
            />
            <TouchableOpacity style={styles.sendButton}>
              <Ionicons name="send" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerImage: {
    width: '100%',
    height: 250,
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
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    marginBottom: 24,
  },
  interactionSection: {
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: 24,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 8,
  },
  commentsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  commentCard: {
    backgroundColor: colors.backgroundLight,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
  },
  commentDate: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  commentText: {
    fontSize: 14,
    color: colors.text,
  },
  addCommentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    fontSize: 14,
  },
  sendButton: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
