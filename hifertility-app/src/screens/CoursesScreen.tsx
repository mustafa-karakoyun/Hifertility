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

interface Course {
  id: string;
  title: string;
  description: string;
  totalLessons: number;
  completedLessons: number;
  imageUrl?: string;
}

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Doğurganlık Temelleri',
    description: 'Doğurganlık hakkında temel bilgiler ve sağlıklı yaşam önerileri',
    totalLessons: 10,
    completedLessons: 3,
  },
  {
    id: '2',
    title: 'Stres Yönetimi',
    description: 'Stresi azaltmak ve dengeli bir yaşam sürmek için teknikler',
    totalLessons: 8,
    completedLessons: 0,
  },
  {
    id: '3',
    title: 'Sağlıklı Beslenme',
    description: 'Doğurganlığı destekleyen beslenme stratejileri',
    totalLessons: 12,
    completedLessons: 6,
  },
  {
    id: '4',
    title: 'Egzersiz ve Hareket',
    description: 'Uygun egzersiz programları ve fiziksel aktivite önerileri',
    totalLessons: 15,
    completedLessons: 0,
  },
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Courses'>;

export default function CoursesScreen() {
  const navigation = useNavigation<NavigationProp>();

  const renderCourse = ({ item }: { item: Course }) => {
    const progress = (item.completedLessons / item.totalLessons) * 100;

    return (
      <TouchableOpacity
        style={styles.courseCard}
        onPress={() => navigation.navigate('CourseDetail', { courseId: item.id, courseTitle: item.title })}
      >
        <View style={styles.imageContainer}>
          <Ionicons name="play-circle" size={60} color={colors.primary} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
            <Text style={styles.progressText}>
              {item.completedLessons} / {item.totalLessons} Ders
            </Text>
          </View>
        </View>
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
    backgroundColor: colors.backgroundLight,
  },
  listContainer: {
    padding: 16,
  },
  courseCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    backgroundColor: colors.backgroundLight,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  contentContainer: {
    flex: 1,
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
    marginBottom: 12,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.backgroundLight,
    borderRadius: 3,
    marginBottom: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  progressText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
