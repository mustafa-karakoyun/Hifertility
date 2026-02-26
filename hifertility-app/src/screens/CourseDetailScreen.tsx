import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
}

const mockLessons: Lesson[] = [
  {
    id: '1',
    title: 'Ders-1: Giriş ve Genel Bakış',
    duration: '12:45',
    completed: true,
    locked: false,
  },
  {
    id: '2',
    title: 'Ders-2: Doğurganlık Temel Kavramlar',
    duration: '18:30',
    completed: true,
    locked: false,
  },
  {
    id: '3',
    title: 'Ders-3: Sağlıklı Yaşam İlkeleri',
    duration: '15:20',
    completed: false,
    locked: false,
  },
  {
    id: '4',
    title: 'Ders-4: Hormon Dengesi',
    duration: '22:15',
    completed: false,
    locked: false,
  },
  {
    id: '5',
    title: 'Ders-5: Beslenme Stratejileri',
    duration: '19:45',
    completed: false,
    locked: true,
  },
];

type CourseDetailRouteProp = RouteProp<RootStackParamList, 'CourseDetail'>;

interface Props {
  route: CourseDetailRouteProp;
}

export default function CourseDetailScreen({ route }: Props) {
  const { courseTitle } = route.params;
  const [selectedLesson, setSelectedLesson] = useState(mockLessons[0]);

  const renderLesson = ({ item }: { item: Lesson }) => (
    <TouchableOpacity
      style={[
        styles.lessonCard,
        selectedLesson.id === item.id && styles.selectedLesson,
        item.locked && styles.lockedLesson,
      ]}
      onPress={() => !item.locked && setSelectedLesson(item)}
      disabled={item.locked}
    >
      <View style={styles.lessonIconContainer}>
        {item.locked ? (
          <Ionicons name="lock-closed" size={24} color={colors.textSecondary} />
        ) : item.completed ? (
          <Ionicons name="checkmark-circle" size={24} color={colors.success} />
        ) : (
          <Ionicons name="play-circle-outline" size={24} color={colors.primary} />
        )}
      </View>
      <View style={styles.lessonContent}>
        <Text style={[styles.lessonTitle, item.locked && styles.lockedText]}>
          {item.title}
        </Text>
        <Text style={styles.lessonDuration}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Video Player */}
      <View style={styles.videoContainer}>
        <View style={styles.videoPlaceholder}>
          <Ionicons name="play-circle" size={80} color={colors.white} />
        </View>
      </View>

      {/* Current Lesson Info */}
      <View style={styles.currentLessonInfo}>
        <Text style={styles.currentLessonTitle}>{selectedLesson.title}</Text>
        <Text style={styles.currentLessonDuration}>{selectedLesson.duration}</Text>
      </View>

      {/* Lesson List */}
      <View style={styles.lessonListContainer}>
        <Text style={styles.sectionTitle}>Ders İçerikleri</Text>
        <FlatList
          data={mockLessons}
          renderItem={renderLesson}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  videoContainer: {
    width: '100%',
    height: Dimensions.get('window').width * 0.5625, // 16:9 aspect ratio
    backgroundColor: '#000',
  },
  videoPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  currentLessonInfo: {
    backgroundColor: colors.white,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  currentLessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  currentLessonDuration: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  lessonListContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    padding: 16,
    paddingBottom: 8,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  lessonCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedLesson: {
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: '#F3E5F5',
  },
  lockedLesson: {
    opacity: 0.5,
  },
  lessonIconContainer: {
    marginRight: 12,
    justifyContent: 'center',
  },
  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  lockedText: {
    color: colors.textSecondary,
  },
  lessonDuration: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
