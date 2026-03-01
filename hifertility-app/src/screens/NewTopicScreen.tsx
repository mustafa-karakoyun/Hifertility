import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

export default function NewTopicScreen() {
  const navigation = useNavigation<any>();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !message.trim()) {
      Alert.alert('Uyarı', 'Lütfen başlık ve mesaj alanlarını doldurun.');
      return;
    }
    Alert.alert('Başarılı', 'Konunuz başarıyla oluşturuldu!', [
      { text: 'Tamam', onPress: () => navigation.goBack() },
    ]);
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
            <Ionicons name="arrow-back" size={24} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Yeni Konu</Text>
        </View>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSubmit}
        >
          <Text style={styles.sendButtonText}>Gönder</Text>
          <Ionicons name="send" size={16} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContent}>
        {/* Recipient Selection */}
        <View style={styles.recipientSection}>
          <View>
            <Text style={styles.recipientLabel}>KİME</Text>
            <View style={styles.recipientValue}>
              <View style={styles.recipientDot} />
              <Text style={styles.recipientName}>Forum Yönetimi</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.changeButton}>Değiştir</Text>
          </TouchableOpacity>
        </View>

        {/* Inputs */}
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="Gönderinizin başlığını yazın"
            placeholderTextColor={colors.textSecondary}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.messageInput}
            placeholder="Mesajınızı buraya yazınız..."
            placeholderTextColor={colors.textSecondary}
            value={message}
            onChangeText={setMessage}
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={20} color={colors.primary} />
          <Text style={styles.infoText}>
            Lütfen topluluk kurallarımıza uygun nazik bir dil kullanın.
          </Text>
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Add Image Button */}
      <TouchableOpacity style={styles.addImageButton}>
        <Ionicons name="image" size={24} color={colors.primary} />
        <Text style={styles.addImageButtonText}>RESİM</Text>
      </TouchableOpacity>
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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  sendButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: 'white',
  },
  scrollContent: {
    flex: 1,
  },
  recipientSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  recipientLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textSecondary,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  recipientValue: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  recipientDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
  recipientName: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  changeButton: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
  },
  inputsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  titleInput: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  messageInput: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.text,
    minHeight: 160,
  },
  infoBox: {
    marginHorizontal: 16,
    marginVertical: 12,
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#F0F8FF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  addImageButton: {
    position: 'absolute',
    bottom: 96,
    right: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.surface,
    borderWidth: 4,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  addImageButtonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 2,
  },
});
