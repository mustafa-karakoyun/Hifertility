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

interface HomeworkItem {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

const mockHomework: HomeworkItem[] = [
  {
    id: '1',
    title: 'Uyku Günlüğü',
    description: 'Haftalık uyku alışkanlıklarınızı kaydedin',
    dueDate: '28 Şubat 2026',
    completed: false,
  },
  {
    id: '2',
    title: 'Beslenme Takibi',
    description: 'Günlük beslenme alışkanlıklarınızı not alın',
    dueDate: '27 Şubat 2026',
    completed: true,
  },
  {
    id: '3',
    title: 'Egzersiz Rutini',
    description: 'Önerilen egzersizleri uygulayın ve kaydedin',
    dueDate: '1 Mart 2026',
    completed: false,
  },
];

export default function HomeworkScreen() {
  const renderHomework = ({ item }: { item: HomeworkItem }) => (
    <TouchableOpacity style={styles.homeworkCard}>
      <View style={styles.checkboxContainer}>
        <Ionicons
          name={item.completed ? 'checkmark-circle' : 'ellipse-outline'}
          size={32}
          color={item.completed ? colors.success : colors.primary}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, item.completed && styles.completedTitle]}>
          {item.title}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.dueDateContainer}>
          <Ionicons name="calendar-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.dueDate}>{item.dueDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockHomework}
        renderItem={renderHomework}
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
  homeworkCard: {
    flexDirection: 'row',
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
  checkboxContainer: {
    marginRight: 16,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: colors.textSecondary,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  dueDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dueDate: {
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 6,
  },
});
