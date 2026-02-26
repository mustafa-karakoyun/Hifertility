import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface Question {
  id: string;
  question: string;
  options: string[];
}

const surveyQuestions: Question[] = [
  {
    id: '1',
    question: 'Günlük ortalama kaç saat uyuyorsunuz?',
    options: ['4 saatten az', '4-6 saat', '6-8 saat', '8 saatten fazla'],
  },
  {
    id: '2',
    question: 'Haftada kaç gün düzenli egzersiz yapıyorsunuz?',
    options: ['Hiç', '1-2 gün', '3-4 gün', '5 gün ve üzeri'],
  },
  {
    id: '3',
    question: 'Stres seviyenizi nasıl değerlendirirsiniz?',
    options: ['Çok düşük', 'Düşük', 'Orta', 'Yüksek', 'Çok yüksek'],
  },
];

export default function SurveyScreen() {
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});

  const handleOptionSelect = (questionId: string, optionIndex: number) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < surveyQuestions.length) {
      Alert.alert('Uyarı', 'Lütfen tüm soruları cevaplayın.');
      return;
    }
    Alert.alert('Teşekkürler', 'Anketiniz başarıyla gönderildi!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="clipboard" size={48} color={colors.primary} />
        <Text style={styles.headerTitle}>Sağlık Anketi</Text>
        <Text style={styles.headerSubtitle}>
          Lütfen aşağıdaki soruları cevaplayın
        </Text>
      </View>

      {surveyQuestions.map((question, qIndex) => (
        <View key={question.id} style={styles.questionCard}>
          <Text style={styles.questionText}>
            {qIndex + 1}. {question.question}
          </Text>
          {question.options.map((option, oIndex) => (
            <TouchableOpacity
              key={oIndex}
              style={[
                styles.optionButton,
                answers[question.id] === oIndex && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect(question.id, oIndex)}
            >
              <View
                style={[
                  styles.radioButton,
                  answers[question.id] === oIndex && styles.radioButtonSelected,
                ]}
              >
                {answers[question.id] === oIndex && (
                  <View style={styles.radioButtonInner} />
                )}
              </View>
              <Text
                style={[
                  styles.optionText,
                  answers[question.id] === oIndex && styles.selectedOptionText,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Anketi Gönder</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  header: {
    backgroundColor: colors.white,
    padding: 32,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  questionCard: {
    backgroundColor: colors.white,
    margin: 16,
    marginTop: 0,
    padding: 16,
    borderRadius: 12,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: colors.backgroundLight,
  },
  selectedOption: {
    backgroundColor: '#F3E5F5',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: colors.primary,
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  optionText: {
    fontSize: 14,
    color: colors.text,
  },
  selectedOptionText: {
    fontWeight: '500',
    color: colors.primary,
  },
  submitButton: {
    backgroundColor: colors.primary,
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
