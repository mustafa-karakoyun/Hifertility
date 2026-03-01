import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed?: boolean;
  active?: boolean;
  locked?: boolean;
}

interface Course {
  id: string;
  title: string;
  description: string;
  module: string;
  totalLessons: number;
  completedLessons: number;
  imageUrl?: string;
  lessons: Lesson[];
}

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Doğurganlık Temelleri',
    description: 'Doğurganlık hakkında temel bilgiler ve sağlıklı yaşam önerileri',
    module: 'Modül 1',
    totalLessons: 10,
    completedLessons: 3,
    lessons: [
      { id: '1', title: 'Giriş ve Hazırlık', duration: '02:36', completed: true },
      { id: '2', title: 'Rahatlama ve Esneme', duration: '04:39', active: true },
      { id: '3', title: 'Günlük Rutinler', duration: '04:05', locked: true },
    ],
  },
  {
    id: '2',
    title: 'Stres Yönetimi',
    description: 'Stresi azaltmak ve dengeli bir yaşam sürmek için teknikler',
    module: 'Modül 2',
    totalLessons: 8,
    completedLessons: 0,
    lessons: [],
  },
  {
    id: '3',
    title: 'Sağlıklı Beslenme',
    description: 'Doğurganlığı destekleyen beslenme stratejileri',
    module: 'Modül 3',
    totalLessons: 12,
    completedLessons: 6,
    lessons: [],
  },
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Courses'>;

export default function CoursesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (courseId: string) => {
    setExpandedId(expandedId === courseId ? null : courseId);
  };

  const renderLesson = (lesson: Lesson) => (
    <View
      key={lesson.id}
      style={[
        styles.lessonCard,
        expandedId && {
          backgroundColor: lesson.active ? '#F0F8FF' : '#F9FAFB',
          borderColor: lesson.active ? '#BFDBFE' : 'transparent',
        },
      ]}
    >
      <View style={styles.lessonImageContainer}>
        {lesson.completed && (
          <View style={styles.lessonOverlay}>
            <Ionicons name="checkmark-circle" size={32} color="white" />
          </View>
        )}
        {lesson.locked && (
          <View style={styles.lessonOverlay}>
            <Ionicons name="lock-closed" size={32} color="white" />
          </View>
        )}
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeh8lgPKRf9IgN9tFoY76dGLFWIkHPIvmgujRmnHZgxph4oY05vxlnalF44Zl89YJ9o1-JbkQxVUl4aCGxdq2tDMIUVJscus9LA8e0j8_cwBC2FZ08b1_kkIk_ieGjhbe9nh54RGPNo4xMlmev-uyOmrhnTlmDxLalMyyOTOxGNjQ1kUC3O7Htc2QLOk2QoFj9huWSQMY-eP45P0YqAwq5JBWMhibWum2jS4FHCooyNIV9eQpl127MDRlBiLckWeTJWJCQhWCte1Us',
          }}
          style={styles.lessonImage}
        />
      </View>
      <View style={styles.lessonContent}>
        <Text style={[styles.lessonNumber, { color: colors.primary }]}>
          Ders {lesson.id} {lesson.active && '• İzleniyor'}
        </Text>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
        <View style={styles.lessonTime}>
          <Ionicons name="time" size={14} color={colors.textSecondary} />
          <Text style={styles.lessonDuration}>{lesson.duration}</Text>
        </View>
      </View>
    </View>
  );

  const renderCourse = ({ item }: { item: Course }) => {
    const progress = (item.completedLessons / item.totalLessons) * 100;
    const isExpanded = expandedId === item.id;

    return (
      <TouchableOpacity
        style={styles.courseCard}
        onPress={() => toggleExpand(item.id)}
        activeOpacity={0.7}
      >
        <View style={styles.courseHeader}>
          <View>
            <Text style={styles.courseModule}>{item.module}</Text>
            <Text style={styles.courseTitle}>{item.title}</Text>
          </View>
          <Ionicons
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            size={24}
            color={colors.primary}
          />
        </View>

        <View style={styles.courseProgressSection}>
          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>İlerleme</Text>
            <Text style={styles.progressValue}>{Math.round(progress)}%</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.lessonsCount}>
            {item.completedLessons} / {item.totalLessons} Ders Tamamlandı
          </Text>
        </View>

        {isExpanded && item.lessons && item.lessons.length > 0 && (
          <View style={styles.lessonsContainer}>
            {item.lessons.map((lesson) => renderLesson(lesson))}
          </View>
        )}

        {isExpanded && (!item.lessons || item.lessons.length === 0) && (
          <View style={styles.noLessonsContainer}>
            <Text style={styles.noLessonsText}>Henüz ders yok</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mockCourses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  courseCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  courseModule: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.primary,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
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
  lessonsCount: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  lessonsContainer: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
    gap: 12,
  },
  lessonCard: {
    flexDirection: 'row',
    backgroundColor: '#FAFBFC',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  lessonImageContainer: {
    position: 'relative',
    width: 80,
    height: 80,
    backgroundColor: colors.backgroundLight,
  },
  lessonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  lessonOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  lessonContent: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  lessonNumber: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  lessonTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  lessonTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  lessonDuration: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  noLessonsContainer: {
    marginTop: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noLessonsText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
});
